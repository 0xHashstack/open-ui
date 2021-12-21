import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Button,
  Row,
  Alert,
  Label,
} from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

class Recoverpw extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-sm-5">
          <MetaTags>
            <title>
              Recover Password | Skote - React Admin & Dashboard Template
            </title>
          </MetaTags>
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col xs={7}>
                        <div className="text-primary p-4">
                          <h5 className="text-primary"> Reset Password</h5>
                          <p>Re-Password with Skote.</p>
                        </div>
                      </Col>
                      <Col xs={5} className="align-self-end">
                        <img src={profile} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                      <Link to="dashboard">
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
                      <div
                        className="alert alert-success text-center mb-4"
                        role="alert"
                      >
                        Enter your Email and instructions will be sent to you!
                      </div>
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
                              <Alert color="danger">{this.props.error}</Alert>
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
                            <div className="text-end">
                              <Button
                                className="btn btn-primary w-md"
                                color="primary"
                                type="submit"
                              >
                                Reset
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Remember It ?{" "}
                    <Link to="pages-login" className="fw-medium text-primary">
                      {" "}
                      Sign In here
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} Skote. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
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

Recoverpw.propTypes = {
  error: PropTypes.any,
};

export default Recoverpw;
