import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "../../i18n"

import {
  changeLayout,
  changeTopbarTheme,
  toggleRightSidebar,
  changeLayoutWidth,
} from "../../store/actions"

// Other Layout related Component
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false,
    }
    this.toggleRightSidebar = this.toggleRightSidebar.bind(this)
  }

  /**
   * Open/close right sidebar
   */
  toggleRightSidebar() {
    this.props.toggleRightSidebar()
  }

  componentDidMount() {
    if (this.props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }

    // Scrollto 0,0
    window.scrollTo(0, 0)

    // const title = this.props.location.pathname
    // let currentage = title.charAt(1).toUpperCase() + title.slice(2)

    // document.title =
    //   currentage + " | Skote - React Admin & Dashboard Template"

    this.props.changeLayout("horizontal")
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }
    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }
    if (this.props.showRightSidebar) {
      this.toggleRightSidebar()
    }
  }

  /**
   * Opens the menu - mobile
   */
  openMenu = e => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened })
  }
  render() {
    return (
      <React.Fragment>
        <I18nextProvider i18n={i18n}>
          <div id="preloader">
            <div id="status">
              <div className="spinner-chase">
                <div className="chase-dot"></div>
                <div className="chase-dot"></div>
                <div className="chase-dot"></div>
                <div className="chase-dot"></div>
                <div className="chase-dot"></div>
                <div className="chase-dot"></div>
              </div>
            </div>
          </div>
          <div id="layout-wrapper">
            <Header
              theme={this.props.topbarTheme}
              isMenuOpened={this.state.isMenuOpened}
              toggleRightSidebar={this.toggleRightSidebar}
              openLeftMenuCallBack={this.openMenu}
            />
            <Navbar menuOpen={this.state.isMenuOpened} />
            <div className="main-content">{this.props.children}</div>
            <Footer />
          </div>
        </I18nextProvider>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.bool,
  layoutWidth: PropTypes.string,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  toggleRightSidebar: PropTypes.func,
  topbarTheme: PropTypes.any
}

const mapStateToProps = state => {
  return {
    ...state.Layout,
  }
}
export default connect(mapStateToProps, {
  changeTopbarTheme,
  toggleRightSidebar,
  changeLayout,
  changeLayoutWidth,
})(withRouter(Layout))
