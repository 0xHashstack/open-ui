import React, { useState, useEffect, useContext } from "react";
import MetaTags from "react-meta-tags";
import axios from "axios";
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
  Tooltip
} from "reactstrap";
import classnames from "classnames";
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import {
  EventMap, CoinClassNames, MinimumAmount,
  SymbolsMap, DecimalsMap, CommitMap, CommitMapReverse
} from '../blockchain/constants';
import { BNtoNum, GetErrorText, bytesToString, NumToBN } from '../blockchain/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PassbookTBody from "./passbook-body";
import DashboardTBody from "./dashboard-body";
import Banner from "../components/banner";
import { BigNumber } from "ethers";

toast.configure({
  autoClose: 4000
});


const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [activeDepositsData, setActiveDepositsData] = useState([]);
  const [activeLoansData, setActiveLoansData] = useState([]);
  const [isTransactionDone, setIsTransactionDone] = useState(false);

  const [customActiveTab, setCustomActiveTab] = useState("1");
  const [passbookStatus, setPassbookStatus] = useState(true)

  const [modal_repay_loan, setmodal_repay_loan] = useState(false);
  const [modal_withdraw_loan, setmodal_withdraw_loan] = useState(false);
  const [modal_swap_loan, setmodal_swap_loan] = useState(false);
  const [modal_swap_to_loan, setmodal_swap_to_loan] = useState(false);
  const [modal_add_collateral, setmodal_add_collateral] = useState(false);
  const [modal_withdraw_collateral, setmodal_withdraw_collateral] = useState(false);
  const [modal_add_active_deposit, setmodal_add_active_deposit] = useState(false);
  const [modal_withdraw_active_deposit, setmodal_withdraw_active_deposit] = useState(false);

  const [loanOption, setLoanOption] = useState();
  const [swapOption, setSwapOption] = useState();
  const [loanCommitement, setLoanCommitement] = useState();

  const [collateralOption, setCollateralOption] = useState();
  const [depositInterestChange, setDepositInterestChange] = useState("NONE");
  const [borrowInterestChange, setBorrowInterestChange] = useState("NONE");

  const [depositRequestSel, setDepositRequestSel] = useState();
  const [withdrawDepositSel, setWithdrawDepositSel] = useState();
  const [depositRequestVal, setDepositRequestVal] = useState();
  const [withdrawDepositVal, setWithdrawDepositVal] = useState();


  const [repayLoanTooltipOpen, setRepayLoanTooltipOpen] = useState(false);
  const [swapLoanTooltipOpen, setSwapLoanTooltipOpen] = useState(false);
  const [swapToLoanTooltipOpen, setSwapToLoanTooltipOpen] = useState(false);
  const [addCollateralTooltipOpen, setAddCollateralTooltipOpen] = useState(false);
  const [withdrawCollateralTooltipOpen, setWithdrawCollateralTooltipOpen] = useState(false);

  let inputVal1 = 0;

  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
    account && wrapper?.getLoanInstance().getLoans(account).then((loans) => {
      onLoansData(loans);
      setIsLoading(false);
    }, err => {
      setIsLoading(false);
      setActiveDepositsData([]);
      console.log(err);
    });
  }, [account, passbookStatus, customActiveTab]);

  useEffect(() => {
    account && wrapper?.getDepositInstance().getDeposits(account).then((deposits) => {
      onDepositData(deposits);
      setIsLoading(false);
    }, err => {
      setIsLoading(false);
      setActiveDepositsData([]);
      console.log(err);
    });
  }, [account, passbookStatus, customActiveTab]);

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_repay_loan() {
    setmodal_repay_loan(!modal_repay_loan);
    removeBodyCss();
  }
  function tog_withdraw_loan() {
    setmodal_withdraw_loan(!modal_withdraw_loan);
    removeBodyCss();
  }
  function tog_swap_loan() {
    setmodal_swap_loan(!modal_swap_loan);
    removeBodyCss();
  }
  function tog_swap_to_loan() {
    setmodal_swap_to_loan(!modal_swap_to_loan);
    removeBodyCss();
  }
  function tog_add_collateral() {
    setmodal_add_collateral(!modal_add_collateral);
    removeBodyCss();
  }
  function tog_withdraw_collateral() {
    setmodal_withdraw_collateral(!modal_withdraw_collateral);
    removeBodyCss();
  }
  function tog_add_active_deposit() {
    setmodal_add_active_deposit(!modal_add_active_deposit);
    removeBodyCss();
  }
  function tog_withdraw_active_deposit() {
    setmodal_withdraw_active_deposit(!modal_withdraw_active_deposit);
    removeBodyCss();
  }


  const handleLoanOptionChange = (e) => {
    setLoanOption(e.target.value)
  }

  const handleLoanCommitementChange = (e) => {
    setLoanCommitement(e.target.value)
  }


  const handleSwapOptionChange = (e) => {
    setSwapOption(e.target.value)
  }

  const handleCollateralOptionChange = (e) => {
    setCollateralOption(e.target.value)
  }

  const handleDepositInterestChange = (e) => {
    setDepositInterestChange(e.target.value);
  }

  const handleBorrowInterestChange = (e) => {
    setBorrowInterestChange(e.target.value);
  }

  const handleDepositRequestSelect = (e) => {
    setDepositRequestSel(e.target.value)
  }
  const handleWithdrawDepositSelect = (e) => {
    setWithdrawDepositSel(e.target.value)
  }

  const handleDepositRequestTime = (e) => {
    setDepositRequestVal(e.target.value)
  }
  const handleWithdrawDepositTime = (e) => {
    setWithdrawDepositVal(e.target.value)
  }

  const onDepositData = async (depositsData) => {
    const deposits = [];
    for(let i =0; i <depositsData.amount.length; i++ ){
      deposits.push({
        amount: depositsData.amount[i].toString(),
        account,
        commitment: CommitMapReverse[depositsData.commitment[i]],
        market: bytesToString(depositsData.market[i]),
        // acquiredYield: new BigNumber(depositsData.savingsInterest[i].toString()).div(new BigNumber(10).pow(new BigNumber(18))).toString()
        acquiredYield: (await wrapper.getDepositInstance().getDepositInterest(account, i +1 )).toString()
      })
    }
    setActiveDepositsData(deposits);
  }

  const onLoansData = loansData => {
    const loans = [];
    loansData.collateralAmount.forEach((collateralAmount, index) => {
      let debtCategory;
      let cdr = BigNumber.from(collateralAmount).div(BigNumber.from(loansData.loanAmount[index])).toNumber();
      if (cdr >= 1) {
        debtCategory = 1;
      } else if (cdr >= 0.5 && cdr < 1) {
        debtCategory = 2;
      } else if (cdr >= 0.333 && cdr < 0.5) {
        debtCategory = 3;
      }
      loans.push({
        account,
        cdr,
        collateralAmount: Number(collateralAmount),
        collateralMarket: bytesToString(loansData.collateralMarket[index]),
        commitment: CommitMapReverse[(loansData.loanCommitment[index])],
        debtCategory,
        isSwapped: loansData.isSwapped[index],
        loanAmount: Number(loansData.loanAmount[index]),
        loanId: index + 1,
        loanMarket: bytesToString(loansData.loanMarket[index]),
      })
    })
    setActiveLoansData(loans)
  }
  const handleRepay = async () => {
    try {
      setIsTransactionDone(true);
      const _loanOption: string | undefined = loanOption;
      const market = SymbolsMap[_loanOption];
      const decimal = DecimalsMap[_loanOption];
      const _commit: string | undefined = loanCommitement;
      const commit = activeLoansData.filter((asset) => {
        return (EventMap[asset.loanMarket.toUpperCase()] === _loanOption && asset.commitment.toUpperCase() === _commit); 
      });
      const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[commit[0].collateralMarket.toUpperCase()],
        BNtoNum(Number(commit[0].collateralAmount), DecimalsMap[commit[0].collateralMarket.toUpperCase()]), DecimalsMap[commit[0].collateralMarket.toUpperCase()]);
      await approveTransactionHash.wait();
      console.log("Approve Transaction sent: ", approveTransactionHash);
      const tx1 = await wrapper?.getLoanInstance().repayLoan(market, CommitMap[_commit], inputVal1, decimal);
      const tx = await tx1.wait(); 
      onLoanRepay(tx.events)
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }

  const handleWithdrawLoan = async () => {
    try {
      setIsTransactionDone(true);
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _commit: string | undefined = loanCommitement;

      const tx1 = await wrapper?.getLoanInstance().permissibleWithdrawal(SymbolsMap[_loanOption], CommitMap[_commit], inputVal1, DecimalsMap[_loanOption]);
      const tx = await tx1.wait()
      onLoanWithdrawal(tx.events);
    } catch (err) {
      setIsTransactionDone(false);      
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }


  const handleCollateral = async () => {
    try {
      setIsTransactionDone(true);
      const _loanOption: string | undefined = loanOption;
      const _collateralOption: string | undefined = collateralOption;
      const _commit: string | undefined = loanCommitement;
      const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[_loanOption], inputVal1, DecimalsMap[_loanOption]);
      await approveTransactionHash.wait();
      console.log("Approve Transaction sent: ", approveTransactionHash);
      const tx1 = await wrapper?.getLoanInstance().addCollateral(SymbolsMap[_loanOption], CommitMap[_commit], inputVal1, DecimalsMap[_loanOption]);
      const tx = await tx1.wait()
      onCollateralAdded(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }

  const handleWithdrawCollateral = async () => {
    try {
      setIsTransactionDone(true);
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _commit: string | undefined = loanCommitement;
      const tx1 = await wrapper?.getLoanInstance().withdrawCollateral(SymbolsMap[_loanOption], CommitMap[_commit]);
      const tx = await tx1.wait()
      onCollateralReleased(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }

  const handleSwap = async () => {
    try {
      setIsTransactionDone(true);
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _swapOption: string | undefined =  swapOption;
      const _commit: string | undefined = loanCommitement;
      // const allowance = await wrapper?.getMockBep20Instance().allowance(SymbolsMap[_loanOption],account);
      // const isApprovedAlready = BigNumber.from(`${commit[0].loanAmount}`).lte(BigNumber.from(allowance));
      // if(!isApprovedAlready){
        
      // }
      const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[_loanOption], BNtoNum(Number(commit[0].loanAmount), DecimalsMap[_loanOption]), DecimalsMap[_loanOption]);
      console.log("Approve Transaction sent: ", approveTransactionHash);
      await approveTransactionHash.wait();
      const tx1 = await wrapper?.getLoanInstance().swapLoan(SymbolsMap[_loanOption], CommitMap[_commit], SymbolsMap[_swapOption]);
      const tx = await tx1.wait()
      onSwap(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
      toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }

  const handleSwapToLoan = async () => {
    try {
      setIsTransactionDone(true);
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption && EventMap[asset.commitment.toUpperCase()] === loanCommitement;
      });
      const _loanOption: string | undefined =  loanOption;
      const _commit: string | undefined = loanCommitement;
      // const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[_loanOption], BNtoNum(Number(commit[0].loanAmount), DecimalsMap[_loanOption]), DecimalsMap[_loanOption]);
      // await approveTransactionHash.wait();
      // console.log("Approve Transaction sent: ", approveTransactionHash);

      const tx1 = await wrapper?.getLoanInstance().swapToLoan( SymbolsMap[_loanOption],CommitMap[_commit]);
      const tx = await tx1.wait();
      onSwapToLoan(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }

  const handleDepositRequest = async () => {
    try {
      setIsTransactionDone(true);
      const _depositRequestSel: string | undefined = depositRequestSel;
      const _depositRequestVal: string | undefined = depositRequestVal;
      const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[_depositRequestSel], inputVal1, DecimalsMap[_depositRequestSel]);
      await approveTransactionHash.wait();
      console.log("Approve Transaction sent: ", approveTransactionHash);
      const tx1 = await wrapper?.getDepositInstance().depositRequest(SymbolsMap[_depositRequestSel.toUpperCase()], CommitMap[_depositRequestVal], inputVal1, DecimalsMap[_depositRequestSel.toUpperCase()]);
      const tx = await tx1.wait();
      onDeposit(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }



  const handleWithdrawDeposit = async () => {
    try {
      setIsTransactionDone(true);
      const _withdrawDepositSel: string | undefined =  withdrawDepositSel;
      const _withdrawDepositVal: string | undefined =  withdrawDepositVal;
      const tx1 = await wrapper?.getDepositInstance().withdrawDeposit(SymbolsMap[_withdrawDepositSel.toUpperCase()], 
       CommitMap[_withdrawDepositVal], inputVal1, DecimalsMap[_withdrawDepositSel.toUpperCase()]);
      const tx = await tx1.wait();
       WithdrawalDeposit(tx.events);
    } catch (err) {
      setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }
  }


  const onCollateralAdded = (data) => {
      let eventName
      let _amount
      data.forEach(e => {
        if (e.event == "AddCollateral") {
          eventName = e.event
          _amount = e.args.amount.toBigInt()
        }
      })
      
    let amount = BNtoNum(_amount, 8)
    
    // const res = data['AddCollateral']['returnValues'];
    // let amount = BNtoNum(Number(res.amount))
    toast.success(`Collateral amount added: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const onCollateralReleased = (data) => {
          let eventName
          let _amount
          data.forEach(e => {
            if (e.event == "CollateralReleased") {
              eventName = e.event
              _amount = e.args.amount.toBigInt()
            }
          })

          let amount = BNtoNum(_amount, 8)
          
    // const res = data['CollateralReleased']['returnValues'];
    // let amount = BNtoNum(Number(res.amount))
    toast.success(`Collateral amount released: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }


  const onLoanWithdrawal = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "WithdrawPartialLoan") {
          eventName = e.event
          _amount = e.args.amount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    
    
    // const res = data['WithdrawPartialLoan']['returnValues'];
    // let amount = BNtoNum(Number(res.amount))
    toast.success(`Loan Withdraw Successfully: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const onLoanRepay = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "LoanRepaid") {
        eventName = e.event
        _amount = e.args.amount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    
    // const res = data['LoanRepaid']['returnValues'];
    // let amount = BNtoNum(Number(res.amount))
    toast.success(`Loan Repaid Successfully: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const onDeposit = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "DepositAdded") {
        eventName = e.event
        _amount = e.args.amount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    
    // const res = data['DepositAdded']['returnValues'];
    // let amount = BNtoNum(Number(res.amount),DecimalsMap[res.market]);
    toast.success(`Deposited amount: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const onSwap = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "MarketSwapped") {
        console.log("MarketSwapped",e)
        eventName = e.event
        _amount = e.args.currentAmount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    
    // const res = data['MarketSwapped']['returnValues'];
    // let amount = BNtoNum(Number(res.amount),DecimalsMap[res.market]);
    toast.success(`Swap Loan successful${amount ? ": " + amount: ""}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const onSwapToLoan = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "MarketSwapped") {
        eventName = e.event
        _amount = e.args.amount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    
    // const res = data['MarketSwapped']['returnValues'];
    // let amount = BNtoNum(Number(res.amount),DecimalsMap[res.market]);
    toast.success(`Swap to Loan successful: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }

  const WithdrawalDeposit = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "Withdrawal") {
        eventName = e.event
        _amount = e.args.amount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
    // const res = data['Withdrawal']['returnValues'];
    // let amount = BNtoNum(Number(res.amount), DecimalsMap[res.market])
    toast.success(`Deposit Withdrawn: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    setIsTransactionDone(false);
  }


  const passbookActive = (e) => {
    if (e.target.value === "ActiveDeposit") {
      setPassbookStatus(true)
    } else {
      setPassbookStatus(false)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Hashstack Finance</title>
        </MetaTags>
        <Banner />
        <Container fluid>
          <h5>OPEN PROTOCOL</h5>
          <br />

          <Row>
            {customActiveTab === '2' ?
              <Col xl="4">
                <Card>
                  {/* {customActiveTab === '2' ? */}

                  {passbookStatus === false ?
                    (
                      /* -------------------------------------- REPAY ----------------------------- */
                      <CardBody>
                        <form>
                          <div className="mb-4 me-3">
                            <h4 className="card-title mb-4">Repay</h4>
                          </div>

                          {/* ----------------------- Loan Actions ----------------------- */}

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
                                        tog_repay_loan();
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
                                        tog_repay_loan();
                                      }}
                                      centered
                                    >
                                      <div className="modal-body">
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleLoanOptionChange}>
                                                <option hidden>Loan Market</option>
                                                {[...new Map(activeLoansData.map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                                })}
                                              </select>
                                            </Col>
                                          </div>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleLoanCommitementChange}>
                                                <option hidden>Minimum Commitment Period</option>
                                                {activeLoansData.filter((asset) => {
                                                  return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                                })
                                                  .map(item => item['commitment'])
                                                  .filter((value, index, self) => self.indexOf(value) === index)
                                                  .map((asset, key) => {
                                                    return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                                onChange={(event) => { inputVal1 = Number(event.target.value) }}
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
                                              {!isTransactionDone ? 'Repay' : <Spinner>Loading...</Spinner>}
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
                                        tog_withdraw_loan();
                                      }}
                                    >
                                      Withdraw Loan
                                    </Button>
                                    <Modal
                                      isOpen={modal_withdraw_loan}
                                      toggle={() => {
                                        tog_withdraw_loan();
                                      }}
                                      centered
                                    >
                                      <div className="modal-body">
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleLoanOptionChange}>
                                                <option hidden>Loan market</option>
                                                {[...new Map(activeLoansData.map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                                })}
                                              </select>
                                            </Col>
                                          </div>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleLoanCommitementChange}>
                                                <option hidden>Minimum Commitment Period</option>
                                                {activeLoansData.filter((asset) => {
                                                  return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                                })
                                                  .map(item => item['commitment'])
                                                  .filter((value, index, self) => self.indexOf(value) === index)
                                                  .map((asset, key) => {
                                                    return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                                onChange={(event) => { inputVal1 = Number(event.target.value) }}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              color="primary"
                                              className="w-md"
                                              disabled={isTransactionDone}
                                              onClick={handleWithdrawLoan}
                                            >

                                              {!isTransactionDone ? 'Withdraw Loan' : <Spinner>Loading...</Spinner>}
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
                                      tog_swap_loan();
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
                                      tog_swap_loan();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanOptionChange}>
                                              <option hidden>Loan Market</option>
                                              {[...new Map(activeLoansData.map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanCommitementChange}>
                                              <option hidden>Minimum Commitment Period</option>
                                              {activeLoansData.filter((asset) => {
                                                return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                              })
                                                .map(item => item['commitment'])
                                                .filter((value, index, self) => self.indexOf(value) === index)
                                                .map((asset, key) => {
                                                  return <option key={key} value={asset}>{EventMap[asset]}</option>
                                                })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleSwapOptionChange}>
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
                                            {!isTransactionDone ? 'Swap Loan' : <Spinner>Loading...</Spinner>}
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
                                      tog_swap_to_loan();
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
                                      tog_swap_to_loan();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleSwapOptionChange}>
                                              <option hidden>Select Market to Swap</option>
                                              <option value={"SXP"}>SXP</option>
                                              <option value={"CAKE"}>CAKE</option>
                                            </select>
                                          </Col>
                                        </div>

                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanOptionChange}>
                                              <option hidden>Select Loan</option>
                                              {[...new Map(activeLoansData.filter((asset: any)=>asset.isSwapped).map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanCommitementChange}>
                                              <option hidden>Minimum Commitment Period</option>
                                              {activeLoansData.filter((asset) => {
                                                return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                              })
                                                .map(item => item['commitment'])
                                                .filter((value, index, self) => self.indexOf(value) === index)
                                                .map((asset, key) => {
                                                  return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                            {!isTransactionDone ? 'Swap to Loan' : <Spinner>Loading...</Spinner>}

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
                                      tog_add_collateral();
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
                                      tog_add_collateral();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanOptionChange}>
                                              <option hidden>Loan Market</option>
                                              {[...new Map(activeLoansData.map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanCommitementChange}>
                                              <option hidden>Minimum Commitment Period</option>
                                              {activeLoansData.filter((asset) => {
                                                return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                              })
                                                .map(item => item['commitment'])
                                                .filter((value, index, self) => self.indexOf(value) === index)
                                                .map((asset, key) => {
                                                  return <option key={key} value={asset}>{EventMap[asset]}</option>
                                                })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleCollateralOptionChange}>
                                              <option hidden>Collateral Market</option>
                                              {[...new Map(activeLoansData.map((item: any) => [item['collateralMarket'], item])).values()].map((asset, key) => {
                                                return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
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
                                              onChange={(event) => { inputVal1 = Number(event.target.value) }}
                                            />
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            color="primary"
                                            className="w-md"
                                            disabled={isTransactionDone}
                                            onClick={handleCollateral}
                                          >
                                            {!isTransactionDone ? 'Add Collateral' : <Spinner>Loading...</Spinner>}

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
                                    id="WithdrawCollateralButton"
                                    outline
                                    onClick={() => {
                                      tog_withdraw_collateral();
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
                                      tog_withdraw_collateral();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanOptionChange}>
                                              <option hidden>Loan Market</option>
                                              {[...new Map(activeLoansData.map((item: any) => [item['loanMarket'], item])).values()].map((asset, key) => {
                                                return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleLoanCommitementChange}>
                                              <option hidden>Minimum Commitment Period</option>
                                              {activeLoansData.filter((asset) => {
                                                return (EventMap[asset.loanMarket.toUpperCase()] === loanOption)
                                              })
                                                .map(item => item['commitment'])
                                                .filter((value, index, self) => self.indexOf(value) === index)
                                                .map((asset, key) => {
                                                  return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                            {!isTransactionDone ? 'Withdraw Collateral' : <Spinner>Loading...</Spinner>}

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

                    :

                    (
                      /* -------------------------------------- Active Deposit ----------------------------- */
                      <CardBody>
                        <form>
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
                                        tog_add_active_deposit();
                                      }}
                                    >
                                      Add to Deposit
                                    </Button>
                                    <Modal
                                      isOpen={modal_add_active_deposit}
                                      toggle={() => {
                                        tog_add_active_deposit();
                                      }}
                                      centered
                                    >
                                      <div className="modal-body">
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleDepositRequestSelect}>
                                                <option hidden>Select Market</option>
                                                {[...new Map(activeDepositsData.map((item: any) => [item['market'], item])).values()].map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.market.toUpperCase()]}>{EventMap[asset.market.toUpperCase()]}</option>
                                                })}
                                              </select>
                                            </Col>
                                          </div>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleDepositRequestTime}>
                                                <option hidden>Minimum Commitment Period</option>
                                                {activeDepositsData.filter((asset) => {
                                                  return (EventMap[asset.market.toUpperCase()] === depositRequestSel)
                                                })
                                                  .map(item => item['commitment'])
                                                  .filter((value, index, self) => self.indexOf(value) === index)
                                                  .map((asset, key) => {
                                                    return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                                placeholder={depositRequestSel ? `Min amount should be greater than ${MinimumAmount[depositRequestSel]}` : 'Amount'}
                                                onChange={(event) => { inputVal1 = Number(event.target.value) }}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              color="primary"
                                              className="w-md"
                                              disabled={isTransactionDone}
                                              onClick={handleDepositRequest}
                                            >
                                              {!isTransactionDone ? 'Add to Deposit' : <Spinner>Loading...</Spinner>}

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
                                        tog_withdraw_active_deposit();
                                      }}
                                    >
                                      Withdraw Deposit
                                    </Button>
                                    <Modal
                                      isOpen={modal_withdraw_active_deposit}
                                      toggle={() => {
                                        tog_withdraw_active_deposit();
                                      }}
                                      centered
                                    >
                                      <div className="modal-body">
                                        <Form>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleWithdrawDepositSelect}>
                                                <option hidden>Select Market</option>
                                                {[...new Map(activeDepositsData.map((item: any) => [item['market'], item])).values()].map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.market.toUpperCase()]}>{EventMap[asset.market.toUpperCase()]}</option>
                                                })}
                                              </select>
                                            </Col>
                                          </div>
                                          <div className="row mb-4">
                                            <Col sm={12}>
                                              <select className="form-select" onChange={handleWithdrawDepositTime}>
                                                <option hidden>Minimum Commitment Period</option>
                                                {activeDepositsData.filter((asset) => {
                                                  return (EventMap[asset.market.toUpperCase()] === withdrawDepositSel)
                                                })
                                                  .map(item => item['commitment'])
                                                  .filter((value, index, self) => self.indexOf(value) === index)
                                                  .map((asset, key) => {
                                                    return <option key={key} value={asset}>{EventMap[asset]}</option>
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
                                                onChange={(event) => { inputVal1 = Number(event.target.value) }}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              color="primary"
                                              className="w-md"
                                              disabled={isTransactionDone}
                                              onClick={handleWithdrawDeposit}
                                            >
                                              {!isTransactionDone ? 'Withdraw Deposit' : <Spinner>Loading...</Spinner>}

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

                    //   :

                    //   /* -------------------------------------- DEPOSIT ----------------------------- */
                  }
                </Card>
              </Col>
              : null}


            <Col xl={customActiveTab === '2' ? "8" : "12"}>
              <Card>
                <CardBody>
                  <Nav tabs className="nav-tabs-custom">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleCustom("1");
                        }}
                      >
                        <span className="d-none d-sm-block">Dashboard</span>
                      </NavLink>
                    </NavItem>
                    {account ? (
                      <><NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "2",
                          })}
                          onClick={() => {
                            toggleCustom("2");
                          }}
                        >
                          <span className="d-none d-sm-block">Passbook</span>
                        </NavLink>
                      </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: customActiveTab === "3",
                            })}
                            onClick={() => {
                              toggleCustom("3");
                            }}
                          >
                            <span className="d-none d-sm-block">Liquidation</span>
                          </NavLink>
                        </NavItem></>) : null}
                  </Nav>

                  <TabContent
                    activeTab={customActiveTab}
                    className="p-1"
                  >

                    {/* ------------------------------------- DASHBOARD ----------------------------- */}

                    <TabPane tabId="1">
                      <div className="table-responsive" style={{ paddingTop: "12px" }}>
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr style={{ borderStyle: "hidden" }}>
                              <th scope="col">Markets</th>
                              <th scope="col">Savings Interest</th>
                              <th scope="col">Borrow Interest</th>
                              <th scope="col">Deposit</th>
                              <th scope="col" colSpan={2}>Borrow</th>
                            </tr>
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">
                                <select className="form-select form-select-sm" onChange={handleDepositInterestChange}>
                                  <option hidden>Commitment</option>
                                  <option value={"NONE"}>None</option>
                                  <option value={"TWOWEEKS"}>Two Weeks</option>
                                  <option value={"ONEMONTH"}>One Month</option>
                                  <option value={"THREEMONTHS"}>Three Month</option>
                                </select>
                              </th>
                              <th scope="col">
                                <select className="form-select form-select-sm" onChange={handleBorrowInterestChange}>
                                  <option hidden>Commitment</option>
                                  <option value={"NONE"}>None</option>
                                  <option value={"ONEMONTH"}>One Month</option>
                                </select>
                              </th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <DashboardTBody isloading={isLoading} depositInterestChange={depositInterestChange}
                              borrowInterestChange={borrowInterestChange}></DashboardTBody>
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>

                    {/* -------------------------------------- PASSBOOK ----------------------------- */}

                    <TabPane tabId="2">
                      <div className="row justify-content-end" style={{ paddingTop: "12px" }}>
                        <Col sm={3}>
                          <select className="form-select form-select-sm" onChange={(e) => passbookActive(e)}>
                            <option value={"ActiveDeposit"}>Active Deposits</option>
                            <option value={"ActiveLoan"}>Active Loans</option>
                            {/* <option value={"InactiveLoan"}>Inactive loans</option>
                            <option value={"InactiveDeposit"}>Inactive deposits</option> */}
                          </select>
                        </Col>
                      </div>
                      {passbookStatus === false ?

                        // Active Loan
                        <div className="table-responsive">
                          <Table className="table table-nowrap align-middle mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Loan Market</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Commitment</th>
                                <th scope="col">Collateral Market</th>
                                <th scope="col">Amount</th>
                                {/* <th scope="col" colSpan={2}>Interest</th> */}
                              </tr>
                            </thead>

                            <tbody>
                              <PassbookTBody isloading={isLoading} assets={activeLoansData}></PassbookTBody>
                            </tbody>
                          </Table>
                        </div>

                        :

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
                              {Array.isArray(activeDepositsData) && activeDepositsData.length > 0 ? activeDepositsData.map((asset, key) => (
                                <tr key={key}>
                                  <th scope="row">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-xs me-3">
                                        <span
                                          className={
                                            "avatar-title rounded-circle bg-soft bg-" +
                                            asset.color +
                                            " text-" +
                                            asset.color +
                                            " font-size-18"
                                          }
                                        >
                                          <i className={CoinClassNames[EventMap[asset.market.toUpperCase()]] || asset.market.toUpperCase()} />
                                        </span>
                                      </div>
                                      <span>{EventMap[asset.market.toUpperCase()]}</span>
                                    </div>
                                  </th>
                                  <td>
                                    <div className="text-muted">{EventMap[asset.commitment]}</div>
                                  </td>
                                  <td>
                                    <div className="text-muted">{BNtoNum(Number(asset.amount), DecimalsMap[asset.market.toUpperCase()])}</div>
                                  </td>
                                  {/* <td>
                                    <div className="text-muted">{Number(asset.acquiredYield).toFixed(3)}</div>
                                  </td>  */}
                                </tr>
                              )) : <tr align="center"><td colSpan={5}>No Records Found.</td></tr>}
                            </tbody>
                          </Table>
                        </div>
                      }
                    </TabPane>

                    {/* -------------------------------------- LIQUIDATION ----------------------------- */}

                    <TabPane tabId="3">
                      <div className="row justify-content-end" style={{ paddingTop: "12px" }}>
                        <p>This section is under construction. Check again in a few days</p>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </React.Fragment >
  );
};

export default Dashboard;
