import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validate from "./validate";

class WizardFormFourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <h6 className="text-muted">Confirm Detail</h6>
          <fieldset>
            <div className="p-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  I agree with the Terms and Conditions.
                </label>
              </div>
            </div>
          </fieldset>

          <div id="btn_div" className="float-right">
            <button
              type="button"
              className="btn btn-primary previous"
              onClick={previousPage}
            >
              Previous
            </button>
            &nbsp;
            <button type="submit" className="btn btn-primary next">
              Finish
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

WizardFormFourPage.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.any,
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFourPage);
