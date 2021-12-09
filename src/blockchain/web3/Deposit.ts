import Web3Wrapper from './Web3Wrapper';
import { diamondAddress } from '../constants';
import Deposit from '../contracts/Deposit';
import { NumToBN } from '../utils';

export default class DepositWeb3Wrapper extends Web3Wrapper {
    wrapperOptions: any;
  
    // Contracts
    deposit: Deposit;
  
    constructor(web3, chainId, account, options = {}) {
        super(web3, chainId, account, options)
        this.deposit = new Deposit(this.wrapperOptions, diamondAddress);
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
     
}