import { diamondAddress } from '../constants';
import Liquidator from '../contracts/Liquidator';
import { NumToBN } from '../utils';

class LiquidatorWrapper {

    liquidator: Liquidator

    constructor(wrapperOptions: any) {
        this.liquidator = new Liquidator(wrapperOptions, diamondAddress);
    }

    swap(fromMarket: string, toMarket: string, fromAmount: number, decimal: number, mode: number) {
        return this.liquidator.send("swap", {}, fromMarket, toMarket, NumToBN(fromAmount, decimal), String(mode));
    }

}

export default LiquidatorWrapper;