import React from "react";
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom";
import { Col, Container, Form, FormFeedback, Input, Label, Row } from "reactstrap";
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import CarouselPage from "./CarouselPage";

const Recoverpw2 = () => {

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <React.Fragment>
      <div>
        <MetaTags>
          <title>Recover Password 2 | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid className="p-0">
          <Row className="g-0">
            <CarouselPage />
            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <a href="/" className="d-block auth-logo">
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
                      </a>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary"> Reset Password</h5>
                        <p className="text-muted">Re-Password with Skote.</p>
                      </div>

                      <div className="mt-4">
                        <div
                          className="alert alert-success text-center mb-4"
                          role="alert"
                        >
                          Enter your Email and instructions will be sent to
                          you!
                        </div>

                        <Form className="form-horizontal"
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email && validation.errors.email ? true : false
                              }
                            />
                            {validation.touched.email && validation.errors.email ? (
                              <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}
                          </div>
                          <div className="text-end">
                            <button
                              className="btn btn-primary w-md "
                              type="submit"
                            >Reset</button>
                          </div>
                        </Form>

                        <div className="mt-5 text-center">
                          <p>
                            Remember It ?{" "}
                            <Link
                              to="pages-login-2"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              Sign In here
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
};

export default Recoverpw2;
