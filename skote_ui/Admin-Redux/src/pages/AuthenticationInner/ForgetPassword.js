import React, { Component } from "react";
import { Alert, Row, Col, CardBody, Card, Container, Label } from "reactstrap";
import MetaTags from "react-meta-tags";

import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

class ForgetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>
            Forgot Password 1 | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2" />
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
                    <div>
                      <Link to="/">
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
                      <Alert color="success" className="text-center mb-4">
                        Enter your Email and instructions will be sent to you!
                      </Alert>
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
                          <Form>
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

                            <div className="text-end mt-2">
                              <button
                                className="btn btn-primary w-md"
                                type="submit"
                              >
                                Reset
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Go back to{" "}
                    <Link to="pages-login" className="fw-medium text-primary">
                      Login
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
export default ForgetPasswordPage;
