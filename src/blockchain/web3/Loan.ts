import { diamondAddress } from '../constants';
import Loan from 'blockchain/contracts/Loan';
import { NumToBN } from '../utils';
import Loan1 from 'blockchain/contracts/Loan1';

class LoanWrapper {
    
    //Contract
    loan: Loan; 
    loan1: Loan1;

    constructor(wrapperOptions: any) {
        this.loan = new Loan(wrapperOptions, diamondAddress);
        this.loan1 = new Loan1(wrapperOptions, diamondAddress);
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

    liquidation(address: string, id: number) {
        return this.loan1.send("liquidation", {}, address, String(id));
    }

    permissibleWithdrawal(market: string, commitment: string, collateralMarket: string, amount: number, decimal: number) {
        return this.loan1.send("permissibleWithdrawal", market, commitment, collateralMarket, NumToBN(amount, decimal));
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

    isPausedLoan() {
        return this.loan.call("isPausedLoan");
    }

    isPausedLoan1() {
        return this.loan1.call("isPausedLoan1");
    }

    //admin operations
    pauseLoan() {
        return this.loan.send("pauseLoan", {});
    }

    unpauseLoan() {
        return this.loan.send("unpauseLoan", {});
    }
    
    pauseLoan1() {
        return this.loan1.send("pauseLoan1", {});
    }

    unpauseLoan1() {
        return this.loan1.send("unpauseLoan1", {});
    }

}

export default LoanWrapper;