import React, { useState } from "react";
import MetaTags from 'react-meta-tags';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from "react-select";
import makeAnimated from "react-select/animated";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();

const Offsymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2
      }}
    >
      {" "}
      No
    </div>
  );
};

const OnSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2
      }}
    >
      {" "}
      Yes
    </div>
  );
};

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

const optionGroup1 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

const optionGroup2 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

const FormAdvanced = () => {
  const [sq1, setsq1] = useState(false);
  const [sq2, setsq2] = useState(false);
  const [sq3, setsq3] = useState(false);
  const [color, setcolor] = useState("red");
  const [colorRgb, setcolorRgb] = useState("red");
  const [colorCust, setcolorCust] = useState("red");
  const [colorHor, setcolorHor] = useState("#fffff");
  const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)");
  const [display_RGBA, setdisplay_RGBA] = useState(false);

  //** Datepicker Method */
  const [date, setDate] = useState("");
  const [fromate_date, setFromatDate] = useState("");
  const [current_month, setMonth] = useState("");
  const [current_month_short, setMonthShort] = useState("");
  const [current_day, setDay] = useState("");
  const [current_day_short, setDayShort] = useState("");
  const [current_day_min, setDayMin] = useState("");
  const [pick_date, setPickDate] = useState("");

  const [disbadge, setdisbadge] = useState(true);
  const [disthresh, setdisthresh] = useState(false);
  const [placementbadge, setplacementbadge] = useState(false);
  const [textcount, settextcount] = useState(0);
  const [optioncount, setoptioncount] = useState(0);
  const [placementcount, setplacementcount] = useState(0);
  const [threshhold, setthreshhold] = useState(0);
  const [threshholdcount, setthreshholdcount] = useState(0);
  const [disDefault, setdisDefault] = useState(0);
  const [textareabadge, settextareabadge] = useState(0);
  const [simple_color, setsimple_color] = useState(0);
  const [simple_color1, setsimple_color1] = useState(0);
  const [simple_color2, setsimple_color2] = useState(0);

  const [switch1, setswitch1] = useState(true);
  const [switch2, setswitch2] = useState(true);
  const [switch3, setswitch3] = useState(true);
  const [switch4, setswitch4] = useState(true);
  const [switch5, setswitch5] = useState(true);
  const [switch6, setswitch6] = useState(true);
  const [switch7, setswitch7] = useState(true);
  const [switch8, setswitch8] = useState(true);
  const [switch9, setswitch9] = useState(true);

  const [data_attr, setdata_attr] = useState(56);
  const [postfix, setpostfix] = useState(20);
  const [empty_val, setempty_val] = useState(0);
  const [not_attr, setnot_attr] = useState(15);
  const [explicit_val, setexplicit_val] = useState(33);

  const max_len = 25;

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  const [selectedMulti1, setselectedMulti1] = useState(null);
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedMulti3, setselectedMulti3] = useState(null);

  const onDrag = c1 => {
    setcolor(c1);
  };
  const onDragRgb = c1 => {
    setcolorRgb(c1);
  };
  const onDragCust = c1 => {
    setcolorCust(c1);
  };
  const handleHor = color => {
    setcolorHor(color.hex);
  };

  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA);
  }

  const onSwatchHover_RGBA = color => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    setcolorRGBA(format);
  };

  function threshholdchange(event) {
    const count = event.target.value.length;
    const remain_val = max_len - 20;

    if (remain_val <= count) {
      setdisthresh(true);
    } else {
      setdisthresh(false);
    }
    setthreshholdcount(event.target.value.length);
  }

  function threshholdDefault(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisDefault(true);
    } else {
      setdisDefault(false);
    }
    setthreshhold(event.target.value.length);
  }

  function optionchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisbadge(true);
    } else {
      setdisbadge(false);
    }
    setoptioncount(event.target.value.length);
  }

  function placementchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setplacementbadge(true);
    } else {
      setplacementbadge(false);
    }
    setplacementcount(event.target.value.length);
  }

  function textareachange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      settextareabadge(true);
    } else {
      settextareabadge(false);
    }
    settextcount(event.target.value.length);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  function handleMulti1(selectedMulti1) {
    setselectedMulti1(selectedMulti1);
  }

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
  }

  function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
  }

  /*
    get date Method
  **/
  const getDateMethod = () => {
    setDate(new Date());
  };
  const getDateFormateMethod = () => {
    let today = new Date();
    const dd = today.getDate().toString();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const fromate_date = (today = dd + "/" + mm + "/" + yyyy);
    setFromatDate(fromate_date);
  };
  const getMonthMethod = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const d = new Date();
    const current_month = months[d.getMonth()];
    setMonth(current_month);
  };

  const getMonthShortMethod = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const d = new Date();
    const current_month_short = months[d.getMonth()];
    setMonthShort(current_month_short);
  };

  const getDayMethod = () => {
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const d = new Date();
    const current_day = day[d.getDay()];
    setDay(current_day);
  };

  const getDayShort = () => {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    const current_day_short = day[d.getDay()];
    setDayShort(current_day_short);
  };

  const getDayMin = () => {
    const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const d = new Date();
    const current_day_min = day[d.getDay()];
    setDayMin(current_day_min);
  };

  const picks = () => {
    setPickDate(new Date());
  };

  const resentValue = () => {
    setPickDate(" ");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Advanced | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Advanced" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Select2</h4>
                  <p className="card-title-desc">
                    A mobile and touch friendly input spinner component for
                    Bootstrap
                  </p>

                  <form>
                    <Row>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>Single Select</Label>
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="control-label">
                            Multiple Select
                          </label>
                          <Select
                            value={selectedMulti}
                            isMulti={true}
                            onChange={() => {
                              handleMulti();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>

                        <div>
                          <Label>Disable</Label>
                          <Select
                            value={selectedMulti1}
                            isMulti={true}
                            onChange={() => {
                              handleMulti1();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                            isDisabled={true}
                          />
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                          <Label>Loading</Label>
                          <Select
                            value={selectedMulti2}
                            isMulti={true}
                            onChange={() => {
                              handleMulti2();
                            }}
                            options={optionGroup1}
                            classNamePrefix="select2-selection"
                            isLoading={true}
                          />
                        </div>
                        <div className="mb-3 templating-select select2-container">
                          <label className="control-label">Animated</label>
                          <Select
                            value={selectedMulti3}
                            isMulti={true}
                            onChange={() => {
                              handleMulti3();
                            }}
                            options={optionGroup2}
                            classNamePrefix="select2-selection"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                          />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Colorpicker</h4>
                  <p className="card-title-desc">
                    Fancy and customizable colorpicker plugin for Twitter
                    Bootstrap.
                  </p>

                  <Form action="#">
                    <div className="mb-3">
                      <Label>Simple input field</Label>
                      <Input
                        type="text"
                        className="colorpicker-default"
                        value={color}
                        onClick={() => {
                          setsimple_color(!simple_color);
                        }}
                        readOnly
                      />
                      {simple_color ? (
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={color}
                          onDrag={onDrag}
                        />
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>With custom options - RGBA</Label>
                      <Input
                        type="text"
                        className="colorpicker-rgba form-control"
                        value={colorRGBA}
                        onClick={handleRGBA}
                        readOnly
                      />
                      {display_RGBA ? (
                        <SketchPicker
                          color="#fff"
                          value={colorRGBA}
                          width="160px"
                          onChangeComplete={onSwatchHover_RGBA}
                        />
                      ) : null}
                    </div>
                    <FormGroup className="m-b-0">
                      <Label>As a component</Label>
                      <div
                        className="input-group colorpicker-default"
                        title="Using format option"
                      >
                        <input
                          readOnly
                          value={colorRgb}
                          type="text"
                          className="form-control input-lg"
                        />
                        <span className="input-group-append">
                          <span
                            className="input-group-text colorpicker-input-addon"
                            onClick={() => {
                              setsimple_color1(!simple_color1);
                            }}
                          >
                            <i
                              style={{
                                height: "16px",
                                width: "16px",
                                background: colorRgb
                              }}
                            />
                          </span>
                        </span>
                      </div>

                      {simple_color1 ? (
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={colorRgb}
                          onDrag={onDragRgb}
                        />
                      ) : null}
                    </FormGroup>
                    <div className="mb-3">
                      <Label>Horizontal mode</Label>
                      <Input
                        type="text"
                        onClick={() => {
                          setsimple_color2(!simple_color2);
                        }}
                        value={colorHor}
                        readOnly
                      />
                      {simple_color2 ? (
                        <SketchPicker
                          color="#fff"
                          value={simple_color2}
                          width="160px"
                          onChangeComplete={handleHor}
                        />
                      ) : null}
                    </div>

                    <FormGroup className="mb-0">
                      <Label>Inline</Label>

                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={colorCust}
                        onDrag={onDragCust}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h4 className="card-title">Timepicker</h4>
                  <p className="card-title-desc">
                    Easily select a time for a text input using your mouse or
                    keyboards arrow keys.
                  </p>

                  <Form action="#">
                    <FormGroup className="mb-3">
                      <Label>Default Time Picker</Label>

                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="Select time"
                          options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i"
                          }}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-clock-outline" />
                          </span>
                        </div>
                      </InputGroup>
                    </FormGroup>
                    <div className="form-group mb-3">
                      <Label>24 Hour Mode Time Picker</Label>

                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="Select time"
                          options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                            time_24hr: true
                          }}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-clock-outline" />
                          </span>
                        </div>
                      </InputGroup>
                    </div>

                    <div className="form-group mb-0">
                      <label>Specify a step for the minute field</label>

                      <div className="input-group">
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="Select time"
                          options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i"
                          }}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-clock-outline" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">Datepicker</h4>
                  <p className="card-title-desc">
                    Examples of twitter bootstrap datepicker.
                  </p>

                  <Form>
                    <FormGroup className="mb-4">
                      <Label>Default Functionality</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="form-group mb-4">
                      <Label>Auto Close</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </InputGroup>
                    </div>

                    <div className="form-group mb-4">
                      <label>Multiple Date</label>
                      <div className="input-group">
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </div>
                    </div>

                    <FormGroup className="mb-4">
                      <Label>Date Range</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            mode: "range",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="form-group mb-0">
                      <label>Inline Datepicker</label>
                      <Flatpickr
                        className="form-control d-block"
                        placeholder="dd M,yyyy"
                        options={{
                          inline: true,
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d"
                        }}
                      />
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">Bootstrap MaxLength</h4>
                  <p className="card-title-desc">
                    This plugin integrates by default with Twitter bootstrap
                    using badges to display the maximum lenght of the field
                    where the user is inserting text.{" "}
                  </p>
                  <Label>Default usage</Label>
                  <p className="text-muted m-b-15">
                    The badge will show up by default when the remaining chars
                    are 10 or less:
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    name="defaultconfig"
                    onChange={e => {
                      threshholdDefault(e);
                    }}
                    id="defaultconfig"
                  />
                  {disDefault ? (
                    <span className="badgecount badge bg-success">
                      {threshhold} / 25{" "}
                    </span>
                  ) : null}

                  <div className="mt-3">
                    <Label>Threshold value</Label>
                    <p className="text-muted m-b-15">
                      Do you want the badge to show up when there are 20 chars
                      or less? Use the <code>threshold</code> option:
                    </p>
                    <Input
                      type="text"
                      maxLength={max_len}
                      onChange={e => {
                        threshholdchange(e);
                      }}
                      name="thresholdconfig"
                      id="thresholdconfig"
                    />
                    {disthresh ? (
                      <span className="badgecount badge bg-success">
                        {threshholdcount} / 25{" "}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3">
                    <Label>All the options</Label>
                    <p className="text-muted m-b-15">
                      Please note: if the <code>alwaysShow</code> option is
                      enabled, the <code>threshold</code> option is ignored.
                    </p>
                    <Input
                      type="text"
                      maxLength="25"
                      onChange={e => {
                        optionchange(e);
                      }}
                      name="alloptions"
                      id="alloptions"
                    />
                    {disbadge ? (
                      <span className="badgecount">
                        You Types{" "}
                        <span className="badge bg-success">
                          {optioncount}
                        </span>{" "}
                        out of <span className="badge bg-success">25</span>{" "}
                        chars available
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3">
                    <Label>Position</Label>
                    <p className="text-muted m-b-15">
                      All you need to do is specify the <code>placement</code>{" "}
                      option, with one of those strings. If none is specified,
                      the positioning will be defauted to &apos;bottom&lsquo;.
                    </p>
                    <Input
                      type="text"
                      maxLength="25"
                      onChange={e => {
                        placementchange(e);
                      }}
                      name="placement"
                      id="placement"
                    />
                    {placementbadge ? (
                      <span
                        style={{ float: "right" }}
                        className="badgecount badge bg-success"
                      >
                        {placementcount} / 25{" "}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3">
                    <Label>Textarea</Label>
                    <p className="text-muted m-b-15">
                      Bootstrap maxlength supports textarea as well as inputs.
                      Even on old IE.
                    </p>
                    <Input
                      type="textarea"
                      id="textarea"
                      onChange={e => {
                        textareachange(e);
                      }}
                      maxLength="225"
                      rows="3"
                      placeholder="This textarea has a limit of 225 chars."
                    />
                    {textareabadge ? (
                      <span className="badgecount badge bg-success">
                        {" "}
                        {textcount} / 225{" "}
                      </span>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">Bootstrap TouchSpin</h4>
                  <p className="card-title-desc">
                    A mobile and touch friendly input spinner component for
                    Bootstrap
                  </p>
                  <Form>
                    <div className="mb-3">
                      <Label>Using data attributes</Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setdata_attr(data_attr - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={data_attr}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setdata_attr(data_attr + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <Label>Example with postfix (large)</Label>
                      <InputGroup>
                        <span
                          className="input-group-btn input-group-prepend"
                          onClick={() => {
                            setpostfix(postfix - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          value={postfix}
                          placeholder="number"
                          readOnly
                        />
                        <span className="input-group-append">
                          <span className="input-group-text">%</span>
                        </span>
                        <span className="input-group-append">
                          <Button
                            type="button"
                            onClick={() => {
                              setpostfix(postfix + 1);
                            }}
                            color="primary"
                          >
                            <i className="mdi mdi-plus" />
                          </Button>
                        </span>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <Label>Init with empty value:</Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={empty_val}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <Label>
                        Value attribute is not set (applying settings.initval)
                      </Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setnot_attr(not_attr - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={not_attr}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setnot_attr(not_attr + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <FormGroup className="mb-0">
                      <Label>
                        Value is set explicitly to 33 (skipping
                        settings.initval){" "}
                      </Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setexplicit_val(explicit_val - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={explicit_val}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setexplicit_val(explicit_val + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </FormGroup>
                  </Form>{" "}
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Css Switch</h4>
                  <p className="card-title-desc">
                    Here are a few types of switches.{" "}
                  </p>

                  <Row>
                    <Col lg="6">
                      <h5 className="font-size-14 mb-3">Example switch</h5>
                      <div>
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#626ed4"
                          onChange={() => {
                            setswitch1(!switch1);
                          }}
                          checked={switch1}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#a2a2a2"
                          onChange={() => {
                            setswitch2(!switch2);
                          }}
                          checked={switch2}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#02a499"
                          onChange={() => {
                            setswitch3(!switch3);
                          }}
                          checked={switch3}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#626ed4"
                          onChange={() => {
                            setswitch4(!switch4);
                          }}
                          checked={switch4}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#02a499"
                          onChange={() => {
                            setswitch5(!switch5);
                          }}
                          checked={switch5}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#38a4f8"
                          onChange={() => {
                            setswitch6(!switch6);
                          }}
                          checked={switch6}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#f8b425"
                          onChange={() => {
                            setswitch7(!switch7);
                          }}
                          checked={switch7}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#ec4561"
                          onChange={() => {
                            setswitch8(!switch8);
                          }}
                          checked={switch8}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#2a3142"
                          onChange={() => {
                            setswitch9(!switch9);
                          }}
                          checked={switch9}
                        />
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="mt-4 mt-lg-0">
                        <h5 className="font-size-14 mb-3">Square switch</h5>
                        <div className="d-flex">
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch1"
                              switch="none"
                              checked={sq1}
                              onChange={() => {
                                setsq1(!sq1);
                              }}
                            />
                            <label
                              htmlFor="square-switch1"
                              data-on-label="On"
                              data-off-label="Off"
                            />
                          </div>
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch2"
                              switch="info"
                              checked={sq2}
                              onChange={() => {
                                setsq2(!sq2);
                              }}
                            />
                            <label
                              htmlFor="square-switch2"
                              data-on-label="Yes"
                              data-off-label="No"
                            />
                          </div>
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch3"
                              switch="bool"
                              checked={sq3}
                              onChange={() => {
                                setsq3(!sq3);
                              }}
                            />
                            <label
                              htmlFor="square-switch3"
                              data-on-label="Yes"
                              data-off-label="No"
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Datepicker</h4>
                  <Row>
                    <Col xl={6} sm={6}>
                      <div>
                        <h4 className="font-size-14 mb-3">Demo</h4>
                        <div className="docs-datepicker">
                          <InputGroup>
                            <Flatpickr
                              value={Date.parse(pick_date)}
                              className="form-control d-block"
                              placeholder="Pick a date"
                              options={{
                                altInput: true,
                                dateFormat: "d-m-y"
                              }}
                            />
                            <div className="input-group-append">
                              <button
                                type="button"
                                className="btn btn-outline-secondary docs-datepicker-trigger"
                                disabled
                              >
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </InputGroup>
                          <div className="docs-datepicker-container" />
                        </div>
                        <h4 className="font-size-14 my-3">Options</h4>
                        <div className="docs-options">
                          <div className="mb-3">
                            <ul>
                              <li>
                                You can simply check the config option from the
                                below link. <br />{" "}
                                <Link
                                  to="https://flatpickr.js.org/options/"
                                  target="_blank"
                                >
                                  https://flatpickr.js.org/options
                                </Link>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} cm={6}>
                      <div className="mt-4 mt-xl-0">
                        <h4 className="font-size-14 mb-3">Methods</h4>
                        <div className="docs-actions">
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getDateMethod}
                              >
                                Get Date
                              </button>
                            </div>
                            <Input
                              defaultValue={date}
                              className="form-control"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getDateFormateMethod}
                              >
                                Get Date (formatted)
                              </button>
                            </div>
                            <Input
                              defaultValue={fromate_date}
                              className="form-control"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getMonthMethod}
                              >
                                Get Month Name
                              </button>
                            </div>
                            <Input
                              defaultValue={current_month || ""}
                              type="text"
                              className="form-control"
                              id="putMonthName"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getMonthShortMethod}
                              >
                                Get Month Name (short)
                              </button>
                            </div>
                            <Input
                              defaultValue={current_month_short || ""}
                              type="text"
                              className="form-control"
                              id="putMonthNameShort"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getDayMethod}
                              >
                                Get Day Name
                              </button>
                            </div>
                            <Input
                              defaultValue={current_day || ""}
                              type="text"
                              className="form-control"
                              id="putDayName"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getDayShort}
                              >
                                Get Day Name (short)
                              </button>
                            </div>
                            <Input
                              defaultValue={current_day_short || ""}
                              type="text"
                              className="form-control"
                              id="putDayNameShort"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={getDayMin}
                              >
                                Get Day Name (min)
                              </button>
                            </div>
                            <Input
                              defaultValue={current_day_min || ""}
                              type="text"
                              className="form-control"
                              id="putDayNameMin"
                            />
                          </InputGroup>
                          <div className="btn-group mb-3 d-flex" role="group">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={picks}
                            >
                              Pick
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={resentValue}
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
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

export default FormAdvanced;
