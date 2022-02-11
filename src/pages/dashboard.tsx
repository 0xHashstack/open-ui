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
} from "reactstrap";
import classnames from "classnames";
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import {
  EventMap, CoinClassNames,
  SymbolsMap, DecimalsMap, CommitMap
} from '../blockchain/constants';
import { BNtoNum, GetErrorText } from '../blockchain/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PassbookTBody from "./passbook-body";
import DashboardTBody from "./dashboard-body";
import WorkflowInfo from "./workflow-info";

toast.configure({
  autoClose: 4000
});


const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [activeDepositsData, setActiveDepositsData] = useState([]);
  const [activeLoansData, setActiveLoansData] = useState([]);


  const [customActiveTab, setCustomActiveTab] = useState("1");
  const [passbookStatus, setPassbookStatus] = useState(false)

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
  const [collateralOption, setCollateralOption] = useState();
  const [depositInterestChange, setDepositInterestChange] = useState("NONE");
  const [borrowInterestChange, setBorrowInterestChange] = useState("NONE");

  const [depositRequestSel, setDepositRequestSel] = useState();
  const [withdrawDepositSel, setWithdrawDepositSel] = useState();
  const [depositRequestVal, setDepositRequestVal] = useState();
  const [withdrawDepositVal, setWithdrawDepositVal] = useState();

  let inputVal1 = 0;

  const { account } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);

    account && axios({
      method: 'get',
      url: `getLoansByAccount?account=${account}`,
      withCredentials: false
    }).then(res => {
      setIsLoading(false);
      setActiveLoansData(res.data.data);
    })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      })
  }, [account]);

  useEffect(() => {
    account && axios({
      method: 'get',
      url: `getDepositsByAccount?account=${account}`,
      withCredentials: false
    }).then(res => {
      setIsLoading(false);
      setActiveDepositsData(res.data.data);
    })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      })

  }, [account]);

  useEffect(() => {
    wrapper?.getDepositInstance().deposit.on(EventMap.DEPOSIT_ADDED, depositAdded);
    wrapper?.getDepositInstance().deposit.on(EventMap.WITHDRAW_DEPOSIT, WithdrawalDeposit);

    wrapper?.getLoanInstance().loan.on(EventMap.ADD_COLLATERAL, onCollateralAdded);
    wrapper?.getLoanInstance().loan.on(EventMap.WITHDRAW_COLLATERAL, onCollateralReleased);

    wrapper?.getLoanInstance().loan.on(EventMap.WITHDRAW_LOAN, onLoanWithdrawal);
    wrapper?.getLoanInstance().loanExt.on(EventMap.REPAY_LOAN, onLoanRepay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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


  const handleRepay = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const market = SymbolsMap[_loanOption];
      const decimal = DecimalsMap[_loanOption];
      const comm = CommitMap[commit[0].commitment];
      await wrapper?.getLoanInstance().repayLoan(market, comm, inputVal1, decimal);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const handleWithdrawLoan = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;

      await wrapper?.getLoanInstance().permissibleWithdrawal(SymbolsMap[_loanOption], CommitMap[commit[0].commitment], inputVal1, DecimalsMap[_loanOption]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const onCollateralReleased = (data) => {
    let amount = BNtoNum(Number(data.amount))
    toast.success(`Collateral amount released: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }

  const handleCollateral = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _collateralOption: string | undefined =  collateralOption;
      await wrapper?.getLoanInstance().addCollateral(SymbolsMap[_loanOption], CommitMap[commit[0].commitment], SymbolsMap[_collateralOption], inputVal1, DecimalsMap[_loanOption]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const handleWithdrawCollateral = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      await wrapper?.getLoanInstance().withdrawCollateral(SymbolsMap[_loanOption], CommitMap[commit[0].commitment]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const handleSwap = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _swapOption: string | undefined =  swapOption;
      await wrapper?.getLoanInstance().swapLoan(SymbolsMap[_loanOption], CommitMap[commit[0].commitment], SymbolsMap[_swapOption]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const handleSwapToLoan = async () => {
    try {
      const commit = activeLoansData.filter((asset) => {
        return EventMap[asset.loanMarket.toUpperCase()] === loanOption;
      });
      const _loanOption: string | undefined =  loanOption;
      const _swapOption: string | undefined =  swapOption;
      await wrapper?.getLoanInstance().swapToLoan(SymbolsMap[_swapOption], CommitMap[commit[0].commitment], SymbolsMap[_loanOption]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }

  const handleDepositRequest = async () => {
    try {
      const _depositRequestSel: string | undefined =  depositRequestSel;
      const _depositRequestVal: string | undefined =  depositRequestVal;
      await wrapper?.getDepositInstance().depositRequest(SymbolsMap[_depositRequestSel.toUpperCase()], CommitMap[_depositRequestVal], inputVal1, DecimalsMap[_depositRequestSel.toUpperCase()]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }



  const handleWithdrawDeposit = async () => {
    try {
      const _withdrawDepositSel: string | undefined =  withdrawDepositSel;
      const _withdrawDepositVal: string | undefined =  withdrawDepositVal;
      await wrapper?.getDepositInstance().withdrawDeposit(SymbolsMap[_withdrawDepositSel.toUpperCase()], CommitMap[_withdrawDepositVal], inputVal1, DecimalsMap[_withdrawDepositSel.toUpperCase()]);
    } catch (err) {
      if (err instanceof Object) {
        toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      } else {
        toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }
  }


  const onCollateralAdded = (data) => {
    let amount = BNtoNum(Number(data.amount))
    toast.success(`Collateral amount added: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }

  // const onCollateralReleased = (data) => {
  //   let amount = BNtoNum(Number(data.amount))
  //   toast.success(`Collateral amount released: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  // }

  const onLoanWithdrawal = (data) => {
    let amount = BNtoNum(Number(data.amount))
    toast.success(`Loan Withdraw Successfully: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }

  const onLoanRepay = (data) => {
    let amount = BNtoNum(Number(data.amount))
    toast.success(`Loan Repaid Successfully: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }

  const depositAdded = (data) => {
    let amount = BNtoNum(Number(data.amount), DecimalsMap[data.market])
    toast.success(`Deposit Added: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }

  const WithdrawalDeposit = (data) => {
    let amount = BNtoNum(Number(data.amount), DecimalsMap[data.market])
    toast.success(`Deposit Withdrawn: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
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
        <Container fluid>
          <h5>OPEN PROTOCOL</h5>
          <br />

          <Row>
            <Col xl="4">
              <Card>
                {customActiveTab === '2' ?

                  passbookStatus === false ?
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
                                      outline
                                      onClick={() => {
                                        tog_repay_loan();
                                      }}
                                    >
                                      Repay Loan
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
                                                {activeLoansData.map((asset, key) => {
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
                                              onClick={handleRepay}
                                            >
                                              Repay
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
                                                {activeLoansData.map((asset, key) => {
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
                                              onClick={handleWithdrawLoan}
                                            >
                                              Withdraw Loan
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
                                    onClick={() => {
                                      tog_swap_loan();
                                    }}
                                  >
                                    Swap Loan
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
                                              {activeLoansData.map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
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
                                            onClick={handleSwap}
                                          >
                                            Swap Loan
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
                                    outline
                                    onClick={() => {
                                      tog_swap_to_loan();
                                    }}
                                  >
                                    Swap to Loan
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
                                              {activeLoansData.map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            color="primary"
                                            className="w-md"
                                            onClick={handleSwapToLoan}
                                          >
                                            Swap to Loan
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
                                    outline
                                    onClick={() => {
                                      tog_add_collateral();
                                    }}
                                  >
                                    Add Collateral
                                  </Button>
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
                                              {activeLoansData.map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" onChange={handleCollateralOptionChange}>
                                              <option hidden>Collateral Market</option>
                                              {activeLoansData.map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.collateralMarket.toUpperCase()]}>{EventMap[asset.collateralMarket.toUpperCase()]}</option>
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
                                            onClick={handleCollateral}
                                          >
                                            Add Collateral
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
                                    outline
                                    onClick={() => {
                                      tog_withdraw_collateral();
                                    }}
                                  >
                                    Withdraw Collateral
                                  </Button>
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
                                              {activeLoansData.map((asset, key) => {
                                                  return <option key={key} value={EventMap[asset.loanMarket.toUpperCase()]}>{EventMap[asset.loanMarket.toUpperCase()]}</option>
                                              })}
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <span>Collateral Market</span>
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            color="primary"
                                            className="w-md"
                                            onClick={handleWithdrawCollateral}
                                          >
                                            Withdraw Collateral
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
                                                {activeDepositsData.map((asset, key) => {
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
                                                }).map((asset, key) => {
                                                   return <option key={key} value={asset.commitment}>{EventMap[asset.commitment]}</option>
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
                                              // type="submit"
                                              color="primary"
                                              className="w-md"
                                              onClick={handleDepositRequest}
                                            >
                                              Add to Deposit
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
                                                {activeDepositsData.map((asset, key) => {
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
                                                }).map((asset, key) => {
                                                  return <option key={key} value={asset.commitment}>{EventMap[asset.commitment]}</option>
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
                                              // type="submit"
                                              color="primary"
                                              className="w-md"
                                              onClick={handleWithdrawDeposit}
                                            >
                                              Withdraw Deposit
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

                  :

                  /* -------------------------------------- DEPOSIT ----------------------------- */
                  
                  <WorkflowInfo />
                }

              </Card>
            </Col>

            <Col xl="8">
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
                            <DashboardTBody isloading={isLoading} depositInterestChange={depositInterestChange} borrowInterestChange={borrowInterestChange}></DashboardTBody>
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>

                    {/* -------------------------------------- PASSBOOK ----------------------------- */}

                    <TabPane tabId="2">
                      <div className="row justify-content-end" style={{ paddingTop: "12px" }}>
                        <Col sm={3}>
                          <select className="form-select form-select-sm" onChange={(e) => passbookActive(e)}>
                            <option value={"ActiveLoan"}>Active Loans</option>
                            <option value={"ActiveDeposit"}>Active Deposits</option>
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
                                <th scope="col">Collateral Market</th>
                                <th scope="col">Amount</th>
                                <th scope="col" colSpan={2}>Interest</th>
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
                                <th scope="col" colSpan={2}>Interest Earned</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeDepositsData.length > 0 ? activeDepositsData.map((asset, key) => (
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
                                    <div className="text-muted">{BNtoNum(Number(asset.amount), DecimalsMap[asset.market])}</div>
                                  </td>
                                  <td>
                                    <div className="text-muted">{Number(asset.acquiredYield).toFixed(3)}</div>
                                  </td> 
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