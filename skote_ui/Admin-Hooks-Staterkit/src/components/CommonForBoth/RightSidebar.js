import React from "react";
import PropTypes from "prop-types";
import { Row, Col, FormGroup } from "reactstrap";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "../../components/CommonForBoth/rightbar.scss";

//Import images
import bgimg1 from "../../assets/images/sidebar/img1.jpg";
import bgimg2 from "../../assets/images/sidebar/img2.jpg";
import bgimg3 from "../../assets/images/sidebar/img3.jpg";
import bgimg4 from "../../assets/images/sidebar/img4.jpg";
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

//constants
import {
  layoutTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftBarThemeImageTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from "../../constants/layout";

const RightSidebar = props => {
  const onCloseRightBar = () => {
    const { onClose } = props;
    if (onClose) {
      onClose();
    }
  };
  return (
    <React.Fragment>
     <div className="right-bar" id="right-bar">
      <SimpleBar style={{ height: "900px" }}>
        <div data-simplebar className="h-100">
          <div className="rightbar-title px-3 py-4">
            <Link
              to="#"
              onClick={e => {
                  e.preventDefault()
                  props.showRightSidebarAction(false)
                }}
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
                checked={props.layoutType === layoutTypes.VERTICAL}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayout(e.target.value);
                  }
                }}
              />
              <label className="me-1" htmlFor="radioVertical">Vertical</label>
              <input
                type="radio"
                id="radioHorizontal"
                name="radioFruit"
                value={layoutTypes.HORIZONTAL}
                checked={props.layoutType === layoutTypes.HORIZONTAL}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayout(e.target.value);
                  }
                }}
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
                checked={props.layoutWidth === layoutWidthTypes.FLUID}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
              />
              <label className="me-1" htmlFor="radioFluid">Fluid</label>
              <input
                type="radio"
                id="radioBoxed"
                name="radioWidth"
                value={layoutWidthTypes.BOXED}
                checked={props.layoutWidth === layoutWidthTypes.BOXED}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
              />
              <label htmlFor="radioBoxed" className="me-2">
                Boxed
              </label>
              <input
                type="radio"
                id="radioscrollable"
                name="radioscrollable"
                value={layoutWidthTypes.SCROLLABLE}
                checked={props.layoutWidth === layoutWidthTypes.SCROLLABLE}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
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
                checked={props.topbarTheme === topBarThemeTypes.LIGHT}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              />
              <label className="me-1" htmlFor="radioThemeLight">Light</label>
              <input
                type="radio"
                id="radioThemeDark"
                name="radioTheme"
                value={topBarThemeTypes.DARK}
                checked={props.topbarTheme === topBarThemeTypes.DARK}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              />
              <label className="me-1" htmlFor="radioThemeDark">Dark</label>
              {props.layoutType === "vertical" ? null : (
                <>
                  <input
                    type="radio"
                    id="radioThemeColored"
                    name="radioTheme"
                    value={topBarThemeTypes.COLORED}
                    checked={props.topbarTheme === topBarThemeTypes.COLORED}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeTopbarTheme(e.target.value);
                      }
                    }}
                  />
                  <label className="me-1" htmlFor="radioThemeColored">Colored</label>{" "}
                </>
              )}
            </div>

            {props.layoutType === "vertical" ? (
              <React.Fragment>
                <hr className="mt-1" />
                <div className="radio-toolbar">
                  <span className="mb-2 d-block" id="radio-title">
                    Left Sidebar Type{" "}
                  </span>
                  <input
                    type="radio"
                    id="sidebarDefault"
                    name="sidebarType"
                    value={leftSidebarTypes.DEFAULT}
                    checked={props.leftSideBarType === leftSidebarTypes.DEFAULT}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value);
                      }
                    }}
                  />
                  <label className="me-1" htmlFor="sidebarDefault">Default</label>
                  <input
                    type="radio"
                    id="sidebarCompact"
                    name="sidebarType"
                    value={leftSidebarTypes.COMPACT}
                    checked={props.leftSideBarType === leftSidebarTypes.COMPACT}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value);
                      }
                    }}
                  />
                  <label className="me-1" htmlFor="sidebarCompact">Compact</label>
                  <input
                    type="radio"
                    id="sidebarIcon"
                    name="sidebarType"
                    value={leftSidebarTypes.ICON}
                    checked={props.leftSideBarType === leftSidebarTypes.ICON}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value);
                      }
                    }}
                  />
                  <label className="me-1" htmlFor="sidebarIcon">Icon</label>
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
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.LIGHT}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemelight"
                        className="bg-light rounded-circle wh-30 me-1"
                      ></label>

                      <input
                        type="radio"
                        id="leftsidebarThemedark"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.DARK}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.DARK}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemedark"
                        className="bg-dark rounded-circle wh-30 me-1"
                      ></label>

                      <input
                        type="radio"
                        id="leftsidebarThemecolored"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.COLORED}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.COLORED}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
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
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.WINTER}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemewinter"
                        className="gradient-winter rounded-circle wh-30 me-1"
                      ></label>

                      <input
                        type="radio"
                        id="leftsidebarThemeladylip"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.LADYLIP}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.LADYLIP}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemeladylip"
                        className="gradient-lady-lip rounded-circle wh-30 me-1"
                      ></label>

                      <input
                        type="radio"
                        id="leftsidebarThemeplumplate"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.PLUMPLATE}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.PLUMPLATE}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemeplumplate"
                        className="gradient-plum-plate rounded-circle wh-30 me-1"
                      ></label>

                      <input
                        type="radio"
                        id="leftsidebarThemestrongbliss"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.STRONGBLISS}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.STRONGBLISS}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemestrongbliss"
                        className="gradient-strong-bliss rounded-circle wh-30 me-1"
                      ></label>
                      <input
                        type="radio"
                        id="leftsidebarThemesgreatwhale"
                        name="leftsidebarTheme"
                        value={leftSideBarThemeTypes.GREATWHALE}
                        checked={props.leftSideBarTheme === leftSideBarThemeTypes.GREATWHALE}
                        onChange={e => {
                          if (e.target.checked) {
                            props.changeSidebarTheme(e.target.value);
                          }
                        }}
                      />
                      <label
                        htmlFor="leftsidebarThemesgreatwhale"
                        className="gradient-strong-great-whale rounded-circle wh-30 me-1"
                      ></label>
                    </Col>
                  </Row>
                </div>
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
                      checked={props.leftSideBarThemeImage === leftBarThemeImageTypes.IMG1}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarThemeImage(e.target.value);
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemebgimg1">
                      <img
                        alt="sidebar bg image"
                        width="90"
                        className="themesideimage rounded"
                        src={bgimg1}
                      />
                    </label>
                    {"   "}

                    <input
                      type="radio"
                      id="leftsidebarThemebgimg2"
                      name="leftsidebarThemeImage"
                      value={leftBarThemeImageTypes.IMG2}
                      checked={props.leftSideBarThemeImage === leftBarThemeImageTypes.IMG2}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarThemeImage(e.target.value);
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemebgimg2">
                      <img
                        alt="sidebar bg image"
                        width="90"
                        className="themesideimage rounded"
                        src={bgimg2}
                      />
                    </label>
                    {"   "}

                    <input
                      type="radio"
                      id="leftsidebarThemebgimg3"
                      name="leftsidebarThemeImage"
                      value={leftBarThemeImageTypes.IMG3}
                      checked={props.leftSideBarThemeImage === leftBarThemeImageTypes.IMG3}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarThemeImage(e.target.value);
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemebgimg3">
                      <img
                        alt="sidebar bg image"
                        width="90"
                        className="themesideimage rounded"
                        src={bgimg3}
                      />
                    </label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemebgimg4"
                      name="leftsidebarThemeImage"
                      value={leftBarThemeImageTypes.IMG4}
                      checked={props.leftSideBarThemeImage === leftBarThemeImageTypes.IMG4}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarThemeImage(e.target.value);
                        }
                      }}
                    />
                    <label htmlFor="leftsidebarThemebgimg4">
                      <img
                        alt="sidebar bg image"
                        width="90"
                        className="themesideimage rounded"
                        src={bgimg4}
                      />
                    </label>
                    {"   "}

                    <input
                      type="radio"
                      id="leftsidebarThemenone"
                      name="leftsidebarThemeImage"
                      value={leftBarThemeImageTypes.NONE}
                      checked={props.leftSideBarThemeImage === leftBarThemeImageTypes.NONE}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarThemeImage(e.target.value);
                        }
                      }}
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

              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input checkbox"
                  id="checkbox_1"
                  checked={props.isPreloader}
                  onChange={() => {
                    props.changePreloader(!props.isPreloader);
                  }}
                />

                <label className="form-check-label" htmlFor="checkbox_1">
                  Preloader
                </label>
              </div>
            </FormGroup>

            <h6 className="text-center">Choose Layouts</h6>

            <div className="mb-2">
              <Link to="//skote-v-light.react.themesbrand.com" target="_blank">
                <img src={layout1} className="img-fluid img-thumbnail" alt="" />
              </Link>
            </div>

            <div className="mb-2">
              <Link to="//skote-v-dark.react.themesbrand.com" target="_blank">
                <img src={layout2} className="img-fluid img-thumbnail" alt="" />
              </Link>
            </div>

            <div className="mb-2">
              <Link to="//skote-v-rtl.react.themesbrand.com" target="_blank">
                <img src={layout3} className="img-fluid img-thumbnail" alt="" />
              </Link>
            </div>

            <Link
              to="//1.envato.market/skotereact"
              className="btn btn-primary btn-block mt-3"
              target="_blank"
            >
              <i className="mdi mdi-cart ms-1" /> Purchase Now
            </Link>
          </div>
        </div>
      </SimpleBar>
      </div>
      <div className="rightbar-overlay"></div>
    </React.Fragment>
  );
};

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
  onClose: PropTypes.func,
};

const mapStateToProps = state => {
  return { ...state.Layout };
};

export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar);
