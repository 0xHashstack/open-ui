import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormElements = () => {
  const [customchkPrimary, setcustomchkPrimary] = useState(true);
  const [customchkSuccess, setcustomchkSuccess] = useState(true);
  const [customchkInfo, setcustomchkInfo] = useState(true);
  const [customchkWarning, setcustomchkWarning] = useState(true);
  const [customchkDanger, setcustomchkDanger] = useState(true);
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true);
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true);
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true);
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true);
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true);
  const [toggleSwitch, settoggleSwitch] = useState(true);
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Elements | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Elements" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Textual inputs</CardTitle>
                  <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Text
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Artisanal kale"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-search-input"
                      className="col-md-2 col-form-label"
                    >
                      Search
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="search"
                        defaultValue="How do I shoot web"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-email-input"
                      className="col-md-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="bootstrap@example.com"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                      URL
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://getbootstrap.com"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-tel-input"
                      className="col-md-2 col-form-label"
                    >
                      Telephone
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue="1-(555)-555-5555"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-password-input"
                      className="col-md-2 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="password"
                        defaultValue="hunter2"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-number-input"
                      className="col-md-2 col-form-label"
                    >
                      Number
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="42"
                        id="example-number-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-datetime-local-input"
                      className="col-md-2 col-form-label"
                    >
                      Date and time
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="datetime-local"
                        defaultValue="2019-08-19T13:45:00"
                        id="example-datetime-local-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-md-2 col-form-label"
                    >
                      Date
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="date"
                        defaultValue="2019-08-19"
                        id="example-date-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      Month
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="month"
                        defaultValue="2019-08"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-week-input"
                      className="col-md-2 col-form-label"
                    >
                      Week
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="week"
                        defaultValue="2019-W33"
                        id="example-week-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-time-input"
                      className="col-md-2 col-form-label"
                    >
                      Time
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="time"
                        defaultValue="13:45:00"
                        id="example-time-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-color-input"
                      className="col-md-2 col-form-label"
                    >
                      Color
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control form-control-color mw-100"
                        type="color"
                        defaultValue="#556ee6"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Select</label>
                    <div className="col-md-10">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </Row>
                  <Row>
                    <label className="col-md-2 col-form-label">
                      Datalists
                    </label>
                    <div className="col-md-10">
                      <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Sizing</CardTitle>
                  <p className="card-title-desc">
                    Set heights using className like{" "}
                    <code>.form-control-lg</code> and{" "}
                    <code>.form-control-sm</code>.
                  </p>
                  <div>
                    <Row>
                      <Col lg={6}>
                        <div>
                          <label className="form-label">Default input</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Default input"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mt-4">
                          <label className="form-label">Small Input</label>
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder=".form-control-sm"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mt-4">
                          <label className="form-label">Large Input</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder=".form-control-lg"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Range Inputs</CardTitle>
                  <p className="card-title-desc">
                    Create custom <code>&lt;input type=&quot;range&ldquo;&gt;</code>
                    controls with <code>.form-range</code>.
                  </p>

                  <Row>
                    <Col lg={6}>
                      <div>
                        <Label htmlFor="customRange1" className="form-label">Example range</Label>
                        <Input type="range" className="form-range" id="customRange1" />
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">Min and max</h5>
                        <p className="card-title-desc">Range inputs have implicit values for min and
                          max—0 and 100, respectively.</p>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">Steps</h5>
                        <p className="card-title-desc">By default, range inputs “snap” to integer
                          values. To change this, you can specify a <code>step</code> value.</p>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2" />
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
                  <CardTitle>Checkboxes</CardTitle>

                  <Row>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">
                          <i
                            className="mdi mdi-arrow-right text-primary mr-1"></i> Form Checkboxes
                        </h5>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Form Checkbox
                          </label>
                        </div>
                        <div className="form-check form-check-end">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck2"
                          >
                            Form Checkbox checked
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4"><i
                          className="mdi mdi-arrow-right text-primary mr-1"></i> Form Checkboxes Right</h5>
                        <div className="form-check form-check-right mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="CustomCheck1"
                          />
                          <label
                            className="form-check-label"
                          >
                            Form Checkbox Right
                          </label>
                        </div>

                        <div className="form-check form-check-right">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck2"

                          >
                            Form Checkbox Right checked
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary"></i>{" "}
                          Form Checkboxes colors
                        </h5>
                        <p className="sub-header mb-4">
                          Add className <code>.form-check-* </code> for a color
                          Checkboxes
                        </p>

                        <div>
                          <div className="form-check form-check-primary mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor1"
                              checked={customchkPrimary}
                              onChange={() => {
                                setcustomchkPrimary(!customchkPrimary)
                              }}
                            />

                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor1"
                            >
                              Checkbox Primary
                            </label>
                          </div>
                          <div className="form-check form-check-success mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor2"
                              checked={customchkSuccess}
                              onChange={() => {
                                setcustomchkSuccess(!customchkSuccess)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor2"
                            >
                              Checkbox Success
                            </label>
                          </div>
                          <div className="form-check form-check-info mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor3"
                              checked={customchkInfo}
                              onChange={() => {
                                setcustomchkInfo(!customchkInfo)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor3"
                            >
                              Checkbox Info
                            </label>
                          </div>
                          <div className="form-check form-check-warning mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor4"
                              checked={customchkWarning}
                              onChange={() => {
                                setcustomchkWarning(!customchkWarning)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor4"
                            >
                              Checkbox Warning
                            </label>
                          </div>
                          <div className="form-check form-check-danger">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor5"
                              checked={customchkDanger}
                              onChange={() => {
                                setcustomchkDanger(!customchkDanger)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor5"
                            >
                              Checkbox Danger
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary"></i>{" "}
                          Form Checkboxes Outline
                        </h5>
                        <p className="sub-header mb-4">
                          Add className <code>.form-checkbox-outline</code> &
                          <code>.form-check-* </code> for a color Checkboxes
                        </p>

                        <div>
                          <div className="form-check form-checkbox-outline form-check-primary mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor1"
                              checked={customOutlinePrimary}
                              onChange={() => {
                                setcustomOutlinePrimary(!customOutlinePrimary)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor1"
                            >
                              Checkbox Outline Primary
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-success mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor2"
                              checked={customOutlineSuccess}
                              onChange={() => {
                                setcustomOutlineSuccess(!customOutlineSuccess)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor2"
                            >
                              Checkbox Outline Success
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-info mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor3"
                              checked={customOutlineInfo}
                              onChange={() => {
                                setcustomOutlineInfo(!customOutlineInfo)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor3"
                            >
                              Checkbox Outline Info
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-warning mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor4"
                              checked={customOutlineWarning}
                              onChange={() => {
                                setcustomOutlineWarning(!customOutlineWarning)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor4"
                            >
                              Checkbox Outline Warning
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-danger">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor5"
                              checked={customOutlineDanger}
                              onChange={() => {
                                setcustomOutlineDanger(!customOutlineDanger)
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor5"
                            >
                              Checkbox Outline Danger
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Radios</CardTitle>

                  <Row>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">Form Radios</h5>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Form Radio
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios2"
                          >
                            Form Radio checked
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                        <div>
                          <div className="form-check form-check-right mb-3">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio1"
                            >
                              Form Radio Right
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="form-check form-check-right">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio2"
                            >
                              Form Radio Right checked
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary ms-1"></i>
                          Form Radio colors
                        </h5>
                        <p className="sub-header mb-4">
                          Add class <code>.form-radio-* </code> for a color Radios
                        </p>

                        <div>
                          <div className="form-check form-radio-primary mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor1"
                              name="customRadiocolor1"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor1"
                            >
                              Radio Primary
                            </label>
                          </div>
                          <div className="form-check form-radio-success mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor2"
                              name="customRadiocolor2"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor2"
                            >
                              Radio Success
                            </label>
                          </div>
                          <div className="form-check form-radio-info mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor3"
                              name="customRadiocolor3"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor3"
                            >
                              Radio Info
                            </label>
                          </div>
                          <div className="form-check form-radio-warning mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor4"
                              name="customRadiocolor4"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor4"
                            >
                              Radio Warning
                            </label>
                          </div>
                          <div className="form-check form-radio-danger mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor5"
                              name="customRadiocolor5"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor5"
                            >
                              Radio Danger
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary ms-1"></i>{" "}
                          Form Radio Outline
                        </h5>
                        <p className="sub-header mb-4">
                          Add className <code>form-radio-outline</code> & <code>.form-radio-* </code> for a color Checkboxes
                        </p>

                        <div>
                          <div className="form-check form-radio-outline form-radio-primary mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor1"
                              name="customRadiooutlinecolor1"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor1"
                            >
                              Radio Outline Primary
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-success mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor2"
                              name="customRadiooutlinecolor2"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor2"
                            >
                              Radio Outline Success
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-info mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor3"
                              name="customRadiooutlinecolor3"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor3"
                            >
                              Radio Outline Info
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-warning mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor4"
                              name="customRadiooutlinecolor4"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor4"
                            >
                              Radio Outline Warning
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-danger mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor5"
                              name="customRadiooutlinecolor5"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor5"
                            >
                              Radio Outline Danger
                            </label>
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
                  <CardTitle className="h4">Switches</CardTitle>
                  <p className="card-title-desc">
                    A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Switches also support the <code>disabled</code> attribute.
                  </p>
                  <Row>
                    <Col sm={6}>
                      <div>
                        <h5 className="font-size-14 mb-3">Switch examples</h5>
                        <div
                          className="form-check form-switch mb-3"

                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitch1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitch1"

                          >
                            Default switch checkbox input
                          </label>
                        </div>
                        <div className="form-check form-switch mb-3" >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitch2"
                            defaultChecked
                            onClick={e => {
                              settoggleSwitch(!toggleSwitch)
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitch2"
                          >
                            Checked switch checkbox input
                          </label>
                        </div>
                      </div>
                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
                        <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                      </div>
                    </Col>

                    <Col sm={6}>
                      <div className="mt-4 mt-lg-0">
                        <h5 className="font-size-14 mb-3">Switch sizes</h5>

                        <div
                          className="form-check form-switch mb-3"

                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizesm"
                            defaultChecked
                            // onClick={() => {
                            //   this.setState({
                            //     toggleSwitchSize: !this.state
                            //       .toggleSwitchSize,
                            //   })
                            // }}
                            onClick={e => {
                              settoggleSwitchSize(!toggleSwitchSize)
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizesm"
                          >
                            Small Size Switch
                          </label>
                        </div>

                        <div
                          className="form-check form-switch form-switch-md mb-3"

                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizemd"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizemd"
                          >
                            Medium Size Switch
                          </label>
                        </div>

                        <div
                          className="form-check form-switch form-switch-lg mb-3"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizelg"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizelg"
                          >
                            Large Size Switch
                          </label>
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
                  <CardTitle className="h4 mb-4">File browser</CardTitle>
                  <div>
                    <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Default file input</h5>
                    <div className="row">
                      <Col sm={6}>

                        <div className="mt-3">
                          <Label htmlFor="formFile" className="form-label">Default file input example</Label>
                          <Input className="form-control" type="file" id="formFile" />
                        </div>
                      </Col>
                    </div>

                    <div className="row">
                      <Col sm={6}>
                        <div className="mt-4">
                          <div>
                            <Label htmlFor="formFileSm" className="form-label">Small file input example</Label>
                            <Input className="form-control form-control-sm" id="formFileSm" type="file" />
                          </div>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="mt-4">
                          <div>
                            <Label htmlFor="formFileLg" className="form-label">Large file input example</Label>
                            <Input className="form-control form-control-lg" id="formFileLg" type="file" />
                          </div>
                        </div>
                      </Col>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <h5 className="font-size-14 mb-0"><i className="mdi mdi-arrow-right text-primary"></i> Custom file input</h5>
                  </div>

                  <Row>
                    <Col sm={6}>
                      <div className="mt-4">

                        <div>
                          <Label className="form-label">With Label</Label>
                          <div className="input-group mb-3">
                            <Label className="input-group-text" htmlFor="inputGroupFile01">Upload</Label>
                            <Input type="file" className="form-control" id="inputGroupFile01" />
                          </div>
                          <div className="input-group">
                            <Input type="file" className="form-control" id="inputGroupFile02" />
                            <Label className="input-group-text" htmlFor="inputGroupFile02">Upload</Label>
                          </div>
                        </div>

                      </div>
                    </Col>

                    <Col sm={6}>
                      <div className="mt-4">

                        <div>
                          <Label className="form-label">With Button</Label>
                          <div className="input-group mb-3">
                            <button className="btn btn-primary" type="button" id="inputGroupFileAddon03">Button</button>
                            <Input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                          </div>
                          <div className="input-group">
                            <Input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button className="btn btn-primary" type="button" id="inputGroupFileAddon04">Button</button>
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
  )
}

export default FormElements
