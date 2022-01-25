import React, { useState, useContext, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Modal, Button, Form } from "reactstrap";
import { Web3ModalContext } from "../../contexts/Web3ModalProvider";
import { Web3WrapperContext } from "../../contexts/Web3WrapperProvider";
import { GetErrorText } from "../../blockchain/utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Header = props => {
  const [get_token, setGet_token] = useState(false);

  const { connect, disconnect, account, chainId } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  useEffect(() => {
    wrapper?.getTokenDistributorInstance().requestTokens("USDT"); //USDT
    wrapper?.getTokenDistributorInstance().requestTokens("USDC"); //USDC
    wrapper?.getTokenDistributorInstance().requestTokens("BTC"); //BTC
  }, [])

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);


  const handleGetToken = async (event) => {
    try {
      const tx = await wrapper?.getTokenDistributorInstance().requestTokens(event.target.textContent);
    } catch (err) {
      console.error("ERROR MESSAGE: ", err.message)
      toast.error(`${GetErrorText(err.message)}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 8000, closeOnClick: true })
    }
  }



  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_token() {
    setGet_token(!get_token);
    removeBodyCss();
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="" className="logo logo-dark">
                <img src="./logo.png" style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}></img>
                <span className="logo-sm">
                  <strong style={{ color: 'white', fontSize: '22px', fontWeight: '600' }}>Hashstack</strong>
                </span>
                <span className="logo-lg">
                  <strong style={{ color: 'white', fontSize: '19px', fontWeight: '600' }}>Hashstack</strong>
                </span>
              </Link>

              <Link to="" className="logo logo-light">
                <img src="./logo.png" style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}></img>
                <span className="logo-sm">
                  <strong style={{ color: 'white', fontSize: '22px', fontWeight: '600' }}>Hashstack</strong>
                </span>
                <span className="logo-lg">
                  <strong style={{ color: 'white', fontSize: '19px', fontWeight: '600' }}>Hashstack</strong>
                </span>
              </Link>
            </div>

            {/* <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu);
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button> 

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form> */}
          </div>

          {/* <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  isSearch
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={"Search..."}
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}

          <div className="d-flex flex-wrap gap-4">
            <Button
              color="light"
              outline
              className="btn-outline"
              style={{ float: "right" }}
              disabled={account === null}
              onClick={() => {
                tog_token();
              }}
            >
              Get Tokens
            </Button>
            <Modal
              isOpen={get_token}
              toggle={() => {
                tog_token();
              }}
              centered
            >
              <div className="modal-body">
                <Form>
                  <h5 style={{ textAlign: "center" }}>Get Token</h5>
                  <hr />
                  <div className="row mb-4">
                    <Col sm={3}>
                      <Button
                        className="btn-block btn-lg"
                        color="light"
                        outline
                        onClick={handleGetToken}
                      >
                        Bitcoin
                      </Button>
                    </Col>
                    <Col sm={3}>
                      <Button
                        color="light"
                        className="btn-block btn-lg"
                        outline
                        onClick={handleGetToken}
                      >
                        USDC
                      </Button>
                    </Col>
                    <Col sm={3}>
                      <Button
                        color="light"
                        className="btn-block btn-lg"
                        outline
                        onClick={handleGetToken}
                      >
                        USDT
                      </Button>
                    </Col>
                    <Col sm={3}>
                      <Button
                        color="light"
                        className="btn-block btn-lg"
                        outline
                        onClick={() => {
                          window.open("https://testnet.binance.org/faucet-smart", "_blank")
                        }}
                      >
                        BNB
                      </Button>
                    </Col>
                  </div>
                </Form>
              </div>
            </Modal>
            {account ?
              <>
                <Button
                  color="success"
                  outline
                  className="btn-outline"
                  onClick={handleDisconnectWallet}
                >
                  <i className="fas fa-wallet font-size-16 align-middle me-2"></i>{" "}
                  Disconnect
                </Button></>

              :

              <div>
                <Button
                  color="dark"
                  outline
                  className="btn-outline"
                  onClick={handleConnectWallet}
                >
                  <i className="fas fa-wallet font-size-16 align-middle me-2"></i>{" "}
                  Connect
                </Button>
              </div>
            }

            {/* <div className="form-check form-switch" style={{ margin: "0" }}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label">Dark</label>
            </div> */}
          </div>

        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
