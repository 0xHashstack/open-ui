import PropTypes from "prop-types";
import React, { Component } from "react";

//Simple bar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.refDiv = React.createRef();
  }

  componentDidMount() {
    this.initMenu();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop;
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300;
          }
        }
      }
    }, 300);
  };

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      this.scrollElement(item);
      return false;
    }
    this.scrollElement(item);
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <SimpleBar className="h-100" ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">{this.props.t("Menu")}</li>
              <li>
                <Link to="/#">
                  <i className="bx bx-home-circle" />
                  <span className="badge rounded-pill bg-info float-end">
                    04
                  </span>
                  <span>{this.props.t("Dashboards")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/dashboard">{this.props.t("Default")}</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-saas">{this.props.t("Saas")}</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-crypto">{this.props.t("Crypto")}</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-blog">{this.props.t("Blog")}</Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">{this.props.t("Apps")}</li>

              <li>
                <Link to="/calendar" className="">
                  <i className="bx bx-calendar" />
                  <span>{this.props.t("Calendar")}</span>
                </Link>
              </li>

              <li>
                <Link to="/chat" className="">
                  <i className="bx bx-chat" />
                  <span>{this.props.t("Chat")}</span>
                </Link>
              </li>
              <li>
                <Link to="/apps-filemanager" className="">
                  <i className="bx bx-file" />
                  <span className="badge rounded-pill bg-success float-end">
                    {this.props.t("New")}
                  </span>
                  <span>{this.props.t("File Manager")}</span>
                </Link>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Ecommerce")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ecommerce-products">
                      {this.props.t("Products")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-product-details/1">
                      {this.props.t("Product Details")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-orders">{this.props.t("Orders")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-customers">
                      {this.props.t("Customers")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-cart">{this.props.t("Cart")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-checkout">
                      {this.props.t("Checkout")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-shops">{this.props.t("Shops")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-add-product">
                      {this.props.t("Add Product")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-bitcoin" />
                  <span>{this.props.t("Crypto")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/crypto-wallet">{this.props.t("Wallet")}</Link>
                  </li>
                  <li>
                    <Link to="/crypto-buy-sell">
                      {this.props.t("Buy/Sell")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/crypto-exchange">
                      {this.props.t("Exchange")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/crypto-lending">{this.props.t("Lending")}</Link>
                  </li>
                  <li>
                    <Link to="/crypto-orders">{this.props.t("Orders")}</Link>
                  </li>
                  <li>
                    <Link to="/crypto-kyc-application">
                      {this.props.t("KYC Application")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/crypto-ico-landing">
                      {this.props.t("ICO Landing")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-envelope"></i>
                  <span>{this.props.t("Email")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/email-inbox">{this.props.t("Inbox")}</Link>
                  </li>
                  <li>
                    <Link to="/email-read">{this.props.t("Read Email")} </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <span
                        className="badge rounded-pill badge-soft-success float-end"
                        key="t-new"
                      >
                        {this.props.t("New")}
                      </span>
                      <span key="t-email-templates">
                        {this.props.t("Templates")}
                      </span>
                    </Link>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <Link to="/email-template-basic">
                          {this.props.t("Basic Action")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/email-template-alert">
                          {this.props.t("Alert Email")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/email-template-billing">
                          {this.props.t("Billing Email")}{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-receipt" />
                  <span>{this.props.t("Invoices")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/invoices-list">
                      {this.props.t("Invoice List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/invoices-detail">
                      {this.props.t("Invoice Detail")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-briefcase-alt-2" />
                  <span>{this.props.t("Projects")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/projects-grid">
                      {this.props.t("Projects Grid")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-list">
                      {this.props.t("Projects List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-overview">
                      {this.props.t("Project Overview")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-create">
                      {this.props.t("Create New")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-task" />
                  <span>{this.props.t("Tasks")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/tasks-list">{this.props.t("Task List")}</Link>
                  </li>
                  <li>
                    <Link to="/tasks-kanban">
                      {this.props.t("Kanban Board")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tasks-create">
                      {this.props.t("Create Task")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bxs-user-detail" />
                  <span>{this.props.t("Contacts")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/contacts-grid">{this.props.t("User Grid")}</Link>
                  </li>
                  <li>
                    <Link to="/contacts-list">{this.props.t("User List")}</Link>
                  </li>
                  <li>
                    <Link to="/contacts-profile">
                      {this.props.t("Profile")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#">
                  <span className="badge rounded-pill bg-success float-end">
                    {this.props.t("New")}
                  </span>
                  <i className="bx bxs-detail" />

                  <span>{this.props.t("Blog")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/blog-list">{this.props.t("Blog List")}</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">{this.props.t("Blog Grid")}</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      {this.props.t("Blog Details")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">Pages</li>
              <li>
                <Link to="/#">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">
                    {this.props.t("New")}
                  </span>
                  <span>{this.props.t("Authentication")}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/pages-login">{this.props.t("Login")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-login-2">{this.props.t("Login 2")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-register">{this.props.t("Register")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-register-2">
                      {this.props.t("Register 2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-recoverpw">
                      {this.props.t("Recover Password")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-recoverpw-2">
                      {this.props.t("Recover Password 2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-lock-screen">
                      {this.props.t("Lock Screen")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-lock-screen-2">
                      {this.props.t("Lock Screen 2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-confirm-mail">
                      {this.props.t("Confirm Mail")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-confirm-mail-2">
                      {this.props.t("Confirm Mail 2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-email-verification">
                      {this.props.t("Email Verification")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-email-verification-2">
                      {this.props.t("Email Verification 2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-two-step-verification">
                      {this.props.t("Two Step Verification")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-two-step-verification-2">
                      {this.props.t("Two Step Verification 2")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-file" />
                  <span>{this.props.t("Utility")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/pages-starter">
                      {this.props.t("Starter Page")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-maintenance">
                      {this.props.t("Maintenance")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-comingsoon">
                      {this.props.t("Coming Soon")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-timeline">{this.props.t("Timeline")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-faqs">{this.props.t("FAQs")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-pricing">{this.props.t("Pricing")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-404">{this.props.t("Error 404")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-500">{this.props.t("Error 500")}</Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">{this.props.t("Components")}</li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-tone" />
                  <span>{this.props.t("UI Elements")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ui-alerts">{this.props.t("Alerts")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-buttons">{this.props.t("Buttons")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-cards">{this.props.t("Cards")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-carousel">{this.props.t("Carousel")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-dropdowns">{this.props.t("Dropdowns")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-offcanvas">{this.props.t("OffCanvas")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-grid">{this.props.t("Grid")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-images">{this.props.t("Images")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-lightbox">{this.props.t("Lightbox")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-modals">{this.props.t("Modals")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-rangeslider">
                      {this.props.t("Range Slider")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-session-timeout">
                      {this.props.t("Session Timeout")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-progressbars">
                      {this.props.t("Progress Bars")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-placeholders">{this.props.t("Placeholders")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-sweet-alert">
                      {this.props.t("Sweet-Alert")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-tabs-accordions">
                      {this.props.t("Tabs & Accordions")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-typography">
                      {this.props.t("Typography")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-toasts">{this.props.t("Toasts")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-video">{this.props.t("Video")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-general">{this.props.t("General")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-colors">{this.props.t("Colors")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-rating">{this.props.t("Rating")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-notifications">
                      {this.props.t("Notifications")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-breadcrumb">
                      {this.props.t("Breadcrumb")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#">
                  <i className="bx bxs-eraser" />
                  <span className="badge rounded-pill bg-danger float-end">
                    10
                  </span>
                  <span>{this.props.t("Forms")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/form-elements">
                      {this.props.t("Form Elements")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-layouts">
                      {this.props.t("Form Layouts")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-validation">
                      {this.props.t("Form Validation")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-advanced">
                      {this.props.t("Form Advanced")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-editors">
                      {this.props.t("Form Editors")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-uploads">
                      {this.props.t("Form File Upload")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-xeditable">
                      {this.props.t("Form Xeditable")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-repeater">
                      {this.props.t("Form Repeater")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-wizard">{this.props.t("Form Wizard")}</Link>
                  </li>
                  <li>
                    <Link to="/form-mask">{this.props.t("Form Mask")}</Link>
                  </li>
                  <li>
                    <Link to="/dual-listbox">
                      {this.props.t("Transfer List")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-list-ul" />
                  <span>{this.props.t("Tables")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/tables-basic">
                      {this.props.t("Basic Tables")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-datatable">
                      {this.props.t("Data Tables")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-responsive">
                      {this.props.t("Responsive Table")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-editable">
                      {this.props.t("Editable Table")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-dragndrop">
                      {this.props.t("Drag & Drop Table")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bxs-bar-chart-alt-2" />
                  <span>{this.props.t("Charts")}</span>
                </Link>

                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/apex-charts">{this.props.t("Apex charts")}</Link>
                  </li>
                  <li>
                    <Link to="/chartist-charts">
                      {this.props.t("Chartist Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/chartjs-charts">
                      {this.props.t("Chartjs Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/e-charts">{this.props.t("E Chart")}</Link>
                  </li>
                  <li>
                    <Link to="/sparkline-charts">
                      {this.props.t("Sparkline Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/charts-knob">{this.props.t("Knob Chart")}</Link>
                  </li>
                  <li>
                    <Link to="/re-charts">{this.props.t("Re Chart")}</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-aperture" />
                  <span>{this.props.t("Icons")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/icons-boxicons">{this.props.t("Boxicons")}</Link>
                  </li>
                  <li>
                    <Link to="/icons-materialdesign">
                      {this.props.t("Material Design")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/icons-dripicons">
                      {this.props.t("Dripicons")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/icons-fontawesome">
                      {this.props.t("Font awesome")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-map" />
                  <span>{this.props.t("Maps")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/maps-google">{this.props.t("Google Maps")}</Link>
                  </li>
                  <li>
                    <Link to="/maps-vector">{this.props.t("Vector Maps")}</Link>
                  </li>
                  <li>
                    <Link to="/maps-leaflet">
                      {this.props.t("Leaflet Maps")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-share-alt" />
                  <span>{this.props.t("Multi Level")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="true">
                  <li>
                    <Link to="#">{this.props.t("Level 1.1")}</Link>
                  </li>
                  <li>
                    <Link to="#" className="has-arrow">
                      {this.props.t("Level 1.2")}
                    </Link>
                    <ul className="sub-menu" aria-expanded="true">
                      <li>
                        <Link to="#">{this.props.t("Level 2.1")}</Link>
                      </li>
                      <li>
                        <Link to="#">{this.props.t("Level 2.2")}</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    );
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
};

export default withRouter(withTranslation()(SidebarContent));