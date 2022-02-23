import abi from "../abis/Faucet.json"
import { ethers } from "ethers"

class FaucetWrapper {
  // Contracts
  faucet: any

  constructor(signer: any) {
    this.faucet = new ethers.Contract(
      process.env.REACT_APP_FAUCET_ADDRESS,
      abi,
      signer
    );
  }

  TokenRequestMap = {
    USDT: 0,
    USDC: 1,
    BTC: 2,
    Bitcoin: 2,
    BNB: 3,
  }

  //send transaction methods
  getTokens(token: any) {
    return this.faucet.getTokens(this.TokenRequestMap[token])
  }
}

export default FaucetWrapper
