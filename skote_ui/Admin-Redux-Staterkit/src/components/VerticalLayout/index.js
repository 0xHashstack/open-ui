import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions"

// Layout Related Components
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      width: 0,
      height: 0
    }
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this)
    this.toggleRightSidebar = this.toggleRightSidebar.bind(this)
  }

  toggleRightSidebar() {
    this.props.toggleRightSidebar()
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
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

    // Scroll Top to 0
    window.scrollTo(0, 0)
    // let currentage = this.capitalizeFirstLetter(this.props.location.pathname)

    // document.title =
    //   currentage + " | Skote - React Admin & Dashboard Template"
    if (this.props.leftSideBarTheme) {
      this.props.changeSidebarTheme(this.props.leftSideBarTheme)
    }

    if (this.props.leftSideBarThemeImage) {
      this.props.changeSidebarThemeImage(this.props.leftSideBarThemeImage)
    }

    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }

    if (this.props.leftSideBarType) {
      this.props.changeSidebarType(this.props.leftSideBarType)
    }
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }

    if (this.props.showRightSidebar) {
      this.toggleRightSidebar()
    }
  }

  toggleMenuCallback = () => {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  render() {

    return (
      <React.Fragment>
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
            toggleMenuCallback={this.toggleMenuCallback}
            toggleRightSidebar={this.toggleRightSidebar}
          />
          <Sidebar
            theme={this.props.leftSideBarTheme}
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
          />
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.any,
  isPreloader: PropTypes.bool,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  toggleRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

const mapStateToProps = state => {
  return {
    ...state.Layout,
  }
}
export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutWidth,
})(withRouter(Layout))
