import { SymbolsMap } from 'blockchain/constants';
import MockBep20 from '../contracts/MockBep20';
import { NumToBN } from '../utils';

class MockBep20Wrapper {  
    // Contracts
    tBTC: MockBep20;
    tUSDC: MockBep20;
    tUSDT: MockBep20;
    tSXP: MockBep20;
    tCake: MockBep20;
    tWBNB: MockBep20;
  
    constructor(wrapperOptions: any) {
        this.tBTC = new MockBep20(wrapperOptions, process.env.REACT_APP_T_BTC_ADDRESS);
        this.tUSDC = new MockBep20(wrapperOptions, process.env.REACT_APP_T_USDC_ADDRESS);
        this.tUSDT = new MockBep20(wrapperOptions, process.env.REACT_APP_T_USDT_ADDRESS);
        this.tSXP = new MockBep20(wrapperOptions, process.env.REACT_APP_T_SXP_ADDRESS);
        this.tCake = new MockBep20(wrapperOptions, process.env.REACT_APP_T_CAKE_ADDRESS);
        this.tWBNB = new MockBep20(wrapperOptions, process.env.REACT_APP_T_WBNB_ADDRESS);
    }

   approve(market: string, value: number, decimal: number) {
        switch (market) {
            case SymbolsMap.BTC:
                return this.tBTC.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.USDC:
                return this.tUSDC.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.USDT:
                return this.tUSDT.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.SXP:
                return this.tSXP.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.CAKE:
                return this.tCake.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            case SymbolsMap.BNB:
                return this.tWBNB.send("approve", {}, process.env.REACT_APP_DIAMOND_ADDRESS, NumToBN(value, decimal));
            default:
                break;
       }
   }
     
}

export default MockBep20Wrapper;