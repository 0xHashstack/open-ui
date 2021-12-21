import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Label,
  Input,
  Button
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//common
import TextualInputs from "./TextualInputs"

class FormElements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customchk: true,
      defaultchl: true,
      toggleSwitch: true,
      toggleSwitchSize: true,
      toggleSwitchLarge: true,

      //checkbox categories
      defaultCheckPrimary: true,
      defaultCheckSuccess: true,
      defaultCheckInfo: true,
      defaultCheckWarning: true,
      defaultCheckDanger: true,
      defaultOutlinePrimary: true,
      defaultOutlineInfo: true,
      defaultOutlineWarning: true,
      defaultOutlineDanger: true,
    }
  }

  render() {
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
                <TextualInputs />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Sizing</CardTitle>
                    <p className="card-title-desc">
                      Set heights using classNamees like{" "}
                      <code>.form-control-lg</code> and{" "}
                      <code>.form-control-sm</code>.
                    </p>
                    <div>
                      <div className="mb-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder=".form-control-sm"
                        />
                      </div>
                      <div>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder=".form-control-lg"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Range Inputs</CardTitle>
                    <p className="card-title-desc">Create custom <code>&lt;input type=&quot;range&ldquo;&gt;</code>
                      controls with <code>.form-range</code>.</p>

                    <Row className="mt-2">
                      <Col lg={6}>
                        <div>
                          <label htmlFor="customRange1" className="form-label">Example range</label>
                          <input
                            type="range"
                            className="form-range"
                            id="customRange1"
                          />
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
                    <CardTitle className="mb-4">Checkboxes</CardTitle>

                    <Row>
                      <Col xl={3} sm={6}>
                        <div className="mt-4">
                          <h5 className="font-size-14 mb-4">
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>
                            Form Checkboxes
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
                          <div className="form-check">
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
                          <h5 className="font-size-14 mb-4">
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>Form Checkboxes Right
                          </h5>
                          <div className="form-check form-check-right mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="CustomCheck1"
                              onChange={() => false}
                              checked={this.state.customchk}
                            />
                            <label
                              className="form-check-label"
                              onClick={() => {
                                this.setState({
                                  customchk: !this.state.customchk,
                                })
                              }}
                            >
                              Form Checkbox Right
                            </label>
                          </div>

                          <div className="form-check form-check-right">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
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
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>{" "}
                            Form Checkboxes colors
                          </h5>
                          <p className="sub-header mb-4">
                            Add class <code>.form-check-* </code> for a
                            color Checkboxes
                          </p>

                          <div>
                            <div className="form-check form-check-primary mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckcolor1"
                                checked={this.state.defaultCheckPrimary}
                                onChange={e => {
                                  this.setState({
                                    defaultCheckPrimary: e.target.checked,
                                  })
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheckcolor1"
                              >
                                Checkbox Primary
                              </label>
                            </div>
                            <div className="form-check  form-check-success mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckcolor2"
                                checked={this.state.defaultCheckSuccess}
                                onChange={e => {
                                  this.setState({
                                    defaultCheckSuccess: e.target.checked,
                                  })
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
                                checked={this.state.defaultCheckInfo}
                                onChange={e => {
                                  this.setState({
                                    defaultCheckInfo: e.target.checked,
                                  })
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheckcolor3"
                              >
                                Checkbox Info
                              </label>
                            </div>
                            <div className="form-check  form-check-warning mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckcolor4"
                                checked={this.state.defaultCheckWarning}
                                onChange={e => {
                                  this.setState({
                                    defaultCheckWarning: e.target.checked,
                                  })
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
                                checked={this.state.defaultCheckDanger}
                                onChange={e => {
                                  this.setState({
                                    defaultCheckDanger: e.target.checked,
                                  })
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
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>{" "}
                            Custom Checkboxes Outline
                          </h5>
                          <p className="sub-header mb-4">
                            Add class <code>form-check-outline</code> &{" "}
                            <code>.form-check-* </code> for a color
                            Checkboxes
                          </p>

                          <div>
                            <div className="form-check form-check-outline form-check-primary mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck-outlinecolor1"
                                checked={this.state.defaultOutlinePrimary}
                                onChange={e => {
                                  this.setState({
                                    defaultOutlinePrimary: e.target.checked,
                                  })
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck-outlinecolor1"
                              >
                                Checkbox Outline Primary
                              </label>
                            </div>
                            <div className="form-check form-check-outline form-check-success mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck-outlinecolor2"
                              // checked={this.state.defaultOutlineInfo}
                              // onChange={e => {
                              //   this.setState({
                              //     defaultOutlineInfo: e.target.checked,
                              //   })
                              // }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck-outlinecolor2"
                              >
                                Checkbox Outline Success
                              </label>
                            </div>
                            <div className="form-check form-check-outline form-check-info mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck-outlinecolor3"
                                checked={this.state.defaultOutlineInfo}
                                onChange={e => {
                                  this.setState({
                                    defaultOutlineInfo: e.target.checked,
                                  })
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck-outlinecolor3"
                              >
                                Checkbox Outline Info
                              </label>
                            </div>
                            <div className="form-check form-check-outline  form-check-warning mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck-outlinecolor4"
                                checked={this.state.defaultOutlineWarning}
                                onChange={e => {
                                  this.setState({
                                    defaultOutlineWarning: e.target.checked,
                                  })
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck-outlinecolor4"
                              >
                                Checkbox Outline Warning
                              </label>
                            </div>
                            <div className="form-check form-check-outline form-check-danger">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck-outlinecolor5"
                                checked={this.state.defaultOutlineDanger}
                                onChange={e => {
                                  this.setState({
                                    defaultOutlineDanger: e.target.checked,
                                  })
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
                              Default radio
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
                      <div className="col-xl-3 col-sm-6">
                        <div className="mt-4">
                          <h5 className="font-size-14">
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>{" "}
                            Form Radio colors
                          </h5>
                          <p className="sub-header mb-4">
                            Add class <code>.form-radio-* </code> for a color
                            Radios
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
                            <div className="form-check form-radio-danger">
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
                      </div>
                      <Col xl={3} sm={6}>
                        <div className="mt-4">
                          <h5 className="font-size-14">
                            <i className="mdi mdi-arrow-right text-primary me-1"></i>{" "}
                            Custom Radio Outline
                          </h5>
                          <p className="sub-header mb-4">
                            Add class <code>form-radio-outline</code> &{" "}
                            <code>.form-radio-* </code> for a color Checkboxes
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
                            <div className="form-check form-radio-outline form-radio-danger">
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
                      A switch has the markup of a custom checkbox but uses the{" "}
                      <code>.custom-switch</code> className to render a toggle
                      switch. Switches also support the <code>disabled</code>{" "}
                      attribute.
                    </p>
                    <Row>
                      <Col lg={6}>
                        <div>
                          <h5 className="font-size-14 mb-3">Switch examples</h5>
                          <div
                            className="form-check form-switch mb-3"
                            dir="ltr"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customSwitch1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customSwitch1"
                              onClick={() => {
                                this.setState({
                                  toggleSwitch: !this.state.toggleSwitch,
                                })
                              }}
                            >
                              Default switch checkbox input
                            </label>
                          </div>
                          <div
                            className="form-check form-switch mb-3"
                            dir="ltr"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customSwitch1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customSwitch1"
                              onClick={() => {
                                this.setState({
                                  toggleSwitch: !this.state.toggleSwitch,
                                })
                              }}
                            >
                              Checked switch checkbox input
                            </label>
                          </div>
                          <div
                            className="form-check form-switch"
                            dir="ltr"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              disabled
                              id="customSwitch2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customSwitch2"
                            >
                              Disabled switch element
                            </label>
                          </div>
                          <div
                            className="form-check form-switch"
                            dir="ltr"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              disabled
                              id="customSwitch2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customSwitch2"
                            >
                              Disabled checked switch element
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mt-4 mt-lg-0">
                          <h5 className="font-size-14 mb-3">Switch sizes</h5>

                          <div
                            className="form-check form-switch mb-3"
                            dir="ltr"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customSwitchsizesm"
                              defaultChecked
                              onClick={() => {
                                this.setState({
                                  toggleSwitchSize: !this.state
                                    .toggleSwitchSize,
                                })
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
                              onClick={() => {
                                this.setState({
                                  toggleSwitchLarge: !this.state
                                    .toggleSwitchLarge,
                                })
                              }}
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

              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">File browser</CardTitle>
                    <div>
                      <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Default file input</h5>
                      <div className="row">
                        <div className="col-sm-6">

                          <div className="mt-3">
                            <Label htmlFor="formFile" className="form-label">Default file input example</Label>
                            <Input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mt-4">
                            <div>
                              <Label htmlFor="formFileSm" className="form-label">Small file input example</Label>
                              <Input className="form-control form-control-sm" id="formFileSm" type="file" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mt-4">
                            <div>
                              <Label htmlFor="formFileLg" className="form-label">Large file input example</Label>
                              <Input className="form-control form-control-lg" id="formFileLg" type="file" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <h5 className="font-size-14 mb-0"><i className="mdi mdi-arrow-right text-primary"></i> Custom file input</h5>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
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
                      </div>

                      <div className="col-sm-6">
                        <div className="mt-4">

                          <div>
                            <Label className="form-label">With Button</Label>
                            <div className="input-group mb-3">
                              <Button color="primary" type="button" id="inputGroupFileAddon03">Button</Button>
                              <Input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                            </div>

                            <div className="input-group">
                              <Input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                              <Button color="primary" type="button" id="inputGroupFileAddon04">Button</Button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default FormElements
