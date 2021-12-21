import PropTypes from "prop-types";
import React, { Component } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Row, Label } from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", idx: 1 };
  }

  componentDidMount() {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        this.setState({
          name: obj.displayName,
          email: obj.email,
          idx: obj.uid,
        });
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        this.setState({ name: obj.username, email: obj.email, idx: obj.uid });
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props !== prevProps) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        this.setState({
          name: obj.displayName,
          email: obj.email,
          idx: obj.uid,
        });
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        this.setState({ name: obj.username, email: obj.email, idx: obj.uid });
      }
      setTimeout(() => {
        this.props.resetProfileFlag();
      }, 3000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumb title="Skote" breadcrumbItem="Profile" />

            <Row>
              <Col lg="12">
                {this.props.error && this.props.error ? (
                  <Alert color="danger">{this.props.error}</Alert>
                ) : null}
                {this.props.success && this.props.success ? (
                  <Alert color="success">{this.props.success}</Alert>
                ) : null}

                <Card>
                  <CardBody>
                    <div className="d-flex">
                      <div className="me-3">
                        <img
                          src={avatar}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="align-self-center flex-1">
                        <div className="text-muted">
                          <h5>{this.state.name}</h5>
                          <p className="mb-1">{this.state.email}</p>
                          <p className="mb-0">Id no: #{this.state.idx}</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <h4 className="card-title mb-4">Change User Name</h4>

            <Card>
              <CardBody>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    username: (this.state && this.state.name) || "",
                    idx: (this.state && this.state.idx) || "",
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required(
                      "Please Enter Your Username"
                    ),
                  })}
                  onSubmit={values => {
                    this.props.editProfile(values);
                  }}
                >
                  {({ errors, status, touched }) => (
                    <Form className="form-horizontal">
                      <div className="mb-3">
                        <Label for="username" className="form-label">
                          Username
                        </Label>
                        <Field
                          name="username"
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
                        <Field
                          name="idx"
                          type="hidden"
                          className={
                            "form-control" +
                            (errors.idx && touched.idx
                              ? " is-invalid"
                              : "")
                          }
                        />
                      </div>
                      <div className="text-center mt-4">
                        <Button type="submit" color="danger">
                          Update User Name
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  resetProfileFlag: PropTypes.func,
};

const mapStateToProps = state => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStateToProps, { editProfile, resetProfileFlag })(UserProfile)
);
