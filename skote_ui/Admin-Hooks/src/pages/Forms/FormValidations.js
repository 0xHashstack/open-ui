import React, { useState } from "react";
import MetaTags from "react-meta-tags";

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  FormFeedback,
  Form,
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormValidations = () => {

  // Form validation 
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
      city: Yup.string().required("Please Enter Your City"),
      state: Yup.string().required("Please Enter Your State"),
      zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  // Form validation 
  const validationType = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: '',
      password: '',
      password1: '',
      email: '',
      digits: '',
      number: '',
      alphanumeric: '',
    },
    validationSchema: Yup.object().shape({
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
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });
  const regExp = /\b\d{5}\b/;
  // Form validation 
  const rangeValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      min_Length: '',
      max_Length: '',
      min_Value: '',
      max_Value: '',
      range_Value: '',
      regular_Exp: '',
    },
    validationSchema: Yup.object().shape({
      min_Length: Yup.string()
        .min(6, "Must be exactly 6 digits")
        .required("Min 6 chars"),
      max_Length: Yup.string()
        .max(6, "Must be exactly 6 digits")
        .required("Max 6 chars"),
      min_Value: Yup.string().required("Min Value 6").test('val', 'This value should be greater than or equal to 6', val => val >= 6),
      max_Value: Yup.string().required("Max Value 6").matches(/^[0-6]+$/, "This value should be lower than or equal to 6."),
      range_Value: Yup.string().required(
        "range between 5 to 10"
      ).min(5, "This value should be between 5 and 10")
        .max(10, "This value should be between 5 and 10"),
      regular_Exp: Yup.string()
        .matches(
          /^[#0-9]+$/,
          "Only Hex Value"
        )
        .required("Only Hex Value"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  const [formValidation, setValidation] = useState({
    fnm: null,
    lnm: null,
    unm: null,
    city: null,
    stateV: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const modifiedV = { ...formValidation };
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
    setValidation(modifiedV);
  }

  //for change tooltip display propery
  const onChangeValidation = (fieldName, value) => {
    const modifiedV = { ...validation };
    if (value !== "") {
      modifiedV[fieldName] = true;
    } else {
      modifiedV[fieldName] = false;
    }
    setValidation(modifiedV);
  };

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
                  <Form className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">First name</Label>
                          <Input
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.firstname || ""}
                            invalid={
                              validation.touched.firstname && validation.errors.firstname ? true : false
                            }
                          />
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <Input
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.lastname || ""}
                            invalid={
                              validation.touched.lastname && validation.errors.lastname ? true : false
                            }
                          />
                          {validation.touched.lastname && validation.errors.lastname ? (
                            <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">City</Label>
                          <Input
                            name="city"
                            placeholder="City"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.city || ""}
                            invalid={
                              validation.touched.city && validation.errors.city ? true : false
                            }
                          />
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">State</Label>
                          <Input
                            name="state"
                            placeholder="State"
                            type="text"
                            className="form-control"
                            id="validationCustom04"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.state || ""}
                            invalid={
                              validation.touched.state && validation.errors.state ? true : false
                            }
                          />
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">Zip</Label>
                          <Input
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            className="form-control"
                            id="validationCustom05"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.zip || ""}
                            invalid={
                              validation.touched.zip && validation.errors.zip ? true : false
                            }
                          />
                          {validation.touched.zip && validation.errors.zip ? (
                            <FormFeedback type="invalid">{validation.errors.zip}</FormFeedback>
                          ) : null}
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
                      handleSubmit(e);
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
                              onChangeValidation("fnm", event.target.value);
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
                          <Label htmlFor="validationTooltip02">Last name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip02"
                            placeholder="Last name"
                            onChange={event =>
                              onChangeValidation("lnm", event.target.value)
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
                                onChangeValidation("unm", event.target.value)
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
                              onChangeValidation("city", event.target.value)
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
                              onChangeValidation("stateV", event.target.value)
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
                  <CardTitle>Validation type</CardTitle>
                  <CardSubtitle className="mb-3">
                    Parsley is a availity reactstrap validation. It helps you
                    provide your users with feedback on their form submission
                    before sending it to your server.
                  </CardSubtitle>

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validationType.handleSubmit();
                      return false;
                    }}>
                    <div className="mb-3">
                      <Label className="form-label">Required</Label>
                      <Input
                        name="username"
                        placeholder="Type Something"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.username || ""}
                        invalid={
                          validationType.touched.username && validationType.errors.username ? true : false
                        }
                      />
                      {validationType.touched.username && validationType.errors.username ? (
                        <FormFeedback type="invalid">{validationType.errors.username}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label>Equal To</Label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.password || ""}
                        invalid={
                          validationType.touched.password && validationType.errors.password ? true : false
                        }
                      />
                      {validationType.touched.password && validationType.errors.password ? (
                        <FormFeedback type="invalid">{validationType.errors.password}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Input
                        name="password1"
                        type="password"
                        placeholder="Re-type Password"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.password1 || ""}
                        invalid={
                          validationType.touched.password1 && validationType.errors.password1 ? true : false
                        }
                      />
                      {validationType.touched.password1 && validationType.errors.password1 ? (
                        <FormFeedback type="invalid">{validationType.errors.password1}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">E-Mail</Label>
                      <Input
                        name="email"
                        placeholder="Enter Valid Email"
                        type="email"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.email || ""}
                        invalid={
                          validationType.touched.email && validationType.errors.email ? true : false
                        }
                      />
                      {validationType.touched.email && validationType.errors.email ? (
                        <FormFeedback type="invalid">{validationType.errors.email}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Digits</Label>
                      <Input
                        name="digits"
                        label="Digits"
                        placeholder="Enter Only Digits"
                        type="number"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.digits || ""}
                        invalid={
                          validationType.touched.digits && validationType.errors.digits ? true : false
                        }
                      />
                      {validationType.touched.digits && validationType.errors.digits ? (
                        <FormFeedback type="invalid">{validationType.errors.digits}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Number</Label>
                      <Input
                        name="number"
                        placeholder="Enter Only number"
                        type="number"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.number || ""}
                        invalid={
                          validationType.touched.number && validationType.errors.number ? true : false
                        }
                      />
                      {validationType.touched.number && validationType.errors.number ? (
                        <FormFeedback type="invalid">{validationType.errors.number}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Alphanumeric</Label>
                      <Input
                        name="alphanumeric"
                        placeholder="Enter Only alphanumeric value"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.alphanumeric || ""}
                        invalid={
                          validationType.touched.alphanumeric && validationType.errors.alphanumeric ? true : false
                        }
                      />
                      {validationType.touched.alphanumeric && validationType.errors.alphanumeric ? (
                        <FormFeedback type="invalid">{validationType.errors.alphanumeric}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary" className="">
                        Submit
                      </Button>{" "}
                      <Button type="reset" color="secondary" className="">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Range validation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Parsley is a availity reactstrap validation. It helps you
                    provide your users with feedback on their form submission
                    before sending it to your server.
                  </CardSubtitle>

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      rangeValidation.handleSubmit();
                      return false;
                    }}
                  >
                    <div className="mb-3">
                      <Label>Min Length</Label>
                      <Input
                        name="min_Length"
                        label="Min Length  "
                        placeholder="Min 6 chars"
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.min_Length || ""}
                        invalid={
                          rangeValidation.touched.min_Length && rangeValidation.errors.min_Length ? true : false
                        }
                      />
                      {rangeValidation.touched.min_Length && rangeValidation.errors.min_Length ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.min_Length}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label>Max Length</Label>
                      <Input
                        name="max_Length"
                        placeholder="Max 6 chars"
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.max_Length || ""}
                        invalid={
                          rangeValidation.touched.max_Length && rangeValidation.errors.max_Length ? true : false
                        }
                      />
                      {rangeValidation.touched.max_Length && rangeValidation.errors.max_Length ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.max_Length}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Min Value</Label>
                      <Input
                        name="min_Value"
                        placeholder="Min 6 Chars"
                        min={6}
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.min_Value || ""}
                        invalid={
                          rangeValidation.touched.min_Value && rangeValidation.errors.min_Value ? true : false
                        }
                      />
                      {rangeValidation.touched.min_Value && rangeValidation.errors.min_Value ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.min_Value}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Max Value</Label>
                      <Input
                        name="max_Value"
                        placeholder="max 5 Chars"
                        max={6}
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.max_Value || ""}
                        invalid={
                          rangeValidation.touched.max_Value && rangeValidation.errors.max_Value ? true : false
                        }
                      />
                      {rangeValidation.touched.max_Value && rangeValidation.errors.max_Value ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.max_Value}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Range Length</Label>
                      <Input
                        name="range_Value"
                        placeholder="Text between 5 - 10 chars length"
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.range_Value || ""}
                        invalid={
                          rangeValidation.touched.range_Value && rangeValidation.errors.range_Value ? true : false
                        }
                      />
                      {rangeValidation.touched.range_Value && rangeValidation.errors.range_Value ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.range_Value}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Regular Exp</Label>
                      <Input
                        name="regular_Exp"
                        placeholder="Hex. Color"
                        type="number"
                        onChange={rangeValidation.handleChange}
                        onBlur={rangeValidation.handleBlur}
                        value={rangeValidation.values.regular_Exp || ""}
                        invalid={
                          rangeValidation.touched.regular_Exp && rangeValidation.errors.regular_Exp ? true : false
                        }
                      // validate={{
                      //   required: { value: true },
                      //   pattern: {
                      //     value: "^[#0-9]+$",
                      //     errorMessage: "Only Hex Value",
                      //   },
                      // }}
                      />
                      {rangeValidation.touched.regular_Exp && rangeValidation.errors.regular_Exp ? (
                        <FormFeedback type="invalid">{rangeValidation.errors.regular_Exp}</FormFeedback>
                      ) : null}
                    </div>
                    <FormGroup className="mb-0">
                      <div>
                        <Button type="submit" color="primary" className="ms-1">
                          Submit
                        </Button>{" "}
                        <Button type="reset" color="secondary">
                          Cancel
                        </Button>
                      </div>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormValidations;
