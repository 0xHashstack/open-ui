import Loan from 'blockchain/contracts/Loan';
import { NumToBN } from '../utils';
import LoanExt from 'blockchain/contracts/LoanExt';
// import { pancakeSwapTokenAddress } from 'blockchain/constants';
class LoanWrapper {
  //Contract
  loan: Loan
  loanExt: LoanExt

  constructor(wrapperOptions: any) {
    this.loan = new Loan(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS)
    this.loanExt = new LoanExt(
      wrapperOptions,
      process.env.REACT_APP_DIAMOND_ADDRESS
    )
  }

  //send transaction methods
  swapLoan(market: string, commitment: string, swapMarket: string) {
    return this.loan.send("swapLoan", {}, market, commitment, swapMarket)
  }

  swapToLoan(commitment: string, market: string) {
    return this.loan.send("swapToLoan", {}, commitment, market)
  }

  withdrawCollateral(market: string, commitment: string) {
    return this.loan.send("withdrawCollateral", {}, market, commitment)
  }

  repayLoan(
    market: string,
    commitment: string,
    repayAmount: number,
    decimal: number
  ) {
    return this.loanExt.send(
      "repayLoan",
      {},
      market,
      commitment,
      NumToBN(repayAmount, decimal)
    )
  }

  loanRequest(
    market: string,
    commitment: string,
    loanAmount: number,
    loanDecimal: number,
    collateralMarket: string,
    collateralAmount: number,
    collateralDecimal: number
  ) {
    const loanAmountToSend = NumToBN(loanAmount, loanDecimal)
    const collateralAmountToSend = NumToBN(collateralAmount, collateralDecimal)
    return this.loanExt.send(
      "loanRequest",
      {},
      market,
      commitment,
      loanAmountToSend,
      collateralMarket,
      collateralAmountToSend
    )
  }

  addCollateral(
    market: string,
    commitment: string,
    collateralAmount: number,
    collateralDecimal: number
  ) {
    return this.loan.send(
      "addCollateral",
      {},
      market,
      commitment,
      NumToBN(collateralAmount, collateralDecimal)
    )
  }

  liquidation(address: string, market: string, commitment: string) {
    return this.loanExt.send("liquidation", {}, address, market, commitment)
  }

  permissibleWithdrawal(
    market: string,
    commitment: string,
    amount: number,
    decimal: number
  ) {
    const amountToSent = NumToBN(amount, decimal);

    return this.loan.send("withdrawPartialLoan", {}, market, commitment, amountToSent);
  }

  //getter methods
  hasLoanAccount(address: string) {
    return this.loanExt.call("hasLoanAccount", address)
  }

  avblReservesLoan(market: string) {
    return this.loanExt.call("avblReservesLoan", market)
  }

  utilisedReservesLoan(market: string) {
    return this.loanExt.call("utilisedReservesLoan", market)
  }

  isPausedLoan() {
    return this.loan.call("isPausedLoan")
  }

  isPausedLoan1() {
    return this.loanExt.call("isPausedLoanExt")
  }

  //admin operations
  pauseLoan() {
    return this.loan.send("pauseLoan", {})
  }

  unpauseLoan() {
    return this.loan.send("unpauseLoan", {})
  }

  pauseLoan1() {
    return this.loanExt.send("pauseLoanExt", {})
  }

  unpauseLoan1() {
    return this.loanExt.send("unpauseLoanExt", {})
  }
}

export default LoanWrapper;