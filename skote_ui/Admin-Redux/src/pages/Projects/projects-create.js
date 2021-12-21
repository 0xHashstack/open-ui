import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import Dropzone from "react-dropzone";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

import { addNewProject, getProjects } from "../../store/projects/actions";

//Import Date Picker
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class ProjectsCreate extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      selectedFiles: [],
      projects: [],
      project: "",
    };
    this.startDateChange.bind(this);
    this.endDateChange.bind(this);
    this.handleAcceptedFiles.bind(this);
  }

  componentDidMount() {
    const { projects, onGetProjects } = this.props;
    onGetProjects();
    this.setState({ projects });
  }

  startDateChange = date => {
    this.setState({
      startDate: date,
    });
  };

  endDateChange = date => {
    this.setState({
      endDate: date,
    });
  };

  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    );

    this.setState({ selectedFiles: files });
  };

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  render() {
    const { projects } = this.props;
    const project = this.state.project;

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Create New | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Projects" breadcrumbItem="Create New" />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Create New Project</CardTitle>
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        name: (project && project.name) || "",
                        projectdesc: (project && project.projectdesc) || "",
                        dueDate: (project && project.dueDate) || "",
                        fromDate: (project && project.fromDate) || "",
                        projectbudget: (project && project.projectbudget) || "",
                      }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required("Please Enter Your Name"),
                        projectdesc: Yup.string().required(
                          "Please Enter Your Description"
                        ),
                        dueDate: Yup.string().required(
                          "Please Enter Your Due Date"
                        ),
                        fromDate: Yup.string().required("Please Enter Your From Date"),
                        projectbudget: Yup.string().required("Please Enter Your Budget"),
                      })}
                      onSubmit={values => {
                        console.log(values, "values");
                      }}
                    >
                      {({ errors, status, touched }) => (
                        <React.Fragment>
                          <Form>
                            <Row className="mb-4">
                              <Label
                                htmlFor="name"
                                className="col-form-label col-lg-2"
                              >
                                Project Name
                              </Label>
                              <Col lg="10">
                                <Field
                                  name="name"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.name && touched.name
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </Col>
                            </Row>

                            <Row className="mb-4">
                              <Label
                                htmlFor="projectdesc"
                                className="col-form-label col-lg-2"
                              >
                                Project Description
                              </Label>
                              <Col lg="10">
                                <Field
                                  name="projectdesc"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.projectdesc && touched.projectdesc
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="projectdesc"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </Col>
                            </Row>

                            <Row className="mb-4">
                              <Label
                                htmlFor="dueDate"
                                className="col-form-label col-lg-2"
                              >
                                Project Date
                              </Label>
                              <Col lg="10">
                                <Row>
                                  <Col lg="6">
                                    <Field
                                      name="dueDate"
                                      type="date"
                                      className={
                                        "form-control" +
                                        (errors.dueDate && touched.dueDate
                                          ? " is-invalid"
                                          : "")
                                      }
                                    />
                                    <ErrorMessage
                                      name="dueDate"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </Col>

                                  <Col lg="6">
                                    <Field
                                      name="fromDate"
                                      type="date"
                                      className={
                                        "form-control" +
                                        (errors.fromDate && touched.fromDate
                                          ? " is-invalid"
                                          : "")
                                      }
                                    />
                                    <ErrorMessage
                                      name="fromDate"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Label
                                htmlFor="projectbudget"
                                className="col-form-label col-lg-2"
                              >
                                Budget
                              </Label>
                              <Col lg="10">
                                <Field
                                  name="projectbudget"
                                  type="text"
                                  className={
                                    "form-control" +
                                    (errors.projectbudget &&
                                    touched.projectbudget
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                      name="projectbudget"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                              </Col>
                            </Row>
                            <FormGroup className="mb-4" row>
                              <Label className="col-form-label col-lg-2">
                                Attached Files
                              </Label>
                              <Col lg="10">
                                <Dropzone
                                  onDrop={acceptedFiles =>
                                    this.handleAcceptedFiles(acceptedFiles)
                                  }
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <div className="dropzone">
                                      <div
                                        className="dz-message needsclick"
                                        {...getRootProps()}
                                      >
                                        <input {...getInputProps()} />
                                        <div className="dz-message needsclick">
                                          <div className="mb-3">
                                            <i className="display-4 text-muted bx bxs-cloud-upload" />
                                          </div>
                                          <h4>
                                            Drop files here or click to upload.
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </Dropzone>
                                <div
                                  className="dropzone-previews mt-3"
                                  id="file-previews"
                                >
                                  {this.state.selectedFiles.map((f, i) => {
                                    return (
                                      <Card
                                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                        key={i + "-file"}
                                      >
                                        <div className="p-2">
                                          <Row className="align-items-center">
                                            <Col className="col-auto">
                                              <img
                                                data-dz-thumbnail=""
                                                height="80"
                                                className="avatar-sm rounded bg-light"
                                                alt={f.name}
                                                src={f.preview}
                                              />
                                            </Col>
                                            <Col>
                                              <Link
                                                to="#"
                                                className="text-muted font-weight-bold"
                                              >
                                                {f.name}
                                              </Link>
                                              <p className="mb-0">
                                                <strong>
                                                  {f.formattedSize}
                                                </strong>
                                              </p>
                                            </Col>
                                          </Row>
                                        </div>
                                      </Card>
                                    );
                                  })}
                                </div>
                              </Col>
                            </FormGroup>
                            <Row className="justify-content-end">
                              <Col lg="10">
                                <Button type="submit" color="primary">
                                  Create Project
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </React.Fragment>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ProjectsCreate.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
  onAddNewProject: PropTypes.func,
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
});

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
  onAddNewProject: project => dispatch(addNewProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsCreate));
