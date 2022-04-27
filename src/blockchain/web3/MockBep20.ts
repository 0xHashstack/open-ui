import { SymbolsMap } from '../constants';
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
        this.tBTC = new ethers.Contract(process.env.REACT_APP_T_BTC_ADDRESS, JSON.stringify(abi), signer);
        this.tUSDC = new ethers.Contract(process.env.REACT_APP_T_USDC_ADDRESS, JSON.stringify(abi), signer);
        this.tUSDT = new ethers.Contract(process.env.REACT_APP_T_USDT_ADDRESS, JSON.stringify(abi), signer);
        this.tSXP = new ethers.Contract(process.env.REACT_APP_T_SXP_ADDRESS, JSON.stringify(abi), signer);
        this.tCake = new ethers.Contract(process.env.REACT_APP_T_CAKE_ADDRESS, JSON.stringify(abi), signer);
        this.tWBNB = new ethers.Contract(process.env.REACT_APP_T_WBNB_ADDRESS, JSON.stringify(abi), signer);
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
    allowance(market: string, owner: string) {
        switch (market) {
            case SymbolsMap.BTC:
                return this.tBTC.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            case SymbolsMap.USDC:
                return this.tUSDC.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            case SymbolsMap.USDT:
                return this.tUSDT.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            case SymbolsMap.SXP:
                return this.tSXP.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            case SymbolsMap.CAKE:
                return this.tCake.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            case SymbolsMap.BNB:
                return this.tWBNB.allowance(owner, process.env.REACT_APP_DIAMOND_ADDRESS);
            default:
                break;
        }
    }

    balanceOf(market: string, owner: string) {
        switch (market) {
            case SymbolsMap.BTC:
                return this.tBTC.balanceOf(owner);
            case SymbolsMap.USDC:
                return this.tUSDC.balanceOf(owner);
            case SymbolsMap.USDT:
                return this.tUSDT.balanceOf(owner);
            case SymbolsMap.SXP:
                return this.tSXP.balanceOf(owner);
            case SymbolsMap.CAKE:
                return this.tCake.balanceOf(owner);
            case SymbolsMap.BNB:
                return this.tWBNB.balanceOf(owner);
            default:
                break;
        }
    }
}

export default MockBep20Wrapper;