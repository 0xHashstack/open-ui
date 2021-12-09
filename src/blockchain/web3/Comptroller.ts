import Web3Wrapper from './Web3Wrapper';
// import { diamondAddress } from '../constants';
// import Comptroller from '../contracts/Comptroller';
import { NumToBN } from '../utils';

class ComptrollerWeb3Wrapper extends Web3Wrapper {
  
    // Contract
    // comptroller: Comptroller;
  
    // constructor(web3, chainId, account, options = {}) {
    //     super(web3, chainId, account, options)
    //     this.comptroller = new Comptroller(this.wrapperOptions, diamondAddress);
    // }

    //send transaction methods
    setCommitment(commitment: string) {
        return this.comptroller.send("setCommitment", {}, commitment);
    }

    updateAPY(commitment: string, apy: number) {
        return this.comptroller.send("updateAPY", {}, commitment, String(apy));
    }

    updateAPR(commitment: string, apr: number) {
        return this.comptroller.send("updateAPR", {}, commitment, String(apr));
    }

    updateLoanIssuanceFees(fees: number, decimal: number) {
        return this.comptroller.send("updateLoanIssuanceFees", {}, NumToBN(fees, decimal));
    }

    updateLoanClosureFees(fees: number, decimal: number) {
        return this.comptroller.send("updateLoanClosureFees", {}, NumToBN(fees, decimal));
    }

    updateLoanPreClosureFees(fees: number, decimal: number) {
        return this.comptroller.send("updateLoanPreClosureFees", {}, NumToBN(fees, decimal));
    }

    updateDepositPreclosureFees(fees: number, decimal: number) {
        return this.comptroller.send("updateDepositPreclosureFees", {}, NumToBN(fees, decimal));
    }

    updateWithdrawalFees(fees: number, decimal: number) {
        return this.comptroller.send("updateWithdrawalFees", {}, NumToBN(fees, decimal));
    }

    updateCollateralReleaseFees(fees: number, decimal: number) {
        return this.comptroller.send("updateCollateralReleaseFees", {}, NumToBN(fees, decimal));
    }

    updateYieldConversion(fees: number, decimal: number) {
        return this.comptroller.send("updateYieldConversion", {}, NumToBN(fees, decimal));
    }

    updateMarketSwapFees(fees: number, decimal: number) {
        return this.comptroller.send("updateMarketSwapFees", {}, NumToBN(fees, decimal));
    }

    updateReserveFactor(reserveFactor: number) {
        return this.comptroller.send("updateReserveFactor", {}, String(reserveFactor));
    }

    updateMaxWithdrawal(factor: number, blockLimit: number) {
        return this.comptroller.send("updateMaxWithdrawal", {}, String(factor), String(blockLimit));
    }

    //getter methods
    getAPR(commitment: string) {
        return this.comptroller.call("getAPR", commitment);
    }

    getAPY(commitment: string) {
        return this.comptroller.call("getAPY", commitment);
    }
    
    getAPYInd(commitment: string, index: number) {
        return this.comptroller.call("getAPYInd", commitment, String(index));
    }
    
    getApytime(commitment: string, index: number) {
        return this.comptroller.call("getApytime", commitment, String(index));
    }
    
    getAprtime(commitment: string, index: number) {
        return this.comptroller.call("getAprtime", commitment, String(index));
    }
    
    getApyLastTime(commitment: string) {
        return this.comptroller.call("getApyLastTime", commitment);
    }
    
    getAprLastTime(commitment: string) {
        return this.comptroller.call("getAprLastTime", commitment);
    }
    
    getApyTimeLength(commitment: string) {
        return this.comptroller.call("getApyTimeLength", commitment);
    }
    
    getAprTimeLength(commitment: string) {
        return this.comptroller.call("getAprTimeLength", commitment);
    }
    
    getCommitment(index: number) {
        return this.comptroller.call("getCommitment", index);
    }
    
    calcAPR(commitment: string, oldLengthAccruedInterest: number, oldTime: number, aggregateInterest: number) {
        return this.comptroller.call("calcAPR", commitment, String(oldLengthAccruedInterest), String(oldTime), String(aggregateInterest));
    }

    calcAPY(commitment: string, oldLengthAccruedYield: number, oldTime: number, aggregateYield: number) {
        return this.comptroller.call("calcAPY", commitment, String(oldLengthAccruedYield), String(oldTime), String(aggregateYield));
    }

}

export default ComptrollerWeb3Wrapper;

