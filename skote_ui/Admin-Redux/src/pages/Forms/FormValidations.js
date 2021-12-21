import React, { Component } from "react";
import MetaTags from "react-meta-tags";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class FormValidations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeValidation = this.onChangeValidation.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const modifiedV = { ...this.state.validation };
    var fnm = document.getElementById("validationTooltip01").value;
    var lnm = document.getElementById("validationTooltip02").value;
    var unm = document.getElementById("validationTooltipUsername").value;
    var city = document.getElementById("validationTooltip03").value;
    var stateV = document.getElementById("validationTooltip04").value;

    if (fnm === "") {
      modifiedV["fnm"] = false;
    } else {
      modifiedV["fnm"] = true;
    }

    if (lnm === "") {
      modifiedV["lnm"] = false;
    } else {
      modifiedV["lnm"] = true;
    }

    if (unm === "") {
      modifiedV["unm"] = false;
    } else {
      modifiedV["unm"] = true;
    }

    if (city === "") {
      modifiedV["city"] = false;
    } else {
      modifiedV["city"] = true;
    }

    if (stateV === "") {
      modifiedV["stateV"] = false;
    } else {
      modifiedV["stateV"] = true;
    }

    this.setState({ validation: modifiedV });
  }

  //for change tooltip display propery
  onChangeValidation(fieldName, value) {
    const modifiedV = { ...this.state.validation };
    if (value !== "") {
      modifiedV[fieldName] = true;
    } else {
      modifiedV[fieldName] = false;
    }
    this.setState({ validation: modifiedV });
  }

  render() {
    const { validation } = this.state;
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>
              Form Validation | Skote - React Admin & Dashboard Template
            </title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Validation" />
            <Row>
              <Col xl="6">
                <Card>
                  <CardBody>
                    <h4 className="card-title">React Validation - Normal</h4>
                    <p className="card-title-desc">
                      Provide valuable, actionable feedback to your users with
                      HTML5 form validation–available in all our supported
                      browsers.
                    </p>
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        firstname: (this.state && this.state.firstname) || "",
                        lastname: (this.state && this.state.lastname) || "",
                        city: (this.state && this.state.city) || "",
                        state: (this.state && this.state.state) || "",
                        zip: (this.state && this.state.zip) || "",
                      }}
                      validationSchema={Yup.object().shape({
                        firstname: Yup.string().required(
                          "Please Enter Your First Name"
                        ),
                        lastname: Yup.string().required(
                          "Please Enter Your Last Name"
                        ),
                        city: Yup.string().required("Please Enter Your City"),
                        state: Yup.string().required("Please Enter Your state"),
                        zip: Yup.string().required("Please Enter Your zip"),
                      })}
                      onSubmit={values => {
                        console.log(values);
                      }}
                    >
                      {({ errors, status, touched }) => (
                        <Form className="needs-validation">
                          <Row>
                            <Col md="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                  First name
                                </Label>
                                <Field
                                  name="firstname"
                                  placeholder="First name"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.firstname && touched.firstname
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="firstname"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                  Last name
                                </Label>
                                <Field
                                  name="lastname"
                                  placeholder="Last name"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.lastname && touched.lastname
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="lastname"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="4">
                              <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom03">City</Label>
                                <Field
                                  name="city"
                                  type="text"
                                  placeholder="City"
                                  className={
                                    "form-control" +
                                    (errors.city && touched.city
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="city"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom04">
                                  State
                                </Label>
                                <Field
                                  name="state"
                                  placeholder="State"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.state && touched.state
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="state"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom05">Zip</Label>
                                <Field
                                  name="zip"
                                  placeholder="Zip Code"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.zip && touched.zip
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="zip"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12">
                              <FormGroup className="mb-3">
                                <div className="form-check">
                                  <Input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="invalidCheck"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="invalidCheck"
                                  >
                                    {" "}
                                    Agree to terms and conditions
                                  </Label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button color="primary" type="submit">
                            Submit form
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="6">
                <Card>
                  <CardBody>
                    <h4 className="card-title">React Validation (Tooltips)</h4>
                    <p className="card-title-desc">
                      If your form layout allows it, you can swap the
                      <code>.{"{valid | invalid-}"}feedback</code> classes for
                      <code>.{"{valid | invalid-}"}-tooltip</code> classes to
                      display validation feedback in a styled tooltip.
                    </p>
                    <form
                      className="needs-validation"
                      method="post"
                      id="tooltipForm"
                      onSubmit={e => {
                        this.handleSubmit(e);
                      }}
                    >
                      <Row>
                        <Col md="4">
                          <div className="mb-3 position-relative">
                            <Label htmlFor="validationTooltip01">
                              First name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltip01"
                              placeholder="First name"
                              onChange={event => {
                                this.onChangeValidation(
                                  "fnm",
                                  event.target.value
                                );
                              }}
                              valid={validation["fnm"] === true}
                              invalid={
                                validation["fnm"] !== true &&
                                validation["fnm"] !== null
                              }
                            />

                            <div
                              className={
                                validation["fnm"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate1"
                            >
                              {validation["fnm"] === true
                                ? "Looks good!"
                                : "Please Enter Valid First Name"}
                            </div>
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-3 position-relative">
                            <Label htmlFor="validationTooltip02">
                              Last name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltip02"
                              placeholder="Last name"
                              onChange={event =>
                                this.onChangeValidation(
                                  "lnm",
                                  event.target.value
                                )
                              }
                              valid={validation["lnm"] === true}
                              invalid={
                                validation["lnm"] !== true &&
                                validation["lnm"] !== null
                              }
                            />
                            <div
                              className={
                                validation["lnm"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate2"
                            >
                              {validation["lnm"] === true
                                ? "Looks good!"
                                : "Please Enter Valid Last Name"}
                            </div>
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-3 position-relative">
                            <Label htmlFor="validationTooltipUsername">
                              Username
                            </Label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="validationTooltipUsernamePrepend"
                                >
                                  @
                                </span>
                              </div>
                              <Input
                                type="text"
                                className="form-control"
                                id="validationTooltipUsername"
                                placeholder="Username"
                                onChange={event =>
                                  this.onChangeValidation(
                                    "unm",
                                    event.target.value
                                  )
                                }
                                valid={validation["unm"] === true}
                                invalid={
                                  validation["unm"] !== true &&
                                  validation["unm"] !== null
                                }
                              />
                              <div
                                className={
                                  validation["unm"] === true
                                    ? "valid-tooltip"
                                    : "invalid-tooltip"
                                }
                                name="validate"
                                id="validate3"
                              >
                                {validation["unm"] === true
                                  ? "Looks good!"
                                  : "Please choose a unique and valid username."}
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <div className="mb-3 position-relative">
                            <Label htmlFor="validationTooltip03">City</Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltip03"
                              placeholder="City"
                              onChange={event =>
                                this.onChangeValidation(
                                  "city",
                                  event.target.value
                                )
                              }
                              valid={validation["city"] === true}
                              invalid={
                                validation["city"] !== true &&
                                validation["city"] !== null
                              }
                            />
                            <div
                              className={
                                validation["city"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate4"
                            >
                              {validation["city"] === true
                                ? "Looks good!"
                                : "Please choose a unique and valid username.Please provide a valid city."}
                            </div>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3 position-relative">
                            <Label htmlFor="validationTooltip04">State</Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltip04"
                              placeholder="State"
                              onChange={event =>
                                this.onChangeValidation(
                                  "stateV",
                                  event.target.value
                                )
                              }
                              valid={validation["stateV"] === true}
                              invalid={
                                validation["stateV"] !== true &&
                                validation["stateV"] !== null
                              }
                            />
                            <div
                              className={
                                validation["stateV"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate5"
                            >
                              {validation["stateV"] === true
                                ? "Looks good!"
                                : "Please provide a valid state."}
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Button color="primary" type="submit">
                        Submit form
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Validation type</CardTitle>
                    <p className="card-title-desc">
                      Parsley is a availity reactstrap validation. It helps you
                      provide your users with feedback on their form submission
                      before sending it to your server.
                    </p>

                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        username: (this.state && this.state.username) || "",
                        password: (this.state && this.state.password) || "",
                        password1: (this.state && this.state.password1) || "",
                        email: (this.state && this.state.email) || "",
                        url: (this.state && this.state.url) || "",
                        digits: (this.state && this.state.digits) || "",
                        number: (this.state && this.state.number) || "",
                        alphanumeric:
                          (this.state && this.state.alphanumeric) || "",
                        textarea: (this.state && this.state.textarea) || "",
                      }}
                      validationSchema={Yup.object().shape({
                        username: Yup.string().required(
                          "This value is required"
                        ),
                        password: Yup.string().required(
                          "This value is required"
                        ),
                        password1: Yup.string().when("password", {
                          is: val => (val && val.length > 0 ? true : false),
                          then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                          ),
                        }),
                        email: Yup.string()
                          .email("Must be a valid Email")
                          .max(255)
                          .required("Email is required"),
                        url: Yup.string()
                          .matches(
                            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                            "Enter correct url!"
                          )
                          .required("Please enter correct Url"),
                        digits: Yup.number().required(
                          "Please Enter Your Digits"
                        ),
                        number: Yup.number().required(
                          "Please Enter Your Number"
                        ),
                        alphanumeric: Yup.string()
                          .matches(
                            /^[a-z0-9]+$/i,
                            "Enter correct Alphanumeric!"
                          )
                          .required("Please Enter Your Alphanumeric"),
                        textarea: Yup.string().required(
                          "Please Enter Your Textarea"
                        ),
                      })}
                      onSubmit={values => {
                        console.log(values);
                      }}
                    >
                      {({ errors, status, touched }) => (
                        <Form className="needs-validation">
                          <div className="mb-3">
                            <Label className="form-label">Required</Label>
                            <Field
                              name="username"
                              type="text"
                              className={
                                "form-control" +
                                (errors.username && touched.username
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Equal To</Label>
                            <div>
                              <Field
                                name="password"
                                type="password"
                                placeholder="password"
                                autoComplete="on"
                                className={
                                  "form-control" +
                                  (errors.password && touched.password
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="mt-2">
                              <Field
                                name="password1"
                                type="password"
                                placeholder="Re-Type password"
                                autoComplete="on"
                                className={
                                  "form-control" +
                                  (errors.password1 && touched.password1
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="password1"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">E-mail</Label>
                            <Field
                              name="email"
                              type="email"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">URL</Label>
                            <Field
                              name="url"
                              type="text"
                              className={
                                "form-control" +
                                (errors.url && touched.url ? " is-invalid" : "")
                              }
                            />
                            <ErrorMessage
                              name="url"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Digits</Label>
                            <Field
                              name="digits"
                              type="number"
                              className={
                                "form-control" +
                                (errors.digits && touched.digits
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="digits"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Number</Label>
                            <Field
                              name="number"
                              type="number"
                              className={
                                "form-control" +
                                (errors.number && touched.number
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="number"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Alphanumeric</Label>
                            <Field
                              name="alphanumeric"
                              label="Alphanumeric"
                              type="text"
                              className={
                                "form-control" +
                                (errors.alphanumeric && touched.alphanumeric
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="alphanumeric"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Textarea</Label>
                            <Field
                              name="textarea"
                              label="Textarea"
                              as="textarea"
                              rows="3"
                              className={
                                "form-control" +
                                (errors.textarea && touched.textarea
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="textarea"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            <Button type="submit" color="primary">
                              Submit
                            </Button>{" "}
                            <Button type="reset" color="secondary">
                              Cancel
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Range validation</CardTitle>
                    <p className="card-title-desc">
                      Parsley is a availity reactstrap validation. It helps you
                      provide your users with feedback on their form submission
                      before sending it to your server.
                    </p>
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        Min_Length: (this.state && this.state.Min_Length) || "",
                        Max_Length: (this.state && this.state.Max_Length) || "",
                        Min_Value: (this.state && this.state.Min_Value) || "",
                        Max_Value: (this.state && this.state.Max_Value) || "",
                        Range_Value: (this.state && this.state.Range_Value) || "",
                        Regular_Exp: (this.state && this.state.Regular_Exp) || "",
                      }}
                      validationSchema={Yup.object().shape({
                        Min_Length: Yup.string()
                          .min(6, "Must be exactly 6 digits")
                          .required("Min 6 chars"),
                        Max_Length: Yup.string()
                          .max(6, "Must be exactly 6 digits")
                          .required("Max 6 chars"),
                        Min_Value: Yup.string().required("Min Value 6").test('val', 'This value should be greater than or equal to 6', val => val >= 6),
                        Max_Value: Yup.string().required("Max Value 6").matches(/^[0-6]+$/, "This value should be lower than or equal to 6."),
                        Range_Value: Yup.string().required(
                          "range between 5 to 10"
                        ).min(5, "This value should be between 5 and 10")
                        .max(10, "This value should be between 5 and 10"),
                        Regular_Exp: Yup.string()
                        .matches(
                          /^[#0-9]+$/,
                          "Only Hex Value"
                        )
                        .required("Only Hex Value"),
                      })}
                      onSubmit={values => {
                        console.log(values);
                      }}
                    >
                      {({ errors, status, touched }) => (
                        <Form>
                          <div className="mb-3">
                          <Label>Min Length</Label>
                            <Field
                              name="Min_Length"
                              label="Min Length  "
                              placeholder="Min 6 chars"
                              type="text"
                              className={
                                "form-control" +
                                (errors.Min_Length && touched.Min_Length
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Min_Length"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                          <Label>Max Length</Label>
                            <Field
                              name="Max_Length"
                              label="Max Length  "
                              placeholder="Max 6 chars"
                              type="text"
                              className={
                                "form-control" +
                                (errors.Max_Length && touched.Max_Length
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Max_Length"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                          <Label>Min Value</Label>
                            <Field
                              name="Min_Value"
                              label="Min Value  "
                              placeholder="Min Value 6"
                              type="number"
                              className={
                                "form-control" +
                                (errors.Min_Value && touched.Min_Value
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Min_Value"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                          <Label>Max Value</Label>
                            <Field
                              name="Max_Value"
                              label="Max Value  "
                              placeholder="Max Value 6"
                              type="number"
                              className={
                                "form-control" +
                                (errors.Max_Value && touched.Max_Value
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Max_Value"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                          <Label>Range Length</Label>
                            <Field
                              name="Range_Value"
                              label="Range Length "
                              placeholder="Text between 5 - 10 chars length"
                              type="string"
                              className={
                                "form-control" +
                                (errors.Range_Value && touched.Range_Value
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Range_Value"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                          <Label>Regular Exp</Label>
                            <Field
                              name="Regular_Exp"
                              label="Regular Exp  "
                              placeholder="Hex. Color"
                              type="string"
                              className={
                                "form-control" +
                                (errors.Regular_Exp && touched.Regular_Exp
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Regular_Exp"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            <Button type="submit" color="primary">
                              Submit
                            </Button>{" "}
                            <Button type="reset" color="secondary">
                              Cancel
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
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

export default FormValidations;
