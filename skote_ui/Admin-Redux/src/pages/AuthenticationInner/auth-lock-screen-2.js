import React, { Component } from "react";
import PropTypes from "prop-types";
import CarouselPage from "./CarouselPage";
import MetaTags from "react-meta-tags";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import user from "../../assets/images/users/avatar-1.jpg";
import { Col, Container, Row, Alert, Label } from "reactstrap";
import { Link } from "react-router-dom";

export default class LockScreen2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <MetaTags>
            <title>
              Lock Screen 2 | Skote - React Admin & Dashboard Template
            </title>
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
                          <h5 className="text-primary">Lock screen</h5>
                          <p className="text-muted">
                            Enter your password to unlock the screen!
                          </p>
                        </div>

                        <div className="mt-4">
                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              email: (this.state && this.state.email) || "",
                            }}
                            validationSchema={Yup.object().shape({
                              email: Yup.string().required(
                                "Please Enter Your Email"
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

                                <div className="user-thumb text-center mb-4">
                                  <img
                                    src={user}
                                    className="rounded-circle img-thumbnail avatar-md"
                                    alt="thumbnail"
                                  />
                                  <h5 className="font-size-15 mt-3">
                                    Maria Laird
                                  </h5>
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

                                <div className="text-end">
                                  <button
                                    className="btn btn-primary w-md"
                                    type="submit"
                                  >
                                    {" "}
                                    Unlock{" "}
                                  </button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                          <div className="mt-5 text-center">
                            <p>
                              Not you ? return{" "}
                              <Link
                                to="pages-login-2"
                                className="fw-medium text-primary"
                              >
                                {" "}
                                Sign In{" "}
                              </Link>{" "}
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

LockScreen2.propTypes = {
  error: PropTypes.any,
};
