import React, { useEffect, useState, useCallback, useContext } from "react";
import '../style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Grid, Input, Dropdown, Label } from 'semantic-ui-react';
import logo from '../assets/logo.png';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import { markets, symbols, decimals, comit_ONEMONTH, comit_TWOWEEKS } from '../blockchain/constants';
import { ellipseAddress } from '../util/blockchain';
import BorrowBalance from "../components/BorrowBalance";
import DepositBalance from "../components/DepositBalance";
import { BNtoNum } from '../blockchain/utils';


const depositMarketsData = [
  // { assetId: 0, assetName: markets[0], AssetFullname: "WONE", APY: 15 },
  { assetId: 0, assetName: markets[0], AssetFullname: "USD Tether", APY: 15 },
  { assetId: 1, assetName: markets[1], AssetFullname: "USD Coin", APY: 18},
  { assetId: 2, assetName: markets[2], AssetFullname: "Bitcoin", APY: 18},
];

const borrowMarketsData = [
  // { assetId: 0, assetName: markets[0], AssetFullname: "WONE", APY: 18},
  { assetId: 0, assetName: markets[0], AssetFullname: "USD Tether", APY: 18 },
  { assetId: 1, assetName: markets[1], AssetFullname: "USD Coin", APY: 18 },
  { assetId: 2, assetName: markets[2], AssetFullname: "Bitcoin", APY: 18},
];

const modeOptData = [
  { key: 0, text: 'Swap Mode 0', value: 0},
  { key: 1, text: 'Swap Mode 1', value: 1},
  { key: 2, text: 'Swap Mode 2', value: 2},
];

const currencyUnit = "$";

//Dashboard component
const Dashboard = () => {

  let inputVal1 = 0;
  let inputVal2 = 0;

  let swapTo = 0;
  let swapAmount = 0;
  let swapMode = "";
  
  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const DepositWithdraw = (props) => {
    
    const [open, setOpen] = useState(false)
    const [method, setMethod] = useState("Deposit");

    useEffect(() => {
      // wrapper?.deposit.on("NewDeposit", onDeposit);
      // wrapper?.deposit.on("Withdrawal", onWithdrawal)
    });

    const handleDeposit = async () => {
      try {
        const tx = await wrapper?.addToDeposit(symbols[props.assetID], comit_TWOWEEKS, inputVal1, decimals[props.assetID]);
      } catch(err) {
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
        const tx = await wrapper?.withdrawDeposit(symbols[props.assetID], comit_TWOWEEKS, inputVal1, 0, decimals[props.assetID]);
      } catch(err) {
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
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Deposit</Button>}
        style={{ textAlign: "center", width: '480px' }}
      >
        {account ?
          <>
            <Modal.Header>{markets[props.assetID]}</Modal.Header>
            {method === "Deposit" ?
              <div>
                <Modal.Actions>
                  <Grid divided="vertically">
                    <Grid.Row>
                      <Grid.Column className="col-sm-6">
                        <Button>Deposit</Button>
                      </Grid.Column>
                      <Grid.Column className="col-sm-6">
                        <Button onClick={() => { setMethod("Withdraw") }}>Withdraw</Button>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <h2>Deposit Amount: </h2>
                        <input type="text" placeholder="Enter the amount" style={{ height: '30px' }}
                          onChange={(event) => { inputVal1 = event.target.value }}></input>
                        <Button onClick={handleDeposit}>Deposit</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Modal.Actions>
              </div>
              :
              <div>
                <Modal.Actions>
                  <Grid divided="vertically">
                    <Grid.Row>
                      <Grid.Column className="col-sm-6">
                       <Button onClick={() => { setMethod("Deposit") }}>Deposit</Button>
                      </Grid.Column>
                      <Grid.Column className="col-sm-6">
                        <Button>Withdraw</Button>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <h2>Withdraw Amount: </h2>
                        <input type="text" placeholder="Enter the amount" style={{ height: '30px' }}
                          onChange={(event) => { inputVal1 = event.target.value }}></input>
                        <Button onClick={handleWithdraw}>Withdraw</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Modal.Actions>
              </div>
            }
          </>
          : <h2>You are not connected to your wallet.</h2>
        }
      </Modal>
    )
  }

  const BorrowRepay = (props) => {

      const [open, setOpen] = useState(false)
      const [method, setMethod] = useState("Borrow");

      useEffect(() => {
        wrapper?.loan1.on("NewLoan", onLoanRequested);
        wrapper?.loanContract.on("CollateralReleased", onCollateralReleased)
        wrapper?.loan1.on("AddCollateral", onCollateralAdded)
      });

      const handleBorrow = async () => {
        try {
          const tx = await wrapper?.loanRequest(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID], symbols[props.assetID], inputVal2, decimals[props.assetID]);
        } catch(err) {
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
          const tx = await wrapper?.repayLoan(symbols[props.assetID], comit_ONEMONTH, inputVal1, decimals[props.assetID]);
        } catch(err) {
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
          const tx = await wrapper?.addCollateral(symbols[props.assetID], comit_ONEMONTH, symbols[props.assetID], inputVal1, decimals[props.assetID]);
        } catch(err) {
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
          <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button>Borrow</Button>}
              style={{textAlign: "center", width: '570px'}}
          >
          { account ?
          <>
          <Modal.Header>{markets[props.assetID]}</Modal.Header>
          { method === "Borrow" &&
              <div>
                  <Modal.Actions>
                      <Grid divided="vertically">
                          <Grid.Row>
                            <Grid.Column  className="col-sm-4">
                              <Button >Borrow</Button>
                            </Grid.Column>
                            <Grid.Column className="col-sm-4">
                              <Button onClick={() => {setMethod("Repay")}}>Repay</Button>
                            </Grid.Column>
                            <Grid.Column className="col-sm-4">
                              <Button onClick={() => {setMethod("Collateral")}}>Collateral</Button>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                              <Grid.Column>
                                  <h3>Borrow: </h3>
                                    <input type="text" placeholder="Borrow amount" style={{height: '30px'}}
                                      onChange={(event) => {inputVal1 = event.target.value}}></input>
                                    <input type="text" placeholder="Collateral amount" style={{height: '30px'}}
                                      onChange={(event) => {inputVal2 = event.target.value}}></input>
                                      <Button onClick={handleBorrow}>Borrow</Button>
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </Modal.Actions>
              </div>
            }
            { method === "Repay" && 
              <div>
                  <Modal.Actions>
                      <Grid divided="vertically">
                          <Grid.Row>
                            <Grid.Column className="col-sm-4">
                              <Button onClick={() => {setMethod("Borrow")}}>Borrow</Button>
                            </Grid.Column>
                            <Grid.Column className="col-sm-4">
                              <Button>Repay</Button>
                            </Grid.Column>
                            <Grid.Column className="col-sm-4">
                              <Button onClick={() => {setMethod("Collateral")}}>Collateral</Button>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                              <Grid.Column>   
                                  <h3>Repay Amount: </h3>
                                      <input type="text" placeholder="Enter the amount" style={{height: '30px'}}
                                      onChange={(event) => {inputVal1 = event.target.value}}></input>
                                      <Button onClick={handleRepay}>Repay</Button>
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </Modal.Actions>
              </div>
            }
            { method === "Collateral" && 
            <div>
              <Modal.Actions>
                  <Grid divided="vertically">
                      <Grid.Row>
                        <Grid.Column className="col-sm-4">
                          <Button onClick={() => {setMethod("Borrow")}}>Borrow</Button>
                        </Grid.Column>
                        <Grid.Column className="col-sm-4">
                          <Button onClick={() => {setMethod("Repay")}}>Repay</Button>
                        </Grid.Column>
                        <Grid.Column className="col-sm-4">
                          <Button>Collateral</Button>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                          <Grid.Column>   
                              <h3>Collateral Amount: </h3>
                                  <input type="text" placeholder="Enter the amount" style={{height: '30px'}}
                                  onChange={(event) => {inputVal1 = event.target.value}}></input>
                                  <Button onClick={handleCollateral}>Collateral</Button>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Modal.Actions>
              </div>
            } 
              </>
              : <h2>You are not connected to your wallet.</h2>}
          </Modal>
      )
  }

  const BorrowSwap = (props) => {

      const [open, setOpen] = useState(false)
      const [method, setMethod] = useState("Borrow");

      const handleSwap = async() => {
        console.log("Swap " + currencyUnit + swapAmount.toString() + " to '" + swapTo +"' by '" + swapMode + "' mode!");
        const tx = await wrapper?.swapLoan(symbols[props.assetID], comit_ONEMONTH, symbols[swapTo]);
      }

      return (
          <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button>Swap</Button>}
              style={{textAlign: "center", width: '570px'}}
          >
          { account ?
            <>
              <Modal.Header>{markets[props.assetID]}</Modal.Header>
              <Modal.Actions>
                  <Grid divided="vertically">
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <select onChange={(event) => { swapTo = event.target.value }}>
                              <option value="0" >USDT.t</option>
                              <option value="1">USDC.t</option>
                              <option value="2">BTC.t</option>
                            </select>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Input labelPosition='right' type='number' placeholder='Amount' onChange={(event) => { swapAmount = event.target.value }}>
                              <Label basic>{currencyUnit}</Label>
                              <input />
                              <Label>.00</Label>
                            </Input>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Dropdown placeholder='Choose Swap Mode ...' fluid selection options={modeOptData} />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Button primary onClick={handleSwap} icon='shuffle' content='Swap'/>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Modal.Actions>
            </>
          : <h2>You are not connected to your wallet.</h2>}
          </Modal>
      )
  }

  const BorrowSwaptoLoan = (props) => {

      const [open, setOpen] = useState(false)
      const [method, setMethod] = useState("Borrow");

      const handleSwap = async() => {
        console.log("Swap " + currencyUnit + swapAmount.toString() + " to '" + swapTo +"' by '" + swapMode + "' mode!");
        const tx = await wrapper?.swapLoan(symbols[props.assetID], comit_ONEMONTH, symbols[swapTo]);
      }

      return (
          <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button>Swap to Loan</Button>}
              style={{textAlign: "center", width: '570px'}}
          >
          { account ?
            <>
              <Modal.Header>{markets[props.assetID]}</Modal.Header>
              <Modal.Actions>
                  <Grid divided="vertically">
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <select onChange={(event) => { swapTo = event.target.value }}>
                              <option value="0" >USDT.t</option>
                              <option value="1">USDC.t</option>
                              <option value="2">BTC.t</option>
                            </select>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Input labelPosition='right' type='number' placeholder='Amount' onChange={(event) => { swapAmount = event.target.value }}>
                              <Label basic>{currencyUnit}</Label>
                              <input />
                              <Label>.00</Label>
                            </Input>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Dropdown placeholder='Choose Swap Mode ...' fluid selection options={modeOptData} />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{textAlign: "center"}}>
                          <div style={{width: '60%', marginLeft: '20%'}}>
                            <Button primary onClick={handleSwap} icon='shuffle' content='Swap'/>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Modal.Actions>
            </>
          : <h2>You are not connected to your wallet.</h2>}
          </Modal>
      )
  }

  const DepositTable = () => {
    return (
      <table>
        <thead style={{ fontSize: '18px', fontFamily: 'sans-serif' }}>
          <tr>
            <th>Asset</th>
            <th>APY</th>
            <th>Wallet</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>
          {depositMarketsData.map(token => {
            return (
              <tr key={token.assetName}>
                <td style={{ padding: '30px', width: '20%' }}>{token.assetName}</td>
                <td style={{ padding: '30px', width: '20%' }}>{token.APY}%</td>
                <td style={{ padding: '30px', width: '20%' }}>{token.AssetFullname}</td>
                <td style={{ padding: '30px', width: '20%' }}><DepositWithdraw assetID={token.assetId} /></td>
                {/* <td style={{ padding: '30px', width: '20%' }}>{token.Collateral}</td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  
  const BorrowTable = () => {

    return (
        <table>
            <thead style={{fontSize: '18px', fontFamily: 'sans-serif'}}>
              <tr>
                <th>Asset</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{fontSize: '14px', fontFamily: 'sans-serif'}}>
                {borrowMarketsData.map(token => {
                    return (
                        <tr key={token.assetName} >
                            <td style={{padding: '30px 50px', width: '30%' }}>{token.assetName}</td>
                            <td style={{padding: '0px', width: '10%' }}><BorrowRepay assetID={token.assetId}/></td>
                            <td style={{padding: '0px', width: '10%' }}><BorrowSwap assetID={token.assetId}/></td>
                            <td style={{padding: '0px', width: '20%' }}><BorrowSwaptoLoan assetID={token.assetId}/></td>
                            {/* <td style={{padding: '30px', width: '20%' }}>${token.Liquidity>1000000 ? token.Liquidity/1000000+"M":token.Liquidity}</td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
  }

  return (

    <div className="main">
      {/* Header */}
      <div className="header">
        <div className="col-xs-3">
          <img src={logo} className="logo" />
          &nbsp;Hashstack.Finance
        </div>
        <div className="col-xs-6 text-center links">Dashbodard</div>
        <div className="col-xs-9 text-right actions">
          {account ? (
            <div>
              <button onClick={handleDisconnectWallet}>{ ellipseAddress(account) }</button>
            </div>
          ) : (
            <div>
              <button onClick={handleConnectWallet}>Connect</button>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="balance-totals">
          <div className="content">
            {/* <div className="row">
              <TestValues/>
            </div> */}
            <div className="row align-middle">
              {/* Deposit Balance */}
              <DepositBalance />
              {/* Net APY */}
              <div className="col-xs-2">
                <div className="net-apy-wrapper">
                  <div className="net-apy">
                    <svg viewBox="0 0 140 140" width="100%">
                      <path d="M 70 70 L  70 0 A 70 70 0 0 1 70 0 Z" stroke="transparent" fill="#9669ED"></path><path d="M 70 70 L  70 0 A 70 70 0 1 1 69.99956017702848 1.381744718642608e-9 Z" stroke="transparent" fill="#00D395"></path>
                    </svg>
                  </div>
                  <div className="net-apy-description">
                    <label>Net APY</label>
                    <div className="headline headline--loading"></div>
                  </div>
                </div>
              </div>
              {/* Borrow Balance */}
              <BorrowBalance />
            </div >
          </div>
        </div>
        <div className="container-large">
          <div id="interface-container" className="row">
            {/* Depositing */}
            <div id="collateral-pane" className="col-sm-6">
              <div className="panel">
                <div className="panel__header align-between"><h4>Deposit Markets</h4></div>
                {/* Deposit asset list */}
                <div className="asset-list">
                  <DepositTable />
                </div>
              </div>
            </div>
            <div style={{ border: '1px solid' }}></div>
            {/* Borrwing */}
            <div id="borrowing-pane" className="col-sm-6">
              <div className="panel">
                <div className="panel__header align-between"><h4>Borrow Markets</h4></div>
                {/* Borrow asset list */}
                <div className="asset-list">
                  <BorrowTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
