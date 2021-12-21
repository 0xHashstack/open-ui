import React from "react"
import MetaTags from 'react-meta-tags';

//Verification code package
import AuthCode from "react-auth-code-input"

import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "reactstrap"

// import images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const TwostepVerification = () => {
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <MetaTags>
          <title>Two Step Verification | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5 text-muted">
                <Link to="dashboard" className="d-block auth-logo">
                  <img
                    src={logodark}
                    alt=""
                    height="20"
                    className="auth-logo-dark mx-auto"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="20"
                    className="auth-logo-light mx-auto"
                  />
                </Link>
                <p className="mt-3">React Admin & Dashboard Template</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody>
                  <div className="p-2">
                    <div className="text-center">
                      <div className="avatar-md mx-auto">
                        <div className="avatar-title rounded-circle bg-light">
                          <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                        </div>
                      </div>
                      <div className="p-2 mt-4">
                        <h4>Verify your email</h4>
                        <p className="mb-5">
                          Please enter the 4 digit code sent to{" "}
                          <span className="font-weight-semibold">
                            example@abc.com
                          </span>
                        </p>

                        <Form>
                          <Row>
                            <Col xs={12}>
                              <FormGroup className="verification">
                                <label
                                  htmlFor="digit1-input"
                                  className="sr-only"
                                >
                                  Dight 1
                                </label>
                                <AuthCode
                                  characters={4}
                                  className="form-control form-control-lg text-center"
                                  allowedCharacters="^[0-9]"
                                  inputStyle={{
                                    width: "76px",
                                    height: "42px",
                                    padding: "8px",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    textAlign: "center",
                                    marginRight: "15px",
                                    border: "1px solid #ced4da",
                                    textTransform: "uppercase",
                                  }}
                                  onChange={() => null}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>

                        <div className="mt-4">
                          <Link
                            to="dashboard"
                            className="btn btn-success w-md"
                          >
                            Confirm
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Did&apos;t receive a code ?{" "}
                  <a href="#" className="fw-medium text-primary">
                    {" "}
                    Resend{" "}
                  </a>{" "}
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
  )
}
export default TwostepVerification;
