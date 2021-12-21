import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Label,
} from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
//css
import "@fullcalendar/bootstrap/main.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  getEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
  getCategories,
} from "../../store/actions";
import DeleteModal from "./DeleteModal";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.calendarComponentRef = React.createRef();

    this.state = {
      calendarWeekends: true,
      modal: false,
      modalcategory: false,
      isDragBind: false,
      deleteModal: false,
      event: {},
    };

    this.toggle = this.toggle.bind(this);
    this.togglecategory = this.togglecategory.bind(this);
    this.handleValidEventSubmitcategory =
      this.handleValidEventSubmitcategory.bind(this);

    // category
    this.onDrag = this.onDrag.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount = () => {
    const { onGetCategories, onGetEvents } = this.props;
    onGetCategories();
    onGetEvents();
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    });
  };

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { event, modal } = this.state;
    if (prevState.modal !== modal && !modal && !isEmpty(event)) {
      setTimeout(() => {
        this.setState({ event: {}, isEdit: false });
      }, 500);
    }
  }

  /**
   * Handling the modal state
   */
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  togglecategory() {
    this.setState(prevState => ({
      modalcategory: !prevState.modalcategory,
    }));
  }

  /**
   * Handling date click on calendar
   */
  handleDateClick = arg => {
    const date = arg["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );
    const modifiedData = { ...arg, date: modifiedDate };

    this.setState({ selectedDay: modifiedData });
    this.toggle();
  };

  /**
   * Handling click on event on calendar
   */
  handleEventClick = arg => {
    const event = arg.event;
    this.setState({
      event: {
        id: event.id,
        title: event.title,
        title_category: event.title_category,
        start: event.start,
        className: event.classNames,
        category: event.classNames[0],
        event_category: event.classNames[0],
      },
      isEdit: true,
    });
    this.toggle();
  };

  handleValidEventSubmitcategory = (event, values) => {
    const { onAddNewEvent } = this.props;

    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: values["title_category"],
      start: new Date(),
      className: values.event_category
        ? values.event_category + " text-white"
        : "bg-danger text-white",
    };
    // save new event
    onAddNewEvent(newEvent);
    this.togglecategory();
  };

  /**
   * On delete event
   */
  handleDeleteEvent = () => {
    const { onDeleteEvent } = this.props;
    const { event } = this.state;

    onDeleteEvent(event);
    this.setState({ deleteModal: false });
    this.toggle();
  };

  /**
   * On category darg event
   */
  onDrag = event => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  onDrop = event => {
    const date = event["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const { onAddNewEvent } = this.props;
    const draggedEl = event.draggedEl;
    const modifiedData = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: modifiedDate,
      className: draggedEl.className,
    };
    onAddNewEvent(modifiedData);
  };

  render() {
    const { events, categories } = this.props;
    const { onAddNewEvent, onUpdateEvent } = this.props;
    const { isEdit, deleteModal, event, selectedDay } = this.state;

    return (
      <React.Fragment>
        <DeleteModal
          show={deleteModal}
          onDeleteClick={this.handleDeleteEvent}
          onCloseClick={() => this.setState({ deleteModal: false })}
        />
        <div className="page-content">
          <MetaTags>
            <title>Calendar | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Skote" breadcrumbItem="Calendar" />
            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <Row>
                      <Col lg={3}>
                        <Button
                          color="primary"
                          className="font-16 btn-block btn btn-primary"
                          onClick={this.togglecategory}
                        >
                          <i className="mdi mdi-plus-circle-outline me-1" />
                          Create New Event
                        </Button>

                        <div id="external-events" className="mt-3">
                          <p className="text-muted">
                            Drag and drop your event or click in the calendar
                          </p>
                          {categories &&
                            categories.map((category, i) => (
                              <div
                                key={i}
                                className={`${category.type} external-event text-white p-1 mb-2`}
                                draggable
                                onDrag={event => this.onDrag(event, category)}
                              >
                                <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                {category.title}
                              </div>
                            ))}
                        </div>

                        <div className="mt-5 d-none d-xl-block">
                          <h5 className="text-center">How It Works ?</h5>

                          <ul className="ps-3">
                            <li className="text-muted mb-3">
                              It has survived not only five centuries, but also
                              the leap into electronic typesetting, remaining
                              essentially unchanged.
                            </li>
                            <li className="text-muted mb-3">
                              Richard McClintock, a Latin professor at
                              Hampden-Sydney College in Virginia, looked up one
                              of the more obscure Latin words, consectetur, from
                              a Lorem Ipsum passage.
                            </li>
                            <li className="text-muted mb-3">
                              It has survived not only five centuries, but also
                              the leap into electronic typesetting, remaining
                              essentially unchanged.
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col className="col-lg-9">
                        {/* fullcalendar control */}
                        <FullCalendar
                          ref={this.calendarComponentRef}
                          plugins={[
                            BootstrapTheme,
                            dayGridPlugin,
                            interactionPlugin,
                          ]}
                          slotDuration={"00:15:00"}
                          handleWindowResize={true}
                          themeSystem="bootstrap"
                          headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,dayGridWeek,dayGridDay",
                          }}
                          events={events}
                          editable={true}
                          droppable={true}
                          selectable={true}
                          dateClick={this.handleDateClick}
                          eventClick={this.handleEventClick}
                          drop={this.onDrop}
                        />

                        {/* New/Edit event modal */}
                        <Modal
                          isOpen={this.state.modal}
                          className={this.props.className}
                          id="event-modal"
                        >
                          <ModalHeader toggle={this.toggle} tag="h4">
                            {!!isEdit ? "Edit Event" : "Add Event"}
                          </ModalHeader>
                          <ModalBody>
                            <Formik
                              enableReinitialize={true}
                              initialValues={{
                                title:
                                  (this.state.event &&
                                    this.state.event.title) ||
                                  "",
                                category:
                                  (this.state.event &&
                                    this.state.event.category) ||
                                  "Danger",
                              }}
                              validationSchema={Yup.object().shape({
                                title: Yup.string().required(
                                  "Please Enter Your Event Name"
                                ),
                                category: Yup.string().required(
                                  "Please Enter Your category"
                                ),
                              })}
                              onSubmit={values => {
                                if (isEdit) {
                                  const updateEvent = {
                                    id: this.state.event.id,
                                    title: values.title,
                                    classNames: values.category + " text-white",
                                    start: this.state.event.start,
                                  };
                                  // update event
                                  onUpdateEvent(updateEvent);
                                } else {
                                  const newEvent = {
                                    id: Math.floor(Math.random() * 100),
                                    title: values["title"],
                                    start: selectedDay
                                      ? selectedDay.date
                                      : new Date(),
                                    className: values.category + " text-white",
                                  };
                                  // save new event
                                  onAddNewEvent(newEvent);
                                }

                                this.setState({ selectedDay: null });
                                this.toggle();
                              }}
                            >
                              {({ errors, status, touched }) => (
                                <Form>
                                  <Row>
                                    <Col xs={12}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          Event Name
                                        </Label>
                                        <Field
                                          name="title"
                                          type="text"
                                          className={
                                            "form-control" +
                                            (errors.title && touched.title
                                              ? " is-invalid"
                                              : "")
                                          }
                                        />
                                        <ErrorMessage
                                          name="title"
                                          component="div"
                                          className="invalid-feedback"
                                        />
                                      </div>
                                    </Col>
                                    <Col xs={12}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          Select Category
                                        </Label>
                                        <Field
                                          name="category"
                                          as="select"
                                          className={
                                            "form-control" +
                                            (errors.category && touched.category
                                              ? " is-invalid"
                                              : "")
                                          }
                                        >
                                          <option value="bg-danger">
                                            Danger
                                          </option>
                                          <option value="bg-success">
                                            Success
                                          </option>
                                          <option value="bg-primary">
                                            Primary
                                          </option>
                                          <option value="bg-info">Info</option>
                                          <option value="bg-dark">Dark</option>
                                          <option value="bg-warning">
                                            Warning
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          name="category"
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
                                          type="button"
                                          className="btn btn-light me-2"
                                          onClick={this.toggle}
                                        >
                                          Close
                                        </button>
                                        {!!isEdit && (
                                          <button
                                            type="button"
                                            className="btn btn-danger me-2"
                                            onClick={() =>
                                              this.setState({
                                                deleteModal: true,
                                              })
                                            }
                                          >
                                            Delete
                                          </button>
                                        )}
                                        <button
                                          type="submit"
                                          className="btn btn-success save-event"
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

                        <Modal
                          isOpen={this.state.modalcategory}
                          toggle={this.togglecategory}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.togglecategory} tag="h4">
                            Add a category
                          </ModalHeader>
                          <ModalBody>
                            <Formik
                              enableReinitialize={true}
                              initialValues={{
                                title_category:
                                  (this.state.event &&
                                    this.state.event.title_category) ||
                                  "",
                                event_category:
                                  (this.state.event &&
                                    this.state.event.event_category) ||
                                  "Danger",
                              }}
                              validationSchema={Yup.object().shape({
                                title_category: Yup.string().required(
                                  "Please Enter Your Event Name"
                                ),
                                event_category: Yup.string().required(
                                  "Please Select Your Category"
                                ),
                              })}
                              onSubmit={values => {
                                const newEvent = {
                                  id: Math.floor(Math.random() * 100),
                                  title: values["title_category"],
                                  start: new Date(),
                                  className: values.event_category
                                    ? values.event_category + " text-white"
                                    : "bg-danger text-white",
                                };
                                // save new event
                                onAddNewEvent(newEvent);
                                this.togglecategory();
                              }}
                            >
                              {({ errors, status, touched }) => (
                                <Form>
                                  <Row>
                                    <Col xs={12}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          Event Name
                                        </Label>
                                        <Field
                                          name="title_category"
                                          type="text"
                                          className={
                                            "form-control" +
                                            (errors.title_category &&
                                            touched.title_category
                                              ? " is-invalid"
                                              : "")
                                          }
                                        />
                                        <ErrorMessage
                                          name="title_category"
                                          component="div"
                                          className="invalid-feedback"
                                        />
                                      </div>
                                    </Col>
                                    <Col xs={12}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          Select Category
                                        </Label>
                                        <Field
                                          name="event_category"
                                          as="select"
                                          className={
                                            "form-control" +
                                            (errors.event_category &&
                                            touched.event_category
                                              ? " is-invalid"
                                              : "")
                                          }
                                        >
                                          <option value="bg-danger">
                                            Danger
                                          </option>
                                          <option value="bg-success">
                                            Success
                                          </option>
                                          <option value="bg-primary">
                                            Primary
                                          </option>
                                          <option value="bg-info">Info</option>
                                          <option value="bg-dark">Dark</option>
                                          <option value="bg-warning">
                                            Warning
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          name="event_category"
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
                                          type="button"
                                          className="btn btn-light me-2"
                                          onClick={this.togglecategory}
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="submit"
                                          className="btn btn-success save-event"
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
                      </Col>
                    </Row>
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

Calender.propTypes = {
  categories: PropTypes.array,
  className: PropTypes.string,
  events: PropTypes.array,
  onAddNewEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
  onGetEvents: PropTypes.func,
  onUpdateEvent: PropTypes.func,
};

const mapStateToProps = ({ calendar }) => ({
  events: calendar.events,
  categories: calendar.categories,
});

const mapDispatchToProps = dispatch => ({
  onGetEvents: () => dispatch(getEvents()),
  onGetCategories: () => dispatch(getCategories()),
  onAddNewEvent: event => dispatch(addNewEvent(event)),
  onUpdateEvent: event => dispatch(updateEvent(event)),
  onDeleteEvent: event => dispatch(deleteEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calender);
