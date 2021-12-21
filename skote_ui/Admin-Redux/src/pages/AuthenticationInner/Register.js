import React, { Component } from "react";
import MetaTags from "react-meta-tags";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import { Row, Col, CardBody, Card, Container, Label } from "reactstrap";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>Register | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="bx bx-home h2" />
          </Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={8} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Free Register</h5>
                          <p>Get your free Skote account now.</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                      <Link to="/">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={logoImg}
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
                          username: (this.state && this.state.username) || "",
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
                              <Label for="username" className="form-label">
                                Username
                              </Label>
                              <Field
                                name="username"
                                type="text"
                                placeholder="Enter username"
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
                              <Label for="password" className="form-label">
                                Password
                              </Label>
                              <Field
                                name="password"
                                type="password"
                                placeholder="Enter password"
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

                            <div className="mt-4 d-grid">
                              <button
                                className="btn btn-primary btn-block"
                                type="submit"
                              >
                                Register
                              </button>
                            </div>

                            <div className="mt-4 text-center">
                              <h5 className="font-size-14 mb-3">
                                Sign up using
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
                              <p className="mb-0">
                                By registering you agree to the Skote{" "}
                                <Link to="#" className="text-primary">
                                  Terms of Use
                                </Link>
                              </p>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Already have an account ?
                    <Link to="/pages-login" className="fw-medium text-primary">
                      Login
                    </Link>
                  </p>
                  <p>
                    © {new Date().getFullYear()} Skote. Crafted with
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

export default Register;
