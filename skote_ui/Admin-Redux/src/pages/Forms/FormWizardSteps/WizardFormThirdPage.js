import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validate from "./validate";
import { Col, Row } from "reactstrap";

class WizardFormThirdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <h6 className="text-muted">Bank Details</h6>
          <fieldset>
            <Row>
              <Col md={6}>
                <div className="form-group row">
                  <label
                    htmlFor="txtNameCard"
                    className="col-lg-3 col-form-label"
                  >
                    Name on Card
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtNameCard"
                      name="txtNameCard"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group row">
                  <label
                    htmlFor="ddlCreditCardType"
                    className="col-lg-3 col-form-label"
                  >
                    Credit Card Type
                  </label>
                  <Col lg={9}>
                    <select
                      id="ddlCreditCardType"
                      name="ddlCreditCardType"
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="AE">American Express</option>
                      <option value="VI">Visa</option>
                      <option value="MC">MasterCard</option>
                      <option value="DI">Discover</option>
                    </select>
                  </Col>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group row">
                  <label
                    htmlFor="txtCreditCardNumber"
                    className="col-lg-3 col-form-label"
                  >
                    Credit Card Number
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtCreditCardNumber"
                      name="txtCreditCardNumber"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group row">
                  <label
                    htmlFor="txtCardVerificationNumber"
                    className="col-lg-3 col-form-label"
                  >
                    Card Verification Number
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtCardVerificationNumber"
                      name="txtCardVerificationNumber"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group row">
                  <label
                    htmlFor="txtExpirationDate"
                    className="col-lg-3 col-form-label"
                  >
                    Expiration Date
                  </label>
                  <Col lg={9}>
                    <input
                      id="txtExpirationDate"
                      name="txtExpirationDate"
                      type="text"
                      className="form-control"
                    />
                  </Col>
                </div>
              </Col>
            </Row>
          </fieldset>

          <div id="btn_div" className="float-right">
            <button
              type="button"
              className="btn btn-primary previous"
              onClick={previousPage}
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

WizardFormThirdPage.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.any,
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
