import React, { useState, useEffect, useContext } from "react";
import MetaTags from "react-meta-tags";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
import Select from "react-select";
import classnames from "classnames";
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';

const HashstackCrypto = props => {
  const [assets] = useState([
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
    {
      icon: "mdi mdi-litecoin",
      color: "info",
      title: "LTC",
      investRate: "0.0682",
      investPrice: "2936.14",
      price: "3726.06",
      loansRate: "0.0234",
      loansPrice: "523.17",
      totalRate: "0.0823",
      totalPrice: "3254.23",
    },
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
  ]);

  const [isMenu, setIsMenu] = useState(false);
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const [modal_deposit, setmodal_deposit] = useState(false);
  const [modal_borrow, setmodal_borrow] = useState(false);
  const [modal_repay_loan, setmodal_repay_loan] = useState(false);
  const [modal_withdraw_loan, setmodal_withdraw_loan] = useState(false);
  const [modal_swap_loan, setmodal_swap_loan] = useState(false);
  const [modal_swap_to_loan, setmodal_swap_to_loan] = useState(false);
  const [modal_add_collateral, setmodal_add_collateral] = useState(false);
  const [modal_withdraw_collateral, setmodal_withdraw_collateral] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  function tog_center() {
    setmodal_deposit(!modal_deposit);
    removeBodyCss();
  }
  function tog_borrow() {
    setmodal_borrow(!modal_borrow);
    removeBodyCss();
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

  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  useEffect(() => {
    wrapper?.getDepositInstance().deposit.on("NewDeposit", onDeposit);
    wrapper?.getDepositInstance().deposit.on("Withdrawal", onWithdrawal)
  }, []);

  const handleDeposit = async () => {
    try {
      const tx = await wrapper?.getDepositInstance().createDeposit(symbols[props.assetID], comit_TWOWEEKS, inputVal1, decimals[props.assetID]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const onDeposit = (data) => {
    let amount = BNtoNum(Number(data.amount))
    alert("Deposited amount: " + amount);
    console.log(data);
  }

  const handleWithdraw = async () => {
    try {
      const tx = await wrapper?.getDepositInstance().withdrawDeposit(symbols[props.assetID], comit_TWOWEEKS, inputVal1, 0, decimals[props.assetID]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const onWithdrawal = (data) => {
    let amount = BNtoNum(Number(data.amount));
    alert("Withdrawal amount: " + amount);
    console.log(data);
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
                {customActiveTab == 2 ?

                  /* -------------------------------------- REPAY ----------------------------- */

                  <CardBody>
                    <form>
                      <div className="mb-4 me-3">
                        <h4 className="card-title mb-4">Repay</h4>
                      </div>

                      {/* ----------------------- Loan Actions ----------------------- */}

                      <div className="mb-4 ">
                        <Label>Loan actions</Label>
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
                                          <select className="form-select">
                                            <option selected disabled>Loan market</option>
                                            <option>BTC</option>
                                            <option>USDC</option>
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
                                          />
                                        </Col>
                                      </div>

                                      <div className="d-grid gap-2">
                                        <Button
                                          type="submit"
                                          color="primary"
                                          className="w-md"
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
                                          <select className="form-select">
                                            <option selected disabled>Loan market</option>
                                            <option>BTC</option>
                                            <option>USDC</option>
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
                                          />
                                        </Col>
                                      </div>

                                      <div className="d-grid gap-2">
                                        <Button
                                          type="submit"
                                          color="primary"
                                          className="w-md"
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
                                        <select className="form-select">
                                          <option selected disabled>Loan market</option>
                                          <option>BTC</option>
                                          <option>USDC</option>
                                        </select>
                                      </Col>
                                    </div>
                                    <div className="row mb-4">
                                      <Col sm={12}>
                                        <select className="form-select">
                                          <option selected disabled>Swap Market</option>
                                          <option>BTC</option>
                                          <option>USDT</option>
                                        </select>
                                      </Col>
                                    </div>

                                    <div className="d-grid gap-2">
                                      <Button
                                        type="submit"
                                        color="primary"
                                        className="w-md"
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
                                        <select className="form-select">
                                          <option selected disabled>Select Loan</option>
                                          <option>BTC</option>
                                          <option>USDC</option>
                                        </select>
                                      </Col>
                                    </div>
                                    <div className="row mb-4">
                                      <Col sm={12}>
                                        <select className="form-select">
                                          <option selected disabled>Select Market to Swap</option>
                                          <option>SXP</option>
                                          <option>REN</option>
                                        </select>
                                      </Col>
                                    </div>

                                    <div className="d-grid gap-2">
                                      <Button
                                        type="submit"
                                        color="primary"
                                        className="w-md"
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
                        <Label>Collateral actions</Label>
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
                                        <select className="form-select">
                                          <option selected disabled>Loan market</option>
                                          <option>BTC</option>
                                          <option>USDC</option>
                                        </select>
                                      </Col>
                                    </div>
                                    <div className="row mb-4">
                                      <Col sm={12}>
                                        <select className="form-select">
                                          <option selected disabled>Collateral market</option>
                                          <option>BTC</option>
                                          <option>USDT</option>
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
                                        />
                                      </Col>
                                    </div>

                                    <div className="d-grid gap-2">
                                      <Button
                                        type="submit"
                                        color="primary"
                                        className="w-md"
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
                                        <select className="form-select">
                                          <option selected disabled>Loan market</option>
                                          <option>BTC</option>
                                          <option>USDC</option>
                                        </select>
                                      </Col>
                                    </div>
                                    <div className="row mb-4">
                                      <Col sm={12}>
                                        <span>Collateral market</span>
                                      </Col>
                                    </div>

                                    <div className="d-grid gap-2">
                                      <Button
                                        type="submit"
                                        color="primary"
                                        className="w-md"
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

                  :

                  /* -------------------------------------- DEPOSIT ----------------------------- */

                  <CardBody>
                    <Dropdown
                      isOpen={isMenu}
                      toggle={toggleMenu}
                      className="float-end ms-2"
                    >
                      <DropdownToggle tag="a" className="text-muted">
                        <i className="mdi mdi-dots-horizontal font-size-18" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <div className="mb-4 me-3">
                      <h4 className="card-title mb-4">How Deposits work</h4>
                    </div>

                    <div>
                      <ul className="verti-timeline list-unstyled">
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-user-plus h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Register account</h5>
                                <p className="text-muted">
                                  New common language will be more simple and
                                  regular than the existing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-copy-alt h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Select Deposit</h5>
                                <p className="text-muted">
                                  To achieve this, it would be necessary to have
                                  uniform grammar.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-cloud-download h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Get Earnings</h5>
                                <p className="text-muted">
                                  New common language will be more simple and
                                  regular than the existing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </CardBody>}

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
                    <NavItem>
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
                              <th scope="col">Savings interest</th>
                              <th scope="col">Borrow interest</th>
                              <th scope="col">D2D</th>
                              <th scope="col">Deposit</th>
                              <th scope="col" colSpan="2">Borrow</th>
                            </tr>
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">
                                <select className="form-select form-select-sm">
                                  <option>One Week</option>
                                  <option>Two weeks</option>
                                  <option>Four weeks</option>
                                  <option>Twelve weeks</option>
                                </select>
                              </th>
                              <th scope="col">
                                <select className="form-select form-select-sm">
                                  <option>One Month</option>
                                  <option>Two Months</option>
                                </select>
                              </th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {assets.map((asset, key) => (
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
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </th>
                                <td>
                                  <div className="text-muted">$ {asset.price}</div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.investRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.investPrice}
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.loansRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.loansPrice}
                                  </div>
                                </td>
                                <td style={{ width: "120px" }}>
                                  <button
                                    type="button"
                                    className="btn btn-dark btn-sm w-xs"
                                    onClick={() => {
                                      tog_center();
                                    }}
                                  >
                                    Deposit
                                  </button>
                                  <Modal
                                    isOpen={modal_deposit}
                                    toggle={() => {
                                      tog_center();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-firstname-Input"
                                              placeholder="Market"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="number"
                                              className="form-control"
                                              id="horizontal-email-Input"
                                              placeholder="Amount"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-password-Input"
                                              placeholder="Commitment"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={6}>
                                            <p>fixed APY <strong>15%</strong></p>
                                          </Col>
                                          <Col sm={6}>
                                            <p style={{ float: "right" }}>fixed APY <strong>15%</strong></p>
                                          </Col>
                                        </div>
                                        <div className="d-grid gap-2">
                                          <Button
                                            type="submit"
                                            color="primary"
                                            className="w-md"
                                          >
                                            Deposit
                                          </Button>
                                        </div>
                                      </Form>
                                    </div>
                                  </Modal>
                                </td>
                                <td style={{ width: "120px" }}>
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm w-xs"
                                    onClick={() => {
                                      tog_borrow();
                                    }}
                                  >
                                    Borrow
                                  </button>
                                  <Modal
                                    isOpen={modal_borrow}
                                    toggle={() => {
                                      tog_borrow();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <h6>{asset.title}</h6>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-password-Input"
                                              placeholder="Amount"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select" placeholder="Borrow Type">
                                              <option>Borrow Type</option>
                                              <option>BTC</option>
                                              <option>USDC</option>
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <h6>Collateral</h6>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-select">
                                              <option selected disabled>Collateral market</option>
                                              <option>BTC</option>
                                              <option>USDT</option>
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
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={6}>
                                            <p>Borrow APR <strong>15%</strong></p>
                                          </Col>
                                          <Col sm={6}>
                                            <p style={{ float: "right" }}>Collateral APY <strong>0%</strong></p>
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            type="submit"
                                            color="primary"
                                            className="w-md"
                                          >
                                            Request Loan
                                          </Button>
                                        </div>
                                      </Form>
                                    </div>
                                  </Modal>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>

                    {/* -------------------------------------- PASSBOOK ----------------------------- */}

                    <TabPane tabId="2">
                      <div className="row justify-content-end" style={{ paddingTop: "12px" }}>
                        <Col sm={3}>
                          <select className="form-select form-select-sm">
                            <option>Active loans</option>
                            <option>Active deposits</option>
                            <option>Inactive loans</option>
                            <option>Inactive deposits</option>
                          </select>
                        </Col>
                      </div>
                      <div className="table-responsive">
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Loan Market</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Collateral Market</th>
                              <th scope="col">Amount</th>
                              <th scope="col" colSpan="2">Interest</th>
                            </tr>
                          </thead>
                          <tbody>
                            {assets.map((asset, key) => (
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
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </th>
                                <td>
                                  <div className="text-muted">$ {asset.price}</div>
                                </td>
                                <td>
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
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.investRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.investPrice}
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.loansRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.loansPrice}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HashstackCrypto;
