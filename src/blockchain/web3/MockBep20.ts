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
        this.tBTC = new MockBep20(wrapperOptions, "0x49F1CDF13d641c0838177BC4d684FF60bCAe931D");
        this.tUSDC = new MockBep20(wrapperOptions, "0xE7478c2eAF35d8D1145eABD47E010892f781CC33");
        this.tUSDT = new MockBep20(wrapperOptions, "0xE19BfeFAECbF97b415b3bdc30731e7EBC6d0C377");
        this.tSXP = new MockBep20(wrapperOptions, "0x54446ff604E28D9a64340D1F31Ab96c38F45d647");
        this.tCake = new MockBep20(wrapperOptions, "0xd73528F07Adb0e9182Af6c4A007A003BfCb2a18F");
        this.tWBNB = new MockBep20(wrapperOptions, "0xA8e937eD18dE242B8BB762aa3265e9779D245985");
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