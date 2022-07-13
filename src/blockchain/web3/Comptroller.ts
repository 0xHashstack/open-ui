import { ethers } from "ethers"
import abi from "../abis/Comptroller.json"
import { NumToBN } from "../utils"
import index from "../../components/banner/index"

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

  setDepositCommitment(commitment: string, days: number) {
    return this.comptroller.setDepositCommitment(commitment, days)
  }

  setBorrowCommitment(commitment: string, days: number) {
    return this.comptroller.setBorrowCommitment(commitment, days)
  }

  setTimelockValidityDeposit(time: number) {
    return this.comptroller.setTimelockValidityDeposit(time)
  }

  getTimelockValidityDeposit() {
    return this.comptroller.getTimelockValidityDeposit()
  }

  updateAPR(market: string, commitment: string, apr: number) {
    return this.comptroller.updateAPR(market, commitment, String(apr))
  }

  updatesavingsAPR(market: string, commitment: string, savingApr: number) {
    return this.comptroller.updatesavingsAPR(market, commitment, savingApr)
  }

  updateLoanIssuanceFees(fees: number) {
    return this.comptroller.updateLoanIssuanceFees(String(fees))
  }

  loanClosureFees() {
    return this.comptroller.loanClosureFees()
  }

  updateLoanClosureFees(fees: number) {
    return this.comptroller.updateLoanClosureFees(String(fees))
  }

  loanIssuanceFees() {
    return this.comptroller.loanIssuanceFees()
  }

  updateLoanPreClosureFees(fees: number) {
    return this.comptroller.updateLoanPreClosureFees(String(fees))
  }

  updateCollateralPreclosureFees(fees: number) {
    return this.comptroller.updateCollateralPreclosureFees(String(fees))
  }

  collateralPreClosureFees() {
    return this.comptroller.collateralPreClosureFees()
  }

  updateDepositPreclosureFees(fees: number) {
    return this.comptroller.updateDepositPreclosureFees(String(fees))
  }

  updateWithdrawalFees(fees: number) {
    return this.comptroller.updateWithdrawalFees(String(fees))
  }

  updateCollateralReleaseFees(fees: number) {
    return this.comptroller.updateCollateralReleaseFees(String(fees))
  }

  updateYieldConversion(fees: number) {
    return this.comptroller.updateYieldConversion(String(fees))
  }

  updateMarketSwapFees(fees: number) {
    return this.comptroller.updateMarketSwapFees(String(fees))
  }

  updateReserveFactor(reserveFactor: number) {
    return this.comptroller.updateReserveFactor(String(reserveFactor))
  }

  updateCollateralFactor(collateralFactor: number) {
    return this.comptroller.updateCollateralFactor(String(collateralFactor))
  }

  updateMaxWithdrawal(factor: number, blockLimit: number) {
    return this.comptroller.updateMaxWithdrawal(
      String(factor),
      String(blockLimit)
    )
  }

  updateReservesDeposit(market: string, amount: number) {
    return this.comptroller.updateReservesDeposit(market, String(amount))
  }

  //getter methods
  getAPR(market: string, commitment: string) {
    return this.comptroller.getAPR(market, commitment)
  }

  getAPRInd(market: string, commitment: string, index: number) {
    return this.comptroller.getAPRInd(market, commitment, String(index))
  }

  getsavingsAPR(market: string, commitment: string) {
    return this.comptroller.getsavingsAPR(market, commitment)
  }

  getsavingsAPRInd(market: string, commitment: string, index: number) {
    return this.comptroller.getsavingsAPRInd(market, commitment, String(index))
  }

  getsavingsAprtime(market: string, commitment: string, index: number) {
    return this.comptroller.getsavingsAprtime(market, commitment, String(index))
  }

  getAprtime(market: string, commitment: string, index: number) {
    return this.comptroller.getAprtime(market, commitment, String(index))
  }

  getsavingsAprLastTime(market: string, commitment: string) {
    return this.comptroller.getsavingsAprLastTime(market, commitment)
  }

  getsavingsAprTimeLength(market: string, commitment: string) {
    return this.comptroller.getsavingsAprTimeLength(market, commitment)
  }

  getAprLastTime(market: string, commitment: string) {
    return this.comptroller.getAprLastTime(market, commitment)
  }

  getAprTimeLength(market: string, commitment: string) {
    return this.comptroller.getAprTimeLength(market, commitment)
  }

  getCommitment(index: number, depositOrBorrow: number) {
    return this.comptroller.getCommitment(
      String(index),
      String(depositOrBorrow)
    )
  }

  marketSwapFees() {
    return this.comptroller.marketSwapFees()
  }

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
