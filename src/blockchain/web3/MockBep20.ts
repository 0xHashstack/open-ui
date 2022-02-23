import { SymbolsMap } from 'blockchain/constants';
import abi from "../abis/BEP20Token.json"
import { NumToBN } from "../utils"
import { ethers } from "ethers"

class MockBep20Wrapper {  
    // Contracts
    tBTC: any;
    tUSDC: any;
    tUSDT: any;
    tSXP: any;
    tCake: any;
    tWBNB: any;
  
    constructor(signer: any) {
        this.tBTC = new ethers.Contract(process.env.REACT_APP_T_BTC_ADDRESS, abi, signer);
        this.tUSDC = new ethers.Contract(process.env.REACT_APP_T_USDC_ADDRESS, abi, signer);
        this.tUSDT = new ethers.Contract(process.env.REACT_APP_T_USDT_ADDRESS, abi, signer);
        this.tSXP = new ethers.Contract(process.env.REACT_APP_T_SXP_ADDRESS, abi, signer);
        this.tCake = new ethers.Contract(process.env.REACT_APP_T_CAKE_ADDRESS, abi, signer);
        this.tWBNB = new ethers.Contract(process.env.REACT_APP_T_WBNB_ADDRESS, abi, signer);
    }

   approve(market: string, value: number, decimal: number) {
        switch (market) {
            case SymbolsMap.BTC:
                return this.tBTC.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.USDC:
                return this.tUSDC.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.USDT:
                return this.tUSDT.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.SXP:
                return this.tSXP.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.CAKE:
                return this.tCake.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.BNB:
                return this.tWBNB.approve(process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            default:
                break;
       }
   }
     
}

export default MockBep20Wrapper;