import PrivateKeyProvider from "truffle-privatekey-provider"
import { providers } from "ethers"
import Web3Wrapper from "../blockchain/web3/Web3Wrapper"
import { assert } from "chai"
import { BNtoNum } from "../blockchain/utils"

describe("Tests", async () => {

  const provider = new PrivateKeyProvider(
    "d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e", // Wallet private Key
    "https://nd-400-266-190.p2pify.com/1efac602169fba8d5bf0589315ec436a" // RPC URL
  )
  const ethersInstance = new providers.Web3Provider(provider)
  await ethersInstance.send("eth_requestAccounts", [])
  const signer = await ethersInstance.getSigner()
  const web3Wrapper = new Web3Wrapper(signer)
  
  it("Get Tokens", async () => {
    const tx1 = await web3Wrapper?.getFaucetInstance().getTokens();
    const tx = await tx1.wait()
    let eventName
    tx.events.forEach(e => {
      if (e.event == "TokensIssued") {
        eventName = e.event
      }
    })
    assert.equal(eventName, "TokensIssued")
  })

  describe("New Deposit", async () => {
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
        if (e.event == "NewDeposit") {
          eventName = e.event
          _amount = e.args.amount.toBigInt()
        }
      })
      _amount = BNtoNum(_amount, 18)
      assert.equal(eventName, "NewDeposit", "Event Name Correct")
      assert.equal(_amount, 200, "Amount Correct")
    })      
  })
  describe("Add to Deposit", async () => {
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
    })
  })
})
