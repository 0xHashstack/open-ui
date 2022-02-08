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
        this.tBTC = new MockBep20(wrapperOptions, "0x7638b42547AB7632281756Bc142D0e3B574F2Ec8");
        this.tUSDC = new MockBep20(wrapperOptions, "0xbD93b32701b472E318b14b658E2c02d66A67D3Dd");
        this.tUSDT = new MockBep20(wrapperOptions, "0xe3bb2793391da3d8993cA8E38755E4862A8c04db");
        this.tSXP = new MockBep20(wrapperOptions, "0x9D5D1FDda31aBf933B8f822A4E858cf3ffA4D467");
        this.tCake = new MockBep20(wrapperOptions, "0x7c8fE6A1Db9AD6B212A2Ee2AECeF12D51b94c2bB");
        this.tWBNB = new MockBep20(wrapperOptions, "0x58b70cbdE08EbF44DDc0BC58c1d84632e14a9072");
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