import { ethers } from 'ethers';
import abi from "../abis/OracleOpen.json"

class OracleOpenWrapper {

    oracleOpen: any

    constructor(signer) {
        this.oracleOpen = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abi, signer);
    }

    // liquidationTrigger(address: string, loanId: number) {
    //     return this.oracleOpen.send("liquidationTrigger", {}, address, String(loanId));
    // }

    setFairPrice(requestId: number, fairPrice: number, market: string, amount: number) {
        return this.oracleOpen.setFairPrice(requestId, fairPrice, market, amount);
    }
    
    //getter method
    getLatestPrice(market: string) {
        return this.oracleOpen.getLatestPrice(market);
    }

    isPausedOracle() {
        return this.oracleOpen.isPausedOracle();
    }

    //admin operation
    pauseOracle() {
        return this.oracleOpen.pauseOracle();
    }

    unpauseOracle() {
        return this.oracleOpen.unpauseOracle();
    }

}

export default OracleOpenWrapper;