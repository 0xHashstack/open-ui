import { diamondAddress } from '../constants';
import Deposit from '../contracts/Deposit';
import { NumToBN } from '../utils';

class DepositWrapper {  
    // Contracts
    deposit: Deposit;
  
    constructor(wrapperOptions: any) {
        this.deposit = new Deposit(wrapperOptions, diamondAddress);
    }

    //send transaction methods
    createDeposit(market: string, commitment: string, amount: number, decimal: number) {
        return this.deposit.send("createDeposit", {}, market, commitment, NumToBN(amount, decimal));
    }

    addToDeposit(market: string, commitment: string, amount: number, decimal: number) {
        return this.deposit.send("addToDeposit", {}, market, commitment, NumToBN(amount, decimal));
    }
    
    withdrawDeposit(market: string, commitment: string, amount: number, savingType: number, decimal: number) {
        return this.deposit.send("withdrawDeposit", {}, market, commitment, NumToBN(amount, decimal), savingType);
    }

    convertYeild(market: string, commitment: string) {
        return this.deposit.send("convertYield", {}, market, commitment)
    }


    //getter methods
    savingsBalance(market: string, commitment: string) {
        return this.deposit.call("savingsBalance", market, commitment)
    }

    hasAccount(address: string) {
        return this.deposit.call("hasAccount", address);
    }

    hasYield(market: string, commitment: string) {
        return this.deposit.call("hasYeild", market, commitment);
    }

    avblReservesDeposit(market: string) {
        return this.deposit.call("avblReservesDeposit", market);
    }

    utilisedReservesDeposit(market: string) {
        return this.deposit.call("utilisedReservesDeposit", market);
    }

    hasDeposit(market: string, commitment: string) {
        return this.deposit.call("hasDeposit", market, commitment);
    }

    isPausedDeposit() {
        return this.deposit.call("isPausedDeposit");
    }

    //admin operations
    pauseDeposit() {
        return this.deposit.send("pauseDeposit", {});
    }

    unpauseDeposit() {
        return this.deposit.send("unpauseDeposit", {});
    }
     
}

export default DepositWrapper;