import { useState, useContext } from "react";

import {
  Col,
  Button,
  Form,
  Input,
  Modal,
  Spinner
} from "reactstrap";
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import {
  SymbolsMap, DecimalsMap, BorrowInterestRates, CommitMap
} from '../blockchain/constants';
import { BNtoNum, GetErrorText } from '../blockchain/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 4000
});

const Borrow = (props) => {

    const [commitBorrowPeriod, setCommitBorrowPeriod] = useState();
    const [collateralMarket, setCollateralMarket] = useState();
    const [modal_borrow, setmodal_borrow] = useState(false);
    const [isTransactionDone, setIsTransactionDone] = useState(false);

    const [loanInputVal, setLoanInputVal] = useState(0);
    const [collateralInputVal, setCollateralInputVal] = useState(0);
  
    const { connect, disconnect, account } = useContext(Web3ModalContext);
    const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);


    const handleBorrowChange = (e) => {
      setCommitBorrowPeriod(e.target.value)
    }

    const handleCollateralChange = (e) => {
      setCollateralMarket(e.target.value)
    }

    const handleLoanInputChange = (e) => {
      setLoanInputVal(Number(e.target.value));
    }

    const handleCollateralInputChange = (e) => {
      setCollateralInputVal(Number(e.target.value));
    }

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    function tog_borrow() {
        setmodal_borrow(!modal_borrow);
        removeBodyCss();
    }

    const handleBorrow = async () => {
      try {
        setIsTransactionDone(true);
        const _commitBorrowPeriod: string | undefined =  commitBorrowPeriod;
        const _collateralMarket: string | undefined =  collateralMarket;
        const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[_collateralMarket], collateralInputVal, DecimalsMap[_collateralMarket]);
        await approveTransactionHash.wait();
        console.log("Approve Transaction sent: ", approveTransactionHash);
        const tx1 = await wrapper?.getLoanInstance().loanRequest(SymbolsMap[props.assetID], CommitMap[_commitBorrowPeriod], loanInputVal, DecimalsMap[props.assetID],
        SymbolsMap[_collateralMarket], collateralInputVal, DecimalsMap[_collateralMarket]);
        const tx = await tx1.wait();
        onLoanRequested(tx.events);
      } catch (err) {
        setIsTransactionDone(false);
        toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
      }
    }

    const onLoanRequested = (data) => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "NewLoan") {
        eventName = e.event
        _amount = e.args.loanAmount.toBigInt()
      }
    })

    let amount = BNtoNum(_amount, 8)
      setIsTransactionDone(false);
      // const res = data['NewLoan']['returnValues'];
      // let amount = BNtoNum(Number(res.loanAmount), DecimalsMap[res.market]);
      toast.success(`Requested amount: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }

    return (
      <>
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
                      onChange={handleLoanInputChange}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" placeholder="Commitment" onChange={handleBorrowChange}>
                      <option hidden>Commitment</option>
                      <option value={"NONE"}>None</option>
                      <option value={"ONEMONTH"}>One Month</option>
                    </select>
                  </Col>
                </div>
                <div className="row mb-4">
                  <h6>Collateral</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" onChange={handleCollateralChange}>
                      <option hidden>Collateral market</option>
                      <option value={"USDT"}>USDT</option>
                      <option value={"USDC"}>USDC</option>
                      <option value={"BTC"}>BTC</option>
                      <option value={"BNB"}>BNB</option>
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
                      onChange={handleCollateralInputChange}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={6}>
                    <p>Borrow APR <strong>{BorrowInterestRates[commitBorrowPeriod || "NONE"] || '15%'}</strong></p>
                  </Col>
                  <Col sm={6}>
                    <p style={{ float: "right" }}>Collateral APY <strong>0%</strong></p>
                  </Col>
                </div>

                <div className="d-grid gap-2">
                  <Button
                    color="primary"
                    className="w-md"
                    disabled={commitBorrowPeriod === undefined || isTransactionDone}
                    onClick={handleBorrow}
                  >
                    {!isTransactionDone ? 'Request Loan' : <Spinner>Loading...</Spinner>}
                  </Button>
                </div>
              </Form>
              : <h2>Please connect your wallet</h2>}
          </div>
        </Modal>
      </>
    )
  }


  export default Borrow;