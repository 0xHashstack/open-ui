import React, { useState, useEffect, useContext } from "react"
import MetaTags from "react-meta-tags"
// import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  Input,
  Table,
  Modal,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import classnames from "classnames"
import { Web3ModalContext } from "../contexts/Web3ModalProvider"
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider"
import {
  EventMap,
  CoinClassNames,
  MinimumAmount,
  SymbolsMap,
  DecimalsMap,
  CommitMap,
  CommitMapReverse,
} from "../blockchain/constants";
import { BNtoNum, GetErrorText, bytesToString } from "../blockchain/utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { main } from './data-analytics';

import loadable from "@loadable/component"
const PassbookTBody = loadable(() => import("./passbook-body"))
const DashboardTBody = loadable(() => import("./dashboard-body"))
import { BigNumber } from "ethers"

toast.configure({
  autoClose: 4000,
})

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeDepositsData, setActiveDepositsData] = useState([])
  const [activeLoansData, setActiveLoansData] = useState([])
  const [repaidLoansData, setRepaidLoansData] = useState([])
  const [activeLiquidationsData, setActiveLiquidationsData] = useState([])
  const [isTransactionDone, setIsTransactionDone] = useState(false)

  const [customActiveTab, setCustomActiveTab] = useState("1")
  const [customActiveTabs, setCustomActiveTabs] = useState("1")
  const [mainTab, setMainTab] = useState("1")
  const [passbookStatus, setPassbookStatus] = useState("ActiveDeposit")

  const [modal_repay_loan, setmodal_repay_loan] = useState(false)
  const [modal_withdraw_loan, setmodal_withdraw_loan] = useState(false)
  const [modal_swap_loan, setmodal_swap_loan] = useState(false)
  const [modal_swap_to_loan, setmodal_swap_to_loan] = useState(false)
  const [modal_add_collateral, setmodal_add_collateral] = useState(false)
  const [modal_withdraw_collateral, setmodal_withdraw_collateral] =
    useState(false)
  const [modal_add_active_deposit, setmodal_add_active_deposit] = useState(true)
  const [modal_withdraw_active_deposit, setmodal_withdraw_active_deposit] =
    useState(false)

  const [loanOption, setLoanOption] = useState()
  const [swapOption, setSwapOption] = useState()
  const [loanCommitement, setLoanCommitement] = useState()

  const [collateralOption, setCollateralOption] = useState()
  const [depositInterestChange, setDepositInterestChange] = useState("NONE")
  const [borrowInterestChange, setBorrowInterestChange] = useState("NONE")

  const [depositRequestSel, setDepositRequestSel] = useState()
  const [withdrawDepositSel, setWithdrawDepositSel] = useState()
  const [depositRequestVal, setDepositRequestVal] = useState()
  const [withdrawDepositVal, setWithdrawDepositVal] = useState()

  const [repayLoanTooltipOpen, setRepayLoanTooltipOpen] = useState(false)
  const [swapLoanTooltipOpen, setSwapLoanTooltipOpen] = useState(false)
  const [swapToLoanTooltipOpen, setSwapToLoanTooltipOpen] = useState(false)
  const [addCollateralTooltipOpen, setAddCollateralTooltipOpen] =
    useState(false)
  const [withdrawCollateralTooltipOpen, setWithdrawCollateralTooltipOpen] =
    useState(false)

  const [inputVal1, setInputVal1] = useState(0)
  const [liquidationIndex, setLiquidationIndex] = useState(0)

  const { connect, disconnect, account, chainId } = useContext(Web3ModalContext)
  const [index, setIndex] = useState("1")

  const [uf, setUf] = useState(null)
  const [tvl, setTvl] = useState(null)
  const [totalUsers, setTotalUsers] = useState(null)
  const [dominantMarket, setDominantMarket] = useState("")

  function toggle(newIndex: string) {
    if (newIndex === index) {
      setIndex("1")
    } else {
      setIndex(newIndex)
    }
  }

  var utilizationFactor
  main("totalBorrowedUsd").then(res1 => {
    if (res1) {
      main("totalDepositUsd").then(res2 => {
        //@ts-ignore
        utilizationFactor = res1 / res2
        const uf = utilizationFactor.toFixed(2)
        setUf(uf)
      })
    }
  })

  main("totalValueLocked").then(res => {
    typeof res
    if (typeof res === "number") {
      //@ts-ignore
      setTvl(res?.toFixed(2))
    }
  })

  main("totalUsers").then(res => {
    setTotalUsers(res)
  })

  main("dominantMarket").then(res => {
    setDominantMarket(res[0])
  })

  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
    !isTransactionDone &&
      account &&
      wrapper
        ?.getLoanInstance()
        .getLoans(account)
        .then(
          loans => {
            onLoansData(loans)
            setIsLoading(false)
          },
          err => {
            setIsLoading(false)
            setActiveLoansData([])
            console.log(err)
          }
        )
  }, [
    account,
    passbookStatus,
    customActiveTab,
    isTransactionDone,
    activeLiquidationsData,
  ])

  useEffect(() => {
    !isTransactionDone &&
      account &&
      wrapper
        ?.getDepositInstance()
        .getDeposits(account)
        .then(
          deposits => {
            onDepositData(deposits)
            setIsLoading(false)
          },
          err => {
            setIsLoading(false)
            setActiveDepositsData([])
            console.log(err)
          }
        )
  }, [account, passbookStatus, customActiveTab, isTransactionDone])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
    if (customActiveTab == "3") {
      navigateLoansToLiquidate(liquidationIndex)
    }
  }, [
    account,
    passbookStatus,
    customActiveTab,
    isTransactionDone,
    liquidationIndex,
    activeLiquidationsData,
  ])

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab)
    }
  }

  const toggleCustoms = tab => {
    if (customActiveTabs !== tab) {
      setCustomActiveTabs(tab)
    }
  }

  function removeBodyCss() {
    setInputVal1(0)
    document.body.classList.add("no_padding")
  }

  function tog_repay_loan() {
    setmodal_repay_loan(!modal_repay_loan)
    removeBodyCss()
  }
  function tog_withdraw_loan() {
    setmodal_withdraw_loan(!modal_withdraw_loan)
    removeBodyCss()
  }
  function tog_swap_loan() {
    setmodal_swap_loan(!modal_swap_loan)
    removeBodyCss()
  }
  function tog_swap_to_loan() {
    setmodal_swap_to_loan(!modal_swap_to_loan)
    removeBodyCss()
  }
  function tog_add_collateral() {
    setmodal_add_collateral(!modal_add_collateral)
    removeBodyCss()
  }
  function tog_withdraw_collateral() {
    setmodal_withdraw_collateral(!modal_withdraw_collateral)
    removeBodyCss()
  }
  function tog_add_active_deposit() {
    setmodal_add_active_deposit(!modal_add_active_deposit)
    setmodal_withdraw_active_deposit(false)
    removeBodyCss()
  }
  function tog_withdraw_active_deposit() {
    setmodal_withdraw_active_deposit(!modal_withdraw_active_deposit)
    setmodal_add_active_deposit(false)
    removeBodyCss()
  }

  const handleLoanOptionChange = e => {
    setLoanOption(e.target.value)
  }

  const handleLoanCommitementChange = e => {
    setLoanCommitement(e.target.value)
  }

  const handleSwapOptionChange = e => {
    setSwapOption(e.target.value)
  }

  const handleCollateralOptionChange = e => {
    setCollateralOption(e.target.value)
  }

  const handleDepositInterestChange = e => {
    setDepositInterestChange(e.target.value)
  }

  const handleBorrowInterestChange = e => {
    setBorrowInterestChange(e.target.value)
  }

  const handleDepositRequestSelect = e => {
    setDepositRequestSel(e.target.value)
  }
  const handleWithdrawDepositSelect = e => {
    setWithdrawDepositSel(e.target.value)
  }

  const handleDepositRequestTime = e => {
    setDepositRequestVal(e.target.value)
  }
  const handleWithdrawDepositTime = e => {
    setWithdrawDepositVal(e.target.value)
  }

  const onDepositData = async depositsData => {
    const deposits = []
    for (let i = 0; i < depositsData.amount.length; i++) {
      let interest = await wrapper
        ?.getDepositInstance()
        .getDepositInterest(account, i + 1)
      deposits.push({
        amount: depositsData.amount[i].toString(),
        account,
        commitment: CommitMapReverse[depositsData.commitment[i]],
        market: bytesToString(depositsData.market[i]),
        acquiredYield: Number(interest),  // deposit interest
        // interest market is same as deposit market
        //call getsavingsapr
        // balance add amount and interest directly for deposit
      })
    }
    setActiveDepositsData(deposits)
  }

  const onLoansData = async loansData => {
    console.log("Data: ", loansData)
    const loans = []
    for(let index = 0; index < loansData.loanAmount.length; index++) {
      let debtCategory, cdr, interest
      if (loansData.state[index] == 0)
        interest = await wrapper
          ?.getLoanInstance()
          .getLoanInterest(account, index + 1)
      try {
        cdr = BigNumber.from(loansData.collateralAmount[index])
          .div(BigNumber.from(loansData.loanAmount[index]))
          .toNumber()
        if (cdr >= 1) {
          debtCategory = 1
        } else if (cdr >= 0.5 && cdr < 1) {
          debtCategory = 2
        } else if (cdr >= 0.333 && cdr < 0.5) {
          debtCategory = 3
        }
      } catch { }
      //here all data of loans
      loans.push({
        loanMarket: bytesToString(loansData.loanMarket[index]), // 1 Loan Market
        loanAmount: Number(loansData.loanAmount[index]), // 2 Amount
        commitment: CommitMapReverse[loansData.loanCommitment[index]], // 3  Commitment
        collateralMarket: bytesToString(loansData.collateralMarket[index]), // 4 Collateral Market
        collateralAmount: Number(loansData.collateralAmount[index]), // 5 Collateral Amount
        loanInterest: Number(interest), //loan interest
        //interest market will always be same as loan market
        account,
        cdr,
        debtCategory,
        loanId: index + 1,
        isSwapped: loansData.isSwapped[index], // Swap status
        state: loansData.state[index], // Repay status
        currentLoanMarket: bytesToString(loansData.loanCurrentMarket[index]), // Borrow market(current)
        currentLoanAmount: Number(loansData.loanCurrentAmount[index]), // Borrow amount(current)
        //get apr is for loans apr
      })
    }
    // Borrow interest -- #Todo ( To be added after intrest issue resolved )
    setActiveLoansData(
      loans.filter(asset => {
        return asset.state === 0
      })
    )
    setRepaidLoansData(
      loans.filter(asset => {
        return asset.state === 1
      })
    )
  }

  const onLiquidationsData = async liquidationsData => {
    const liquidations = []
    for (let i = 0; i < liquidationsData.loanAmount.length; i++) {
      if (bytesToString(liquidationsData.loanMarket[i]) != "") {
        liquidations.push({
          loanOwner: liquidationsData.loanOwner[i].toString(),
          loanMarket: bytesToString(liquidationsData.loanMarket[i]),
          commitment: CommitMapReverse[liquidationsData.loanCommitment[i]],
          loanAmount: liquidationsData.loanAmount[i].toString(),
          collateralMarket: bytesToString(liquidationsData.collateralMarket[i]),
          collateralAmount: liquidationsData.collateralAmount[i].toString(),
          isLiquidationDone: false,
        })
      }
    }
    setActiveLiquidationsData(liquidations)
  }

  const navigateLoansToLiquidate = async liquidationIndex => {
    !isTransactionDone &&
      account &&
      wrapper
        ?.getLiquidatorInstance()
        .liquidableLoans(liquidationIndex)
        .then(
          loans => {
            onLiquidationsData(loans)
            setIsLoading(false)
          },
          err => {
            setIsLoading(false)
            setActiveLiquidationsData([])
            console.log(err)
          }
        )
  }

  const increaseLiquidationIndex = async () => {
    setLiquidationIndex(liquidationIndex + 10)
  }

  const handleRepay = async () => {
    try {
      setIsTransactionDone(true)
      const _loanOption: string | undefined = loanOption
      const market = SymbolsMap[_loanOption]
      const decimal = DecimalsMap[_loanOption]
      const _commit: string | undefined = loanCommitement
      const commit = activeLoansData.filter(asset => {
        return (
          EventMap[asset.loanMarket.toUpperCase()] === _loanOption &&
          asset.commitment.toUpperCase() === _commit
        )
      })
      const approveTransactionHash = await wrapper
        ?.getMockBep20Instance()
        .approve(market, inputVal1, decimal)
      await approveTransactionHash.wait()
      console.log("Approve Transaction sent: ", approveTransactionHash)
      const tx1 = await wrapper
        ?.getLoanInstance()
        .repayLoan(market, CommitMap[_commit], inputVal1, decimal)

      const tx = await tx1.wait()
      SuccessCallback(
        tx.events,
        "LoanRepaid",
        "Loan Repaid Successfully",
        inputVal1
      )
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleWithdrawLoan = async () => {
    try {
      setIsTransactionDone(true)
      const commit = activeLoansData.filter(asset => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption
      })
      const _loanOption: string | undefined = loanOption
      const _commit: string | undefined = loanCommitement

      const tx1 = await wrapper
        ?.getLoanInstance()
        .permissibleWithdrawal(
          SymbolsMap[_loanOption],
          CommitMap[_commit],
          inputVal1,
          DecimalsMap[_loanOption]
        )
      const tx = await tx1.wait()
      SuccessCallback(
        tx.events,
        "WithdrawPartialLoan",
        "Loan Withdraw Successfully",
        inputVal1
      )
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleCollateral = async () => {
    try {
      setIsTransactionDone(true)
      const _loanOption: string | undefined = loanOption
      const _collateralOption: string | undefined = collateralOption
      const _commit: string | undefined = loanCommitement
      const approveTransactionHash = await wrapper
        ?.getMockBep20Instance()
        .approve(
          SymbolsMap[_collateralOption],
          inputVal1,
          DecimalsMap[_collateralOption]
        )
      await approveTransactionHash.wait()
      console.log("Approve Transaction sent: ", approveTransactionHash)

      const tx1 = await wrapper
        ?.getLoanInstance()
        .addCollateral(
          SymbolsMap[_loanOption],
          CommitMap[_commit],
          inputVal1,
          DecimalsMap[_collateralOption]
        )
      const tx = await tx1.wait()
      SuccessCallback(
        tx.events,
        "AddCollateral",
        "Collateral amount added",
        inputVal1
      )
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleWithdrawCollateral = async () => {
    try {
      setIsTransactionDone(true)
      const commit = activeLoansData.filter(asset => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption
      })
      const _loanOption: string | undefined = loanOption
      const _commit: string | undefined = loanCommitement
      const tx1 = await wrapper
        ?.getLoanInstance()
        .withdrawCollateral(SymbolsMap[_loanOption], CommitMap[_commit])
      const tx = await tx1.wait()
      SuccessCallback(
        tx.events,
        "WithdrawCollateral",
        "Collateral amount released",
        inputVal1
      )
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleLiquidation = async asset => {
    try {
      setIsTransactionDone(true)
      asset.isLiquidationDone = true
      let _account = asset.loanOwner
      let market = asset.loanMarket
      let commitment = asset.commitment
      let loanAmount = BNtoNum(Number(asset.loanAmount))
      let decimal = DecimalsMap[market]
      const approveTransactionHash = await wrapper
        ?.getMockBep20Instance()
        .approve(SymbolsMap[market], loanAmount, decimal)
      await approveTransactionHash.wait()
      console.log("Approve Transaction sent: ", approveTransactionHash)

      const tx1 = await wrapper
        ?.getLiquidatorInstance()
        .liquidation(_account, SymbolsMap[market], CommitMap[commitment])
      const tx = await tx1.wait()
      SuccessCallback(tx.events, "Liquidation", "Loan Liquidated", inputVal1)
    } catch (err) {
      asset.isLiquidationDone = false
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleSwap = async () => {
    try {
      setIsTransactionDone(true)
      const commit = activeLoansData.filter(asset => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption
      })
      const _loanOption: string | undefined = loanOption
      const _swapOption: string | undefined = swapOption
      const _commit: string | undefined = loanCommitement
      const tx1 = await wrapper
        ?.getLoanInstance()
        .swapLoan(
          SymbolsMap[_loanOption],
          CommitMap[_commit],
          SymbolsMap[_swapOption]
        )
      const tx = await tx1.wait()
      SuccessCallback(tx.events, "MarketSwapped", "Swap Loan successful", "")
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleSwapToLoan = async () => {
    try {
      setIsTransactionDone(true)
      const commit = activeLoansData.filter(asset => {
        return (
          EventMap[asset.loanMarket.toUpperCase()] === loanOption &&
          EventMap[asset.commitment.toUpperCase()] === loanCommitement
        )
      })
      const _loanOption: string | undefined = loanOption
      const _commit: string | undefined = loanCommitement

      const tx1 = await wrapper
        ?.getLoanInstance()
        .swapToLoan(SymbolsMap[_loanOption], CommitMap[_commit])
      const tx = await tx1.wait()
      SuccessCallback(tx.events, "MarketSwapped", "Swap to Loan successful", "")
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleDepositRequest = async () => {
    try {
      setIsTransactionDone(true)
      const _depositRequestSel: string | undefined = depositRequestSel
      const _depositRequestVal: string | undefined = depositRequestVal
      const approveTransactionHash = await wrapper
        ?.getMockBep20Instance()
        .approve(
          SymbolsMap[_depositRequestSel],
          inputVal1,
          DecimalsMap[_depositRequestSel]
        )
      await approveTransactionHash.wait()
      console.log("Approve Transaction sent: ", approveTransactionHash)

      const tx1 = await wrapper
        ?.getDepositInstance()
        .depositRequest(
          SymbolsMap[_depositRequestSel.toUpperCase()],
          CommitMap[_depositRequestVal],
          inputVal1,
          DecimalsMap[_depositRequestSel.toUpperCase()]
        )
      const tx = await tx1.wait()
      SuccessCallback(tx.events, "DepositAdded", "Deposited amount", inputVal1)
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleWithdrawDeposit = async () => {
    try {
      setIsTransactionDone(true)
      const _withdrawDepositSel: string | undefined = withdrawDepositSel
      const _withdrawDepositVal: string | undefined = withdrawDepositVal
      const tx1 = await wrapper
        ?.getDepositInstance()
        .withdrawDeposit(
          SymbolsMap[_withdrawDepositSel.toUpperCase()],
          CommitMap[_withdrawDepositVal],
          inputVal1,
          DecimalsMap[_withdrawDepositSel.toUpperCase()]
        )
      const tx = await tx1.wait()
      if (tx.events.length == 0) {
        // for first withdrawal we can't throw from contract, hence need handling here
        throw "ERROR: Active timelock"
      }
      SuccessCallback(
        tx.events,
        "DepositWithdrawal",
        "Deposit Withdrawn",
        inputVal1
      )
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const handleLoanLiquidation = async () => {
    try {
      setIsTransactionDone(true)
      const account = ""
      const market = ""
      const commitment = ""
      const tx1 = await wrapper
        ?.getLiquidatorInstance()
        .liquidation(account, market, commitment)
      const tx = await tx1.wait()
      SuccessCallback(tx.events, "", "", "")
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
      })
    }
  }

  const SuccessCallback = (data, eventName, msg, userInput) => {
    let _amount
    data.forEach(e => {
      if (e.event == eventName) {
        _amount = e.args.amount.toBigInt()
      }
    })
    let amount = BNtoNum(_amount)
    toast.success(`${msg}: ${amount === "NaN" ? userInput : amount}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      closeOnClick: true,
    })
    setIsTransactionDone(false)
  }

  const passbookActive = e => {
    setPassbookStatus(e.target.value)
  }

  const getPassbookActionScreen = passbookStatus => {
    switch (passbookStatus) {
      case "ActiveLoan":
        return (
          <CardBody>
            <form>
              <div className="mb-4 ">
                <Label>Loan Actions</Label>
                <Row>
                  <Col sm="6">
                    <div className="mb-3">
                      <label className="card-radio-label mb-2">
                        <Button
                          className="btn-block btn-sm"
                          color="light"
                          id="RepayLoanButton"
                          outline
                          onClick={() => {
                            tog_repay_loan()
                          }}
                        >
                          Repay Loan
                          {/* <Tooltip placement="top" target="RepayLoanButton" autohide={true} isOpen={repayLoanTooltipOpen} toggle={() => {setRepayLoanTooltipOpen(!repayLoanTooltipOpen)}}>
                        This features will be activated this friday.
                      </Tooltip> */}
                        </Button>
                        <Modal
                          isOpen={modal_repay_loan}
                          toggle={() => {
                            tog_repay_loan()
                          }}
                          centered
                        >
                          <div className="modal-body">
                            <Form>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleLoanOptionChange}
                                  >
                                    <option hidden>Loan Market</option>
                                    {[
                                      ...new Map(
                                        activeLoansData.map((item: any) => [
                                          item["loanMarket"],
                                          item,
                                        ])
                                      ).values(),
                                    ].map((asset, key) => {
                                      return (
                                        <option
                                          key={key}
                                          value={
                                            EventMap[
                                            asset.loanMarket.toUpperCase()
                                            ]
                                          }
                                        >
                                          {
                                            EventMap[
                                            asset.loanMarket.toUpperCase()
                                            ]
                                          }
                                        </option>
                                      )
                                    })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleLoanCommitementChange}
                                  >
                                    <option hidden>
                                      Minimum Commitment Period
                                    </option>
                                    {activeLoansData
                                      .filter(asset => {
                                        return (
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ] === loanOption
                                        )
                                      })
                                      .map(item => item["commitment"])
                                      .filter(
                                        (value, index, self) =>
                                          self.indexOf(value) === index
                                      )
                                      .map((asset, key) => {
                                        return (
                                          <option key={key} value={asset}>
                                            {EventMap[asset]}
                                          </option>
                                        )
                                      })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="horizontal-password-Input"
                                    placeholder="Amount"
                                    onChange={event => {
                                      setInputVal1(Number(event.target.value))
                                    }}
                                  />
                                </Col>
                              </div>

                              <div className="d-grid gap-2">
                                <Button
                                  color="primary"
                                  className="w-md"
                                  disabled={isTransactionDone}
                                  onClick={handleRepay}
                                >
                                  {!isTransactionDone ? (
                                    "Repay"
                                  ) : (
                                    <Spinner>Loading...</Spinner>
                                  )}
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </Modal>
                      </label>
                    </div>
                  </Col>

                  <Col sm="6">
                    <div className="mb-3">
                      <Label className="card-radio-label mb-2">
                        <Button
                          className="btn-block btn-sm"
                          color="light"
                          outline
                          onClick={() => {
                            tog_withdraw_loan()
                          }}
                        >
                          Withdraw Loan
                        </Button>
                        <Modal
                          isOpen={modal_withdraw_loan}
                          toggle={() => {
                            tog_withdraw_loan()
                          }}
                          centered
                        >
                          <div className="modal-body">
                            <Form>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleLoanOptionChange}
                                  >
                                    <option hidden>Loan market</option>
                                    {[
                                      ...new Map(
                                        activeLoansData.map((item: any) => [
                                          item["loanMarket"],
                                          item,
                                        ])
                                      ).values(),
                                    ].map((asset, key) => {
                                      return (
                                        <option
                                          key={key}
                                          value={
                                            EventMap[
                                            asset.loanMarket.toUpperCase()
                                            ]
                                          }
                                        >
                                          {
                                            EventMap[
                                            asset.loanMarket.toUpperCase()
                                            ]
                                          }
                                        </option>
                                      )
                                    })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleLoanCommitementChange}
                                  >
                                    <option hidden>
                                      Minimum Commitment Period
                                    </option>
                                    {activeLoansData
                                      .filter(asset => {
                                        return (
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ] === loanOption
                                        )
                                      })
                                      .map(item => item["commitment"])
                                      .filter(
                                        (value, index, self) =>
                                          self.indexOf(value) === index
                                      )
                                      .map((asset, key) => {
                                        return (
                                          <option key={key} value={asset}>
                                            {EventMap[asset]}
                                          </option>
                                        )
                                      })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="horizontal-password-Input"
                                    placeholder="Amount"
                                    onChange={event => {
                                      setInputVal1(Number(event.target.value))
                                    }}
                                  />
                                </Col>
                              </div>

                              <div className="d-grid gap-2">
                                <Button
                                  color="primary"
                                  className="w-md"
                                  disabled={
                                    isTransactionDone || inputVal1 === 0
                                  }
                                  onClick={handleWithdrawLoan}
                                >
                                  {!isTransactionDone ? (
                                    "Withdraw Loan"
                                  ) : (
                                    <Spinner>Loading...</Spinner>
                                  )}
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </Modal>
                      </Label>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* --------------------------- Swap -------------------------- */}

              <div className="mb-4">
                <Label>Swap</Label>
                <Row>
                  <Col sm="6">
                    <Label className="card-radio-label mb-3">
                      <Button
                        className="btn-block btn-sm"
                        color="light"
                        outline
                        id="SwapLoanButton"
                        onClick={() => {
                          tog_swap_loan()
                        }}
                      >
                        Swap Loan
                        {/* <Tooltip placement="top" target="SwapLoanButton" autohide={true} isOpen={swapLoanTooltipOpen} toggle={() => {setSwapLoanTooltipOpen(!swapLoanTooltipOpen)}}>
                        This features will be activated On 28th Feb.
                      </Tooltip> */}
                      </Button>
                      <Modal
                        isOpen={modal_swap_loan}
                        toggle={() => {
                          tog_swap_loan()
                        }}
                        centered
                      >
                        <div className="modal-body">
                          <Form>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanOptionChange}
                                >
                                  <option hidden>Loan Market</option>
                                  {[
                                    ...new Map(
                                      activeLoansData
                                        .filter(asset => {
                                          return !asset.isSwapped
                                        })
                                        .map((item: any) => [
                                          item["loanMarket"],
                                          item,
                                        ])
                                    ).values(),
                                  ].map((asset, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      >
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </option>
                                    )
                                  })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanCommitementChange}
                                >
                                  <option hidden>
                                    Minimum Commitment Period
                                  </option>
                                  {activeLoansData
                                    .filter(asset => {
                                      return (
                                        EventMap[
                                        asset.loanMarket.toUpperCase()
                                        ] === loanOption && !asset.isSwapped
                                      )
                                    })
                                    .map(item => item["commitment"])
                                    .filter(
                                      (value, index, self) =>
                                        self.indexOf(value) === index
                                    )
                                    .map((asset, key) => {
                                      return (
                                        <option key={key} value={asset}>
                                          {EventMap[asset]}
                                        </option>
                                      )
                                    })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleSwapOptionChange}
                                >
                                  <option hidden>Swap Market</option>
                                  <option value={"SXP"}>SXP</option>
                                  <option value={"CAKE"}>CAKE</option>
                                </select>
                              </Col>
                            </div>

                            <div className="d-grid gap-2">
                              <Button
                                color="primary"
                                className="w-md"
                                disabled={isTransactionDone}
                                onClick={handleSwap}
                              >
                                {!isTransactionDone ? (
                                  "Swap Loan"
                                ) : (
                                  <Spinner>Loading...</Spinner>
                                )}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </Modal>
                    </Label>
                  </Col>

                  <Col sm="6">
                    <Label className="card-radio-label mb-3">
                      <Button
                        className="btn-block btn-sm"
                        color="light"
                        id="SwapToLoanButton"
                        outline
                        onClick={() => {
                          tog_swap_to_loan()
                        }}
                      >
                        Swap to Loan
                        {/* <Tooltip placement="top" target="SwapToLoanButton" autohide={true} isOpen={swapToLoanTooltipOpen} toggle={() => {setSwapToLoanTooltipOpen(!swapToLoanTooltipOpen)}}>
                        This features will be activated On 28th Feb.
                      </Tooltip> */}
                      </Button>
                      <Modal
                        isOpen={modal_swap_to_loan}
                        toggle={() => {
                          tog_swap_to_loan()
                        }}
                        centered
                      >
                        <div className="modal-body">
                          <Form>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanOptionChange}
                                >
                                  <option hidden>Select Loan</option>
                                  {[
                                    ...new Map(
                                      activeLoansData
                                        .filter((asset: any) => asset.isSwapped)
                                        .map((item: any) => [
                                          item["loanMarket"],
                                          item,
                                        ])
                                    ).values(),
                                  ].map((asset, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      >
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </option>
                                    )
                                  })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanCommitementChange}
                                >
                                  <option hidden>
                                    Minimum Commitment Period
                                  </option>
                                  {activeLoansData
                                    .filter(asset => {
                                      return (
                                        EventMap[
                                        asset.loanMarket.toUpperCase()
                                        ] === loanOption && asset.isSwapped
                                      )
                                    })
                                    .map(item => item["commitment"])
                                    .filter(
                                      (value, index, self) =>
                                        self.indexOf(value) === index
                                    )
                                    .map((asset, key) => {
                                      return (
                                        <option key={key} value={asset}>
                                          {EventMap[asset]}
                                        </option>
                                      )
                                    })}
                                </select>
                              </Col>
                            </div>

                            <div className="d-grid gap-2">
                              <Button
                                color="primary"
                                className="w-md"
                                disabled={isTransactionDone}
                                onClick={handleSwapToLoan}
                              >
                                {!isTransactionDone ? (
                                  "Swap to Loan"
                                ) : (
                                  <Spinner>Loading...</Spinner>
                                )}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </Modal>
                    </Label>
                  </Col>
                </Row>
              </div>

              {/* ------------------- Collateral actions ------------------- */}

              <div className="mb-4">
                <Label>Collateral Actions</Label>
                <Row>
                  <Col sm="6">
                    <Label className="card-radio-label mb-3">
                      <Button
                        className="btn-block  btn-sm"
                        color="light"
                        id="AddCollateralButton"
                        outline
                        onClick={() => {
                          tog_add_collateral()
                        }}
                      >
                        Add Collateral
                      </Button>
                      {/* <Tooltip placement="top" target="AddCollateralButton" autohide={true} isOpen={addCollateralTooltipOpen} toggle={() => {setAddCollateralTooltipOpen(!addCollateralTooltipOpen)}}>
                        This features will be activated On 28th Feb.
                    </Tooltip> */}
                      <Modal
                        isOpen={modal_add_collateral}
                        toggle={() => {
                          tog_add_collateral()
                        }}
                        centered
                      >
                        <div className="modal-body">
                          <Form>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanOptionChange}
                                >
                                  <option hidden>Loan Market</option>
                                  {[
                                    ...new Map(
                                      activeLoansData.map((item: any) => [
                                        item["loanMarket"],
                                        item,
                                      ])
                                    ).values(),
                                  ].map((asset, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      >
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </option>
                                    )
                                  })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanCommitementChange}
                                >
                                  <option hidden>
                                    Minimum Commitment Period
                                  </option>
                                  {activeLoansData
                                    .filter(asset => {
                                      return (
                                        EventMap[
                                        asset.loanMarket.toUpperCase()
                                        ] === loanOption
                                      )
                                    })
                                    .map(item => item["commitment"])
                                    .filter(
                                      (value, index, self) =>
                                        self.indexOf(value) === index
                                    )
                                    .map((asset, key) => {
                                      return (
                                        <option key={key} value={asset}>
                                          {EventMap[asset]}
                                        </option>
                                      )
                                    })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleCollateralOptionChange}
                                >
                                  <option hidden>Collateral Market</option>
                                  {[
                                    ...new Map(
                                      activeLoansData.map((item: any) => [
                                        item["collateralMarket"],
                                        item,
                                      ])
                                    ).values(),
                                  ].map((asset, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      >
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </option>
                                    )
                                  })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="horizontal-password-Input"
                                  placeholder="Amount"
                                  onChange={event => {
                                    setInputVal1(Number(event.target.value))
                                  }}
                                />
                              </Col>
                            </div>

                            <div className="d-grid gap-2">
                              <Button
                                color="primary"
                                className="w-md"
                                disabled={isTransactionDone || inputVal1 === 0}
                                onClick={handleCollateral}
                              >
                                {!isTransactionDone ? (
                                  "Add Collateral"
                                ) : (
                                  <Spinner>Loading...</Spinner>
                                )}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </Modal>
                    </Label>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        )
        break

      case "ActiveDeposit":
        return (
          /* -------------------------------------- Active Deposit ----------------------------- */
          <CardBody>
            <form>
              <Label>Deposit Actions</Label>
              <div className="mb-4 ">
                <Row>
                  <Col sm="6">
                    <div className="mb-3">
                      <label className="card-radio-label mb-2">
                        <Button
                          className="btn-block btn-sm"
                          color="light"
                          outline
                          onClick={() => {
                            tog_add_active_deposit()
                          }}
                        >
                          Add to Deposit
                        </Button>
                        <Modal
                          isOpen={modal_add_active_deposit}
                          toggle={() => {
                            tog_add_active_deposit()
                          }}
                          centered
                        >
                          <div className="modal-body">
                            <Form>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleDepositRequestSelect}
                                  >
                                    <option hidden>Select Market</option>
                                    {[
                                      ...new Map(
                                        activeDepositsData.map((item: any) => [
                                          item["market"],
                                          item,
                                        ])
                                      ).values(),
                                    ].map((asset, key) => {
                                      return (
                                        <option
                                          key={key}
                                          value={
                                            EventMap[asset.market.toUpperCase()]
                                          }
                                        >
                                          {EventMap[asset.market.toUpperCase()]}
                                        </option>
                                      )
                                    })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleDepositRequestTime}
                                  >
                                    <option hidden>
                                      Minimum Commitment Period
                                    </option>
                                    {activeDepositsData
                                      .filter(asset => {
                                        return (
                                          EventMap[
                                          asset.market.toUpperCase()
                                          ] === depositRequestSel
                                        )
                                      })
                                      .map(item => item["commitment"])
                                      .filter(
                                        (value, index, self) =>
                                          self.indexOf(value) === index
                                      )
                                      .map((asset, key) => {
                                        return (
                                          <option key={key} value={asset}>
                                            {EventMap[asset]}
                                          </option>
                                        )
                                      })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="horizontal-password-Input"
                                    placeholder={
                                      depositRequestSel
                                        ? `Minimum amount =  ${MinimumAmount[depositRequestSel]}`
                                        : "Amount"
                                    }
                                    onChange={event => {
                                      setInputVal1(Number(event.target.value))
                                    }}
                                  />
                                </Col>
                              </div>

                              <div className="d-grid gap-2">
                                <Button
                                  color="primary"
                                  className="w-md"
                                  disabled={
                                    isTransactionDone || inputVal1 === 0
                                  }
                                  onClick={handleDepositRequest}
                                >
                                  {!isTransactionDone ? (
                                    "Add to Deposit"
                                  ) : (
                                    <Spinner>Loading...</Spinner>
                                  )}
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </Modal>
                      </label>
                    </div>
                  </Col>

                  <Col sm="6">
                    <div className="mb-3">
                      <Label className="card-radio-label mb-2">
                        <Button
                          className="btn-block btn-sm"
                          color="light"
                          outline
                          onClick={() => {
                            tog_withdraw_active_deposit()
                          }}
                        >
                          Withdraw Deposit
                        </Button>
                        <Modal
                          isOpen={modal_withdraw_active_deposit}
                          toggle={() => {
                            tog_withdraw_active_deposit()
                          }}
                          centered
                        >
                          <div className="modal-body">
                            <Form>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleWithdrawDepositSelect}
                                  >
                                    <option hidden>Select Market</option>
                                    {[
                                      ...new Map(
                                        activeDepositsData.map((item: any) => [
                                          item["market"],
                                          item,
                                        ])
                                      ).values(),
                                    ].map((asset, key) => {
                                      return (
                                        <option
                                          key={key}
                                          value={
                                            EventMap[asset.market.toUpperCase()]
                                          }
                                        >
                                          {EventMap[asset.market.toUpperCase()]}
                                        </option>
                                      )
                                    })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <select
                                    className="form-select"
                                    onChange={handleWithdrawDepositTime}
                                  >
                                    <option hidden>
                                      Minimum Commitment Period
                                    </option>
                                    {activeDepositsData
                                      .filter(asset => {
                                        return (
                                          EventMap[
                                          asset.market.toUpperCase()
                                          ] === withdrawDepositSel
                                        )
                                      })
                                      .map(item => item["commitment"])
                                      .filter(
                                        (value, index, self) =>
                                          self.indexOf(value) === index
                                      )
                                      .map((asset, key) => {
                                        return (
                                          <option key={key} value={asset}>
                                            {EventMap[asset]}
                                          </option>
                                        )
                                      })}
                                  </select>
                                </Col>
                              </div>
                              <div className="row mb-4">
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="horizontal-password-Input"
                                    placeholder="Amount"
                                    onChange={event => {
                                      setInputVal1(Number(event.target.value))
                                    }}
                                  />
                                </Col>
                              </div>

                              <div className="d-grid gap-2">
                                <Button
                                  color="primary"
                                  className="w-md"
                                  disabled={
                                    isTransactionDone || inputVal1 === 0
                                  }
                                  onClick={handleWithdrawDeposit}
                                >
                                  {!isTransactionDone ? (
                                    "Withdraw Deposit"
                                  ) : (
                                    <Spinner>Loading...</Spinner>
                                  )}
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </Modal>
                      </Label>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        )
        break

      case "RepaidLoan":
        return (
          <CardBody>
            <form>
              {/* ------------------- Collateral actions ------------------- */}

              <div className="mb-4">
                <Label>Collateral Actions</Label>
                <Row>
                  <Col sm="6">
                    <Label className="card-radio-label mb-3">
                      <Button
                        className="btn-block btn-sm"
                        color="light"
                        id="WithdrawCollateralButton"
                        outline
                        onClick={() => {
                          tog_withdraw_collateral()
                        }}
                      >
                        Withdraw Collateral
                      </Button>
                      {/* <Tooltip placement="top" target="WithdrawCollateralButton" autohide={true} isOpen={withdrawCollateralTooltipOpen} toggle={() => {setWithdrawCollateralTooltipOpen(!withdrawCollateralTooltipOpen)}}>
                        This features will be activated On 28th Feb.
                    </Tooltip> */}
                      <Modal
                        isOpen={modal_withdraw_collateral}
                        toggle={() => {
                          tog_withdraw_collateral()
                        }}
                        centered
                      >
                        <div className="modal-body">
                          <Form>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanOptionChange}
                                >
                                  <option hidden>Loan Market</option>
                                  {[
                                    ...new Map(
                                      repaidLoansData.map((item: any) => [
                                        item["loanMarket"],
                                        item,
                                      ])
                                    ).values(),
                                  ].map((asset, key) => {
                                    return (
                                      <option
                                        key={key}
                                        value={
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      >
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </option>
                                    )
                                  })}
                                </select>
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Col sm={12}>
                                <select
                                  className="form-select"
                                  onChange={handleLoanCommitementChange}
                                >
                                  <option hidden>
                                    Minimum Commitment Period
                                  </option>
                                  {repaidLoansData
                                    .filter(asset => {
                                      return (
                                        EventMap[
                                        asset.loanMarket.toUpperCase()
                                        ] === loanOption
                                      )
                                    })
                                    .map(item => item["commitment"])
                                    .filter(
                                      (value, index, self) =>
                                        self.indexOf(value) === index
                                    )
                                    .map((asset, key) => {
                                      return (
                                        <option key={key} value={asset}>
                                          {EventMap[asset]}
                                        </option>
                                      )
                                    })}
                                </select>
                              </Col>
                            </div>
                            <div className="d-grid gap-2">
                              <Button
                                color="primary"
                                className="w-md"
                                disabled={isTransactionDone}
                                onClick={handleWithdrawCollateral}
                              >
                                {!isTransactionDone ? (
                                  "Withdraw Collateral"
                                ) : (
                                  <Spinner>Loading...</Spinner>
                                )}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </Modal>
                    </Label>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        )
        break
      default:
        return null
    }
  }

  const getPassbookTable = passbookStatus => {
    switch (passbookStatus) {
      case "ActiveDeposit":
        return (
          // Active Deposits
          <div className="table-responsive">
            <Table className="table table-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Deposit Market</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Amount</th>
                  {/* <th scope="col" colSpan={2}>Interest Earned</th> */}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(activeDepositsData) &&
                  activeDepositsData.length > 0 ? (
                  activeDepositsData.map((asset, key) => (
                    <tr key={key}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="avatar-xs me-3">
                            <img
                              src={
                                CoinClassNames[
                                  EventMap[asset.market.toUpperCase()]
                                ] || asset.market.toUpperCase()
                              }
                            />
                          </div>
                          <span>{EventMap[asset.market.toUpperCase()]}</span>
                        </div>
                      </th>
                      <td>
                        <div className="text-muted">
                          {EventMap[asset.commitment]}
                        </div>
                      </td>
                      <td>
                        <div className="text-muted">
                          {BNtoNum(Number(asset.amount))}
                        </div>
                      </td>
                      {/* <td>
                    <div className="text-muted">{Number(asset.acquiredYield).toFixed(3)}</div>
                  </td>  */}
                    </tr>
                  ))
                ) : (
                  <tr align="center">
                    <td colSpan={5}>No Records Found.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        )
        break

      case "ActiveLoan": //
        return (
          <div className="table-responsive">
            <Table className="table table-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Borrow Market</th>
                  <th scope="col">Borrow Amount</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Collateral Market</th>
                  <th scope="col">Collateral Amount</th>
                  <th scope="col">Swap Status</th>
                  <th scope="col">Borrow Market(Current)</th>
                  <th scope="col">Borrow Amount(Current)</th>
                  {/* <th scope="col" colSpan={2}>Interest</th> */}
                </tr>
              </thead>

              <tbody>
                <PassbookTBody
                  isloading={isLoading}
                  assets={activeLoansData}
                ></PassbookTBody>
              </tbody>
            </Table>
          </div>
        )
        break

      case "RepaidLoan":
        return (
          <div className="table-responsive">
            <Table className="table table-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Borrow Market</th>
                  <th scope="col">Borrow Amount</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Collateral Market</th>
                  <th scope="col">Collateral Amount</th>
                  <th scope="col">Swap Status</th>
                  <th scope="col">Borrow Market(Current)</th>
                  <th scope="col">Borrow Amount(Current)</th>
                  {/* <th scope="col" colSpan={2}>Interest</th> */}
                </tr>
              </thead>

              <tbody>
                <PassbookTBody
                  isloading={isLoading}
                  assets={repaidLoansData}
                ></PassbookTBody>
              </tbody>
            </Table>
          </div>
        )
        break

      default:
        return null
    }
  }
  //here
  const getActionTabs = customActiveTab => {
    console.log("blockchain activedepoist", activeDepositsData)
    switch (customActiveTab) {
      case "1":
        return (
          // Active Deposits
          <div className="table-responsive">
            {Array.isArray(activeDepositsData) &&
            activeDepositsData.length > 0 ? (
              activeDepositsData.map((asset, key) => (
                <div key={key}>
                  <UncontrolledAccordion defaultOpen="0" open="1">
                  <Row>
                    <AccordionItem style={{border:'2px'}}>
                    
                      <AccordionHeader targetId="1" >
                      
                          <Col className="mr-4 ">
                            <Card className="mb-1"
                                  style={{ marginTop: "20px",  }}>
                              <CardBody>
                                <div
                                  
                                >
                                  <img
                                    src={
                                      CoinClassNames[
                                        EventMap[asset.market.toUpperCase()]
                                      ] || asset.market.toUpperCase()
                                    }
                                    height="18px"
                                  />

                                  <div
                                    className="mr-6"
                                    style={{
                                      display: "inline-block",
                                      fontSize: "18px",
                                    }}
                                    align="right"
                                  >
                                    &nbsp; &nbsp;
                                    {EventMap[asset.market.toUpperCase()]}
                                  </div>
                                </div>
                                <CardTitle tag="h5"></CardTitle>

                                <CardSubtitle className=" text-muted" tag="h6">
                                  <span style={{ fontSize: "14px" }}>
                                    &nbsp; &nbsp;&nbsp;{" "}
                                    {BNtoNum(Number(asset.amount))}
                                  </span>
                                  &nbsp; &nbsp;
                                  <img
                                    src="https://img.icons8.com/cotton/64/000000/synchronize--v3.png"
                                    // width="18%"
                                    height="12px"
                                  />
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </Col>
                         
                          <Col className="mr-4 ">
                            <Card className="mb-1"
                                  style={{ marginTop: "20px",  }}>
                              <CardBody>
                                <div
                                  
                                >
                                  <img
                                    src={
                                      CoinClassNames[
                                        EventMap[asset.market.toUpperCase()]
                                      ] || asset.market.toUpperCase()
                                    }
                                    height="18px"
                                  />

                                  <div
                                    className="mr-6"
                                    style={{
                                      display: "inline-block",
                                      fontSize: "18px",
                                    }}
                                    align="right"
                                  >
                                    &nbsp; &nbsp;
                                    {EventMap[asset.market.toUpperCase()]}
                                  </div>
                                </div>
                                <CardTitle tag="h5"></CardTitle>

                                <CardSubtitle className=" text-muted" tag="h6">
                                  <span style={{ fontSize: "14px" }}>
                                    &nbsp; &nbsp;&nbsp;{" "}
                                    {BNtoNum(Number(asset.amount))}
                                  </span>
                                  &nbsp; &nbsp;
                                  <img
                                    src="https://img.icons8.com/cotton/64/000000/synchronize--v3.png"
                                    // width="18%"
                                    height="12px"
                                  />
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col className="mr-4 ">
                            <Card className="mb-1"
                                  style={{ marginTop: "20px",  }}>
                              <CardBody>
                                <div
                                  
                                >
                                  <img
                                    src={
                                      CoinClassNames[
                                        EventMap[asset.market.toUpperCase()]
                                      ] || asset.market.toUpperCase()
                                    }
                                    height="18px"
                                  />

                                  <div
                                    className="mr-6"
                                    style={{
                                      display: "inline-block",
                                      fontSize: "18px",
                                    }}
                                    align="right"
                                  >
                                    &nbsp; &nbsp;
                                    {EventMap[asset.market.toUpperCase()]}
                                  </div>
                                </div>
                                <CardTitle tag="h5"></CardTitle>

                                <CardSubtitle className=" text-muted" tag="h6">
                                  <span style={{ fontSize: "14px" }}>
                                    &nbsp; &nbsp;&nbsp;{" "}
                                    {BNtoNum(Number(asset.amount))}
                                  </span>
                                  &nbsp; &nbsp;
                                  <img
                                    src="https://img.icons8.com/cotton/64/000000/synchronize--v3.png"
                                    // width="18%"
                                    height="12px"
                                  />
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col className="mr-4 ">
                            <Card className="mb-1"
                                  style={{ marginTop: "20px",  }}>
                              <CardBody>
                                <div
                                  
                                >
                                  <img
                                    src={
                                      CoinClassNames[
                                        EventMap[asset.market.toUpperCase()]
                                      ] || asset.market.toUpperCase()
                                    }
                                    height="18px"
                                  />

                                  <div
                                    className="mr-6"
                                    style={{
                                      display: "inline-block",
                                      fontSize: "18px",
                                    }}
                                    align="right"
                                  >
                                    &nbsp; &nbsp;
                                    {EventMap[asset.market.toUpperCase()]}
                                  </div>
                                </div>
                                <CardTitle tag="h5"></CardTitle>

                                <CardSubtitle className=" text-muted" tag="h6">
                                  <span style={{ fontSize: "14px" }}>
                                    &nbsp; &nbsp;&nbsp;{" "}
                                    {BNtoNum(Number(asset.amount))}
                                  </span>
                                  &nbsp; &nbsp;
                                  <img
                                    src="https://img.icons8.com/cotton/64/000000/synchronize--v3.png"
                                    // width="18%"
                                    height="12px"
                                  />
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </Col>

                          
                       
                        {/* <Row>

                        <Col>
                          <div className="d-flex align-items-center">
                            <div className="avatar-xs me-3">
                              <img
                                src={
                                  CoinClassNames[
                                    EventMap[asset.market.toUpperCase()]
                                  ] || asset.market.toUpperCase()
                                }
                              />
                            </div>
                            <span>{EventMap[asset.market.toUpperCase()]}</span>
                          </div>
                        </Col>

                        <Col>
                          <div className="text-muted">
                            {EventMap[asset.commitment]}
                          </div>
                        </Col>

                        <Col>
                          <div className="text-muted">
                            {BNtoNum(Number(asset.amount))}
                          </div>
                        </Col>
                        </Row> */}
                      </AccordionHeader>
                      <AccordionBody accordionId="1">
                        <div style={{ borderWidth: 1 }}>
                          <CardBody>
                            <form>
                              {/* // */}
                              <div className="mb-4 ">
                                <Row>
                                  <Col lg="4 mb-3">
                                    <div
                                      className="block-example border border-primary"
                                      style={{
                                        padding: "15px",
                                        borderRadius: "5px",
                                      }}
                                    >
                                      <div className="mb-3">
                                        {/* <label className="card-radio-label mb-2"> */}
                                        <Button
                                          className="btn-block btn-md"
                                          color="light"
                                          onClick={() => {
                                            tog_add_active_deposit()
                                          }}
                                        >
                                          Add to Deposit
                                        </Button>
                                        {"   "}
                                        <Button
                                          className="btn-block btn-md"
                                          color="light"
                                          onClick={() => {
                                            tog_withdraw_active_deposit()
                                          }}
                                        >
                                          Withdraw Deposit
                                        </Button>
                                        {/* </label> */}
                                      </div>
                                      {/* <Modal
                                        // isOpen={modal_add_active_deposit}
                                        isOpen={true}
                                        toggle={() => {
                                          tog_add_active_deposit()
                                        }}
                                        centered
                                      > */}
                                      {modal_add_active_deposit && (
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <Input
                                                type="text"
                                                className="form-control"
                                                id="horizontal-password-Input"
                                                placeholder={
                                                  depositRequestSel
                                                    ? `Minimum amount =  ${MinimumAmount[depositRequestSel]}`
                                                    : "Amount"
                                                }
                                                onChange={event => {
                                                  setInputVal1(
                                                    Number(event.target.value)
                                                  )
                                                }}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              color="primary"
                                              className="w-md"
                                              disabled={
                                                isTransactionDone ||
                                                inputVal1 === 0
                                              }
                                              onClick={handleDepositRequest}
                                            >
                                              {!isTransactionDone ? (
                                                "Add to Deposit"
                                              ) : (
                                                <Spinner>Loading...</Spinner>
                                              )}
                                            </Button>
                                          </div>
                                        </Form>
                                      )}
                                      {modal_withdraw_active_deposit && (
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <Input
                                                type="text"
                                                className="form-control"
                                                id="horizontal-password-Input"
                                                placeholder="Amount"
                                                onChange={event => {
                                                  setInputVal1(
                                                    Number(event.target.value)
                                                  )
                                                }}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              color="primary"
                                              className="w-md"
                                              disabled={
                                                isTransactionDone ||
                                                inputVal1 === 0
                                              }
                                              onClick={handleWithdrawDeposit}
                                            >
                                              {!isTransactionDone ? (
                                                "Withdraw Deposit"
                                              ) : (
                                                <Spinner>Loading...</Spinner>
                                              )}
                                            </Button>
                                          </div>
                                        </Form>
                                      )}
                                    </div>
                                  </Col>
                                  <Col lg="8">
                                    <Table>
                                      <thead>
                                        <tr>
                                          <th>Transaction Hash</th>
                                          <th>Age</th>
                                          <th>Value</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">
                                            0xf81454ff....442efb8
                                          </th>
                                          <td>19 mins ago</td>
                                          <td>144.98</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">
                                            0xf81454ff......332efb8
                                          </th>
                                          <td>18 days 2 hrs ago</td>
                                          <td>334.45</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">
                                            0xf81454ff......232efb8
                                          </th>
                                          <td>23 Hours</td>
                                          <td>23.34</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Col>
                                </Row>
                              </div>
                            </form>
                          </CardBody>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    </Row>
                  </UncontrolledAccordion>
                </div>
              ))
            ) : (
              <div>No records found</div>
            )}
          </div>
        )
        break

      case "2": //
        return (
          <div className="table-responsive">
            <Table className="table table-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Borrow Market</th>
                  <th scope="col">Borrow Amount</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Collateral Market</th>
                  <th scope="col">Collateral Amount</th>
                  <th scope="col">Swap Status</th>
                  <th scope="col">Borrow Market(Current)</th>
                  <th scope="col">Borrow Amount(Current)</th>
                  {/* <th scope="col" colSpan={2}>Interest</th> */}
                </tr>
              </thead>

              <tbody>
                <PassbookTBody
                  isloading={isLoading}
                  assets={activeLoansData}
                ></PassbookTBody>
              </tbody>
            </Table>
          </div>
        )
        break

      case "3":
        return (
          <div className="table-responsive">
            <Table className="table table-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Borrow Market</th>
                  <th scope="col">Borrow Amount</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Collateral Market</th>
                  <th scope="col">Collateral Amount</th>
                  <th scope="col">Swap Status</th>
                  <th scope="col">Borrow Market(Current)</th>
                  <th scope="col">Borrow Amount(Current)</th>
                  {/* <th scope="col" colSpan={2}>Interest</th> */}
                </tr>
              </thead>

              <tbody>
                <PassbookTBody
                  isloading={isLoading}
                  assets={repaidLoansData}
                ></PassbookTBody>
              </tbody>
            </Table>
          </div>
        )
        break

      default:
        return null
    }
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{ marginTop: "0px" }}>
        <MetaTags>
          <title>Hashstack Finance</title>
        </MetaTags>

        {/* <Banner /> */}
        <Container fluid>
          <Row>
            <Col xl={3}>
              <Card
                style={{
                  borderRadius: "0.8rem",
                  width: "95%",
                  border: "2px solid #32394e",
                }}
              >
                <CardBody>
                  <div className="mb-3">
                    <img src="./tvl.svg" width="18%"></img> {"   "} {"   "}{" "}
                    {"   "}{" "}
                    <div
                      className="float: right"
                      style={{ display: "inline-block", fontSize: "15px" }}
                    >
                      {" "}
                      &nbsp; &nbsp; Total Value Locked{" "}
                    </div>
                  </div>
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    align="right"
                  >
                    {tvl ? tvl : "..."}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3}>
              <Card
                style={{
                  borderRadius: "0.8rem",
                  width: "95%",
                  border: "2px solid #32394e",
                }}
              >
                <CardBody>
                  <div className="mb-3">
                    <img src="./uf.svg" width="18%"></img> {"   "} {"   "}{" "}
                    {"   "}{" "}
                    <div
                      className="float: right"
                      style={{ display: "inline-block", fontSize: "15px" }}
                    >
                      {" "}
                      &nbsp; &nbsp; Utilization Rate{" "}
                    </div>
                  </div>
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    align="right"
                  >
                    48.2%
                    {/* {uf ? uf : "..."} */}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3}>
              <Card
                style={{
                  borderRadius: "0.8rem",
                  width: "95%",
                  border: "2px solid #32394e",
                }}
              >
                <CardBody>
                  <div className="mb-3">
                    <img src="./dominantMarket.svg" width="18%"></img> {"   "}{" "}
                    {"   "} {"   "}{" "}
                    <div
                      className="float: right"
                      style={{ display: "inline-block", fontSize: "15px" }}
                    >
                      {" "}
                      Dominant Market
                    </div>
                  </div>
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    align="right"
                  >
                    BTC
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3}>
              <Card
                style={{
                  borderRadius: "0.8rem",
                  width: "99%",
                  border: "2px solid #32394e",
                }}
              >
                <CardBody>
                  <div className="mb-3">
                    <img src="./totalUsers.svg" width="20%"></img> {"   "}{" "}
                    {"   "} {"   "}{" "}
                    <div
                      className="float: right"
                      style={{ display: "inline-block", fontSize: "15px" }}
                    >
                      {" "}
                      &nbsp; &nbsp; Total Users
                    </div>
                  </div>
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    align="right"
                  >
                    4311
                    {/* {totalUsers} */}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={"12"}>
              <Card style={{ height: "29rem" }}>
                <CardBody>
                  <Row>
                    <Col>
                      <Nav
                        tabs
                        className="nav-tabs-custom"
                        style={{ borderBottom: "0px" }}
                      >
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: customActiveTab === "1",
                            })}
                            onClick={() => {
                              toggleCustom("1")
                            }}
                          >
                            <span className="d-none d-sm-block">Dashboard</span>
                          </NavLink>
                        </NavItem>
                        {account ? (
                          <>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: customActiveTab === "2",
                                })}
                                onClick={() => {
                                  toggleCustom("2")
                                }}
                              >
                                <span className="d-none d-sm-block">
                                  Passbook
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: customActiveTab === "3",
                                })}
                                onClick={() => {
                                  toggleCustom("3")
                                }}
                              >
                                <span className="d-none d-sm-block">
                                  Liquidation
                                </span>
                              </NavLink>
                            </NavItem>
                          </>
                        ) : null}
                      </Nav>
                    </Col>

                    <Col>
                      {customActiveTab === "2" && (
                        <Nav tabs className="nav-tabs-custom">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTabs === "0",
                              })}
                              onClick={() => {
                                toggleCustoms("0")
                              }}
                            >
                              <span className="d-none d-sm-block">All</span>
                            </NavLink>
                          </NavItem>
                          {account ? (
                            <>
                              <NavItem>
                                <NavLink
                                  style={{ cursor: "pointer" }}
                                  className={classnames({
                                    active: customActiveTabs === "1",
                                  })}
                                  onClick={() => {
                                    toggleCustoms("1")
                                  }}
                                >
                                  <span className="d-none d-sm-block">
                                    Active Deposits
                                  </span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  style={{ cursor: "pointer" }}
                                  className={classnames({
                                    active: customActiveTabs === "2",
                                  })}
                                  onClick={() => {
                                    toggleCustoms("2")
                                  }}
                                >
                                  <span className="d-none d-sm-block">
                                    Active Loans
                                  </span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  style={{ cursor: "pointer" }}
                                  className={classnames({
                                    active: customActiveTabs === "3",
                                  })}
                                  onClick={() => {
                                    toggleCustoms("3")
                                  }}
                                >
                                  <span className="d-none d-sm-block">
                                    Repaid Loans
                                  </span>
                                </NavLink>
                              </NavItem>
                            </>
                          ) : null}
                        </Nav>
                      )}
                    </Col>
                  </Row>
                  {/* </Col>
                                </Row> */}
                  <Row>
                    <Col lg={12}>
                      {customActiveTab === "2" &&
                        getActionTabs(customActiveTabs)}
                      {/* {getPassbookTable(passbookStatus)} */}
                    </Col>
                  </Row>
                  <TabContent activeTab={customActiveTab} className="p-1">
                    {/* ------------------------------------- DASHBOARD ----------------------------- */}

                    <TabPane tabId="1">
                      <div
                        className="table-responsive"
                        style={{ paddingTop: "12px" }}
                      >
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr style={{ borderStyle: "hidden" }}>
                              <th scope="col">Markets</th>
                              <th scope="col">Savings Interest</th>
                              <th scope="col">Borrow Interest</th>
                              <th scope="col">Deposit</th>
                              <th scope="col" colSpan={2}>
                                Borrow
                              </th>
                            </tr>
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">
                                <select
                                  className="form-select form-select-sm"
                                  onChange={handleDepositInterestChange}
                                  defaultValue={"NONE"}
                                >
                                  <option hidden>Commitment</option>
                                  <option value={"NONE"} >None</option>
                                  <option value={"TWOWEEKS"}>Two Weeks</option>
                                  <option value={"ONEMONTH"}>One Month</option>
                                  <option value={"THREEMONTHS"}>
                                    Three Month
                                  </option>
                                </select>
                              </th>
                              <th scope="col">
                                <select
                                  className="form-select form-select-sm"
                                  onChange={handleBorrowInterestChange}
                                  defaultValue={"NONE"}
                                >
                                  <option hidden>Commitment</option>
                                  <option value={"NONE"} >None</option>
                                  <option value={"ONEMONTH"}>One Month</option>
                                </select>
                              </th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <DashboardTBody
                              isloading={isLoading}
                              depositInterestChange={depositInterestChange}
                              borrowInterestChange={borrowInterestChange}
                            ></DashboardTBody>
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>

                    {/* -------------------------------------- PASSBOOK ----------------------------- */}

                    {/* -------------------------------------- LIQUIDATION ----------------------------- */}

                    <TabPane tabId="3">
                      <div className="table-responsive">
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Loan Market</th>
                              <th scope="col">Commitment</th>
                              <th scope="col">Loan Amount</th>
                              <th scope="col">Collateral Market</th>
                              <th scope="col">Collateral Amount</th>
                              {/* <th scope="col" colSpan={2}>Interest Earned</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(activeLiquidationsData) &&
                              activeLiquidationsData.length > 0 ? (
                              activeLiquidationsData.map((asset, key) => (
                                <tr key={key}>
                                  <th scope="row">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-xs me-3">
                                        <img
                                          src={
                                            CoinClassNames[
                                              EventMap[
                                                asset.loanMarket.toUpperCase()
                                              ]
                                            ] || asset.loanMarket.toUpperCase()
                                          }
                                        />
                                      </div>
                                      <span>
                                        {
                                          EventMap[
                                          asset.loanMarket.toUpperCase()
                                          ]
                                        }
                                      </span>
                                    </div>
                                  </th>
                                  <td>
                                    <div className="text-muted">
                                      {EventMap[asset.commitment]}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-muted">
                                      {BNtoNum(Number(asset.loanAmount))}
                                    </div>
                                  </td>
                                  <th scope="row">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-xs me-3">
                                        <img
                                          src={
                                            CoinClassNames[
                                              EventMap[
                                                asset.collateralMarket.toUpperCase()
                                              ]
                                            ] ||
                                            asset.collateralMarket.toUpperCase()
                                          }
                                        />
                                      </div>
                                      <span>
                                        {
                                          EventMap[
                                          asset.collateralMarket.toUpperCase()
                                          ]
                                        }
                                      </span>
                                    </div>
                                  </th>
                                  <td>
                                    <div className="text-muted">
                                      {BNtoNum(Number(asset.collateralAmount))}
                                    </div>
                                  </td>
                                  <td>
                                    <Button
                                      className="text-muted"
                                      color="light"
                                      outline
                                      onClick={() => {
                                        handleLiquidation(asset)
                                      }}
                                    >
                                      {isTransactionDone &&
                                      asset.isLiquidationDone ? (
                                        <Spinner>Loading...</Spinner>
                                      ) : (
                                        "Liquidate"
                                      )}
                                    </Button>
                                  </td>
                                  {/* <td>
                                  <div className="text-muted">{Number(asset.acquiredYield).toFixed(3)}</div>
                                </td>  */}
                                </tr>
                              ))
                            ) : (
                              <tr align="center">
                                <td colSpan={5}>No Records Found.</td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                        {/* <Button
                                      className="d-flex align-items-center"
                                      color="light"
                                      outline
                                      onClick={() => {
                                        increaseLiquidationIndex
                                      }}
                                    >
                                      Show More
                                      </Button> */}
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <Analytics></Analytics>
            {props.children} */}
      </div>
    </React.Fragment>
  )
}

export default Dashboard;
