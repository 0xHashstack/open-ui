import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { Col, Container, Row, Alert, Label } from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import CarouselPage from "./CarouselPage";

export default class Register2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <MetaTags>
            <title>Register 2 | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid className="p-0">
            <Row className="g-0">
              <CarouselPage />

              <Col xl={3}>
                <div className="auth-full-page-content p-md-5 p-4">
                  <div className="w-100">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4 mb-md-5">
                        <Link to="dashboard" className="d-block auth-logo">
                          <img
                            src={logodark}
                            alt=""
                            height="18"
                            className="auth-logo-dark"
                          />
                          <img
                            src={logolight}
                            alt=""
                            height="18"
                            className="auth-logo-light"
                          />
                        </Link>
                      </div>
                      <div className="my-auto">
                        <div>
                          <h5 className="text-primary">Register account</h5>
                          <p className="text-muted">
                            Get your free Skote account now.
                          </p>
                        </div>

                        <div className="mt-4">
                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              email: (this.state && this.state.email) || "",
                              password:
                                (this.state && this.state.password) || "",
                              username:
                                (this.state && this.state.username) || "",
                            }}
                            validationSchema={Yup.object().shape({
                              email: Yup.string().required(
                                "Please Enter Your Email"
                              ),
                              password: Yup.string().required(
                                "Please Enter Valid Password"
                              ),
                              username: Yup.string().required(
                                "Please Enter Valid Username"
                              ),
                            })}
                            onSubmit={values => {
                              console.log(values,'values')
                            }}
                          >
                            {({ errors, status, touched }) => (
                              <Form className="form-horizontal">
                                {this.props.error && this.props.error ? (
                                  <Alert color="danger">
                                    {this.props.error}
                                  </Alert>
                                ) : null}

                                <div className="mb-3">
                                  <Label for="username" className="form-label">
                                    Username
                                  </Label>
                                  <Field
                                    name="username"
                                    placeholder="Enter username"
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
                                  <Label for="email" className="form-label">
                                    Email
                                  </Label>
                                  <Field
                                    name="email"
                                    placeholder="Enter email"
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
                                  <Label for="password" className="form-label">
                                    Password
                                  </Label>
                                  <Field
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
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
                                <div>
                                  <p className="mb-0">
                                    By registering you agree to the Skote
                                    <Link to="#" className="text-primary">
                                      Terms of Use
                                    </Link>
                                  </p>
                                </div>

                                <div className="mt-3 d-grid">
                                  <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                  >
                                    {" "}
                                    Register{" "}
                                  </button>
                                </div>

                                <div className="mt-4 text-center">
                                  <h5 className="font-size-14 mb-3">
                                    Sign in using
                                  </h5>

                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <Link
                                        to="#"
                                        className="social-list-item bg-primary text-white border-primary"
                                      >
                                        <i className="mdi mdi-facebook"></i>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item">
                                      <Link
                                        to="#"
                                        className="social-list-item bg-info text-white border-info"
                                      >
                                        <i className="mdi mdi-twitter"></i>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item">
                                      <Link
                                        to="#"
                                        className="social-list-item bg-danger text-white border-danger"
                                      >
                                        <i className="mdi mdi-google"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </Form>
                            )}
                          </Formik>
                          <div className="mt-5 text-center">
                            <p>
                              Already have an account ?{" "}
                              <Link
                                to="pages-login-2"
                                className="fw-medium text-primary"
                              >
                                {" "}
                                Login
                              </Link>{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 mt-md-5 text-center">
                        <p className="mb-0">
                          © {new Date().getFullYear()}
                          Skote. Crafted with{" "}
                          <i className="mdi mdi-heart text-danger"></i> by
                          Themesbrand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

Register2.propTypes = {
  error: PropTypes.any,
};
