import React, { Component } from "react";
import MetaTags from "react-meta-tags";

// Redux
import { Link } from "react-router-dom";

import { Row, Col, CardBody, Card, Container, Label } from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import lightlogo from "../../assets/images/logo-light.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>Login | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="bx bx-home h2" />
          </Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Sign in to continue to Skote.</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profile} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div className="auth-logo">
                      <Link to="/" className="auth-logo-light">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={lightlogo}
                              alt=""
                              className="rounded-circle"
                              height="34"
                            />
                          </span>
                        </div>
                      </Link>
                      <Link to="/" className="auth-logo-dark">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={logo}
                              alt=""
                              className="rounded-circle"
                              height="34"
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2">
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          email: (this.state && this.state.email) || "",
                          password: (this.state && this.state.password) || "",
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
                          console.log(values,'values');
                        }}
                      >
                        {({ errors, status, touched }) => (
                          <Form className="form-horizontal">
                            <div className="mb-3">
                              <Label for="email" className="form-label">
                                Email
                              </Label>
                              <Field
                                name="email"
                                placeholder="Enter email"
                                type="text"
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
                                type="password"
                                placeholder="Enter password"
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
                                type="checkbox"
                                className="form-check-input"
                                id="customControlInline"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customControlInline"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-3 d-grid">
                              <button
                                className="btn btn-primary btn-block"
                                type="submit"
                              >
                                Log In
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
                                    <i className="mdi mdi-facebook" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    className="social-list-item bg-info text-white border-info"
                                  >
                                    <i className="mdi mdi-twitter" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    className="social-list-item bg-danger text-white border-danger"
                                  >
                                    <i className="mdi mdi-google" />
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 text-center">
                              <Link
                                to="/pages-forgot-pwd"
                                className="text-muted"
                              >
                                <i className="mdi mdi-lock me-1" /> Forgot your
                                password?
                              </Link>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Don&apos;t have an account ?{" "}
                    <Link
                      to="pages-register"
                      className="fw-medium text-primary"
                    >
                      {" "}
                      Signup now{" "}
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} Skote. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger" /> by Themesbrand
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
