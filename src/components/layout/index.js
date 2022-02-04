import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from "prop-types"
import axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
  changePreloader
} from "../../store/actions"

import { cacheService } from "../../helpers/CacheService";
//redux
import { useSelector, useDispatch } from "react-redux"

//components
import Header from "./Header"
import Footer from "./Footer"

import { Web3ModalContext } from "../../contexts/Web3ModalProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Layout = (props) => {

  const dispatch = useDispatch()


  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const [ isWhiteListedAccount, setIsWhiteListedAccount ] = useState(false);
  const [ isWhiteListedAccountRequested, setIsWhiteListedAccountRequested ] = useState(false); 

  useEffect(() => {
    dispatch(changePreloader(true));
    if (account) {
      axios.get(`isWhiteListedAccount?address=${account}`)
        .then(res => {
          dispatch(changePreloader(true));
          if (res.data) {
            cacheService.setItem(`${account.toUpperCase()}_IsWhiteListedAccount`, res.data['isWhiteListed']);
          }
          dispatch(changePreloader(true));
          cacheService.setItem(`${account.toUpperCase()}_IsWhiteListedAccountRequested`, Boolean(cacheService.getItem(`${account.toUpperCase()}_IsWhiteListedAccountRequested`)));
          setIsWhiteListedAccountRequested(Boolean(cacheService.getItem(`${account.toUpperCase()}_IsWhiteListedAccountRequested`)));
          setIsWhiteListedAccount(Boolean(cacheService.getItem(`${account.toUpperCase()}_IsWhiteListedAccount`)));
          
          setTimeout(() => {dispatch(changePreloader(false));}, 300);
        })
        .catch(err => console.log("Error", err));
    }
  }, [account])

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  
  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);


  const {
    topbarTheme, layoutWidth, isPreloader, showRightSidebar
  } = useSelector(state => ({
    topbarTheme: state.Layout.topbarTheme,
    layoutWidth: state.Layout.layoutWidth,
    isPreloader: state.Layout.isPreloader,
    showRightSidebar: state.Layout.showRightSidebar,
  }))

  //hides right sidebar on body click
  const hideRightbar = (event) => {
    var rightbar = document.getElementById("right-bar");
    //if clicked in inside right bar, then do nothing
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      //if clicked in outside of rightbar then fire action for hide rightbar
      dispatch(showRightSidebarAction(false));
    }
  };

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"));
  }, [dispatch]);

  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 3000)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }
  }, [isPreloader])

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [dispatch, topbarTheme]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [dispatch, layoutWidth]);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  const handleAccountWhitelist = () => {
    axios.post(`addAccount`,
      {
        "address": account,
        "whiteListed": true
      })
      .then(res => {
        if (res.data) {
          cacheService.setItem(`${account.toUpperCase()}_IsWhiteListedAccountRequested`, true);
          cacheService.setItem(`${account.toUpperCase()}_IsWhiteListedAccount`, res.data.data['whiteListed']);

          setIsWhiteListedAccountRequested(true);
          setIsWhiteListedAccount(res.data.data['whiteListed']);
        }
      })
      .catch(err => {console.log("Error", err); cacheService.setItem(`${account.toUpperCase()}_IsWhiteListedAccountRequested`, false);})
  }

  function switchScreens() {
    if (account === null) {
      return (
        <Container>
          <Row style={{ marginTop: '25ch' }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">Connect your wallet to access Hashstack&apos;s closed beta testnet</h4>
                <div className="mt-5 text-center">
                  <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    onClick={handleConnectWallet}
                  >
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else if (account !== null && (!isWhiteListedAccount) && (!isWhiteListedAccountRequested)) {
      return (
        <Container>
          <Row style={{ marginTop: '25ch' }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">Uh, oh!</h4>
                <h4 className="font-weight-medium">It appears though you are not whitelisted. You can request for whitelist from below</h4>
                <div className="mt-5 text-center">
                  <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    onClick={handleAccountWhitelist}
                  >
                    Request to Whitelist
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else if (account !== null && (!isWhiteListedAccount) && isWhiteListedAccountRequested) {
      return (
        <Container>
          <Row style={{ marginTop: '25ch' }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">Congratulations!</h4>
                <h4 className="font-weight-medium">Request sent Successfully. Your account will be whitelisted within 3 days.</h4>
                <div className="mt-5 text-center">
                <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    onClick={handleDisconnectWallet}
                  >
                    Disconnect
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
     else if (account !== null && isWhiteListedAccount) {
      return (
        <div id="layout-wrapper">
          <Header
            theme={"Light"}
            isMenuOpened={isMenuOpened}
            openLeftMenuCallBack={openMenu}
          />
          <div className="main-content">{props.children}</div>
          <Footer />
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      {switchScreens()}
    </React.Fragment >
  );
}

Layout.propTypes = {
  changeLayout: PropTypes.func,/*  */
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

export default Layout;