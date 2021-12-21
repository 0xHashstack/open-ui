import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validate from "./validate";
import { Col, Row } from "reactstrap";

class WizardFormFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <h6 className="text-muted">Seller Details</h6>
          <fieldset>
            <Row>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtFirstNameBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Contact Person
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtFirstNameBilling"
                      name="txtFirstNameBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtLastNameBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Mobile No.
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtLastNameBilling"
                      name="txtLastNameBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtCompanyBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Landline No.
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtCompanyBilling"
                      name="txtCompanyBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtEmailAddressBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Email Address
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtEmailAddressBilling"
                      name="txtEmailAddressBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtAddress1Billing"
                    className="col-lg-3 col-form-label"
                  >
                    Address 1
                  </label>
                  <Col lg={9}>
                    <textarea
                      id="txtAddress1Billing"
                      name="txtAddress1Billing"
                      rows="4"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtAddress2Billing"
                    className="col-lg-3 col-form-label"
                  >
                    Warehouse Address
                  </label>
                  <Col lg={9}>
                    <textarea
                      id="txtAddress2Billing"
                      name="txtAddress2Billing"
                      rows="4"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtCityBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Company Type
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtCityBilling"
                      name="txtCityBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtStateProvinceBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Live Market A/C
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtStateProvinceBilling"
                      name="txtStateProvinceBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtTelephoneBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Product Category
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtTelephoneBilling"
                      name="txtTelephoneBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="form-group">
                  <label
                    htmlFor="txtFaxBilling"
                    className="col-lg-3 col-form-label"
                  >
                    Product Sub Category
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtFaxBilling"
                      name="txtFaxBilling"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </fieldset>

          <div id="btn_div" className="float-right">
            <button
              type="button"
              className="btn btn-primary previous"
              disabled
              style={{ cursor: "no-drop" }}
            >
              {" "}
              Previous{" "}
            </button>{" "}
            &nbsp;
            <button type="submit" className="btn btn-primary next">
              {" "}
              Next{" "}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

WizardFormFirstPage.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
