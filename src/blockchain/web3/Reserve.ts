import Reserve from '../contracts/Reserve';
import { NumToBN } from '../utils';

class ReserveWrapper {
    reserve: Reserve

    constructor(wrapperOptions: any) {
        this.reserve = new Reserve(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS);
    }

    transferAnyBEP20(address: string, recipient: string, value: number, decimal: number) {
        return this.reserve.send("transferAnyBEP20", {}, address, recipient, NumToBN(value, decimal));
    }

    // collateralTransfer(address: string, market: string, commitment: string) {
    //     return this.reserve.send("collateralTransfer", {}, address, market, commitment);
    // }


    //getter methods
    avblMarketReserves(market: string) {
        return this.reserve.call("avblMarketReserves", market);
    }

    marketReserves(market: string) {
        return this.reserve.call("marketReserves", market);
    }

    // marketUtilisation(market: string) {
    //     return this.reserve.call("marketUtilisation", market);
    // }

    isPausedReserve() {
        return this.reserve.call("isPausedReserve");
    }

    //admin operations
    pauseReserve() {
        return this.reserve.send("pauseReserve", {});
    }

    unpauseReserve() {
        return this.reserve.send("unpauseReserve", {});
    }

}

export default ReserveWrapper;