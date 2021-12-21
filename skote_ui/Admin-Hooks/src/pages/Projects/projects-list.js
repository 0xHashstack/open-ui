import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, withRouter } from "react-router-dom";
import { isEmpty, map } from "lodash";
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
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Component
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

//Import Image
import images from "assets/images";
import companies from "assets/images/companies";

import {
  getProjects as onGetProjects,
  addNewProject as onAddNewProject,
  updateProject as onUpdateProject,
  deleteProject as onDeleteProject,
} from "store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const [project, setProject] = useState();
  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      id: (project && project.id) || "",
      img: (project && project.img) || "",
      name: (project && project.name) || "",
      description: (project && project.description) || "",
      status: (project && project.status) || "",
      color: (project && project.color) || "",
      dueDate: (project && project.dueDate) || "",
      team: (project && project.team) || "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
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

        // update project
        dispatch(onUpdateProject(updateProject));
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
        // save new project
        dispatch(onAddNewProject(newProject));
      }
      toggle();
    },
  });

  const { projects } = useSelector(state => ({
    projects: state.projects.projects,
  }));
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [projectList, setProjectList] = useState([]);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setProject(null);
    } else {
      setModal(true);
    }
  };


  const handleProjectClick = arg => {
    const project = arg;

    setProject({
      id: project.id,
      img: project.img,
      name: project.name,
      description: project.description,
      status: project.status,
      color: project.color,
      dueDate: project.dueDate,
      team: project.team,
    });

    setIsEdit(true);

    toggle();
  };

  const handleDeleteProject = project => {
    dispatch(onDeleteProject(project));
  };


  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (project) => {
    setProject(project);
    setDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    dispatch(onDeleteProject(project));
    setDeleteModal(false);
  };


  useEffect(() => {
    dispatch(onGetProjects());
  }, [dispatch]);

  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  useEffect(() => {
    if (!isEmpty(projects)) {
      setProjectList(projects);
    }
  }, [projects]);

  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  return (
    <React.Fragment>
     <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
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
                          <td> {handleValidDate(project.dueDate)}</td>
                          <td>
                            <Badge className={"bg-" + project.color}>
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
                                      className="team-member d-inline-block"
                                      id="member1"
                                    >
                                      <img
                                        src={images[member.img]}
                                        className="rounded-circle avatar-xs"
                                        alt=""
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="member1"
                                      >
                                        {member.name}
                                      </UncontrolledTooltip>
                                    </Link>
                                  </div>
                                ) : (
                                  <div
                                    className="avatar-group-item"
                                    key={"_team_" + index}
                                  >
                                    <Link
                                      to="#"
                                      className="d-inline-block"
                                      id={"member" + member.id}
                                    >
                                      <div className="avatar-xs">
                                        <span
                                          className={
                                            "avatar-title rounded-circle bg-soft bg-" +
                                            member.color +
                                            " text-" +
                                            member.color +
                                            " font-size-16"
                                          }
                                        >
                                          {member.name.charAt(0)}
                                        </span>
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={"member" + member.id}
                                        >
                                          {member.name}
                                        </UncontrolledTooltip>
                                      </div>
                                    </Link>
                                  </div>
                                )
                              )}
                            </div>
                          </td>
                          <td>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                href="#"
                                className="card-drop"
                                tag="i"
                              >
                                <i className="mdi mdi-dots-horizontal font-size-18" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem
                                  href="#"
                                  onClick={() => handleProjectClick(project)}
                                >
                                  <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                  Edit
                                </DropdownItem>
                                <DropdownItem
                                  href="#"
                                  onClick={() => onClickDelete(project)}
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
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} tag="h4">
                      {!!isEdit ? "Edit Project" : "Add Project"}
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <Row form>
                          <Col xs={12}>
                            <Input
                              type="hidden"
                              value={validation.values.img || ""}
                              name="img"
                            />

                            <Input
                              type="hidden"
                              value={validation.values.team || ""}
                              name="team"
                            />
                            <div className="mb-3">
                              <Label className="form-label">Name</Label>
                              <Input
                                name="name"
                                type="text"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.name || ""}
                                invalid={
                                  validation.touched.name && validation.errors.name ? true : false
                                }
                              />
                              {validation.touched.name && validation.errors.name ? (
                                <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">Description</Label>
                              <Input
                                name="description"
                                type="text"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.description || ""}
                                invalid={
                                  validation.touched.description && validation.errors.description ? true : false
                                }
                              />
                              {validation.touched.description && validation.errors.description ? (
                                <FormFeedback type="invalid">{validation.errors.description}</FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">Status</Label>
                              <Input
                                name="status"
                                id="status1"
                                type="select"
                                className="form-select"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.status || ""
                                }
                              >
                                <option>Completed</option>
                                <option>Pending</option>
                                <option>Delay</option>
                              </Input>
                              {validation.touched.status && validation.errors.status ? (
                                <FormFeedback type="invalid">{validation.errors.status}</FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">Color</Label>
                              <Input
                                name="color"
                                type="select"
                                className="form-select"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.color || ""}
                                invalid={
                                  validation.touched.color && validation.errors.color ? true : false
                                }
                              >
                                <option>success</option>
                                <option>warning</option>
                                <option>danger</option>
                              </Input>
                              {validation.touched.color && validation.errors.color ? (
                                <FormFeedback type="invalid">{validation.errors.color}</FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">dueDate</Label>
                              <Input
                                name="dueDate"
                                type="date"
                                format="YYYY/MM/DD"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.dueDate && validation.errors.dueDate ? true : false
                                }
                                value={validation.values.dueDate || ""}
                              ></Input>
                              {validation.touched.dueDate && validation.errors.dueDate ? (
                                <FormFeedback type="invalid">{validation.errors.dueDate}</FormFeedback>
                              ) : null}
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
};

export default withRouter(ProjectsList);
