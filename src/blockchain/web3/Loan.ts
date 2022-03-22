import abi from "../abis/Loan.json"
import abiExt from "../abis/LoanExt.json"
import abiExtv1 from "../abis/LoanExtv1.json"
import { NumToBN } from "../utils"
import { ethers } from "ethers"
// import { pancakeSwapTokenAddress } from 'blockchain/constants';
class LoanWrapper {
  //Contract
  loan: any
  loanExt: any
  loanExtv1: any

  constructor(signer) {
    this.loan = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abi, signer)
    this.loanExt = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abiExt, signer)
    this.loanExtv1 = new ethers.Contract(process.env.REACT_APP_DIAMOND_ADDRESS, abiExtv1, signer)
  }

  //send transaction methods
  swapLoan(market: string, commitment: string, swapMarket: string) {
    return this.loan.swapLoan(market, commitment, swapMarket)
  }

  swapToLoan(market: string, commitment: string) {
    return this.loan.swapToLoan(market, commitment)
  }

  withdrawCollateral(market: string, commitment: string) {
    return this.loan.withdrawCollateral(market, commitment)
  }

  repayLoan(market: string, commitment: string, repayAmount: number, decimal: number) {
    return this.loanExtv1.repayLoan(market, commitment, NumToBN(repayAmount, decimal))
  }

  loanRequest(market: string, commitment: string, loanAmount: number, loanDecimal: number, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
    const loanAmountToSend = NumToBN(loanAmount, loanDecimal)
    const collateralAmountToSend = NumToBN(collateralAmount, collateralDecimal)
    return this.loanExt.loanRequest(market, commitment, loanAmountToSend, collateralMarket, collateralAmountToSend)
  }

  addCollateral(market: string, commitment: string, collateralAmount: number, collateralDecimal: number) {
    return this.loan.addCollateral(market, commitment, NumToBN(collateralAmount, collateralDecimal))
  }

  liquidation(address: string, market: string, commitment: string) {
    return this.loanExtv1.liquidation(address, market, commitment)
  }

  permissibleWithdrawal(market: string, commitment: string, amount: number, decimal: number) {
    const amountToSent = NumToBN(amount, decimal)

    return this.loan.withdrawPartialLoan(market, commitment, amountToSent)
  }

  //getter methods
  hasLoanAccount(address: string) {
    return this.loanExt.hasLoanAccount(address)
  }

  avblReservesLoan(market: string) {
    return this.loanExt.avblReservesLoan(market)
  }

  utilisedReservesLoan(market: string) {
    return this.loanExt.utilisedReservesLoan(market)
  }

  isPausedLoan() {
    return this.loan.isPausedLoan()
  }

  isPausedLoan1() {
    return this.loanExt.isPausedLoanExt()
  }

  //admin operations
  pauseLoan() {
    return this.loan.pauseLoan()
  }

  unpauseLoan() {
    return this.loan.unpauseLoan()
  }

  pauseLoan1() {
    return this.loanExt.pauseLoanExt()
  }

  unpauseLoan1() {
    return this.loanExt.unpauseLoanExt()
  }
  pauseLoan2() {
    return this.loanExtv1.pauseLoanExt()
  }

  unpauseLoan2() {
    return this.loanExtv1.unpauseLoanExt()
  }
  getLoans(account: string) {
    return this.loanExt.getLoans(account);
}
}

export default LoanWrapper
