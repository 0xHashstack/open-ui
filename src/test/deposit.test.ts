import HDWalletProvider from "@truffle/hdwallet-provider";
import { providers } from "ethers"
import Web3Wrapper from "../blockchain/web3/Web3Wrapper"
import { assert } from "chai"
import { BNtoNum } from "../blockchain/utils"
import { CommitMap, DecimalsMap, SymbolsMap } from "../blockchain/constants";

describe("Tests", () => {
  let 
    provider, 
    ethersInstance, 
    signer, 
    web3Wrapper,
    testTimeOut = 60000;

  beforeEach(async ()=>{
    provider = new HDWalletProvider({
      privateKeys: [
        "b2555fe5399c2da6d7b9dbcbb02729387348e154d6f91dc6c50f377f5a7daafc",
      ],
      providerOrUrl:
        "https://speedy-nodes-nyc.moralis.io/a61a52180976b08f4ff81c83/bsc/testnet",
    })
    ethersInstance = new providers.Web3Provider(provider)
    // await ethersInstance.send("eth_requestAccounts", [])
    signer = await ethersInstance.getSigner()
    web3Wrapper = new Web3Wrapper(signer)
  })
  
  it("Get Tokens", async () => {
    try{
      const tx1 = await web3Wrapper?.getFaucetInstance().getTokens("USDT");
      const tx = await tx1.wait()
      let eventName
      tx.events.forEach(e => {
        if (e.event == "TokensIssued") {
          eventName = e.event
        }
      })
      assert.equal(eventName, "TokensIssued")
    }catch(e: any){
      assert.equal(e.error.message,"execution reverted: ERROR: Active timelock")
    }
  }, testTimeOut)

  describe("Deposit Functions", () => {
    it("New USDT Deposit", async () => {
    const approveTransactionHash = await web3Wrapper
      ?.getMockBep20Instance()
      .approve("0x555344542e740000000000000000000000000000000000000000000000000000",
          200,
          18
        )
    await approveTransactionHash.wait()
      const tx1 = await web3Wrapper
        ?.getDepositInstance()
        .depositRequest(
          "0x555344542e740000000000000000000000000000000000000000000000000000",
          "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
          200,
          18
        )
      const tx = await tx1.wait()

      let eventName
      let _amount
      tx.events.forEach(e => {
        console.log(e)
        if (e.event == "NewDeposit") {
          eventName = e.event
          _amount = e.args.amount.toBigInt()
        }
      })
      _amount = BNtoNum(_amount, 18)
      assert.equal(eventName, "NewDeposit", "Event Name Correct")
      assert.equal(_amount, 200, "Amount Correct")
    },testTimeOut) 
    it(
      "Add to USDT Deposit",
      async () => {
        const approveTransactionHash = await web3Wrapper
          ?.getMockBep20Instance()
          .approve(
            "0x555344542e740000000000000000000000000000000000000000000000000000",
            200,
            18
          )
        await approveTransactionHash.wait()
        const tx1 = await web3Wrapper
          ?.getDepositInstance()
          .depositRequest(
            "0x555344542e740000000000000000000000000000000000000000000000000000",
            "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
            200,
            18
          )
        const tx = await tx1.wait()

        let eventName
        let _amount
        tx.events.forEach(e => {
          if (e.event == "DepositAdded") {
            eventName = e.event
            _amount = e.args.amount.toBigInt()
          }
        })
        _amount = BNtoNum(_amount, 18)
        assert.equal(eventName, "DepositAdded", "Event Name Correct")
        assert.equal(_amount, 200, "Amount Correct")
      },
      testTimeOut
    )   
    it(
      "Withdraw Deposit ",
      async () => {
        try {
          const tx1 = await web3Wrapper?.getDepositInstance().withdrawDeposit(
            SymbolsMap["USDT"],
            CommitMap["NONE"],
            100,
            DecimalsMap["USDT"]
          )
          const tx = await tx1.wait()
          let eventName
          tx.events.forEach(e => {
            if (e.event == "DepositWithdrawal") {
              eventName = e.event
            }
          })
          assert.equal(eventName, "DepositWithdrawal")
        } catch (e: any) {
          console.error(e)
          assert.equal(
            e.error.message,
            "execution reverted: ERROR: Insufficient balance"
          )
        }
      },
      testTimeOut
    )
    
  })
  describe("Loan Functions", () => {
    it(
      "Borrow",
      async () => {
        try {
          const approveTransactionHash = await web3Wrapper
            ?.getMockBep20Instance()
            .approve(
              "0x555344542e740000000000000000000000000000000000000000000000000000",
              200,
              18
            )
          await approveTransactionHash.wait()
          const tx1 = await web3Wrapper?.getLoanInstance().loanRequest(
            SymbolsMap["USDT"],
            CommitMap["NONE"],
            300,
            DecimalsMap["USDT"],
            SymbolsMap["USDT"],
            200,
            DecimalsMap["USDT"]
          )
          const tx = await tx1.wait()
          let eventName
          tx.events.forEach(e => {
            if (e.event == "NewLoan") {
              eventName = e.event
            }
          })
          assert.equal(eventName, "NewLoan")
        } catch (e: any) {
          assert.equal(
            e.error.message,
            "execution reverted: ERROR: Active loan"
          )
        }
      },
      testTimeOut
    )

    it(
      "Add Collateral",
      async () => {
          const approveTransactionHash = await web3Wrapper
            ?.getMockBep20Instance()
            .approve(
              "0x555344542e740000000000000000000000000000000000000000000000000000",
              200,
              18
            )
          await approveTransactionHash.wait()
          const tx1 = await web3Wrapper?.getLoanInstance().addCollateral(
            SymbolsMap["USDT"],
            CommitMap["NONE"],
            200,
            DecimalsMap["USDT"]
          )
          const tx = await tx1.wait()
          let eventName
          tx.events.forEach(e => {
            if (e.event == "AddCollateral") {
              eventName = e.event
            }
          })
          assert.equal(eventName, "AddCollateral")
        
      },
      testTimeOut
    )

    it(
      "Withdraw Partial Loan",
      async () => {
        try {
          const tx1 = await web3Wrapper?.getLoanInstance().permissibleWithdrawal(
            SymbolsMap["USDT"],
            CommitMap["NONE"],
            50,
            DecimalsMap["USDT"]
          )
          const tx = await tx1.wait()
          let eventName
          tx.events.forEach(e => {
            if (e.event == "WithdrawPartialLoan") {
              eventName = e.event
            }
          })
          assert.equal(eventName, "WithdrawPartialLoan")
        } catch (e: any) {
          console.error(e)
          assert.equal(
            e.error.message,
            "execution reverted: ERROR: Request exceeds funds"
          )
        }
      },
      testTimeOut
    )


    it(
      "Repay Loan",
      async () => {
        try {
          const approveTransactionHash = await web3Wrapper
            ?.getMockBep20Instance()
            .approve(
              "0x555344542e740000000000000000000000000000000000000000000000000000",
              300,
              18
            )
          await approveTransactionHash.wait()
          const tx1 = await web3Wrapper?.getLoanInstance().loanRequest(
            SymbolsMap["USDT"],
            CommitMap["NONE"],
            300,
            DecimalsMap["USDT"]
          )
          const tx = await tx1.wait()
          let eventName
          tx.events.forEach(e => {
            if (e.event == "LoanRepaid") {
              eventName = e.event
            }
          })
          assert.equal(eventName, "LoanRepaid")
        } catch (e: any) {
          console.error(e)
          assert.equal(e.error.message, "execution reverted: ERROR: No Loan")
        }
      },
      testTimeOut
    )
  })
})
