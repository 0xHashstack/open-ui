import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import { Button, Container, Row, Col, Spinner } from "reactstrap";

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
  changePreloader
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

//components
import loadable from '@loadable/component';
const Header = loadable(() => import('./Header'));
const Footer = loadable(() => import('./Footer'));
import Analytics from '../../pages/analytics';

import { Web3ModalContext } from "../../contexts/Web3ModalProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

toast.configure();

const Layout = (props) => {

  const dispatch = useDispatch();


  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const [ isWhiteListedAccount, setIsWhiteListedAccount ] = useState(false);
  const [ isWhiteListedAccountRequested, setIsWhiteListedAccountRequested ] = useState(false);
  const [isResponse,  setIsResponse ] = useState(false);
  const [isTransactionDone, setIsTransactionDone] = useState(false);
  const [counter, setCounter] = useState();

  useEffect(() => {
    dispatch(changePreloader(true));
    setIsResponse(false);
    let timer;
    if (account) {
      axios.get(`isWhiteListedAccount?address=${account}`)
        .then(res => {
          dispatch(changePreloader(true));

          dispatch(changePreloader(true));
          setIsWhiteListedAccountRequested(res.data['whitelist_Requested']);
          setIsWhiteListedAccount(res.data["isWhiteListed"])
          setCounter(res.data['waitlist_ct']);
          timer = setTimeout(() => {dispatch(changePreloader(false));}, 300);
          setIsResponse(true);
          setIsTransactionDone(false);
        })
        .catch(err => {
          setIsResponse(true);
          // setIsWhiteListedAccount(true);
          console.log("Error", err)
        });
    }
    return () => clearTimeout(timer)
  }, [account]);

  const handleConnectWallet = useCallback(() => {
    setIsTransactionDone(true);
    connect();
    setIsTransactionDone(false);
  }, [connect]);

  
  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);


  const {
    topbarTheme, layoutWidth, isPreloader
  } = useSelector((state: any) => ({
    topbarTheme: state.Layout.topbarTheme,
    layoutWidth: state.Layout.layoutWidth,
    isPreloader: state.Layout.isPreloader,
    showRightSidebar: state.Layout.showRightSidebar,
  }))

  //hides right sidebar on body click
  // const hideRightbar = (event) => {
  //   var rightbar = document.getElementById("right-bar");
  //   //if clicked in inside right bar, then do nothing
  //   if (rightbar && rightbar.contains(event.target)) {
  //     return;
  //   } else {
  //     //if clicked in outside of rightbar then fire action for hide rightbar
  //     dispatch(showRightSidebarAction(false));
  //   }
  // };

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"));
  }, [dispatch]);

  useEffect(() => {
    //init body click event fot toggle rightbar
    
    // document.body.addEventListener("click", hideRightbar, true);
    let timer;
    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      timer = setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 3000);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
    return () => clearTimeout(timer)
  }, [isPreloader]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [dispatch, topbarTheme]);

  // useEffect(() => {
  //   if (layoutWidth) {
  //     dispatch(changeLayoutWidth(layoutWidth));
  //   }
  // }, [dispatch, layoutWidth]);


  const handleAccountWhitelist = () => {
    axios.post(`addAccount`,
      {
        "address": account,
        "whiteListed": true
      })
      .then(res => {
        if (res.data) {
          setCounter(res.data.data['waitlist_ct']);
          setIsWhiteListedAccountRequested(true);
          setIsWhiteListedAccount(res.data.data['whiteListed']);
        }
      })
      .catch(err => {console.log("Error", err);})
  }

  function switchScreens() {
    if ( !account ) {
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
                    disabled={isTransactionDone}
                    onClick={handleConnectWallet}
                  >
                    {!isTransactionDone ? 'Connect Wallet' : <Spinner>Loading...</Spinner>}
                    
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else if (account && isResponse && (!isWhiteListedAccount) && (!isWhiteListedAccountRequested)) {
      return (
        <Container>
          <Row style={{ marginTop: '25ch' }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">Uh, oh!</h4>
                <h4 className="font-weight-medium">It appears though you are not whitelisted. You can request for whitelist from below</h4>
                <div className="mt-3 text-center">
                  <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    onClick={handleAccountWhitelist}
                  >
                    Request to Whitelist
                  </Button>
                  <div className="w-layout-grid-s footer-socials-s">
                    <a href="https://twitter.com/0xhashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/Twitter-Icon-Fill.svg" loading="lazy" alt="" /></a>
                    <a href="https://in.linkedin.com/company/0xhashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/Linkedin-Icon-Fill.svg" loading="lazy" alt=""/></a>
                    <a href="https://github.com/0xHashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/github.svg" loading="lazy" alt="" /></a>
                    <a href="http://hashstack.community" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/discord.svg" loading="lazy" alt="" /></a>
                    <a href="https://hashstack.medium.com/" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/medium.svg" loading="lazy" alt="" /></a>
                    <a href="https://www.reddit.com/r/Hashstack/" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/reddit.svg" loading="lazy" alt="" /></a>
                 </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else if (account && (!isWhiteListedAccount) && isWhiteListedAccountRequested) {
      return (
        <Container>
          <Row style={{ marginTop: '25ch' }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">Congratulations! Request sent Successfully.</h4>
                <h4 className="font-weight-medium">Your account will be whitelisted after {counter} requests. </h4>
                <div className="mt-3 text-center">
                <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    onClick={handleDisconnectWallet}
                  >
                    Disconnect
                  </Button>
                  <div className="w-layout-grid-s footer-socials-s">
                    <a href="https://twitter.com/0xhashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/Twitter-Icon-Fill.svg" loading="lazy" alt="" /></a>
                    <a href="https://in.linkedin.com/company/0xhashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/Linkedin-Icon-Fill.svg" loading="lazy" alt=""/></a>
                    <a href="https://github.com/0xHashstack" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/github.svg" loading="lazy" alt="" /></a>
                    <a href="http://hashstack.community" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/discord.svg" loading="lazy" alt="" /></a>
                    <a href="https://hashstack.medium.com/" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/medium.svg" loading="lazy" alt="" /></a>
                    <a href="https://www.reddit.com/r/Hashstack/" rel="noreferrer" target="_blank" className="w-inline-block-s"><img src="./images/reddit.svg" loading="lazy" alt="" /></a>
                 </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
     else if (account && isWhiteListedAccount) {
      return (
        <div id="layout-wrapper">
          <Header/>

          <div className="main-content">
            <Analytics></Analytics>
            {props.children}
            </div>
          <Footer />
        </div>
      )
    } else {
      return null;
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