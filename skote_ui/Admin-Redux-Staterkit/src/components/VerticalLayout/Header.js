import PropTypes from 'prop-types'
import React, { Component } from "react"
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import RightSidebar from '../CommonForBoth/RightSidebar'

import megamenuImg from "../../assets/images/megamenu-img.png"


// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"


import logo from "../../assets/images/logo.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import { toggleRightSidebar } from "../../store/actions"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
      open: false,
      position: 'right',
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback()
  }
  /** 
   * Right sidebar drawer 
  * */

  toggleRightDrawer() {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }


  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar()
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">

            <div className="d-flex">
              <div className="navbar-brand-box d-lg-none d-md-block">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t("Search") + "..."}
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              <Dropdown
                className="dropdown-mega d-none d-lg-block ms-2"
                isOpen={this.state.megaMenuDrp}
                toggle={() => {
                  this.setState({ megaMenuDrp: !this.state.megaMenuDrp })
                }}
              >
                <DropdownToggle
                  className="btn header-item"
                  caret
                  tag="button"
                >
                  {" "}
                  {this.props.t("Mega Menu")}{" "}
                  <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Applications")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Ecommerce")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Calendar")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Email")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Projects")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tasks")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Contacts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Extra Pages")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">
                                {this.props.t("Light Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Compact Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Horizontal layout")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#"> {this.props.t("Maintenance")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Coming Soon")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Timeline")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("FAQs")}</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch })
                  }}
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className={
                    this.state.isSearch
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
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <LanguageDropdown />

              <Dropdown
                className="d-none d-lg-inline-block ms-1"
                isOpen={this.state.socialDrp}
                toggle={() => {
                  this.setState({ socialDrp: !this.state.socialDrp })
                }}
              >
                <DropdownToggle
                  className="btn header-item noti-icon"
                  tag="button"
                >
                  <i className="bx bx-customize"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>GitHub</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>Bitbucket</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>Dribbble</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>Dropbox</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>Slack</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={this.toggleFullscreen}
                  className="btn header-item noti-icon"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>

              <NotificationDropdown />
              <ProfileMenu />

              <div
                onClick={this.toggleRightDrawer} disabled={this.state.open}
                className="dropdown d-inline-block"
              >
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle"
                >
                  <i className="bx bx-cog bx-spin"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withTranslation()(Header)
)

Header.propTypes = {
  t: PropTypes.any,
  toggleMenuCallback: PropTypes.any,
  toggleRightSidebar: PropTypes.func
}