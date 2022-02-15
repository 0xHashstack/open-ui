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
        this.tBTC = new MockBep20(wrapperOptions, "0xcffBa3d5B1078D2A2dEAc6387536feCb4AcC870B");
        this.tUSDC = new MockBep20(wrapperOptions, "0x0e2Df093e75ACEa5952925EE381668E8CfF4824e");
        this.tUSDT = new MockBep20(wrapperOptions, "0xC307488bD6FFf3dC2a8aef1a579921C042Fa112A");
        this.tSXP = new MockBep20(wrapperOptions, "0x5A7f74731f1648Bc9f5538758c5906fB1Fad2878");
        this.tCake = new MockBep20(wrapperOptions, "0x981a2C5C9C87E5DcfF18ABdD7FB6D6b18D577b49");
        this.tWBNB = new MockBep20(wrapperOptions, "0x4E427634d92E530feBE82FA62eF42A548074521c");
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