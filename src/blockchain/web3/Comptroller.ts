import { ethers } from "ethers"
import abi from "../abis/Comptroller.json"
import { NumToBN } from "../utils"

class ComptrollerWeb3Wrapper {
  // Contract
  comptroller: any

  constructor(signer: any) {
    this.comptroller = new ethers.Contract(
      process.env.REACT_APP_DIAMOND_ADDRESS,
      JSON.stringify(abi),
      signer
    )
  }

  //send transaction methods
  setCommitment(commitment: string) {
    return this.comptroller.setCommitment(commitment)
  }

  updateAPY(commitment: string, apy: number) {
    return this.comptroller.updateAPY(commitment, String(apy))
  }

  updateAPR(commitment: string, apr: number) {
    return this.comptroller.updateAPR(commitment, String(apr))
  }

  updateLoanIssuanceFees(fees: number, decimal: number) {
    return this.comptroller.updateLoanIssuanceFees(NumToBN(fees, decimal))
  }

  updateLoanClosureFees(fees: number, decimal: number) {
    return this.comptroller.updateLoanClosureFees(NumToBN(fees, decimal))
  }

  updateLoanPreClosureFees(fees: number, decimal: number) {
    return this.comptroller.updateLoanPreClosureFees(NumToBN(fees, decimal))
  }

  updateDepositPreclosureFees(fees: number, decimal: number) {
    return this.comptroller.updateDepositPreclosureFees(NumToBN(fees, decimal))
  }

  updateWithdrawalFees(fees: number, decimal: number) {
    return this.comptroller.updateWithdrawalFees(NumToBN(fees, decimal))
  }

  updateCollateralReleaseFees(fees: number, decimal: number) {
    return this.comptroller.updateCollateralReleaseFees(NumToBN(fees, decimal))
  }

  updateYieldConversion(fees: number, decimal: number) {
    return this.comptroller.updateYieldConversion(NumToBN(fees, decimal))
  }

  updateMarketSwapFees(fees: number, decimal: number) {
    return this.comptroller.updateMarketSwapFees(NumToBN(fees, decimal))
  }

  updateReserveFactor(reserveFactor: number) {
    return this.comptroller.updateReserveFactor(String(reserveFactor))
  }

  updateMaxWithdrawal(factor: number, blockLimit: number) {
    return this.comptroller.updateMaxWithdrawal(String(factor), String(blockLimit))
  }

  liquidationTrigger(loanId: number) {
    return this.comptroller.liquidationTrigger(String(loanId))
  }

  //getter methods
  getAPR( market: string, commitment: string,) {
    return this.comptroller.getAPR(market, commitment)
  }

  getAPRInd(commitment: string, index: number) {
    return this.comptroller.getAPRInd(commitment, String(index))
  }

  getsavingsAPR(commitment: string, market: string) {
    return this.comptroller.getsavingsAPR(market,commitment)
  }

  getAPYInd(commitment: string, index: number) {
    return this.comptroller.getAPYInd(commitment, String(index))
  }

  getApytime(commitment: string, index: number) {
    return this.comptroller.getApytime(commitment, String(index))
  }

  getAprtime(commitment: string, index: number) {
    return this.comptroller.getAprtime(commitment, String(index))
  }

  getApyLastTime(commitment: string) {
    return this.comptroller.getApyLastTime(commitment)
  }

  getAprLastTime(commitment: string) {
    return this.comptroller.getAprLastTime(commitment)
  }

  getApyTimeLength(commitment: string) {
    return this.comptroller.getApyTimeLength(commitment)
  }

  getAprTimeLength(commitment: string) {
    return this.comptroller.getAprTimeLength(commitment)
  }

  getCommitment(index: number) {
    return this.comptroller.getCommitment(index)
  }

  // calcAPR(commitment: string, oldLengthAccruedInterest: number, oldTime: number, aggregateInterest: number) {
  //     return this.comptroller.calcAPR", commitment, String(oldLengthAccruedInterest), String(oldTime), String(aggregateInterest));
  // }

  // calcAPY(commitment: string, oldLengthAccruedYield: number, oldTime: number, aggregateYield: number) {
  //     return this.comptroller.calcAPY", commitment, String(oldLengthAccruedYield), String(oldTime), String(aggregateYield));
  // }

  getReserveFactor() {
    return this.comptroller.getReserveFactor()
  }

  depositPreClosureFees() {
    return this.comptroller.depositPreClosureFees()
  }

  depositWithdrawalFees() {
    return this.comptroller.depositWithdrawalFees()
  }

  collateralReleaseFees() {
    return this.comptroller.collateralReleaseFees()
  }

  isPausedComptroller() {
    return this.comptroller.isPausedComptroller()
  }

  //admin operations
  pauseComptroller() {
    return this.comptroller.pauseComptroller()
  }

  unpauseComptroller() {
    return this.comptroller.unpauseComptroller()
  }
}

export default ComptrollerWeb3Wrapper
