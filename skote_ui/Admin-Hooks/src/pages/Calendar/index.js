import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  updateEvent as onUpdateEvent,
} from "../../store/actions";

import DeleteModal from "./DeleteModal";

//css
import "@fullcalendar/bootstrap/main.css";

//redux
import { useSelector, useDispatch } from "react-redux";

const Calender = props => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({});

  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || '',
      category: (event && event.category) || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          classNames: values.category + " text-white",
          start: event.start,
        };
        // update event
        dispatch(onUpdateEvent(updateEvent));
        validation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values.category + " text-white",
        };
        // save new event
        dispatch(onAddNewEvent(newEvent));
        validation.resetForm();
      }
      setSelectedDay(null);
      toggle();
    },
  });

  // category validation
  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || '',
      category: (event && event.category) || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Order Id"),
      category: Yup.string().required("Please Enter Your Billing Name"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        title: values["title"],
        start: selectedDay ? selectedDay.date : new Date(),
        className: values.event_category
          ? values.event_category + " text-white"
          : "bg-danger text-white",
      };
      // save new event

      dispatch(onAddNewEvent(newEvent));
      toggleCategory();
    },
  });

  const { events, categories } = useSelector(state => ({
    events: state.calendar.events,
    categories: state.calendar.categories,
  }));

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalcategory, setModalcategory] = useState(false);

  const [selectedDay, setSelectedDay] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(onGetCategories());
    dispatch(onGetEvents());
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    });
  }, []);

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({});
        setIsEdit(false);
      }, 500);
    }
  }, [modal, event]);

  /**
   * Handling the modal state
   */
   const toggle = () => {
    if (modal) {
      setModal(false);
      setEvent(null);
    } else {
      setModal(true);
    }
  };

  const toggleCategory = () => {
    setModalcategory(!modalcategory);
  };

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
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

    setSelectedDay(modifiedData);
    toggle();
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event;
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    });
    setIsEdit(true);
    toggle();
  };

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event));
    setDeleteModal(false);
    toggle();
  };

  /**
   * On category darg event
   */
  const onDrag = event => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const date = event['date'];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec);

    const draggedEl = event.draggedEl;
    const modifiedData = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: modifiedDate,
      className: draggedEl.className,
    };
    dispatch(onAddNewEvent(modifiedData));
  };

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
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
                        className="font-16 btn-block"
                        onClick={toggleCategory}
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
                              className={`${category.type} external-event text-white p-1 mb-2`}
                              key={"cat-" + category.id}
                              draggable
                              onDrag={event => onDrag(event, category)}
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
                            Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur, from a
                            Lorem Ipsum passage.
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
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />

                      {/* New/Edit event modal */}
                      <Modal isOpen={modal} className={props.className}>
                        <ModalHeader toggle={toggle} tag="h4">
                          {!!isEdit ? "Edit Event" : "Add Event"}
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
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Event Name</Label>
                                <Input
                                  name="title"
                                  type="text"
                                  // value={event ? event.title : ""}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.title || ""}
                                  invalid={
                                    validation.touched.title && validation.errors.title ? true : false
                                  }
                                />
                                {validation.touched.title && validation.errors.title ? (
                                  <FormFeedback type="invalid">{validation.errors.title}</FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Select Category</Label>
                                <Input
                                  type="select"
                                  name="category"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.category || ""}
                                  invalid={
                                    validation.touched.category && validation.errors.category ? true : false
                                  }
                                >
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </Input>
                                {validation.touched.category && validation.errors.category ? (
                                  <FormFeedback type="invalid">{validation.errors.category}</FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggle}
                                  >
                                    Close
                                  </button>
                                  {!!isEdit && (
                                    <button
                                      type="button"
                                      className="btn btn-danger me-2"
                                      onClick={() => setDeleteModal(true)}
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
                        </ModalBody>
                      </Modal>

                      <Modal
                        isOpen={modalcategory}
                        toggle={toggleCategory}
                        className={props.className}
                      >
                        <ModalHeader toggle={toggleCategory} tag="h4">
                          Add a category
                        </ModalHeader>
                        <ModalBody>
                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              categoryValidation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row form>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Event Name</Label>
                                <Input
                                  name="title"
                                  type="text"
                                  // value={event ? event.title : ""}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.title || ""}
                                  invalid={
                                    categoryValidation.touched.title && categoryValidation.errors.title ? true : false
                                  }
                                />
                                {categoryValidation.touched.title && categoryValidation.errors.title ? (
                                  <FormFeedback type="invalid">{categoryValidation.errors.title}</FormFeedback>
                                ) : null}
                              </Col>
                              <Col className="col-12 mb-3">
                                <Label className="form-label">Select Category</Label>
                                <Input
                                  type="select"
                                  name="category"
                                  // value={event ? event.category : "bg-primary"}
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.category || ""}
                                  invalid={
                                    categoryValidation.touched.category && categoryValidation.errors.category ? true : false
                                  }
                                >
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </Input>
                                {categoryValidation.touched.category && categoryValidation.errors.category ? (
                                  <FormFeedback type="invalid">{categoryValidation.errors.category}</FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggleCategory}
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
};

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
};

export default Calender;
