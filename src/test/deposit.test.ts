import HDWalletProvider from "@truffle/hdwallet-provider";
import { providers } from "ethers"
import Web3Wrapper from "../blockchain/web3/Web3Wrapper"
import { assert } from "chai"
import { BNtoNum } from "../blockchain/utils"

describe("Tests", () => {
  let 
    provider, 
    ethersInstance, 
    signer, 
    web3Wrapper,
    testTimeOut = 30000;

  beforeEach(async ()=>{
    provider = new HDWalletProvider({
      privateKeys: ["d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e"],
      providerOrUrl: "https://nd-400-266-190.p2pify.com/1efac602169fba8d5bf0589315ec436a"
    });
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

  describe("New Deposit", () => {
    it("USDT Deposit", async () => {
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
  })
  describe("Add to Deposit", () => {
    it("USDT Deposit", async () => {
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
    },testTimeOut)
  })
})
