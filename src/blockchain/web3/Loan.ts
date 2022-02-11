import Loan from 'blockchain/contracts/Loan';
import { NumToBN } from '../utils';
import LoanExt from 'blockchain/contracts/LoanExt';
// import { pancakeSwapTokenAddress } from 'blockchain/constants';
class LoanWrapper {

    //Contract
    loan: Loan;
    loanExt: LoanExt;

    constructor(wrapperOptions: any) {
        this.loan = new Loan(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS);
        this.loanExt = new LoanExt(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS);
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
        let loanAmountToSend = NumToBN(loanAmount, loanDecimal);
        let collateralAmountToSend = NumToBN(collateralAmount, collateralDecimal);
        return this.loanExt.send("loanRequest", {}, market, commitment, loanAmountToSend, collateralMarket, collateralAmountToSend);
    }

    addCollateral(market: string, commitment: string, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
        return this.loanExt.send("addCollateral", {}, market, commitment, collateralMarket, NumToBN(collateralAmount, collateralDecimal));
    }

    liquidation(address: string, id: number) {
        return this.loanExt.send("liquidation", {}, address, String(id));
    }

    permissibleWithdrawal(market: string, commitment: string, amount: number, decimal: number) {
        const amountTosent = NumToBN(amount, decimal);
        
        return this.loanExt.send("withdrawPartialLoan", market, commitment, amountTosent);
    }

    //getter methods
    hasLoanAccount(address: string) {
        return this.loanExt.call("hasLoanAccount", address);
    }

    avblReservesLoan(market: string) {
        return this.loanExt.call("avblReservesLoan", market);
    }

    utilisedReservesLoan(market: string) {
        return this.loanExt.call("utilisedReservesLoan", market);
    }

    isPausedLoan() {
        return this.loan.call("isPausedLoan"); 
    }

    isPausedLoan1() {
        return this.loanExt.call("isPausedLoanExt");
    }

    //admin operations
    pauseLoan() {
        return this.loan.send("pauseLoan", {});
    }

    unpauseLoan() {
        return this.loan.send("unpauseLoan", {});
    }

    pauseLoan1() {
        return this.loanExt.send("pauseLoanExt", {});
    }

    unpauseLoan1() {
        return this.loanExt.send("unpauseLoanExt", {});
    }

}

export default LoanWrapper;