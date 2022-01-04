import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Dashboard")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      {props.t("Default")}
                    </Link>
                    <Link to="/dashboard-saas" className="dropdown-item">
                      {props.t("Saas")}
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      {props.t("Crypto")}
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      {props.t("Blog")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone me-2"></i>
                    {props.t("UI Elements")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-alerts" className="dropdown-item">
                              {props.t("Alerts")}
                            </Link>
                            <Link to="/ui-buttons" className="dropdown-item">
                              {props.t("Buttons")}
                            </Link>
                            <Link to="/ui-cards" className="dropdown-item">
                              {props.t("Cards")}
                            </Link>
                            <Link to="/ui-carousel" className="dropdown-item">
                              {props.t("Carousel")}
                            </Link>
                            <Link to="/ui-dropdowns" className="dropdown-item">
                              {props.t("Dropdowns")}
                            </Link>
                            <Link to="/ui-grid" className="dropdown-item">
                              {props.t("Grid")}
                            </Link>
                            <Link to="/ui-images" className="dropdown-item">
                              {props.t("Images")}
                            </Link>
                            <Link to="/ui-lightbox" className="dropdown-item">
                              {props.t("Lightbox")}
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-modals" className="dropdown-item">
                              {props.t("Modals")}
                            </Link>
                            <Link to="/ui-offcanvas" className="dropdown-item">
                              {props.t("Offcanvas")}
                            </Link>
                            <Link to="/ui-rangeslider" className="dropdown-item">
                              {props.t("Range Slider")}
                            </Link>
                            <Link
                              to="/ui-session-timeout"
                              className="dropdown-item"
                            >
                              {props.t("Session Timeout")}
                            </Link>
                            <Link to="/ui-progressbars" className="dropdown-item">
                              {props.t("Progress Bars")}
                            </Link>
                            <Link to="/ui-placeholders" className="dropdown-item">
                              {props.t("Placeholders")}
                            </Link>
                            <Link to="/ui-sweet-alert" className="dropdown-item">
                              {props.t("Sweet-Alert")}
                            </Link>
                            <Link
                              to="/ui-tabs-accordions"
                              className="dropdown-item"
                            >
                              {props.t("Tabs & Accordions")}
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-typography" className="dropdown-item">
                              {props.t("Typography")}
                            </Link>
                            <Link to="/ui-toasts" className="dropdown-item">
                              {props.t("Toasts")}
                            </Link>
                            <Link to="/ui-video" className="dropdown-item">
                              {props.t("Video")}
                            </Link>
                            <Link to="/ui-general" className="dropdown-item">
                              {props.t("General")}
                            </Link>
                            <Link to="/ui-colors" className="dropdown-item">
                              {props.t("Colors")}
                            </Link>
                            <Link to="/ui-rating" className="dropdown-item">
                              {props.t("Rating")}
                            </Link>
                            <Link to="/ui-notifications" className="dropdown-item">
                              {props.t("Notifications")}
                            </Link>
                            <Link to="/ui-breadcrumb" className="dropdown-item">
                              {props.t("Breadcrumb")}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Apps")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="/calendar" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <Link to="/chat" className="dropdown-item">
                      {props.t("Chat")}
                    </Link>
                    <Link to="/apps-filemanager" className="dropdown-item">
                      {props.t("File Manager")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/email-inbox" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="/email-read" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setemail(!email);
                            }}
                          >
                            <span key="t-email-templates">Templates</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: email,
                            })}
                          >
                            <Link
                              to="/email-template-basic"
                              className="dropdown-item"
                            >
                              {props.t("Basic Action")}
                            </Link>
                            <Link
                              to="/email-template-alert"
                              className="dropdown-item"
                            >
                              {props.t("Alert Email")}
                            </Link>
                            <Link
                              to="/email-template-billing"
                              className="dropdown-item"
                            >
                              {props.t("Billing Email")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setecommerce(!ecommerce);
                        }}
                      >
                        {props.t(" Ecommerce")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: ecommerce,
                        })}
                      >
                        <Link to="/ecommerce-products" className="dropdown-item">
                          {props.t("Products")}
                        </Link>
                        <Link
                          to="/ecommerce-product-detail/1"
                          className="dropdown-item"
                        >
                          {props.t("Product Detail")}
                        </Link>
                        <Link to="/ecommerce-orders" className="dropdown-item">
                          {props.t("Orders")}
                        </Link>
                        <Link
                          to="/ecommerce-customers"
                          className="dropdown-item"
                        >
                          {props.t("Customers")}
                        </Link>
                        <Link to="/ecommerce-cart" className="dropdown-item">
                          {props.t("Cart")}
                        </Link>
                        <Link to="/ecommerce-checkout" className="dropdown-item">
                          {props.t("Checkout")}
                        </Link>
                        <Link to="/ecommerce-shops" className="dropdown-item">
                          {props.t("Shops")}
                        </Link>
                        <Link
                          to="/ecommerce-add-product"
                          className="dropdown-item"
                        >
                          {props.t("Add Product")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcrypto(!crypto);
                        }}
                      >
                        {props.t("Crypto")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: crypto })}
                      >
                        <Link to="/crypto-wallet" className="dropdown-item">
                          {props.t("Wallet")}
                        </Link>
                        <Link to="/crypto-buy-sell" className="dropdown-item">
                          {props.t("Buy/Sell")}
                        </Link>
                        <Link to="/crypto-exchange" className="dropdown-item">
                          {props.t("Exchange")}
                        </Link>
                        <Link to="/crypto-lending" className="dropdown-item">
                          {props.t("Lending")}
                        </Link>
                        <Link to="/crypto-orders" className="dropdown-item">
                          {props.t("Orders")}
                        </Link>
                        <Link
                          to="/crypto-kyc-application"
                          className="dropdown-item"
                        >
                          {props.t("KYC Application")}
                        </Link>
                        <Link to="/crypto-ico-landing" className="dropdown-item">
                          {props.t("ICO Landing")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setproject(!project);
                        }}
                      >
                        {props.t("Projects")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: project,
                        })}
                      >
                        <Link to="/projects-grid" className="dropdown-item">
                          {props.t("Projects Grid")}
                        </Link>
                        <Link to="/projects-list" className="dropdown-item">
                          {props.t("Projects List")}
                        </Link>
                        <Link to="/projects-overview" className="dropdown-item">
                          {props.t("Project Overview")}
                        </Link>
                        <Link to="/projects-create" className="dropdown-item">
                          {props.t("Create New")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settask(!task);
                        }}
                      >
                        {props.t("Tasks")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: task })}
                      >
                        <Link to="/tasks-list" className="dropdown-item">
                          {props.t("Task List")}
                        </Link>
                        <Link to="/tasks-kanban" className="dropdown-item">
                          {props.t("Kanban Board")}
                        </Link>
                        <Link to="/tasks-create" className="dropdown-item">
                          {props.t("Create Task")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcontact(!contact);
                        }}
                      >
                        {props.t("Contacts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: contact,
                        })}
                      >
                        <Link to="/contacts-grid" className="dropdown-item">
                          {props.t("User Grid")}
                        </Link>
                        <Link to="/contacts-list" className="dropdown-item">
                          {props.t("User List")}
                        </Link>
                        <Link to="/contacts-profile" className="dropdown-item">
                          {props.t("Profile")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setBlog(!blog);
                        }}
                      >
                        {props.t("Blog")} <div className="arrow-down" />
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: blog,
                        })}
                      >
                        <Link to="/blog-list" className="dropdown-item">
                          {props.t("Blog List")}
                        </Link>
                        <Link to="/blog-grid" className="dropdown-item">
                          {props.t("Blog Grid")}
                        </Link>
                        <Link to="/blog-details" className="dropdown-item">
                          {props.t("Blog Details")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <i className="bx bx-collection me-2"></i>
                    {props.t("Components")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="/form-elements" className="dropdown-item">
                          {props.t("Form Elements")}
                        </Link>
                        <Link to="/form-layouts" className="dropdown-item">
                          {props.t("Form Layouts")}
                        </Link>
                        <Link to="/form-validation" className="dropdown-item">
                          {props.t("Form Validation")}
                        </Link>
                        <Link to="/form-advanced" className="dropdown-item">
                          {props.t("Form Advanced")}
                        </Link>
                        <Link to="/form-editors" className="dropdown-item">
                          {props.t("Form Editors")}
                        </Link>
                        <Link to="/form-uploads" className="dropdown-item">
                          {props.t("Form File Upload")}{" "}
                        </Link>
                        <Link to="/form-xeditable" className="dropdown-item">
                          {props.t("Form Xeditable")}
                        </Link>
                        <Link to="/form-repeater" className="dropdown-item">
                          {props.t("Form Repeater")}
                        </Link>
                        <Link to="/form-wizard" className="dropdown-item">
                          {props.t("Form Wizard")}
                        </Link>
                        <Link to="/form-mask" className="dropdown-item">
                          {props.t("Form Mask")}
                        </Link>
                        <Link to="/dual-listbox" className="dropdown-item">
                          {props.t("Transfer List")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {props.t("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="/tables-basic" className="dropdown-item">
                          {props.t("Basic Tables")}
                        </Link>
                        <Link to="/tables-datatable" className="dropdown-item">
                          {props.t("Data Tables")}
                        </Link>
                        <Link to="/tables-responsive" className="dropdown-item">
                          {props.t("Responsive Table")}
                        </Link>
                        <Link to="/tables-editable" className="dropdown-item">
                          {props.t("Editable Table")}
                        </Link>
                        <Link to="/tables-dragndrop" className="dropdown-item">
                          {props.t("Drag & Drop Table")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setchart(!chart);
                        }}
                      >
                        {props.t("Charts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="/apex-charts" className="dropdown-item">
                          {" "}
                          {props.t("Apex charts")}
                        </Link>
                        <Link to="/chartist-charts" className="dropdown-item">
                          {" "}
                          {props.t("Chartjs Chart")}
                        </Link>
                        <Link to="/e-charts" className="dropdown-item">
                          {" "}
                          {props.t("E Chart")}
                        </Link>
                        <Link to="/sparkline-charts" className="dropdown-item">
                          {" "}
                          {props.t("Sparkline Chart")}
                        </Link>
                        <Link to="/charts-knob" className="dropdown-item">
                          {props.t("Knob Chart")}
                        </Link>
                        <Link to="/re-charts" className="dropdown-item">
                          {props.t("Re Chart")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          seticon(!icon);
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link to="/icons-boxicons" className="dropdown-item">
                          {props.t("Boxicons")}
                        </Link>
                        <Link
                          to="/icons-materialdesign"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="/icons-dripicons" className="dropdown-item">
                          {props.t("Dripicons")}
                        </Link>
                        <Link to="/icons-fontawesome" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setmap(!map);
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="/maps-google" className="dropdown-item">
                          {props.t("Google Maps")}{" "}
                        </Link>
                        <Link to="/maps-vector" className="dropdown-item">
                          {props.t("Vector Maps")}{" "}
                        </Link>
                        <Link to="/maps-leaflet" className="dropdown-item">
                          {props.t("Leaflet Maps")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <i className="bx bx-file me-2"></i>
                    {props.t("Extra pages")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: extra })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setinvoice(!invoice);
                        }}
                      >
                        {props.t("Invoices")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: invoice,
                        })}
                      >
                        <Link to="/invoices-list" className="dropdown-item">
                          {props.t("Invoice List")}
                        </Link>
                        <Link to="/invoices-detail" className="dropdown-item">
                          {props.t("Invoice Detail")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setauth(!auth);
                        }}
                      >
                        {props.t("Authentication")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: auth })}
                      >
                        <Link to="/pages-login" className="dropdown-item">
                          {props.t("Login")}
                        </Link>
                        <Link to="/pages-login-2" className="dropdown-item">
                          {props.t("Login 2")}
                        </Link>
                        <Link to="/pages-register" className="dropdown-item">
                          {props.t("Register")}
                        </Link>
                        <Link to="/pages-register-2" className="dropdown-item">
                          {props.t("Register 2")}
                        </Link>
                        <Link to="/page-recoverpw" className="dropdown-item">
                          {props.t("Recover Password")}
                        </Link>
                        <Link to="/page-recoverpw-2" className="dropdown-item">
                          {props.t("Recover Password 2")}
                        </Link>
                        <Link to="/auth-lock-screen" className="dropdown-item">
                          {props.t("Lock Screen")}
                        </Link>
                        <Link to="/auth-lock-screen-2" className="dropdown-item">
                          {props.t("Lock Screen 2")}
                        </Link>
                        <Link to="/page-confirm-mail" className="dropdown-item">
                          {props.t("Confirm Mail")}
                        </Link>
                        <Link
                          to="/page-confirm-mail-2"
                          className="dropdown-item"
                        >
                          {props.t("Confirm Mail 2")}
                        </Link>
                        <Link
                          to="/auth-email-verification"
                          className="dropdown-item"
                        >
                          {props.t("Email Verification")}
                        </Link>
                        <Link
                          to="/auth-email-verification-2"
                          className="dropdown-item"
                        >
                          {props.t("Email Verification 2")}
                        </Link>
                        <Link
                          to="/auth-two-step-verification"
                          className="dropdown-item"
                        >
                          {props.t("Two Step Verification")}
                        </Link>
                        <Link
                          to="/auth-two-step-verification-2"
                          className="dropdown-item"
                        >
                          {props.t("Two Step Verification 2")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          setutility(!utility);
                        }}
                      >
                        {props.t("Utility")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: utility,
                        })}
                      >
                        <Link to="/pages-starter" className="dropdown-item">
                          {props.t("Starter Page")}
                        </Link>
                        <Link to="/pages-maintenance" className="dropdown-item">
                          {props.t("Maintenance")}
                        </Link>
                        <Link to="/pages-comingsoon" className="dropdown-item">
                          {props.t("Coming Soon")}
                        </Link>
                        <Link to="/pages-timeline" className="dropdown-item">
                          {props.t("Timeline")}
                        </Link>
                        <Link to="/pages-faqs" className="dropdown-item">
                          {props.t("FAQs")}
                        </Link>
                        <Link to="/pages-pricing" className="dropdown-item">
                          {props.t("Pricing")}
                        </Link>
                        <Link to="/pages-404" className="dropdown-item">
                          {props.t("Error 404")}
                        </Link>
                        <Link to="/pages-500" className="dropdown-item">
                          {props.t("Error 500")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
