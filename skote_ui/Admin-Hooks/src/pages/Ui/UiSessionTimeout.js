import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

import SweetAlert from "react-bootstrap-sweetalert"
import { Card, Row, Col, CardBody, CardTitle, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiSessionTimeout extends Component {
  constructor(props) {
    super(props)
    this.state = { timeralert: null, timerswitch: false, seconds: 0 }
    this.tick = this.tick.bind(this)
  }
  tick() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
    }, 1000)
  }

  componentDidMount() {
    this.main_function()
  }

  hideAlert() {
    window.location = "/login"
  }
  confirmAlert() {
    this.setState({ timeralert: null })
  }
  main_function() {
    setTimeout(
      function () {
        setTimeout(
          function () {
            this.function1()
          }.bind(this),
          6000
        )
        this.function2()
      }.bind(this),
      6000
    )
  }
  function1() {
    if (window.location.pathname === "/ui-session-timeout") {
      window.location = "/login"
    } else {
    }
  }
  function2() {
    this.tick()
    const nextmsg = () => (
      <SweetAlert
        showCancel
        confirmBtnText="Stay Connected"
        cancelBtnText="Logout"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        title="Your Session is About to Expire!"
        onCancel={() => this.hideAlert()}
        onConfirm={() => this.confirmAlert()}
      >
        Redirecting in 10s seconds.<br></br>
      </SweetAlert>
    )
    this.setState({ timeralert: nextmsg() })
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Session Timeout | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            {this.state.timeralert}

            <Breadcrumbs title="UI Elements" breadcrumbItem="Session Timeout" />

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>Bootstrap-session-timeout</CardTitle>
                    <p className="sub-header">
                      Session timeout and keep-alive control with a nice
                      Bootstrap warning dialog.
                    </p>

                    <div>
                      <p>
                        After a set amount of idle time, a Bootstrap warning
                        dialog is shown to the user with the option to either
                        log out, or stay connected. If &quot;Logout&ldquo; button is
                        selected, the page is redirected to a logout URL. If
                        &quot;Stay Connected&ldquo; is selected the dialog closes and the
                        session is kept alive. If no option is selected after
                        another set amount of idle time, the page is
                        automatically redirected to a set timeout URL.
                      </p>
                      <p>
                        Idle time is defined as no mouse, keyboard or touch
                        event activity registered by the browser.
                      </p>

                      <p className="mb-0">
                        As long as the user is active, the (optional) keep-alive
                        URL keeps getting pinged and the session stays alive. If
                        you have no need to keep the server-side session alive
                        via the keep-alive URL, you can also use this plugin as
                        a simple lock mechanism that redirects to your
                        lock-session or log-out URL after a set amount of idle
                        time.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default UiSessionTimeout
