import Web3Wrapper from './Web3Wrapper';
import { diamondAddress } from '../constants';
import Loan from '../contracts/Loan';
import { NumToBN } from '../utils';
import Loan1 from 'blockchain/contracts/Loan1';

class LoanWeb3Wrapper extends Web3Wrapper {
    
    //Contract
    loan: Loan; 
    loan1: Loan1;

    constructor(web3, chainId, account, options = {}) {
        super(web3, chainId, account, options)
        this.loan = new Loan(this.wrapperOptions, diamondAddress);
        this.loan1 = new Loan1(this.wrapperOptions, diamondAddress);
    }

    //send transaction methods
    swapLoan(market: string, commitment: string, swapMarket: string) {
        return this.loan.send("swapLoan", {}, market, commitment, swapMarket);
    }

    swapToLoan(swapMarket: string, commitment: string, market: string) {
        return this.loan.send("swapToLoan", {}, swapMarket, commitment, market);
    }

    withdrawCollateral(market: string, commitment: string) {
        return this.loan.send("withdrawCollateral", {}, market, commitment);
    }

    repayLoan(market: string, commitment: string, repayAmount: number, decimal: number) {
        return this.loan.send("repayLoan", {}, market, commitment, NumToBN(repayAmount, decimal));
    }

    loanRequest(market: string, commitment: string, loanAmount: number, loanDecimal: number, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
        return this.loan1.send("loanRequest", {}, market, commitment, NumToBN(loanAmount, loanDecimal), collateralMarket, NumToBN(collateralAmount, collateralDecimal));
    }
    
    addCollateral(market: string, commitment: string, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
        return this.loan1.send("addCollateral", {}, market, commitment, collateralMarket, NumToBN(collateralAmount, collateralDecimal));
    }

    //getter methods
    hasLoanAccount(address: string) {
        return this.loan1.call("hasLoanAccount", address);
    }

    avblReservesLoan(market: string) {
        return this.loan1.call("avblReservesLoan", market);
    }

    utilisedReservesLoan(market: string) {
        return this.loan1.call("utilisedReservesLoan", market);
    }

}

export default LoanWeb3Wrapper;