import React, { useEffect, useState, useContext, useCallback } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Button, Container, Row, Col, Spinner } from "reactstrap"

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
  changePreloader,
} from "../../store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"

//components
import loadable from "@loadable/component"
const Header = loadable(() => import("./Header"))
const Footer = loadable(() => import("./Footer"))

import { Web3ModalContext } from "../../contexts/Web3ModalProvider"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.scss"

toast.configure()

const Layout = props => {
  const dispatch = useDispatch()
  const { connect, disconnect, account } = useContext(Web3ModalContext)
  const [isTransactionDone, setIsTransactionDone] = useState(false)

  const handleConnectWallet = useCallback(() => {
    setIsTransactionDone(true)
    connect()
    setIsTransactionDone(false)
  }, [connect])

  const handleDisconnectWallet = useCallback(() => {
    disconnect()
  }, [disconnect])

  const { topbarTheme, layoutWidth, isPreloader } = useSelector(
    (state: any) => ({
      topbarTheme: state.Layout.topbarTheme,
      layoutWidth: state.Layout.layoutWidth,
      isPreloader: state.Layout.isPreloader,
      showRightSidebar: state.Layout.showRightSidebar,
    })
  )

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
    dispatch(changeLayout("horizontal"))
  }, [dispatch])

  useEffect(() => {
    //init body click event fot toggle rightbar

    // document.body.addEventListener("click", hideRightbar, true);
    let timer
    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      timer = setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 3000)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }
    return () => clearTimeout(timer)
  }, [isPreloader])

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme))
    }
  }, [dispatch, topbarTheme])

  // useEffect(() => {
  //   if (layoutWidth) {
  //     dispatch(changeLayoutWidth(layoutWidth));
  //   }
  // }, [dispatch, layoutWidth]);

  function switchScreens() {
    if (!account) {
      return (
        <Container>
          <Row style={{ marginTop: "25ch" }}>
            <Col lg="12">
              <div className="text-center mb-5">
                <h4 className="font-weight-medium">
                  Welcome to Hashstack&apos;s public testnet
                </h4>
                <div className="mt-5 text-center">
                  <Button
                    color="dark"
                    outline
                    className="btn-outline"
                    disabled={isTransactionDone}
                    onClick={handleConnectWallet}
                  >
                    {!isTransactionDone ? (
                      "Connect Wallet"
                    ) : (
                      <Spinner>Loading...</Spinner>
                    )}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else if (account) {
      return (
        <div id="layout-wrapper">
          <Header />
          <div className="main-content">{props.children}</div>
          <Footer />
        </div>
      )
    } else {
      return null
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
    </React.Fragment>
  )
}

Layout.propTypes = {
  changeLayout: PropTypes.func /*  */,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
}

export default Layout
