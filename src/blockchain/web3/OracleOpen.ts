import { diamondAddress } from '../constants';
import OracleOpen from '../contracts/OracleOpen';

class OracleOpenWrapper {

    oracleOpen: OracleOpen

    constructor(wrapperOptions) {
        this.oracleOpen = new OracleOpen(wrapperOptions, diamondAddress);
    }

    liquidationTrigger(address: string, loanId: number) {
        return this.oracleOpen.send("liquidationTrigger", {}, address, String(loanId));
    }

    setFairPrice(requestId: number, fairPrice: number, market: string, amount: number) {
        return this.oracleOpen.send("setFairPrice", {}, requestId, fairPrice, market, amount);
    }
    
    //getter method
    getLatestPrice(market: string) {
        return this.oracleOpen.call("getLatestPrice", market);
    }

    isPausedOracle() {
        return this.oracleOpen.call("isPausedOracle");
    }

    //admin operation
    pauseOracle() {
        return this.oracleOpen.send("pauseOracle", {});
    }

    unpauseOracle() {
        return this.oracleOpen.send("unpauseOracle", {});
    }

}

export default OracleOpenWrapper;