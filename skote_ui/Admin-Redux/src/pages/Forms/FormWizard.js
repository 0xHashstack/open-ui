import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeTabVartical: 1,
      passedSteps: [1],
      passedStepsVertical: [1]
    };
    this.toggleTab.bind(this);
    this.toggleTabVertical.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...this.state.passedSteps, tab];
        this.setState({
          activeTab: tab,
          passedSteps: modifiedSteps
        });
      }
    }
  }

  toggleTabVertical(tab) {
    if (this.state.activesTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...this.state.passedStepsVertical, tab];
        this.setState({
          activeTabVartical: tab,
          passedStepsVertical: modifiedSteps
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Form Wizard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Basic Wizard</h4>
                    <div className="wizard clearfix">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 1,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === 1,
                              })}
                              onClick={() => {
                                this.toggleTab(1);
                              }}
                            >
                              <span className="number">1.</span>{" "}
                              Seller Details
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 2,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedSteps || []).includes(2)}
                              className={classnames({
                                active: this.state.activeTab === 2,
                              })}
                              onClick={() => {
                                this.toggleTab(2);
                              }}
                            >
                              <span className="number">2.</span>{" "}
                              <span>Company Document</span>
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 3,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedSteps || []).includes(3)}
                              className={classnames({
                                active: this.state.activeTab === 3,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTab(3);
                              }}
                            >
                              <span className="number">3.</span>{" "}
                              Bank Details
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 4,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedSteps || []).includes(4)}
                              className={classnames({
                                active: this.state.activeTab === 4,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTab(4);
                              }}
                            >
                              <span className="number">4.</span>{" "}
                              Confirm Detail
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix">
                        <TabContent
                          activeTab={this.state.activeTab}
                          className="body"
                        >
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      First name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Enter Your First Name"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">
                                      Last name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input2"
                                      placeholder="Enter Your Last Name"
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Phone
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Enter Your Phone No."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-email-input4">
                                      Email
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input4"
                                      placeholder="Enter Your Email ID"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Address
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="2"
                                      placeholder="Enter Your Address"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-pancard-input5">
                                        PAN Card
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-pancard-input5"
                                        placeholder="Enter Your PAN No."
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-vatno-input6">
                                        VAT/TIN No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-vatno-input6"
                                        placeholder="Enter Your VAT/TIN No."
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cstno-input7">
                                        CST No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cstno-input7"
                                        placeholder="Enter Your CST No."
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-servicetax-input8">
                                        Service Tax No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-servicetax-input8"
                                        placeholder="Enter Your Service Tax No."
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        Company UIN
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-companyuin-input9"
                                        placeholder="Enter Your Company UIN"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-declaration-input10">
                                        Declaration
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-Declaration-input10"
                                        placeholder="Declaration Details"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        Name on Card
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="Enter Your Name on Card"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Credit Card Type</Label>
                                      <select className="form-select">
                                        <option defaultValue>
                                          Select Card Type
                                        </option>
                                        <option value="AE">
                                          American Express
                                        </option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        Credit Card Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cardno-input12"
                                        placeholder="Credit Card Number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-card-verification-input0">
                                        Card Verification Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-card-verification-input0"
                                        placeholder="Credit Verification Number"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-expiration-input13">
                                        Expiration Date
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-expiration-input13"
                                        placeholder="Card Expiration Date"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      If several languages coalesce, the grammar
                                      of the resulting
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              this.state.activeTab === 1
                                ? "previous disabled"
                                : "previous"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTab(this.state.activeTab - 1);
                              }}
                            >
                              Previous
                            </Link>
                          </li>
                          <li
                            className={
                              this.state.activeTab === 4
                                ? "next disabled"
                                : "next"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTab(this.state.activeTab + 1);
                              }}
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>


              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Vertical Wizard</h4>
                    <div className="vertical-wizard wizard clearfix vertical">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 1,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTabVartical === 1,
                              })}
                              onClick={() => {
                                this.toggleTabVertical(1);
                              }}
                            >
                              <span className="number">1.</span>{" "}
                              Seller Details
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 2,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedStepsVertical || []).includes(2)}
                              className={classnames({
                                active: this.state.activeTabVartical === 2,
                              })}
                              onClick={() => {
                                this.toggleTabVertical(2);
                              }}
                            >
                              <span className="number">2.</span>{" "}
                              <span>Company Document</span>
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 3,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedStepsVertical || []).includes(3)}
                              className={classnames({
                                active: this.state.activeTabVartical === 3,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTabVertical(3);
                              }}
                            >
                              <span className="number">3.</span>{" "}
                              Bank Details
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 4,
                            })}>
                            <NavLink
                              disabled={!(this.state.passedStepsVertical || []).includes(4)}
                              className={classnames({
                                active: this.state.activeTabVartical === 4,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTabVertical(4);
                              }}
                            >
                              <span className="number">4.</span>{" "}
                              Confirm Detail
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix">
                        <TabContent
                          activeTab={this.state.activeTabVartical}
                          className="body"
                        >
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-firstname-input12">
                                      First name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input12"
                                      placeholder="Enter Your First Name"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-lastname-input22">
                                      Last name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input22"
                                      placeholder="Enter Your Last Name"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-phoneno-input32">
                                      Phone
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input32"
                                      placeholder="Enter Your Phone No."
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-email-input42">
                                      Email
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input42"
                                      placeholder="Enter Your Email ID"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-address-input12">
                                      Address
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input12"
                                      className="form-control"
                                      rows="2"
                                      placeholder="Enter Your Address"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-pancard-input52">
                                        PAN Card
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-pancard-input52"
                                        placeholder="Enter Your PAN Card No."
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-vatno-input62">
                                        VAT/TIN No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-vatno-input62"
                                        placeholder="Enter Your VAT/TIN No."
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cstno-input72">
                                        CST No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cstno-input72"
                                        placeholder="Enter Your CST No."
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-servicetax-input82">
                                        Service Tax No.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-servicetax-input82"
                                        placeholder="Enter Your Service Tax No."
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-companyuin-input92">
                                        Company UIN
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-companyuin-input92"
                                        placeholder="Company UIN No."
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-declaration-input102">
                                        Declaration
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-Declaration-input102"
                                        placeholder="Declaration Details"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-namecard-input112">
                                        Name on Card
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input112"
                                        placeholder="Enter Your Name on Card"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label>Credit Card Type</Label>
                                      <select className="form-select">
                                        <option>Select Card Type</option>
                                        <option>American Express</option>
                                        <option>Visa</option>
                                        <option>MasterCard</option>
                                        <option>Discover</option>
                                      </select>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cardno-input122">
                                        Credit Card Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cardno-input122"
                                        placeholder="Enter Your Card Number"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-card-verification-input">
                                        Card Verification Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-card-verification-input"
                                        placeholder="Card Verification Number"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-expiration-input132">
                                        Expiration Date
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-expiration-input132"
                                        placeholder="Card Expiration Date"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      If several languages coalesce, the grammar
                                      of the resulting
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              this.state.activeTabVartical === 1
                                ? "previous disabled"
                                : "previous"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTabVertical(this.state.activeTabVartical - 1);
                              }}
                            >
                              Previous
                            </Link>
                          </li>
                          <li
                            className={
                              this.state.activeTabVartical === 4
                                ? "next disabled"
                                : "next"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTabVertical(this.state.activeTabVartical + 1);
                              }}
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FormWizard;
