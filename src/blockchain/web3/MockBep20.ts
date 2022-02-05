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
        this.tBTC = new MockBep20(wrapperOptions, "0x51EF6c526cCde49D3d8c0ee05Cb8e744C3955Fa3");
        this.tUSDC = new MockBep20(wrapperOptions, "0x7642237a376bdC5B243f42cFFa080EF812450360");
        this.tUSDT = new MockBep20(wrapperOptions, "0x80ADC2C14C4257c408fB7FaF712e40572fA2195F");
        this.tSXP = new MockBep20(wrapperOptions, "0x0F99fd4c1822353a8b7c877a2b20F432781Dd7be");
        this.tCake = new MockBep20(wrapperOptions, "0xD77Af5856Ee0ae66E597EE45AfaB3d8bE5257B4f");
        this.tWBNB = new MockBep20(wrapperOptions, "0xCBF8b857625705792C4919d6D201DCf7848A8Fff");
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