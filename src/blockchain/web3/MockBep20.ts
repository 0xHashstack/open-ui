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
        this.tBTC = new MockBep20(wrapperOptions, "0x60E4Af9C17c12a7505064533A059Fb3eDE24EE61");
        this.tUSDC = new MockBep20(wrapperOptions, "0xB539329a9566418c8E099109214a0c51C11BDE1e");
        this.tUSDT = new MockBep20(wrapperOptions, "0x00a36364Ce052CcA9FCE353f32959BD9Ec8dfb40");
        this.tSXP = new MockBep20(wrapperOptions, "0x793e9A0DE44089CB0e357Aa7AF8f80FcFAfE8860");
        this.tCake = new MockBep20(wrapperOptions, "0x7450A3Bdf31086e01020183efA659b5DA39958B6");
        this.tWBNB = new MockBep20(wrapperOptions, "0x22F1dA29427daBd7c7c9bE6ba4FAeA8F908AC3E7");
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