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
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import { markets, symbols, decimals, comit_ONEMONTH, comit_TWOWEEKS } from '../blockchain/constants';
import { ellipseAddress } from '../util/blockchain';
import BorrowBalance from "../components/BorrowBalance";
import DepositBalance from "../components/DepositBalance";
import { BNtoNum } from '../blockchain/utils';

const assets = [
  {
    assetId: 0,
    assetName: 'USDT.t',
    AssetFullname: "USD Tether",
    APY: 15,
    icon: "mdi mdi-litecoin",
    color: "info",
    title: "USDT",
    investRate: "0.0682",
    investPrice: "2936.14",
    price: "3726.06",
    loansRate: "0.0234",
    loansPrice: "523.17",
    totalRate: "0.0823",
    totalPrice: "3254.23",
  },
  {
    assetId: 1,
    assetName: 'USDC.t',
    AssetFullname: "USD Coin",
    APY: 18,
    icon: "mdi mdi-ethereum",
    color: "primary",
    title: "USDC",
    investRate: "0.0814",
    investPrice: "3256.29",
    price: "4235.78",
    loansRate: "0.0253",
    loansPrice: "675.04",
    totalRate: "0.0921",
    totalPrice: "4536.24",
  },
  {
    assetId: 2,
    assetName: 'BTC.t',
    AssetFullname: "Bitcoin",
    APY: 18,
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
  }
];

const HashstackCrypto = props => {

  // useEffect(() => {
  //   fetch('data.json',  { headers: {
  //     'Accept': 'application/json'
  //   }})
  //   .then((results ) => {
  //     debugger;
  //     return results.json();})
  //   .then(data => {
  //     debugger;
  //     console.log(data);
  //   });
  // });

  const [isMenu, setIsMenu] = useState(false);
  const [assets, setAssets] = useState([]);
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const [passbookStatus, setPassbookStatus] = useState(false)
  const [modal_deposit1, setmodal_deposit1] = useState(false);
  const [modal_deposit2, setmodal_deposit2] = useState(false);
  const [modal_deposit3, setmodal_deposit3] = useState(false);
  const [modal_borrow1, setmodal_borrow1] = useState(false);
  const [modal_borrow2, setmodal_borrow2] = useState(false);
  const [modal_borrow3, setmodal_borrow3] = useState(false);
  const [modal_repay_loan, setmodal_repay_loan] = useState(false);
  const [modal_withdraw_loan, setmodal_withdraw_loan] = useState(false);
  const [modal_swap_loan, setmodal_swap_loan] = useState(false);
  const [modal_swap_to_loan, setmodal_swap_to_loan] = useState(false);
  const [modal_add_collateral, setmodal_add_collateral] = useState(false);
  const [modal_withdraw_collateral, setmodal_withdraw_collateral] = useState(false);
  const [modal_add_active_deposit, setmodal_add_active_deposit] = useState(false);
  const [modal_withdraw_active_deposit, setmodal_withdraw_active_deposit] = useState(false);

  let inputVal1 = 0;
  let inputVal2 = 0;

  let swapTo = 0;
  let swapAmount = 0;

  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

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
  function tog_center1() {
    setmodal_deposit1(!modal_deposit1);
    removeBodyCss();
  }
  function tog_center2() {
    setmodal_deposit2(!modal_deposit2);
    removeBodyCss();
  }
  function tog_center3() {
    setmodal_deposit3(!modal_deposit3);
    removeBodyCss();
  }
  function tog_borrow1() {
    setmodal_borrow1(!modal_borrow1);
    removeBodyCss();
  }
  function tog_borrow2() {
    setmodal_borrow2(!modal_borrow2);
    removeBodyCss();
  }
  function tog_borrow3() {
    setmodal_borrow3(!modal_borrow3);
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
  function tog_add_active_deposit() {
    setmodal_add_active_deposit(!modal_add_active_deposit);
    removeBodyCss();
  }
  function tog_withdraw_active_deposit() {
    setmodal_withdraw_active_deposit(!modal_withdraw_active_deposit);
    removeBodyCss();
  }

  const DepositData1 = (props) => {

    useEffect(() => {
      wrapper?.getDepositInstance().deposit.on("DepositAdded", onDeposit);
      wrapper?.getDepositInstance().deposit.on("Withdrawal", onWithdrawal)
    });

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
      <>
        <button
          type="button"
          className="btn btn-dark btn-sm w-xs"
          onClick={() => {
            tog_center1();
          }}
        >
          Deposit
        </button>
        <Modal
          isOpen={modal_deposit1}
          toggle={() => {
            tog_center1();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>USDT</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = Number(event.target.value) }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="commitment"
                      placeholder="Commitment"
                      defaultValue={"Two Weeks"}
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
                    color="primary"
                    className="w-md"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
  }

  const DepositData2 = (props) => {

    useEffect(() => {
      wrapper?.getDepositInstance().deposit.on("DepositAdded", onDeposit);
      wrapper?.getDepositInstance().deposit.on("Withdrawal", onWithdrawal)
    });

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
      <>
        <button
          type="button"
          className="btn btn-dark btn-sm w-xs"
          onClick={() => {
            tog_center2();
          }}
        >
          Deposit
        </button>
        <Modal
          isOpen={modal_deposit2}
          toggle={() => {
            tog_center2();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>USDC</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = Number(event.target.value) }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="commitment"
                      placeholder="Commitment"
                      defaultValue={"Two Weeks"}
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
                    color="primary"
                    className="w-md"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
  }

  const DepositData3 = (props) => {

    useEffect(() => {
      wrapper?.getDepositInstance().deposit.on("DepositAdded", onDeposit);
      wrapper?.getDepositInstance().deposit.on("Withdrawal", onWithdrawal)
    });

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
      <>
        <button
          type="button"
          className="btn btn-dark btn-sm w-xs"
          onClick={() => {
            tog_center3();
          }}
        >
          Deposit
        </button>
        <Modal
          isOpen={modal_deposit3}
          toggle={() => {
            tog_center3();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>BTC</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = Number(event.target.value) }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="commitment"
                      placeholder="Commitment"
                      defaultValue={"Two Weeks"}
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
                    color="primary"
                    className="w-md"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
  }


  const handleDeposit = async () => {
    try {
      const tx = await wrapper?.getDepositInstance().createDeposit(symbols[0], comit_TWOWEEKS, inputVal1, decimals[0]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const handleBorrow = async () => {
    try {
      const tx = await wrapper?.getDepositInstance().withdrawDeposit(symbols[0], comit_TWOWEEKS, inputVal1, decimals[0]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const onLoanRequested = (data) => {
    let amount = BNtoNum(Number(data.amount))
    alert("Requested amount: " + amount);
    console.log(data);
  }

  const handleRepay = async () => {
    try {
      const tx = await wrapper?.getLoanInstance().repayLoan(symbols[0], comit_ONEMONTH, inputVal1, decimals[0]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const handleWithdrawLoan = async () => {
    try {
      const tx = await wrapper?.getLoanInstance().pause();
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const onCollateralReleased = (data) => {
    let amount = BNtoNum(Number(data.amount))
    alert("Collateral amount released: " + amount);
    console.log(data);
  }

  const handleCollateral = async () => {
    try {
      const tx = await wrapper?.getLoanInstance().addCollateral(symbols[0], comit_ONEMONTH, symbols[0], inputVal1, decimals[0]);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  const handleWithdrawCollateral = async () => {
    try {
      const tx = await wrapper?.getLoanInstance().withdrawCollateral(symbols[0], comit_ONEMONTH);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      alert(err.message)
    }
  }

  

  const onCollateralAdded = (data) => {
    let amount = BNtoNum(Number(data.amount))
    alert("Collateral amount added: " + amount);
    console.log(data);
  }

  const handleSwap = async() => {
      console.log("Swap ", symbols[0], comit_ONEMONTH, symbols[1]);
      try {
        const tx = await wrapper?.getLoanInstance().swapLoan(symbols[0], comit_ONEMONTH, symbols[1]);
      } catch(err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

  const handleSwapToLoan = async() => {
        console.log("Swap ", symbols[props.assetID], comit_ONEMONTH, symbols[swapTo]);
        try {
          const tx = await wrapper?.getLoanInstance().swapToLoan(symbols[0], comit_ONEMONTH, symbols[1]);
        } catch(err) {
          console.error("ERROR MESSAGE: ", err.message)
          alert(err.message)
        }
      }

  const BorrowData1 = (props) => {

    useEffect(() => {
      wrapper?.getLoanInstance().loan1.on("NewLoan", onLoanRequested);
      wrapper?.getLoanInstance().loan1.on("AddCollateral", onCollateralAdded)
      wrapper?.getLoanInstance().loan.on("CollateralReleased", onCollateralReleased);
      // wrapper?.getLoanInstance().loan.on("MarketSwapped", (data) => {
      //   alert(data)
      // })
    });

    const handleBorrow = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().loanRequest(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID], symbols[props.assetID], inputVal2, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onLoanRequested = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Requested amount: " + amount);
      console.log(data);
    }

    const handleRepay = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().repayLoan(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralReleased = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount released: " + amount);
      console.log(data);
    }

    const handleCollateral = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().addCollateral(symbols[props.assetID], comit_ONEMONTH, symbols[props.assetID], inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralAdded = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount added: " + amount);
      console.log(data);
    }

    return (
      <>
        <button
          type="button"
          className="btn btn-secondary btn-sm w-xs"
          onClick={() => {
            tog_borrow1();
          }}
        >
          Borrow
        </button>
        <Modal
          isOpen={modal_borrow1}
          toggle={() => {
            tog_borrow1();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>{props.title}</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="horizontal-password-Input"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = event.target.value }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" placeholder="Borrow Type">
                      <option>Borrow Type</option>
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      onChange={(event) => { inputVal2 = event.target.value }}
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
                    color="primary"
                    className="w-md"
                    onClick={handleBorrow}
                  >
                    Request Loan
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
  }

  const BorrowData2 = (props) => {

    useEffect(() => {
      wrapper?.getLoanInstance().loan1.on("NewLoan", onLoanRequested);
      wrapper?.getLoanInstance().loan1.on("AddCollateral", onCollateralAdded)
      wrapper?.getLoanInstance().loan.on("CollateralReleased", onCollateralReleased);
      // wrapper?.getLoanInstance().loan.on("MarketSwapped", (data) => {
      //   alert(data)
      // })
    });

    const handleBorrow = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().loanRequest(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID], symbols[props.assetID], inputVal2, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onLoanRequested = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Requested amount: " + amount);
      console.log(data);
    }

    const handleRepay = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().repayLoan(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralReleased = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount released: " + amount);
      console.log(data);
    }

    const handleCollateral = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().addCollateral(symbols[props.assetID], comit_ONEMONTH, symbols[props.assetID], inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralAdded = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount added: " + amount);
      console.log(data);
    }

    return (
      <>
        <button
          type="button"
          className="btn btn-secondary btn-sm w-xs"
          onClick={() => {
            tog_borrow2();
          }}
        >
          Borrow
        </button>
        <Modal
          isOpen={modal_borrow2}
          toggle={() => {
            tog_borrow2();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>{props.title}</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="horizontal-password-Input"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = event.target.value }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" placeholder="Borrow Type">
                      <option>Borrow Type</option>
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      onChange={(event) => { inputVal2 = event.target.value }}
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
                    color="primary"
                    className="w-md"
                    onClick={handleBorrow}
                  >
                    Request Loan
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
  }

  const BorrowData3 = (props) => {

    useEffect(() => {
      wrapper?.getLoanInstance().loan1.on("NewLoan", onLoanRequested);
      wrapper?.getLoanInstance().loan1.on("AddCollateral", onCollateralAdded)
      wrapper?.getLoanInstance().loan.on("CollateralReleased", onCollateralReleased);
      // wrapper?.getLoanInstance().loan.on("MarketSwapped", (data) => {
      //   alert(data)
      // })
    });

    const handleBorrow = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().loanRequest(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID], symbols[props.assetID], inputVal2, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onLoanRequested = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Requested amount: " + amount);
      console.log(data);
    }

    const handleRepay = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().repayLoan(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralReleased = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount released: " + amount);
      console.log(data);
    }

    const handleCollateral = async () => {
      try {
        const tx = await wrapper?.getLoanInstance().addCollateral(symbols[props.assetID], comit_ONEMONTH, symbols[props.assetID], inputVal1, decimals[props.assetID]);
      } catch (err) {
        console.error("ERROR MESSAGE: ", err.message)
        alert(err.message)
      }
    }

    const onCollateralAdded = (data) => {
      let amount = BNtoNum(Number(data.amount))
      alert("Collateral amount added: " + amount);
      console.log(data);
    }

    return (
      <>
        <button
          type="button"
          className="btn btn-secondary btn-sm w-xs"
          onClick={() => {
            tog_borrow3();
          }}
        >
          Borrow
        </button>
        <Modal
          isOpen={modal_borrow3}
          toggle={() => {
            tog_borrow3();
          }}
          centered
        >
          <div className="modal-body">
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>{props.title}</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="text"
                      className="form-control"
                      id="horizontal-password-Input"
                      placeholder="Amount"
                      onChange={(event) => { inputVal1 = event.target.value }}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" placeholder="Borrow Type">
                      <option>Borrow Type</option>
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BTC</option>
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
                      onChange={(event) => { inputVal2 = event.target.value }}
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
                    color="primary"
                    className="w-md"
                    onClick={handleBorrow}
                  >
                    Request Loan
                  </Button>
                </div>
              </Form>
              : <h2>You are not connected to your wallet.</h2>}
          </div>
        </Modal>
      </>
    )
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
                {customActiveTab == 2 ?

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
                                                onChange={(event) => {inputVal1 = event.target.value}}
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
                                                onChange={(event) => {inputVal1 = event.target.value}}
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
                                              onChange={(event) => {inputVal1 = event.target.value}}
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
                                      Add Deposit
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
                                              <select className="form-select">
                                                <option selected disabled>Deposit market</option>
                                                <option>BTC</option>
                                                <option>BTC</option>
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
                                                onChange={(event) => {inputVal1 = event.target.value}}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              // type="submit"
                                              color="primary"
                                              className="w-md"
                                              onClick={handleBorrow}
                                            >
                                              Deposit
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
                                      Withdraw
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
                                              <select className="form-select">
                                                <option selected disabled>Deposit market</option>
                                                <option>BTC</option>
                                                <option>BTC</option>
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
                                                onChange={(event) => {inputVal1 = event.target.value}}
                                              />
                                            </Col>
                                          </div>

                                          <div className="d-grid gap-2">
                                            <Button
                                              // type="submit"
                                              color="primary"
                                              className="w-md"
                                              onClick={handleDeposit}
                                            >
                                              Withdraw
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
                  </CardBody>
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
                            <tr key={0}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-xs me-3">
                                    <span
                                      className={
                                        "avatar-title rounded-circle bg-soft bg-" +
                                        "info" +
                                        " text-" +
                                        "info" +
                                        " font-size-18"
                                      }
                                    >
                                      <i className={"mdi mdi-litecoin"} />
                                    </span>
                                  </div>
                                  <span>{"USDT"}</span>
                                </div>
                              </th>
                              <td>
                                <div className="text-muted">$ {"60%"}</div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  {"60%"}
                                </div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  {"0.61"}
                                </div>
                              </td>
                              <td style={{ width: "120px" }}>
                                <DepositData1 assetID={0} title={'USDT'} />
                              </td>
                              <td style={{ width: "120px" }}>
                                <BorrowData1 assetID={0} title={'USDT'} />
                              </td>
                            </tr>
                            <tr key={1}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-xs me-3">
                                    <span
                                      className={
                                        "avatar-title rounded-circle bg-soft bg-" +
                                        "primary" +
                                        " text-" +
                                        "primary" +
                                        " font-size-18"
                                      }
                                    >
                                      <i className={"mdi mdi-ethereum"} />
                                    </span>
                                  </div>
                                  <span>{"USDC"}</span>
                                </div>
                              </th>
                              <td>
                                <div className="text-muted">$ {"60%"}</div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  ${"60%"}
                                </div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  ${"0.61"}
                                </div>
                              </td>
                              <td style={{ width: "120px" }}>
                                <DepositData2 assetID={1} title={'USDC'} />
                              </td>
                              <td style={{ width: "120px" }}>
                                <BorrowData2 assetID={1} title={'USDC'} />
                              </td>
                            </tr>
                            <tr key={2}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-xs me-3">
                                    <span
                                      className={
                                        "avatar-title rounded-circle bg-soft bg-" +
                                        "warning" +
                                        " text-" +
                                        "warning" +
                                        " font-size-18"
                                      }
                                    >
                                      <i className={"mdi mdi-ethereum"} />
                                    </span>
                                  </div>
                                  <span>{"BTC"}</span>
                                </div>
                              </th>
                              <td>
                                <div className="text-muted">$ {"60%"}</div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  ${"60%"}
                                </div>
                              </td>
                              <td>
                                <div className="text-muted">
                                  ${"0.61"}
                                </div>
                              </td>
                              <td style={{ width: "120px" }}>
                                <DepositData3 assetID={2} title={'BTC'} />
                              </td>
                              <td style={{ width: "120px" }}>
                                <BorrowData3 assetID={2} title={'BTC'} />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>

                    {/* -------------------------------------- PASSBOOK ----------------------------- */}

                    <TabPane tabId="2">
                      <div className="row justify-content-end" style={{ paddingTop: "12px" }}>
                        <Col sm={3}>
                          <select className="form-select form-select-sm" onChange={(e) => passbookActive(e)}>
                            <option value={"ActiveLoan"}>Active loans</option>
                            <option value={"ActiveDeposit"}>Active deposits</option>
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

                        :

                        // Active Deposits
                        <div className="table-responsive">
                          <Table className="table table-nowrap align-middle mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Deposit Market</th>
                                <th scope="col">Commitment</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Savings Interest</th>
                                <th scope="col" colSpan="2">Interest earned</th>
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
                                    <div className="text-muted">$ {asset.totalRate} days</div>
                                  </td>
                                  <td>
                                    <div className="text-muted">$ {asset.totalPrice}</div>
                                  </td>
                                  <td>
                                    <div className="text-muted">$ {asset.investRate}</div>
                                  </td>
                                  <td>
                                    <div className="text-muted">$ {asset.loansRate} </div>
                                  </td>
                                </tr>
                              ))}
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

export default HashstackCrypto;
