import { useState, useContext } from "react"
import { Web3ModalContext } from "../contexts/Web3ModalProvider"
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider"
import { ethers } from "ethers"
import {
  Col,
  Button,
  Form,
  Input,
  Modal,
  Spinner,
  InputGroup,
  FormText,
  FormGroup,
} from "reactstrap"
import "./testComptroller.css"

import {
  SymbolsMap,
  marketDataOnChain,
  DepositInterestRates,
  CommitMap,
  VariableDepositInterestRates,
  MinimumAmount,
} from "../blockchain/constants"

import { BNtoNum, GetErrorText, NumToBN } from "../blockchain/utils"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SingleInput from "./testComptrollerComponent/singleInput"
import Get from "./testComptrollerComponent/Get"
import DoubleInput from "./testComptrollerComponent/DoubleInput"
import DoubleInputGet from "./testComptrollerComponent/DoubleInputGet"
import ThreeInput from "./testComptrollerComponent/ThreeInput"
import ThreeInputGet from "./testComptrollerComponent/ThreeInputGet"

const TestComptroller = () => {
  const commit_NONE = ethers.utils.formatBytes32String("commit_NONE")
  const commit_TWOWEEKS = ethers.utils.formatBytes32String("commit_TWOWEEKS")
  const commit_ONEMONTH = ethers.utils.formatBytes32String("commit_ONEMONTH")
  const commit_THREEMONTH =
    ethers.utils.formatBytes32String("commit_THREEMONTH")

  const symbolWBNB = ethers.utils.formatBytes32String("WBNB") // WBNB
  const symbolUsdt = ethers.utils.formatBytes32String("USDT.t") // USDT.t
  const symbolUsdc = ethers.utils.formatBytes32String("USDC.t") // USDC.t
  const symbolBtc = ethers.utils.formatBytes32String("BTC.t") // BTC.t

  const { chainId, account } = useContext(Web3ModalContext)
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext)

  const isPausedComptroller = async () => {
    return await wrapper?.getComptrollerInstance().isPausedComptroller()
  }

  const pauseComptroller = async () => {
    return await wrapper?.getComptrollerInstance().pauseComptroller()
  }

  const unpauseComptroller = async () => {
    return await wrapper?.getComptrollerInstance().unpauseComptroller()
  }

  const updateWithdrawalFees = async fees => {
    await wrapper?.getComptrollerInstance().updateWithdrawalFees(fees)
  }

  const getDepositWithdrawalFees = async () => {
    return await wrapper?.getComptrollerInstance().depositWithdrawalFees()
  }

  const setDepositCommitment = async (commitment: string, days: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .setDepositCommitment(commitment, days)
  }

  const setBorrowCommitment = async (commitment: string, days: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .setBorrowCommitment(commitment, days)
  }
  const getCommitment = async (index: number, depositOrBorrow: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getCommitment(index, depositOrBorrow)
  }

  const updatesavingsAPR = async (
    market: string,
    commitment: string,
    savingApr: number
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updatesavingsAPR(market, commitment, savingApr)
  }

  const getsavingsAPR = async (market: string, commitment: string) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getsavingsAPR(market, commitment)
  }

  const getsavingsAPRInd = async (
    market: string,
    commitment: string,
    index: number
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getsavingsAPRInd(market, commitment, index)
  }

  const getsavingsAprtime = async (
    market: string,
    commitment: string,
    index: number
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getsavingsAprtime(market, commitment, index)
  }

  const setTimelockValidityDeposit = async (time: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .setTimelockValidityDeposit(time)
  }

  const getTimelockValidityDeposit = async () => {
    return await wrapper?.getComptrollerInstance().getTimelockValidityDeposit()
  }

  const updateAPR = async (market: string, commitment: string, apr: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateAPR(market, commitment, apr)
  }

  const getAPR = async (market: string, commitment: string) => {
    return await wrapper?.getComptrollerInstance().getAPR(market, commitment)
  }

  const getAPRInd = async (
    market: string,
    commitment: string,
    index: number
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getAPRInd(market, commitment, index)
  }

  const getAprtime = async (
    market: string,
    commitment: string,
    index: number
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getAprtime(market, commitment, index)
  }

  const getsavingsAprLastTime = async (market: string, commitment: string) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getsavingsAprLastTime(market, commitment)
  }

  const getsavingsAprTimeLength = async (
    market: string,
    commitment: string
  ) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getsavingsAprTimeLength(market, commitment)
  }

  const getAprLastTime = async (market: string, commitment: string) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getAprLastTime(market, commitment)
  }

  const getAprTimeLength = async (market: string, commitment: string) => {
    return await wrapper
      ?.getComptrollerInstance()
      .getAprTimeLength(market, commitment)
  }

  const updateLoanIssuanceFees = async (fees: number) => {
    return await wrapper?.getComptrollerInstance().updateLoanIssuanceFees(fees)
  }

  const loanIssuanceFees = async () => {
    return await wrapper?.getComptrollerInstance().loanIssuanceFees()
  }

  const updateLoanClosureFees = async (fees: number) => {
    return await wrapper?.getComptrollerInstance().updateLoanClosureFees(fees)
  }

  const loanClosureFees = async () => {
    return await wrapper?.getComptrollerInstance().loanClosureFees()
  }

  const updateLoanPreClosureFees = async (fees: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateLoanPreClosureFees(fees)
  }

  const updateCollateralPreclosureFees = async (fees: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateCollateralPreclosureFees(fees)
  }

  const collateralPreClosureFees = async () => {
    return await wrapper?.getComptrollerInstance().collateralPreClosureFees()
  }

  const updateCollateralReleaseFees = async (fees: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateCollateralReleaseFees(fees)
  }

  const collateralReleaseFees = async () => {
    return await wrapper?.getComptrollerInstance().collateralReleaseFees()
  }

  const updateCollateralFactor = async (collateralFactor: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateCollateralFactor(collateralFactor)
  }

  const updateDepositPreclosureFees = async (fees: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateDepositPreclosureFees(fees)
  }

  const depositPreClosureFees = async () => {
    return await wrapper?.getComptrollerInstance().depositPreClosureFees()
  }

  const updateReservesDeposit = async (market: string, amount: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateReservesDeposit(market, amount)
  }

  const updateYieldConversion = async (fees: number) => {
    return await wrapper?.getComptrollerInstance().updateYieldConversion(fees)
  }

  const updateMarketSwapFees = async (fees: number) => {
    return await wrapper?.getComptrollerInstance().updateMarketSwapFees(fees)
  }

  const marketSwapFees = async () => {
    return await wrapper?.getComptrollerInstance().marketSwapFees()
  }

  const updateReserveFactor = async (reserveFactor: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateReserveFactor(reserveFactor)
  }

  const getReserveFactor = async () => {
    return await wrapper?.getComptrollerInstance().getReserveFactor()
  }

  const updateMaxWithdrawal = async (factor: number, blockLimit: number) => {
    return await wrapper
      ?.getComptrollerInstance()
      .updateMaxWithdrawal(factor, blockLimit)
  }

  return (
    <div className="comp-container">
      <div className="bytes ">
        <div className="bytes-div">
          <p>Commit none: {commit_NONE}</p>
          <p>Commit TWO_WEEKS: {commit_TWOWEEKS}</p>
          <p>Commit ONEMONTH: {commit_ONEMONTH}</p>
          <p>Commit THREEMONTHS: {commit_THREEMONTH}</p>
        </div>
        <div className="bytes-div">
          <p>BTC {symbolBtc}</p>
          <p>USDC {symbolUsdc}</p>
          <p>USDT {symbolUsdt}</p>
          <p>WBNB {symbolWBNB}</p>
        </div>
      </div>

      <div className="func-container one-x">
        <Get
          handleClick={isPausedComptroller}
          title={"Is Paused Comptroller"}
          isHex={false}
        />

        <Get
          handleClick={pauseComptroller}
          title={"Paused Comptroller"}
          isHex={false}
        />

        <Get
          handleClick={unpauseComptroller}
          title={"unPaused Comptroller"}
          isHex={false}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"Deposit Withdrawal Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateWithdrawalFees}
        />
        <Get
          handleClick={getDepositWithdrawalFees}
          title={"Get deposit withdrawal fee"}
          isHex={true}
        />
      </div>

      <div className="func-container">
        <DoubleInput
          title={"Set Deposit Commitment"}
          type1={"String"}
          type2={"number"}
          placeHolder1={"commitment"}
          placeHolder2={"days"}
          handleClick={setDepositCommitment}
        />

        <DoubleInput
          title={"Set Borrow Commitment"}
          type1={"String"}
          type2={"number"}
          placeHolder1={"commitment"}
          placeHolder2={"days"}
          handleClick={setBorrowCommitment}
        />

        <DoubleInputGet
          title={"Get Commitment"}
          type1={"number"}
          type2={"number"}
          placeHolder1={"index, eg 0,1"}
          placeHolder2={"depositOrBorrow. eg 0, 1"}
          handleClick={getCommitment}
          isHex={false}
        />
      </div>

      <div className="func-container">
        <ThreeInput
          title={"Set Savings APR"}
          type1={"String"}
          type2={"String"}
          type3={"number"}
          placeHolder1={"Market"}
          placeHolder2={"commitment"}
          placeHolder3={"saving APR"}
          handleClick={updatesavingsAPR}
        />
        <DoubleInputGet
          title={"Get Saving APR"}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getsavingsAPR}
          isHex={true}
        />
      </div>
      <div className="func-container">
        <ThreeInputGet
          title={"Get Saving APRInd"}
          type1={"string"}
          type2={"string"}
          type3={"number"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          placeHolder3={"index, eg: 0"}
          handleClick={getsavingsAPRInd}
        />
      </div>

      <div className="func-container">
        <ThreeInputGet
          title={"Get Saving APR Time"}
          type1={"string"}
          type2={"string"}
          type3={"number"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          placeHolder3={"index, eg: 0"}
          handleClick={getsavingsAprtime}
        />

        <ThreeInputGet
          title={"Get APR Time"}
          type1={"string"}
          type2={"string"}
          type3={"number"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          placeHolder3={"index, eg: 0"}
          handleClick={getAprtime}
        />

        <DoubleInputGet
          title={"Get Savings  APR Last Time"}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getsavingsAprLastTime}
          isHex={true}
        />

        <DoubleInputGet
          title={"Get Savings  APR  Time Length"}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getsavingsAprTimeLength}
          isHex={true}
        />

        <DoubleInputGet
          title={"Get   APR Last Time "}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getAprLastTime}
          isHex={true}
        />

        <DoubleInputGet
          title={"Get   APR Time Length "}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getAprTimeLength}
          isHex={true}
        />
      </div>

      <div className="func-container">
        <ThreeInput
          title={"Set APR"}
          type1={"String"}
          type2={"String"}
          type3={"number"}
          placeHolder1={"Market"}
          placeHolder2={"commitment"}
          placeHolder3={"saving APR"}
          handleClick={updateAPR}
        />
        <DoubleInputGet
          title={"Get APR"}
          type1={"string"}
          type2={"string"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          handleClick={getAPR}
          isHex={true}
        />
      </div>

      <div className="func-container">
        <ThreeInputGet
          title={"Get APRInd"}
          type1={"string"}
          type2={"string"}
          type3={"number"}
          placeHolder1={"market in bytes"}
          placeHolder2={"commitment in bytes"}
          placeHolder3={"index, eg: 0"}
          handleClick={getAPRInd}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"setTimelockValidityDeposit"}
          placeHolder={"time: eg: 86400 sec"}
          type={"number"}
          handleClick={setTimelockValidityDeposit}
        />
        <Get
          handleClick={getTimelockValidityDeposit}
          title={"Get timelock validity deposit"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Loan Issuance Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateLoanIssuanceFees}
        />
        <Get
          handleClick={loanIssuanceFees}
          title={"Get Loan Issuance Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Loan Closure  Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateLoanClosureFees}
        />

        <SingleInput
          title={"update Loan Pre Closure  Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateLoanPreClosureFees}
        />

        <Get
          handleClick={loanClosureFees}
          title={"Get Loan  Closure  Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Collateral PreClosure Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateCollateralPreclosureFees}
        />
        <Get
          handleClick={collateralPreClosureFees}
          title={"Get Collateral PreClosure Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Collateral Release Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateCollateralReleaseFees}
        />
        <Get
          handleClick={collateralReleaseFees}
          title={"Get Collateral Release Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Collateral Factor"}
          placeHolder={"collateral factor"}
          type={"number"}
          handleClick={updateCollateralFactor}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Deposit Preclosure Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateDepositPreclosureFees}
        />
        <Get
          handleClick={depositPreClosureFees}
          title={"Get Deposit Preclosure Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <DoubleInput
          title={"Update Reserves Deposit"}
          type1={"String"}
          type2={"number"}
          placeHolder1={"market"}
          placeHolder2={"amount"}
          handleClick={updateReservesDeposit}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"update Yield conversion Fee"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateYieldConversion}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"Update Market Swap Fees"}
          placeHolder={"fees"}
          type={"number"}
          handleClick={updateMarketSwapFees}
        />
        <Get
          handleClick={marketSwapFees}
          title={"Get Market Swap Fees"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <SingleInput
          title={"Update Reserve Factor"}
          placeHolder={"Reserve Factor"}
          type={"number"}
          handleClick={updateReserveFactor}
        />
        <Get
          handleClick={getReserveFactor}
          title={"Get Reserve Factor"}
          isHex={true}
        />
      </div>

      <div className="func-container bg">
        <DoubleInput
          title={"Set Max Withdrawal"}
          type1={"number"}
          type2={"number"}
          placeHolder1={"factor eg: 2800"}
          placeHolder2={`block limit eg: 1657861082`}
          handleClick={updateMaxWithdrawal}
        />
        <p>mock timestamp: 1657861082</p>
      </div>
    </div>
  )
}

export default TestComptroller
