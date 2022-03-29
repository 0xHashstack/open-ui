import abi from "../abis/Liquidator.json"
import { NumToBN } from "../utils"
import { ethers } from "ethers"

class LiquidatorWrapper {
  liquidator: any

  constructor(signer: any) {
    this.liquidator = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abi, signer)
  }

  liquidation(account: string, _market: string, _commitment: string){
    return this.liquidator.liquidation(account, _market, _commitment);
  }

  liquidableLoans(fromIndex: number) {
    return this.liquidator.liquidableLoans(fromIndex);
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
