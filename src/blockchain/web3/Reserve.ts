import { ethers } from "ethers"
import abi from "../abis/Reserve.json"
import { NumToBN } from "../utils"

class ReserveWrapper {
  reserve: any

  constructor(signer: any) {
    this.reserve = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abi, signer)
  }

  transferAnyBEP20(address: string, recipient: string, value: number, decimal: number) {
    return this.reserve.transferAnyBEP20(address, recipient, NumToBN(value, decimal))
  }

  // collateralTransfer(address: string, market: string, commitment: string) {
  //     return this.reserve.send("collateralTransfer", {}, address, market, commitment);
  // }

  //getter methods
  avblMarketReserves(market: string) {
    return this.reserve.avblMarketReserves(market)
  }

  marketReserves(market: string) {
    return this.reserve.marketReserves(market)
  }

  // marketUtilisation(market: string) {
  //     return this.reserve.call("marketUtilisation", market);
  // }

  isPausedReserve() {
    return this.reserve.isPausedReserve()
  }

  //admin operations
  pauseReserve() {
    return this.reserve.pauseReserve()
  }

  unpauseReserve() {
    return this.reserve.unpauseReserve()
  }
}

export default ReserveWrapper
