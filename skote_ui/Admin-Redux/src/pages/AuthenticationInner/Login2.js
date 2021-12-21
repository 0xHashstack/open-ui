import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { Col, Container, Row, Alert, Label } from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import CarouselPage from "./CarouselPage";

class Login2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <MetaTags>
            <title>Login 2 | Skote - React Admin & Dashboard Template</title>
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
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p className="text-muted">
                            Sign in to continue to Skote.
                          </p>
                        </div>

                        <div className="mt-4">
                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              email: (this.state && this.state.email) || "",
                              password:
                                (this.state && this.state.password) || "",
                            }}
                            validationSchema={Yup.object().shape({
                              email: Yup.string().required(
                                "Please Enter Your Email"
                              ),
                              password: Yup.string().required(
                                "Please Enter Valid Password"
                              ),
                            })}
                            onSubmit={values => {
                              console.log(values, "values");
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
                                  <div className="float-end">
                                    <Link
                                      to="/pages-forgot-pwd-2"
                                      className="text-muted"
                                    >
                                      Forgot password?
                                    </Link>
                                  </div>
                                  <Label for="password" className="form-label">
                                    Password
                                  </Label>
                                  <Field
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    autoComplete="true"
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
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="remember-check"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="remember-check"
                                  >
                                    Remember me
                                  </label>
                                </div>

                                <div className="mt-3 d-grid">
                                  <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                  >
                                    {" "}
                                    Log In{" "}
                                  </button>
                                </div>

                                <div className="mt-4 text-center">
                                  <h5 className="font-size-14 mb-3">
                                    Sign in with
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
                              Don&apos;t have an account ?{" "}
                              <a
                                href="pages-register-2"
                                className="fw-medium text-primary"
                              >
                                {" "}
                                Signup now{" "}
                              </a>{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 mt-md-5 text-center">
                        <p className="mb-0">
                          © {new Date().getFullYear()} Skote. Crafted with{" "}
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

Login2.propTypes = {
  error: PropTypes.any,
};

export default Login2;
