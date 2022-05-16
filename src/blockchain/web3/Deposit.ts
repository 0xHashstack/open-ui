import abi from "../abis/Deposit.json";
import { NumToBN } from "../utils";
import { ethers } from "ethers";

class DepositWrapper {
  // Contracts
  deposit: any

  constructor(signer: any) {
    this.deposit = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, JSON.stringify(abi), signer)
  }

    //send transaction methods
    // createDeposit(market: string, commitment: string, amount: number, decimal: number) {
    //     const amountTosent = NumToBN(amount, decimal);
    //     console.log(amountTosent);
    //     return this.deposit.send("createDeposit", {}, market, commitment, amountTosent);
    // }

    depositRequest(market: string, commitment: string, amount: number, decimal: number) {
        return this.deposit.depositRequest(market, commitment, NumToBN(amount, decimal));
    }
    
    withdrawDeposit(market: string, commitment: string, amount: number, decimal: number) {
        return this.deposit.withdrawDeposit(market, commitment, NumToBN(amount, decimal));
    }

    // convertYeild(market: string, commitment: string) {
    //     return this.deposit.send("convertYield", {}, market, commitment);
    // }


    //getter methods
    // savingsBalance(market: string, commitment: string) {
    //     return this.deposit.call("savingsBalance", market, commitment)
    // }

    hasAccount(address: string) {
        return this.deposit.hasAccount(address);
    }

    hasYield(market: string, commitment: string) {
        return this.deposit.hasYeild(market, commitment);
    }

    avblReservesDeposit(market: string) {
        return this.deposit.avblReservesDeposit(market);
    }

    utilisedReservesDeposit(market: string) {
        return this.deposit.utilisedReservesDeposit(market);
    }

    hasDeposit(market: string, commitment: string) {
        return this.deposit.hasDeposit(market, commitment);
    }

    isPausedDeposit() {
        return this.deposit.isPausedDeposit();
    }

    getDeposits(account: string) {
        return this.deposit.getDeposits(account);
    }

    //admin operations
    pauseDeposit() {
        return this.deposit.pauseDeposit();
    }

    unpauseDeposit() {
        return this.deposit.unpauseDeposit();
    }

    getDepositInterest(account, id){
        return this.deposit.getDepositInterest(account, id);
    }
     
}

export default DepositWrapper;