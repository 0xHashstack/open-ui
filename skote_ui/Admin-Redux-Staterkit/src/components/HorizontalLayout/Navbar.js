import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let matchingMenuItem = null
    const ul = document.getElementById("navigation")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ isDashboard: !this.state.isDashboard })
                      }}
                      to="/dashboard"
                    >
                      <i className="bx bx-home-circle me" />
                      {this.props.t("Dashboard")} {this.props.menuOpen}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.isDashboard,
                      })}
                    >
                      <Link to="/dashboard" className="dropdown-item">
                        {this.props.t("Default")}
                      </Link>
                      <Link to="#" className="dropdown-item">
                        {this.props.t("Saas")}
                      </Link>
                      <Link to="#" className="dropdown-item">
                        {this.props.t("Crypto")}
                      </Link>
                      <Link to="#" className="dropdown-item">
                        {this.props.t("Blog")}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ uiState: !this.state.uiState })
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="bx bx-tone me" />
                      {this.props.t("UI Elements")}{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname(
                        "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                        { show: this.state.uiState }
                      )}
                    >
                      <Row>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Alerts")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Buttons")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Cards")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Carousel")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Dropdowns")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Grid")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Images")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Lightbox")}
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Modals")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Offcanvas")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Range Slider")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {this.props.t("Session Timeout")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Progress Bars")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Placeholders")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Sweet-Alert")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {this.props.t("Tabs & Accordions")}
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Typography")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Toasts")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Video")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("General")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Colors")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Rating")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Notifications")}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {this.props.t("Breadcrumb")}
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
                        e.preventDefault()
                        this.setState({ appState: !this.state.appState })
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="bx bx-customize me" />
                      {this.props.t("Apps")} <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.appState,
                      })}
                    >
                      <Link to="#" className="dropdown-item">
                        {this.props.t("Calendar")}
                      </Link>
                      <Link to="#" className="dropdown-item">
                        {this.props.t("Chat")}
                      </Link>
                      <Link to="#" className="dropdown-item">
                        {this.props.t("File Manager")}
                      </Link>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              emailState: !this.state.emailState,
                            })
                          }}
                        >
                          {this.props.t("Email")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Inbox")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Read Email")}
                          </Link>
                          <div className="dropdown">
                            <Link
                              className="dropdown-item dropdown-toggle arrow-none"
                              to="/#"
                              onClick={e => {
                                e.preventDefault()
                                this.setState({
                                  emailState: !this.state.emailState,
                                })
                              }}
                            >
                              <span key="t-email-templates">Templates</span>{" "}
                              <div className="arrow-down"></div>
                            </Link>
                            <div
                              className={classname("dropdown-menu", {
                                show: this.state.emailState,
                              })}
                            >
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                {this.props.t("Basic Action")}
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                {this.props.t("Alert Email")}
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                {this.props.t("Billing Email")}
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
                            e.preventDefault()
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            })
                          }}
                        >
                          {this.props.t(" Ecommerce")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                        >
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Products")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Product Details")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Orders")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Customers")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Cart")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Checkout")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Shops")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Add Product")}
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ isCrypto: !this.state.isCrypto })
                          }}
                        >
                          {this.props.t("Crypto")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.isCrypto,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Wallet")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Buy/Sell")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Exchange")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Lending")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Orders")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("KYC Application")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("ICO Landing")}
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              projectState: !this.state.projectState,
                            })
                          }}
                        >
                          {this.props.t("Projects")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.projectState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Projects Grid")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Projects List")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Project Overview")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Create New")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ taskState: !this.state.taskState })
                          }}
                        >
                          {this.props.t("Tasks")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.taskState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Task List")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Kanban Board")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Create Task")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              contactState: !this.state.contactState,
                            })
                          }}
                        >
                          {this.props.t("Contacts")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.contactState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("User Grid")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("User List")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Profile")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              blogState: !this.state.blogState,
                            })
                          }}
                        >
                          {this.props.t("Blog")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.blogState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Blog List")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Blog Grid")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Blog Details")}
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
                        e.preventDefault()
                        this.setState({
                          componentState: !this.state.componentState,
                        })
                      }}
                    >
                      <i className="bx bx-collection me" />
                      {this.props.t("Components")}{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.componentState,
                      })}
                    >
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ formState: !this.state.formState })
                          }}
                        >
                          {this.props.t("Forms")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.formState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Elements")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Layouts")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Validation")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Advanced")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Editors")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form File Upload")}{" "}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Xeditable")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Repeater")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Wizard")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Form Mask")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Transfer List")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              tableState: !this.state.tableState,
                            })
                          }}
                        >
                          {this.props.t("Tables")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.tableState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Basic Tables")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Data Tables")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Responsive Table")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Editable Table")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Drag & Drop Table")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              chartState: !this.state.chartState,
                            })
                          }}
                        >
                          {this.props.t("Charts")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.chartState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {" "}
                            {this.props.t("Apex charts")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {" "}
                            {this.props.t("Chartjs Chart")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {" "}
                            {this.props.t("E Chart")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {" "}
                            {this.props.t("Sparkline Chart")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Knob Chart")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Re Chart")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ iconState: !this.state.iconState })
                          }}
                        >
                          {this.props.t("Icons")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.iconState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Boxicons")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Material Design")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Dripicons")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Font awesome")}{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ mapState: !this.state.mapState })
                          }}
                        >
                          {this.props.t("Maps")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.mapState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Google Maps")}{" "}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Vector Maps")}{" "}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Leaflet Maps")}{" "}
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
                        e.preventDefault()
                        this.setState({ extraState: !this.state.extraState })
                      }}
                    >
                      <i className="bx bx-file me" />
                      {this.props.t("Extra pages")}{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                    >
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              invoiceState: !this.state.invoiceState,
                            })
                          }}
                        >
                          {this.props.t("Invoices")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.invoiceState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Invoice List")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Invoice Detail")}
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ authState: !this.state.authState })
                          }}
                        >
                          {this.props.t("Authentication")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.authState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Login")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Login 2")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Register")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Register 2")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Recover Password")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Recover Password 2")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Lock Screen")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Lock Screen 2")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Confirm Mail")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Confirm Mail 2")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Email verification")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Email verification 2")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Two step verification")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Two step verification 2")}
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              utilityState: !this.state.utilityState,
                            })
                          }}
                        >
                          {this.props.t("Utility")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.utilityState,
                          })}
                        >
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Starter Page")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {this.props.t("Maintenance")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Coming Soon")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Timeline")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("FAQs")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Pricing")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Error 404")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {this.props.t("Error 500")}
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
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Navbar))
