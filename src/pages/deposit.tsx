import { useState, useContext} from "react";
import {
  Col,
  Button,
  Form,
  Input,
  Modal,
  Spinner
} from "reactstrap";

import {
  SymbolsMap, DecimalsMap, DepositInterestRates, CommitMap, VariableDepositInterestRates, MinimumAmount
} from '../blockchain/constants';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import { BNtoNum, GetErrorText } from '../blockchain/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 4000
});

const Deposit = (props) => {

    const [commitPeriod, setCommitPeriod] = useState();
    const [modal_deposit, setmodal_deposit] = useState(false);
    const [inputVal, setInputVal] = useState(0);
    const [isTransactionDone, setIsTransactionDone] = useState(false);
  
  
    const { connect, disconnect, account } = useContext(Web3ModalContext);
    const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

    const handleDepositChange = (e) => {
      setCommitPeriod(e.target.value)
    }

    const handleInputChange = (e) => {
      setInputVal(Number(e.target.value));
    }

    function removeBodyCss() {
      document.body.classList.add("no_padding");
    }

    function tog_center() {
      setmodal_deposit(!modal_deposit);
      removeBodyCss();
    }

    const handleDeposit = async () => {
      try {
        setIsTransactionDone(true);
        const approveTransactionHash = await wrapper?.getMockBep20Instance().approve(SymbolsMap[props.asset], inputVal, DecimalsMap[props.asset]);
        console.log("Approve Transaction sent: ", approveTransactionHash);
        const _commitPeriod: string | undefined =  commitPeriod;
        const tx = await wrapper?.getDepositInstance().depositRequest(SymbolsMap[props.asset], CommitMap[_commitPeriod], inputVal, DecimalsMap[props.asset]);
        console.log(tx);
        onDeposit(tx.events);
      } catch (err) {
        setIsTransactionDone(false);
        if (err instanceof Object) {
          toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
        } else {
          toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
        }
      }
    }

    const onDeposit = (data) => {
      setIsTransactionDone(false);
      const res = data['DepositAdded'] ? data['DepositAdded']['returnValues'] : data['NewDeposit']['returnValues'];
      let amount = BNtoNum(Number(res.amount),DecimalsMap[res.market]);
      toast.success(`Deposited amount: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
    }


    return (
      <>
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
            {account ?
              <Form>
                <div className="row mb-4">
                  <h6>{props.asset}</h6>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <Input
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder={`Min amount should be greater than ${MinimumAmount[props.asset]}`}
                      onChange={handleInputChange}
                    />
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={12}>
                    <select className="form-select" placeholder="Commitment" onChange={handleDepositChange}>
                      <option hidden>Commitment</option>
                      <option value={"NONE"}>None</option>
                      <option value={"TWOWEEKS"}>Two Weeks</option>
                      <option value={"ONEMONTH"}>One Month</option>
                      <option value={"THREEMONTHS"}>Three Months</option>
                    </select>
                  </Col>
                </div>
                <div className="row mb-4">
                  <Col sm={6}>
                    <p>Fixed APY <strong>{DepositInterestRates[commitPeriod || "NONE"] || "7.8%"}</strong></p>
                  </Col>
                  <Col sm={6}>
                    <p style={{ float: "right" }}>Variable APY <strong>{VariableDepositInterestRates[commitPeriod || "NONE"] || "0%"}</strong></p>
                  </Col>
                </div>
                <div className="d-grid gap-2">
                  <Button
                    color="primary"
                    className="w-md"
                    disabled={commitPeriod === undefined || isTransactionDone }
                    onClick={handleDeposit}
                  >
                    {!isTransactionDone ? 'Deposit' : <Spinner>Loading...</Spinner>}
                  </Button>
                </div>
              </Form>
              : <h2>Please connect your wallet</h2>}
          </div>
        </Modal>
      </>
    )
  }

  export default Deposit;