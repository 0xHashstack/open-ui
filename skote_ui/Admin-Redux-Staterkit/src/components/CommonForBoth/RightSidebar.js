import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Col, FormGroup, Row } from "reactstrap";

import { connect } from "react-redux";

/** Import actions */
import {
  hideRightSidebar,
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
} from "../../store/actions";

//constants
import {
  layoutTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftBarThemeImageTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from "../../constants/layout"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

import "./rightbar.scss"

//Import images
import bgimg1 from "../../assets/images/sidebar/img1.jpg";
import bgimg2 from "../../assets/images/sidebar/img2.jpg";
import bgimg3 from "../../assets/images/sidebar/img3.jpg";
import bgimg4 from "../../assets/images/sidebar/img4.jpg";

import layout4 from "../../assets/images/layouts/layout-1.jpg"
import layout5 from "../../assets/images/layouts/layout-2.jpg"
import layout6 from "../../assets/images/layouts/layout-3.jpg"

class RightSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      sidebarThemeImage: this.props.leftSideBarThemeImage,
      topbarTheme: this.props.topbarTheme,
    }
    this.hideRightbar = this.hideRightbar.bind(this)
    this.changeLayout = this.changeLayout.bind(this)
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this)
    this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this)
    this.changeLeftSidebarThemeImage = this.changeLeftSidebarThemeImage.bind(this)
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this)
    this.changeTopbarTheme = this.changeTopbarTheme.bind(this)
    this.changeThemePreloader = this.changeThemePreloader.bind(this)
    this.onCloseRightBar = this.onCloseRightBar.bind(this);
  }

  /**
   * Hides the right sidebar
   */
  hideRightbar(e) {
    e.preventDefault()
    this.props.hideRightSidebar()
  }
  componentDidMount() {
    this.setState({
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      sidebarThemeImage: this.props.leftSideBarThemeImage,
      topbarTheme: this.props.topbarTheme,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        sidebarType: this.props.leftSideBarType,
        layoutWidth: this.props.layoutWidth,
        sidebarTheme: this.props.leftSideBarTheme,
        sidebarThemeImage: this.props.leftSideBarThemeImage,
        topbarTheme: this.props.topbarTheme,
      })
    }
  }

  changeThemePreloader = () => {
    this.props.changePreloader(!this.props.isPreloader)
  }
  /**
   * Change the layout
   * @param {*} e
   */
  changeLayout(e) {
    if (e.target.checked) {
      this.props.changeLayout(e.target.value)
    }
  }

  /**
   * Changes layout width
   * @param {*} e
   */
  changeLayoutWidth(e) {
    if (e.target.checked) {
      this.props.changeLayoutWidth(e.target.value)
    }
  }

  // change left sidebar design
  changeLeftSidebarType(e) {
    if (e.target.checked) {
      this.props.changeSidebarType(e.target.value)
    }
  }

  // change left sidebar theme
  changeLeftSidebarTheme(e) {
    if (e.target.checked) {
      this.props.changeSidebarTheme(e.target.value)
    }
  }

  changeLeftSidebarThemeImage(e) {
    if (e.target.checked) {
      this.props.changeSidebarThemeImage(e.target.value)
    }
  }

  // change topbar theme
  changeTopbarTheme(e) {
    if (e.target.checked) {
      this.props.changeTopbarTheme(e.target.value)
    }
  }
  onCloseRightBar = () => {
    this.props.onClose();
  }

  render() {
    return (
      <React.Fragment>
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={this.onCloseRightBar}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value={layoutTypes.VERTICAL}
                  checked={this.state.layoutType === layoutTypes.VERTICAL}
                  onChange={this.changeLayout}
                />
                <label htmlFor="radioVertical">Vertical</label>
                {"   "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value={layoutTypes.HORIZONTAL}
                  checked={this.state.layoutType === layoutTypes.HORIZONTAL}
                  onChange={this.changeLayout}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value={layoutWidthTypes.FLUID}
                  checked={this.state.layoutWidth === layoutWidthTypes.FLUID}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value={layoutWidthTypes.BOXED}
                  checked={this.state.layoutWidth === layoutWidthTypes.BOXED}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioBoxed" className="me-2">Boxed</label>
                <input
                  type="radio"
                  id="radioscrollable"
                  name="radioscrollable"
                  value={layoutWidthTypes.SCROLLABLE}
                  checked={this.state.layoutWidth === layoutWidthTypes.SCROLLABLE}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioscrollable">Scrollable</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value={topBarThemeTypes.LIGHT}
                  checked={this.state.topbarTheme === topBarThemeTypes.LIGHT}
                  onChange={this.changeTopbarTheme}
                />

                <label htmlFor="radioThemeLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value={topBarThemeTypes.DARK}
                  checked={this.state.topbarTheme === topBarThemeTypes.DARK}
                  onChange={this.changeTopbarTheme}
                />
                <label htmlFor="radioThemeDark">Dark</label>
                {this.state.layoutType === "vertical" ? null : (
                  <>
                    {" "}
                    <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value={topBarThemeTypes.COLORED}
                      checked={this.state.topbarTheme === topBarThemeTypes.COLORED}
                      onChange={this.changeTopbarTheme}
                    />
                    <label htmlFor="radioThemeColored">Colored</label>{" "}
                  </>
                )}
              </div>

              {this.state.layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value={leftSidebarTypes.DEFAULT}
                      checked={
                        this.state.sidebarType === leftSidebarTypes.DEFAULT
                      }
                      onChange={this.changeLeftSidebarType}
                    />

                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value={leftSidebarTypes.COMPACT}
                      checked={this.state.sidebarType === leftSidebarTypes.COMPACT}
                      onChange={this.changeLeftSidebarType}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value={leftSidebarTypes.ICON}
                      checked={this.state.sidebarType === leftSidebarTypes.ICON}
                      onChange={this.changeLeftSidebarType}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar coloropt-radio">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color Options
                    </span>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemelight"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.LIGHT}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.LIGHT}
                          onChange={this.changeLeftSidebarTheme}
                        />

                        <label htmlFor="leftsidebarThemelight" className="bg-light rounded-circle wh-30"></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemedark"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.DARK}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.DARK}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemedark" className="bg-dark rounded-circle wh-30"></label>
                        <input
                          type="radio"
                          id="leftsidebarThemecolored"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.COLORED}
                          checked={this.state.leftSideBarTheme === leftSideBarThemeTypes.COLORED}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label
                          htmlFor="leftsidebarThemecolored"
                          className="bg-colored rounded-circle wh-30 me-1"
                        ></label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemewinter"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.WINTER}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.WINTER}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemewinter" className="gradient-winter rounded-circle wh-30"></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemeladylip"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.LADYLIP}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.LADYLIP}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemeladylip" className="gradient-lady-lip rounded-circle wh-30"></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemeplumplate"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.PLUMPLATE}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.PLUMPLATE}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemeplumplate" className="gradient-plum-plate rounded-circle wh-30"></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemestrongbliss"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.STRONGBLISS}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.STRONGBLISS}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemestrongbliss" className="gradient-strong-bliss rounded-circle wh-30"></label>

                        <input
                          type="radio"
                          id="leftsidebarThemesgreatwhale"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.GREATWHALE}
                          checked={this.state.sidebarTheme === leftSideBarThemeTypes.GREATWHALE}
                          onChange={this.changeLeftSidebarTheme}
                        />
                        <label htmlFor="leftsidebarThemesgreatwhale" className="gradient-strong-great-whale rounded-circle wh-30"></label>
                      </Col>
                    </Row>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar imgopt-radio">
                    <span className="mb-2 d-block" id="radio-bgimg">
                      Left Sidebar Bg Image
                    </span>
                    <div className="d-flex gap-2 flex-wrap">


                      <input
                        type="radio"
                        id="leftsidebarThemebgimg1"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG1}
                        checked={this.state.sidebarThemeImage === leftBarThemeImageTypes.IMG1}
                        onChange={this.changeLeftSidebarThemeImage}
                      />

                      <label htmlFor="leftsidebarThemebgimg1">
                        <img alt="sidebar bg image" width="90" className="themesideimage rounded" src={bgimg1} />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg2"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG2}
                        checked={this.state.sidebarThemeImage === leftBarThemeImageTypes.IMG2}
                        onChange={this.changeLeftSidebarThemeImage}
                      />

                      <label htmlFor="leftsidebarThemebgimg2">
                        <img alt="sidebar bg image" width="90" className="themesideimage rounded" src={bgimg2} />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg3"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG3}
                        checked={this.state.sidebarThemeImage === leftBarThemeImageTypes.IMG3}
                        onChange={this.changeLeftSidebarThemeImage}
                      />

                      <label htmlFor="leftsidebarThemebgimg3">
                        <img alt="sidebar bg image" width="90" className="themesideimage rounded" src={bgimg3} />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg4"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG4}
                        checked={this.state.sidebarThemeImage === leftBarThemeImageTypes.IMG4}
                        onChange={this.changeLeftSidebarThemeImage}
                      />

                      <label htmlFor="leftsidebarThemebgimg4">
                        <img alt="sidebar bg image" width="90" className="themesideimage rounded" src={bgimg4} />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemenone"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.NONE}
                        checked={this.state.sidebarThemeImage === leftBarThemeImageTypes.NONE}
                        onChange={this.changeLeftSidebarThemeImage}
                      />
                      <label htmlFor="leftsidebarThemenone">
                        <div style={{ width: "40px", height: "80px" }}>
                          <div className="bg-light border px-2 h-100 shadow-none">
                            <div className="verticalcontent">None</div>
                          </div>
                        </div>
                      </label>
                      {"   "}

                    </div>
                  </div>

                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}

              <FormGroup>
                <span className="mb-2 d-block" id="radio-title">
                  Preloader
                </span>

                <div className="form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input theme-choice"
                    id="checkbox_1"
                    checked={this.props.isPreloader}
                    onChange={this.changeThemePreloader}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox_1"
                  >
                    Preloader
                  </label>
                </div>
              </FormGroup>

              <h6 className="text-center">Choose Layouts</h6>

              <div className="mb-2">
                <Link
                  to="//skote-v-light.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout4}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="//skote-v-dark.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout5}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="//skote-v-rtl.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout6}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <Link
                to="//1.envato.market/skotereact"
                className="btn btn-primary btn-block mt-3"
                target="_blank"
              >
                <i className="mdi mdi-cart me-1" /> Purchase Now
              </Link>
            </div>
          </div>
        </SimpleBar>
        <div className="rightbar-overlay" />
      </React.Fragment>
    )
  }
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  hideRightSidebar: PropTypes.func,
  isPreloader: PropTypes.bool,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  topbarTheme: PropTypes.any,
  onClose: PropTypes.func
}

const mapStatetoProps = state => {
  return { ...state.Layout }
}

export default connect(mapStatetoProps, {
  hideRightSidebar,
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
})(RightSidebar)
