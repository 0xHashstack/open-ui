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
        this.tBTC = new MockBep20(wrapperOptions, "0xfb9736A9CdEf726d7981f84e99776cCd626e9a63");
        this.tUSDC = new MockBep20(wrapperOptions, "0xB4C8693a397646e9A6518459F9263Aa33a3b65B3");
        this.tUSDT = new MockBep20(wrapperOptions, "0x085bAB536d4035891a8857f0c59663A02FC411B1");
        this.tSXP = new MockBep20(wrapperOptions, "0x4DB1A74c801d34F247D7E4D63b50BD74e4c51D6b");
        this.tCake = new MockBep20(wrapperOptions, "0x23a3da94355DB95563670AC736bAC220fEAC89fa");
        this.tWBNB = new MockBep20(wrapperOptions, "0x89A1BdA646968710f5EBf8aB3394E673fEE1671D");
    }

   approve(market: string, sender: string, value: number, decimal: number) {
        switch (market) {
            case SymbolsMap.BTC:
                return this.tBTC.send("approve", {}, sender, NumToBN(value, decimal));
            case SymbolsMap.USDC:
                return this.tUSDC.send("approve", {}, sender, NumToBN(value, decimal));
            case SymbolsMap.USDT:
                return this.tUSDT.send("approve", {}, sender, NumToBN(value, decimal));
            case SymbolsMap.SXP:
                return this.tSXP.send("approve", {}, sender, NumToBN(value, decimal));
            case SymbolsMap.CAKE:
                return this.tCake.send("approve", {}, sender, NumToBN(value, decimal));
            case SymbolsMap.BNB:
                return this.tWBNB.send("approve", {}, sender, NumToBN(value, decimal));
            default:
                break;
       }
   }
     
}

export default MockBep20Wrapper;