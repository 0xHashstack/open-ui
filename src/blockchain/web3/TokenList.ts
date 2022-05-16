import { ethers } from "ethers"
import abi from "../abis/TokenList.json"
import { NumToBN } from "../utils"

class TokenListWrapper {
  tokenList: any

  constructor(signer: any) {
    this.tokenList = new ethers.Contract(
      process.env.REACT_APP_DIAMOND_ADDRESS,
      JSON.stringify(abi),
      signer
    )
  }

  addMarketSupport(market: string,decimals: number,tokenAddress: string,amount: number,amountDecimal: number) {
    return this.tokenList.addMarketSupport(market, String(decimals), String(tokenAddress), NumToBN(amount, amountDecimal))
  }

  removeMarketSupport(market: string) {
    return this.tokenList.removeMarketSupport(market)
  }

  updateMarketSupport(market: string, decimals: number, tokenAddress: string) {
    return this.tokenList.updateMarketSupport(market, String(decimals), tokenAddress)
  }

  addMarket2Support(market: string, decimals: number, tokenAddress: string) {
    return this.tokenList.addMarket2Support(market, String(decimals), tokenAddress)
  }

  removeMarket2Support(market: string) {
    return this.tokenList.removeMarket2Support(market)
  }

  updateMarket2Support(market: string, decimals: number, tokenAddress: string) {
    return this.tokenList.updateMarket2Support(market, decimals, tokenAddress)
  }

  //getter methods
  isMarketSupported(market: string) {
    return this.tokenList.isMarketSupported(market)
  }

  getMarketAddress(market: string) {
    return this.tokenList.getMarketAddress(market)
  }

  getMarketDecimal(market: string) {
    return this.tokenList.getMarketDecimal(market)
  }

  isMarket2Supported(market: string) {
    return this.tokenList.isMarket2Supported(market)
  }

  getMarket2Address(market: string) {
    return this.tokenList.getMarket2Address(market)
  }

  getMarket2Decimal(market: string) {
    return this.tokenList.getMarket2Decimal(market)
  }

  isPausedTokenList() {
    return this.tokenList.isPausedTokenList()
  }

  //admin operations
  pauseTokenList() {
    return this.tokenList.pauseTokenList()
  }

  unpauseTokenList() {
    return this.tokenList.unpauseTokenList()
  }
}

export default TokenListWrapper
