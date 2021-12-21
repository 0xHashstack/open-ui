import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Media,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class PagesFaqs extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: "1",
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>FAQs | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Utility" breadcrumbItem="FAQs" />

            <div className="checkout-tabs">
              <Row>
                <Col lg="2">
                  <Nav className="flex-column" pills>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1",
                        })}
                        onClick={() => {
                          this.toggleTab("1")
                        }}
                      >
                        <i className="bx bx-question-mark d-block check-nav-icon mt-4 mb-2" />
                        <p className="font-weight-bold mb-4">
                          General Questions
                        </p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2",
                        })}
                        onClick={() => {
                          this.toggleTab("2")
                        }}
                      >
                        <i className="bx bx-check-shield d-block check-nav-icon mt-4 mb-2" />
                        <p className="font-weight-bold mb-4">Privacy Policy</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "3",
                        })}
                        onClick={() => {
                          this.toggleTab("3")
                        }}
                      >
                        <i className="bx bx-support d-block check-nav-icon mt-4 mb-2" />
                        <p className="font-weight-bold mb-4">Support</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col lg="10">
                  <Card>
                    <CardBody>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <CardTitle className="mb-5 h4">
                            General Questions
                          </CardTitle>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                What is Lorem Ipsum?
                              </h5>
                              <p className="text-muted">
                                New common language will be more simple and
                                regular than the existing European languages. It
                                will be as simple as occidental.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where does it come from?
                              </h5>
                              <p className="text-muted">
                                Everyone realizes why a new common language
                                would be desirable one could refuse to pay
                                expensive translators.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                If several languages coalesce, the grammar of
                                the resulting language is more simple and
                                regular than that of the individual languages.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Why do we use it?
                              </h5>
                              <p className="text-muted">
                                Their separate existence is a myth. For science,
                                music, sport, etc, Europe uses the same
                                vocabulary.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                To an English person, it will seem like
                                simplified English, as a skeptical Cambridge
                                friend of mine told me what Occidental
                              </p>
                            </Media>
                          </Media>
                        </TabPane>
                        <TabPane tabId="2">
                          <CardTitle className="mb-5">Privacy Policy</CardTitle>

                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where does it come from?
                              </h5>
                              <p className="text-muted">
                                Everyone realizes why a new common language
                                would be desirable one could refuse to pay
                                expensive translators.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                To an English person, it will seem like
                                simplified English, as a skeptical Cambridge
                                friend of mine told me what Occidental
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                What is Lorem Ipsum?
                              </h5>
                              <p className="text-muted">
                                New common language will be more simple and
                                regular than the existing European languages. It
                                will be as simple as occidental.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Why do we use it?
                              </h5>
                              <p className="text-muted">
                                Their separate existence is a myth. For science,
                                music, sport, etc, Europe uses the same
                                vocabulary.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                If several languages coalesce, the grammar of
                                the resulting language is more simple and
                                regular than that of the individual languages.
                              </p>
                            </Media>
                          </Media>
                        </TabPane>
                        <TabPane tabId="3">
                          <CardTitle className="mb-5">Support</CardTitle>

                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                To an English person, it will seem like
                                simplified English, as a skeptical Cambridge
                                friend of mine told me what Occidental
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where does it come from?
                              </h5>
                              <p className="text-muted">
                                Everyone realizes why a new common language
                                would be desirable one could refuse to pay
                                expensive translators.
                              </p>
                            </Media>
                          </Media>

                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Why do we use it?
                              </h5>
                              <p className="text-muted">
                                Their separate existence is a myth. For science,
                                music, sport, etc, Europe uses the same
                                vocabulary.
                              </p>
                            </Media>
                          </Media>
                          <Media className="faq-box mb-4">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                Where can I get some?
                              </h5>
                              <p className="text-muted">
                                If several languages coalesce, the grammar of
                                the resulting language is more simple and
                                regular than that of the individual languages.
                              </p>
                            </Media>
                          </Media>

                          <Media className="faq-box">
                            <div className="faq-icon me-3">
                              <i className="bx bx-help-circle font-size-20 text-success" />
                            </div>
                            <Media body>
                              <h5 className="font-size-15">
                                What is Lorem Ipsum?
                              </h5>
                              <p className="text-muted">
                                New common language will be more simple and
                                regular than the existing European languages. It
                                will be as simple as occidental.
                              </p>
                            </Media>
                          </Media>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default PagesFaqs
