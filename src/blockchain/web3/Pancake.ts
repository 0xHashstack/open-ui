import abi from "../abis/Pancake.json"
import { NumToBN } from "../utils"
import { ethers } from "ethers"
import { SymbolsMap } from "blockchain/constants"
const pancakeAddress = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
class PancakeWrapper {
  // Contracts
  pancake: any

  constructor(signer: any) {
    this.pancake = new ethers.Contract(
      pancakeAddress,
      JSON.stringify(abi),
      signer
    )
  }

  async getAmountsOut(
    _amountIn: number,
    _tokenIn: String,
    _tokenOut: String,
    decimal: number
  ) {
    if (_amountIn == 0) {
      return 0
    }
    if (_tokenIn == _tokenOut) {
      return _amountIn
    }

    let addressTokenIn: String
    let addressTokenOut: String

    switch (_tokenIn) {
      case SymbolsMap.BTC:
        addressTokenIn = process.env.REACT_APP_T_BTC_ADDRESS
        break
      case SymbolsMap.USDC:
        addressTokenIn = process.env.REACT_APP_T_USDC_ADDRESS
        break
      case SymbolsMap.USDT:
        addressTokenIn = process.env.REACT_APP_T_USDT_ADDRESS
        break
      case SymbolsMap.SXP:
        addressTokenIn = process.env.REACT_APP_T_SXP_ADDRESS
        break
      case SymbolsMap.CAKE:
        addressTokenIn = process.env.REACT_APP_T_CAKE_ADDRESS
        break
      case SymbolsMap.BNB:
        addressTokenIn = process.env.REACT_APP_T_WBNB_ADDRESS
        break
      default:
        break
    }

    switch (_tokenOut) {
      case SymbolsMap.BTC:
        addressTokenOut = process.env.REACT_APP_T_BTC_ADDRESS
        break
      case SymbolsMap.USDC:
        addressTokenOut = process.env.REACT_APP_T_USDC_ADDRESS
        break
      case SymbolsMap.USDT:
        addressTokenIn = process.env.REACT_APP_T_USDT_ADDRESS
        break
      case SymbolsMap.SXP:
        addressTokenOut = process.env.REACT_APP_T_SXP_ADDRESS
        break
      case SymbolsMap.CAKE:
        addressTokenOut = process.env.REACT_APP_T_CAKE_ADDRESS
        break
      case SymbolsMap.BNB:
        addressTokenOut = process.env.REACT_APP_T_WBNB_ADDRESS
        break
      default:
        break
    }

    let path: String[]

    if (_tokenIn == SymbolsMap["BNB"] || _tokenOut == SymbolsMap["BNB"]) {
      path[0] = addressTokenIn
      path[1] = addressTokenOut
    } else {
      path[0] = addressTokenIn
      path[1] = process.env.REACT_APP_T_WBNB_ADDRESS
      path[2] = addressTokenOut
    }

    let amountOutMins: any

    // same length as path
    amountOutMins = await this.pancake.getAmountsOut(
      NumToBN(_amountIn, decimal),
      path
    )
    return amountOutMins[path.length - 1]
  }
}

export default PancakeWrapper
