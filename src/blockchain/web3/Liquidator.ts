import abi from "../abis/Liquidator.json"
import { NumToBN } from "../utils"
import { ethers } from "ethers"

class LiquidatorWrapper {
  liquidator: any

  constructor(signer: any) {
    this.liquidator = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abi, signer)
  }

  swap(fromMarket: string, toMarket: string, fromAmount: number, decimal: number, mode: number) {
    return this.liquidator.swap(fromMarket, toMarket, NumToBN(fromAmount, decimal), String(mode))
  }

  //getter methods
  isPausedLiquidator() {
    return this.liquidator.isPausedLiquidator()
  }

  //admin operation
  pauseLiquidator() {
    return this.liquidator.pauseLiquidator()
  }

  unpauseLiquidator() {
    return this.liquidator.unpauseLiquidator()
  }
}

export default LiquidatorWrapper
