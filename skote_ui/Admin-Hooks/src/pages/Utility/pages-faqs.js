import React, { useState } from "react";
import MetaTags from 'react-meta-tags';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const PagesFaqs = () => {
  const [activeTab, setactiveTab] = useState("1");

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
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        setactiveTab("1");
                      }}
                    >
                      <i className="bx bx-question-mark d-block check-nav-icon mt-4 mb-2" />
                      <p className="font-weight-bold mb-4">General Questions</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        setactiveTab("2");
                      }}
                    >
                      <i className="bx bx-check-shield d-block check-nav-icon mt-4 mb-2" />
                      <p className="font-weight-bold mb-4">Privacy Policy</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        setactiveTab("3");
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
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <CardTitle className="mb-5">
                          General Questions
                        </CardTitle>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              What is Lorem Ipsum?
                            </h5>
                            <p className="text-muted">
                              New common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as occidental.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where does it come from?
                            </h5>
                            <p className="text-muted">
                              Everyone realizes why a new common language would
                              be desirable one could refuse to pay expensive
                              translators.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">Why do we use it?</h5>
                            <p className="text-muted">
                              Their separate existence is a myth. For science,
                              music, sport, etc, Europe uses the same
                              vocabulary.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex faq-box">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              To an English person, it will seem like simplified
                              English, as a skeptical Cambridge friend of mine
                              told me what Occidental
                            </p>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <CardTitle className="mb-5">Privacy Policy</CardTitle>

                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where does it come from?
                            </h5>
                            <p className="text-muted">
                              Everyone realizes why a new common language would
                              be desirable one could refuse to pay expensive
                              translators.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              To an English person, it will seem like simplified
                              English, as a skeptical Cambridge friend of mine
                              told me what Occidental
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              What is Lorem Ipsum?
                            </h5>
                            <p className="text-muted">
                              New common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as occidental.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">Why do we use it?</h5>
                            <p className="text-muted">
                              Their separate existence is a myth. For science,
                              music, sport, etc, Europe uses the same
                              vocabulary.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex faq-box">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages.
                            </p>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <CardTitle className="mb-5">Support</CardTitle>

                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              To an English person, it will seem like simplified
                              English, as a skeptical Cambridge friend of mine
                              told me what Occidental
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where does it come from?
                            </h5>
                            <p className="text-muted">
                              Everyone realizes why a new common language would
                              be desirable one could refuse to pay expensive
                              translators.
                            </p>
                          </div>
                        </div>

                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">Why do we use it?</h5>
                            <p className="text-muted">
                              Their separate existence is a myth. For science,
                              music, sport, etc, Europe uses the same
                              vocabulary.
                            </p>
                          </div>
                        </div>
                        <div className="faq-box d-flex mb-4">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              Where can I get some?
                            </h5>
                            <p className="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages.
                            </p>
                          </div>
                        </div>

                        <div className="d-flex faq-box">
                          <div className="flex-shrink-0 me-3 faq-icon">
                            <i className="bx bx-help-circle font-size-20 text-success" />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15">
                              What is Lorem Ipsum?
                            </h5>
                            <p className="text-muted">
                              New common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as occidental.
                            </p>
                          </div>
                        </div>
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
  );
};

export default PagesFaqs;
