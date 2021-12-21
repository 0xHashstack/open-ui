import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

class FormRepeater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      rows1: [],
    };
  }

  handleAddRow = () => {
    const item = {
      name: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  handleAddRowNested = () => {
    const item1 = {
      name1: "",
    };
    this.setState({
      rows1: [...this.state.rows1, item1],
    });
  };
  handleRemoveRow = (e, idx) => {
    if (idx === "01") {
      document.getElementById("addr" + idx).style.display = "block";
    } else if (typeof idx != "undefined") {
      document.getElementById("addr" + idx).style.display = "none";
    }

  };
  handleRemoveRowNested = (e, idx) => {
    document.getElementById("nested" + idx).style.display = "none";
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Form Repeater | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Repeater" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Example</CardTitle>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr id="addr01" key="">
                          <td>
                            <Form
                              className="repeater"
                              encType="multipart/form-data"
                            >
                              <div data-repeater-list="group-a">
                                <Row data-repeater-item>
                                  <Col lg="2" className="mb-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                      type="text"
                                      id="name"
                                      name="untyped-input"
                                      className="form-control"
                                      placeholder="Enter Your Name"
                                    />
                                  </Col>

                                  <Col lg="2" className="mb-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                      type="email"
                                      id="email"
                                      className="form-control"
                                      placeholder="Enter Your Email ID"
                                    />
                                  </Col>

                                  <Col lg="2" className="mb-3">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                      type="text"
                                      id="subject"
                                      className="form-control"
                                      placeholder="Enter Your Subject"
                                    />
                                  </Col>

                                  <Col lg="2" className="mb-3">
                                    <Label htmlFor="resume">Resume</Label>
                                    <Input
                                      type="file"
                                      id="resume"
                                      className="form-control"
                                    />
                                  </Col>

                                  <Col lg="2" className="mb-3">
                                    <Label htmlFor="message">Message</Label>
                                    <Input type="textarea" id="message" placeholder="Enter Your Message" />
                                  </Col>
                                  <Col
                                    lg="2"
                                    className="align-self-center"
                                  >
                                    <div className="d-grid">
                                      <Button
                                        onClick={e =>
                                          this.handleRemoveRow(e, "01")
                                        }
                                        color="primary"
                                        style={{ width: "100%" }}
                                        block
                                      >
                                        {" "}
                                        Delete
                                      </Button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </td>
                        </tr>

                        {this.state.rows.map((item, idx) => (
                          <tr id={"addr" + idx} key={idx}>
                            <td>
                              <Form
                                className="repeater mt-3"
                                encType="multipart/form-data"
                              >
                                <div data-repeater-list="group-a">
                                  <Row data-repeater-item>
                                    <Col lg="2" className="mb-3">
                                      <Label htmlFor="name">
                                        Name {idx + 1}
                                      </Label>
                                      <Input
                                        type="text"
                                        id="name"
                                        name="untyped-input"
                                        placeholder="Enter Your Name"
                                      />
                                    </Col>

                                    <Col lg="2" className="mb-3">
                                      <Label htmlFor="email">Email</Label>
                                      <Input type="email" id="email" placeholder="Enter Your Email ID" />
                                    </Col>

                                    <Col lg="2" className="mb-3">
                                      <Label htmlFor="subject">Subject</Label>
                                      <Input type="text" id="subject" placeholder="Enter Your Subject" />
                                    </Col>

                                    <Col lg="2" className="mb-3">
                                      <Label htmlFor="resume">Resume</Label>
                                      <Input type="file" className="form-control" id="resume" />
                                    </Col>

                                    <Col lg="2" className="mb-3">
                                      <Label htmlFor="message">Message</Label>
                                      <Input type="textarea" id="message" placeholder="Enter Your Message" />
                                    </Col>
                                    <Col
                                      lg="2"
                                      className="form-group align-self-center"
                                    >
                                      <Button
                                        onClick={e =>
                                          this.handleRemoveRow(e, idx)
                                        }
                                        color="primary"
                                        className="mt-3"
                                        style={{ width: "100%" }}
                                      >
                                        Delete
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Form>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Button onClick={this.handleAddRow} color="success" className="mt-3 mt-lg-0">
                      Add{" "}
                    </Button>{" "}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Nested</CardTitle>
                    <Form className="outer-repeater">
                      <div data-repeater-list="outer-group" className="outer">
                        <div data-repeater-item className="outer">
                          <div className="mb-3">
                            <Label htmlFor="formname">Name : </Label>
                            <Input
                              type="text"
                              id="formname"
                              placeholder="Enter your Name..."
                              className="form-control"
                            />
                          </div>

                          <div className="mb-3">
                            <Label htmlFor="formemail">Email :</Label>
                            <Input
                              type="email"
                              id="formemail"
                              placeholder="Enter your Email..."
                              className="form-control"
                            />
                          </div>

                          <div className="inner-repeater mb-4">
                            <Label>Phone no :</Label>
                            <table style={{ width: "100%" }}>
                              <tbody>
                                <tr id="addrMain" key="">
                                  <td>
                                    <Row className="inner mb-3 ">
                                      <Col md="10" className="col-8">
                                        <Input
                                          type="text"
                                          className="inner form-control"
                                          placeholder="Enter your phone no... 1"
                                        />
                                      </Col>
                                      <Col md="2" className="col-4">
                                        <Button
                                          disabled
                                          color="primary"
                                          className="btn-block inner"
                                          style={{ width: "100%" }}
                                        >
                                          {" "}
                                          Delete
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>

                                {this.state.rows1.map((item1, idx) => (
                                  <tr id={"nested" + idx} key={idx}>
                                    <td>
                                      <Row className="inner mb-3">
                                        <Col md="10" className="col-8">
                                          <Input
                                            type="text"
                                            className="inner form-control"
                                            placeholder={
                                              "Enter your phone no... " +
                                              (idx + 2)
                                            }
                                          />
                                        </Col>
                                        <Col md="2" className="col-4">
                                          <Button
                                            onClick={e =>
                                              this.handleRemoveRowNested(e, idx)
                                            }
                                            color="primary"
                                            className="btn-block inner"
                                            style={{ width: "100%" }}
                                          >
                                            {" "}
                                            Delete
                                          </Button>
                                        </Col>
                                      </Row>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <Button
                              onClick={this.handleAddRowNested}
                              color="success"
                            >
                              Add Number
                            </Button>
                          </div>

                          <FormGroup className="mb-3">
                            <Label className="d-block mb-3">Gender :</Label>
                            <div className="form-check form-check-inline">
                              <Input
                                type="radio"
                                id="customRadioInline1"
                                name="customRadioInline1"
                                className="form-check-input"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="customRadioInline1"
                              >
                                Male
                              </Label>
                            </div>
                            &nbsp;
                            <div className="form-check form-check-inline">
                              <Input
                                type="radio"
                                id="customRadioInline2"
                                name="customRadioInline1"
                                className="form-check-input"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="customRadioInline2"
                              >
                                Female
                              </Label>
                            </div>
                          </FormGroup>

                          <FormGroup className="mb-3">
                            <Label htmlFor="formmessage">Message :</Label>
                            <Input
                              type="textarea"
                              id="formmessage"
                              className="form-control"
                              rows="3"
                              placeholder="Enter your Message"
                            />
                          </FormGroup>
                          <Button type="submit" color="primary">
                            Submit
                          </Button>
                        </div>
                      </div>
                    </Form>
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

export default FormRepeater;
