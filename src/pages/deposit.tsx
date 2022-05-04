import { useState, useContext } from "react"
import { Col, Button, Form, Input, Modal, Spinner, InputGroup } from "reactstrap"

import {
  SymbolsMap,
  marketDataOnChain,
  DepositInterestRates,
  CommitMap,
  VariableDepositInterestRates,
  MinimumAmount,
} from "../blockchain/constants"
import { Web3ModalContext } from "../contexts/Web3ModalProvider"
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider"
import { BNtoNum, GetErrorText, NumToBN } from "../blockchain/utils"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import React from "react"

toast.configure({
  autoClose: 4000,
})

let Deposit = props => {
  const [commitPeriod, setCommitPeriod] = useState()
  const [modal_deposit, setmodal_deposit] = useState(false)
  const [inputVal, setInputVal] = useState(0)
  const [isTransactionDone, setIsTransactionDone] = useState(false)
  const { chainId, account } = useContext(Web3ModalContext)
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext)
  const [balance, setBalance] = useState(null)

  const handleDepositChange = e => {
    setCommitPeriod(e.target.value)
  }

  const handleInputChange = e => {
    setInputVal(Number(e.target.value))
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }


  const tog_center = async () => {
    setmodal_deposit(!modal_deposit)
    removeBodyCss()
    const getCurrentBalnce = await wrapper
      ?.getMockBep20Instance()
      .balanceOf(SymbolsMap[props.asset], account)
    setBalance(BNtoNum(Number(getCurrentBalnce)));
  }

  const handleMax = () => {
    if (balance) {
      setInputVal(balance)
    }
  }

  const handleDeposit = async () => {
    try {
      setIsTransactionDone(true)
      const approveTransactionHash = await wrapper
        ?.getMockBep20Instance() //SymbolsMap[the market name from dropdown]
        .approve(SymbolsMap[props.asset], inputVal, marketDataOnChain[chainId].DecimalsMap[props.asset])
      await approveTransactionHash.wait()
      console.log("Approve Transaction sent: ", approveTransactionHash)
      const _commitPeriod: string | undefined = commitPeriod

      const tx1 = await wrapper
        ?.getDepositInstance()
        .depositRequest(
          SymbolsMap[props.asset],
          CommitMap[_commitPeriod],
          inputVal,
          marketDataOnChain[chainId].DecimalsMap[props.asset]
        )
      const tx = await tx1.wait()
      onDeposit(tx.events)
    } catch (err) {
      setIsTransactionDone(false)
      toast.error(`${GetErrorText(err)}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true, })
    }
  }

  const onDeposit = data => {
    let eventName
    let _amount
    data.forEach(e => {
      if (e.event == "DepositAdded" || e.event == "NewDeposit") {
        eventName = e.event
        _amount = e.args.amount.toBigInt()
      }
    })
    setIsTransactionDone(false)
    let amount = BNtoNum(_amount, 8)
    toast.success(`Deposited amount: ${amount}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      closeOnClick: true,
    })
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-dark btn-sm w-xs"
        onClick={tog_center}
      >
        Deposit
      </button>
      <Modal
        isOpen={modal_deposit}
        toggle={() => {
          tog_center()
        }}
        centered
      >
        <div className="modal-body">
          {account ? (
            <Form>
              <div className="row mb-4">
                <Col sm={8}>
                  <h5> {props.asset}</h5>
                </Col>
                {/* <Col sm={4}></Col> */}
                <Col sm={4} >
                  <div align="right">Balance : {balance  ? balance : " Loading"}</div>
                </Col>

              </div>
              <div className="row mb-4">
                <Col sm={12}>
                  <InputGroup>
                    <Input
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder={`Minimum amount = ${MinimumAmount[props.asset]
                        }`}
                      onChange={handleInputChange}
                      value={inputVal !== 0 ? inputVal : `Minimum amount = ${MinimumAmount[props.asset]
                        }`}
                    />


                    {<Button
                      outline
                      type="button"
                      className="btn btn-md w-xs"
                      onClick={handleMax}
                      disabled={balance ? false : true}
                      style={{ background: "#2e3444", border: "#2e3444" }}
                    >
                      <span style={{ borderBottom: "2px dotted #fff"}}>Max</span>
                    </Button>
                    }
                  </InputGroup>
                </Col>
              </div>
              <div className="row mb-4">
                <Col sm={12}>
                  <select
                    className="form-select"
                    placeholder="Commitment"
                    onChange={handleDepositChange}
                  >
                    <option hidden>Commitment</option>
                    <option value={"NONE"}>None</option>
                    <option value={"TWOWEEKS"}>Two Weeks</option>
                    <option value={"ONEMONTH"}>One Month</option>
                    <option value={"THREEMONTHS"}>Three Months</option>
                  </select>
                </Col>
              </div>
              {/* <div className="row mb-4">
                <Col sm={6}>
                  <p>
                    Fixed APY{" "}
                    <strong>
                      {DepositInterestRates[commitPeriod || "NONE"] || "7.8%"}
                    </strong>
                  </p>
                </Col>
                <Col sm={6}>
                  <p style={{ float: "right" }}>
                    Variable APY{" "}
                    <strong>
                      {VariableDepositInterestRates[commitPeriod || "NONE"] ||
                        "0%"}
                    </strong>
                  </p>
                </Col>
              </div> */}
              <div className="d-grid gap-2">
                <Button
                  color="primary"
                  className="w-md"
                  disabled={commitPeriod === undefined || isTransactionDone}
                  onClick={handleDeposit}
                >
                  {!isTransactionDone ? (
                    "Deposit"
                  ) : (
                    <Spinner>Loading...</Spinner>
                  )}
                </Button>
              </div>
            </Form>
          ) : (
            <h2>Please connect your wallet</h2>
          )}
        </div>
      </Modal>
    </>
  )
}

export default Deposit = React.memo(Deposit);
