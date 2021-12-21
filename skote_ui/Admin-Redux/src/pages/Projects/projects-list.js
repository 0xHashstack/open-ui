import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as moment from "moment";

import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

import { map } from "lodash";

//Import Image
import images from "assets/images";
import companies from "assets/images/companies";

import {
  getProjects,
  updateProject,
  deleteProject,
} from "../../store/projects/actions";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      project: "",
      deleteModal: false,
      modal: false,
    };

    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleProjectClicks = this.handleProjectClicks.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  componentDidMount() {
    const { projects, onGetProjects } = this.props;
    onGetProjects();
    this.setState({ projects });
  }

  handleProjectClicks = arg => {
    this.setState({ selectedProject: arg });
    this.toggle();
  };

  //Delete project list
  toggleDeleteModal = () => {
    this.setState(prevState => ({
      deleteModal: !prevState.deleteModal,
    }));
  };

  onClickDelete = (project) => {
    this.setState({ project: project });
    this.setState({ deleteModal: true });
  };

  handleDeleteProject = () => {
    const { onDeleteProject } = this.props;
    const { project } = this.state;
    if (project.id !== undefined) {
      onDeleteProject(project);
      this.setState({ deleteModal: false });
    }
  };

  handleProjectClick = arg => {
    const project = arg;

    this.setState({
      project: {
        id: project.id,
        img: project.img,
        name: project.name,
        description: project.description,
        status: project.status,
        color: project.color,
        dueDate: project.dueDate,
        team: project.team,
      },
      isEdit: true,
    });

    this.toggle();
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  render() {
    const { projects } = this.props;
    const { isEdit, deleteModal } = this.state;
    const { onAddNewProject, onUpdateProject } = this.props;
    const project = this.state.project;

    return (
      <React.Fragment>
        <DeleteModal
          show={deleteModal}
          onDeleteClick={this.handleDeleteProject}
          onCloseClick={() => this.setState({ deleteModal: false })}
        />
        <div className="page-content">
          <MetaTags>
            <title>
              Projects List | Skote - React Admin & Dashboard Template
            </title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Projects" breadcrumbItem="Projects List" />
            <p> DMY Format: {this.state.dateDMY} </p>
            <Row>
              <Col lg="12">
                <div className="">
                  <div className="table-responsive">
                    <Table className="project-list-table table-nowrap align-middle table-borderless">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: "100px" }}>
                            #
                          </th>
                          <th scope="col">Projects</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Team</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {map(projects, (project, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={companies[project.img]}
                                alt=""
                                className="avatar-sm"
                              />
                            </td>
                            <td>
                              <h5 className="text-truncate font-size-14">
                                <Link
                                  to={`/projects-overview/${project.id}`}
                                  className="text-dark"
                                >
                                  {project.name}
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">
                                {project.description}
                              </p>
                            </td>

                            <td>{this.handleValidDate(project.dueDate)}</td>
                            <td>
                              <Badge
                                color={project.color}
                                className={"bg-" + project.color}
                              >
                                {project.status}
                              </Badge>
                            </td>
                            <td>
                              <div className="avatar-group">
                                {map(project.team, (member, index) =>
                                  !member.img || member.img !== "Null" ? (
                                    <div
                                      className="avatar-group-item"
                                      key={index}
                                    >
                                      <Link
                                        to="#"
                                        className="d-inline-block"
                                        id={"member" + member.id}
                                      >
                                        <img
                                          src={images[member.img]}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                  ) : (
                                    <Link
                                      to="#"
                                      className="d-inline-block"
                                      id={"member" + member.id}
                                      key={"_team_" + index}
                                    >
                                      <div className="avatar-xs">
                                        <span
                                          className={
                                            "avatar-title rounded-circle bg-" +
                                            member.color +
                                            " text-white font-size-16"
                                          }
                                        >
                                          {member.name}
                                        </span>
                                      </div>
                                    </Link>
                                  )
                                )}
                              </div>
                            </td>
                            <td>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  href="#"
                                  className="card-drop"
                                  tag="a"
                                >
                                  <i className="mdi mdi-dots-horizontal font-size-18" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    href="#"
                                    onClick={() =>
                                      this.handleProjectClick(project)
                                    }
                                  >
                                    <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#"
                                    // onClick={() =>
                                    //   this.handleDeleteProject(project)
                                    // }
                                    onClick={() => this.onClickDelete(project)}
                                  >
                                    <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Modal
                      isOpen={this.state.modal}
                      className={this.props.className}
                    >
                      <ModalHeader toggle={this.toggle} tag="h4">
                        {!!isEdit ? "Edit Project" : "Add Project"}
                      </ModalHeader>
                      <ModalBody>
                        <Formik
                          enableReinitialize={true}
                          initialValues={{
                            id: (project && project.id) || "",
                            img: (project && project.img) || "",
                            name: (project && project.name) || "",
                            description: (project && project.description) || "",
                            status: (project && project.status) || "",
                            color: (project && project.color) || "",
                            dueDate: (project && project.dueDate) || "",
                            team: (project && project.team) || "",
                          }}
                          validationSchema={Yup.object().shape({
                            name: Yup.string().required(
                              "Please Enter Your Name"
                            ),
                            description: Yup.string().required(
                              "Please Enter Your Description"
                            ),
                            status: Yup.string().required(
                              "Please Enter Your Status"
                            ),
                            color: Yup.string().required(
                              "Please Enter Your Color"
                            ),
                          })}
                          onSubmit={values => {
                            if (isEdit) {
                              const updateProject = {
                                id: project.id,
                                img: values.img,
                                name: values.name,
                                description: values.description,
                                status: values.status,
                                color: values.color,
                                dueDate: values.dueDate,
                                team: values.team,
                              };

                              // update user
                              onUpdateProject(updateProject);
                            } else {
                              const newProject = {
                                id: Math.floor(Math.random() * (30 - 20)) + 20,
                                name: values["name"],
                                description: values["description"],
                                status: values["status"],
                                color: values["color"],
                                dueDate: values["dueDate"],
                                team: values["team"],
                              };
                              // save new user
                              onAddNewProject(newProject);
                            }

                            this.setState({ selectedProject: null });
                            this.toggle();
                          }}
                        >
                          {({ errors, status, touched }) => (
                            <Form>
                              <Row>
                                <Col className="col-12">
                                  <div className="mb-3">
                                    <Field name="img" type="hidden" />
                                  </div>
                                  <div className="mb-3">
                                    <Field name="team" type="hidden" />
                                  </div>
                                  <div className="mb-3">
                                    <Label className="form-label">Name</Label>
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
                                  </div>
                                  <div className="mb-3">
                                    <Label className="form-label">
                                      Description
                                    </Label>
                                    <Field
                                      name="description"
                                      type="text"
                                      className={
                                        "form-control" +
                                        (errors.description &&
                                          touched.description
                                          ? " is-invalid"
                                          : "")
                                      }
                                    />
                                    <ErrorMessage
                                      name="description"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <Label className="form-label">Status</Label>
                                    <Field
                                      name="status"
                                      as="select"
                                      className={
                                        "form-control" +
                                        (errors.status && touched.status
                                          ? " is-invalid"
                                          : "")
                                      }
                                    >
                                      <option>Completed</option>
                                      <option>Pending</option>
                                      <option>Delay</option>
                                    </Field>
                                    <ErrorMessage
                                      name="status"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <Label className="form-label">Color</Label>
                                    <Field
                                      name="color"
                                      as="select"
                                      className={
                                        "form-control" +
                                        (errors.color && touched.color
                                          ? " is-invalid"
                                          : "")
                                      }
                                    >
                                      <option>success</option>
                                      <option>warning</option>
                                      <option>danger</option>
                                    </Field>
                                    <ErrorMessage
                                      name="color"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <Label className="form-label">
                                      Due Date
                                    </Label>
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
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="text-end">
                                    <button
                                      type="submit"
                                      className="btn btn-success save-user"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          )}
                        </Formik>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <div className="text-center my-3">
                  <Link to="#" className="text-success">
                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
  className: PropTypes.any,
  onGetProjects: PropTypes.func,
  onDeleteProject: PropTypes.func,
  onUpdateProject: PropTypes.func,
  onAddNewProject: PropTypes.func,
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
});

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
  onUpdateProject: project => dispatch(updateProject(project)),
  onDeleteProject: project => dispatch(deleteProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsList));
