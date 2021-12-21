import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  CardTitle,
  Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormRepeater = () => {
  const [rows1, setrows1] = useState([{ id: 1 }]);

  function handleAddRowNested() {
    const modifiedRows = [...rows1];
    modifiedRows.push({ id: modifiedRows.length + 1 });
    setrows1(modifiedRows);
  }

  function handleRemoveRow(id) {
    if (id !== 1) {
      var modifiedRows = [...rows1];
      modifiedRows = modifiedRows.filter(x => x["id"] !== id);
      setrows1(modifiedRows);
    }
  }

  const [formRows, setFormRows] = useState([{ id: 1 }]);

  const onAddFormRow = () => {
    const modifiedRows = [...formRows];
    modifiedRows.push({ id: modifiedRows.length + 1 });
    setFormRows(modifiedRows);
  };

  const onDeleteFormRow = id => {
    if (id !== 1) {
      var modifiedRows = [...formRows];
      modifiedRows = modifiedRows.filter(x => x["id"] !== id);
      setFormRows(modifiedRows);
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Repeater | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Repeater" />

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Example</CardTitle>
                  <Form className="repeater" encType="multipart/form-data">
                    <div>
                      {(formRows || []).map((formRow, key) => (
                        <Row key={key}>
                          <Col lg={2} className="mb-3">
                            <label htmlFor="name">Name {formRow.id}</label>
                            <input
                              type="text"
                              id="name"
                              name="untyped-input"
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter Your Email ID"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="subject">Subject</label>
                            <input
                              type="text"
                              id="subject"
                              className="form-control"
                              placeholder="Enter Your Subject"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="resume">Resume</label>
                            <input
                              type="file"
                              className="form-control"
                              id="resume"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                              id="message"
                              className="form-control"
                              placeholder="Enter Your Message"
                            ></textarea>
                          </Col>

                          <Col lg={2} className="align-self-center">
                            <div className="d-grid">
                              <input
                                type="button"
                                className="btn btn-primary"
                                value="Delete"
                                onClick={() => onDeleteFormRow(formRow.id)}
                              />
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <input
                      type="button"
                      className="btn btn-success mt-3 mt-lg-0"
                      value="Add"
                      onClick={() => onAddFormRow()}
                    />
                  </Form>
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
                              {(rows1 || []).map((formRow, key) => (
                                <tr key={key}>
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="10">
                                        <Input
                                          type="text"
                                          className="inner form-control"
                                          placeholder="Enter your phone no..."
                                        />
                                      </Col>
                                      <Col md="2">
                                        <Button
                                          color="primary"
                                          className="btn-block inner"
                                          id="unknown-btn"
                                          style={{ width: "100%" }}
                                          onClick={e => {
                                            handleRemoveRow(formRow.id);
                                          }}
                                        >
                                          {" "}
                                          Delete{" "}
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Button
                            onClick={() => {
                              handleAddRowNested();
                            }}
                            color="success"
                            className="mt-1"
                          >
                            Add Number
                          </Button>
                        </div>

                        <div className="mb-3">
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
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="formmessage">Message :</Label>
                          <Input
                            type="textarea"
                            id="formmessage"
                            className="form-control"
                            rows="3"
                            placeholder="Enter your Message"
                          />
                        </div>
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
};

export default FormRepeater;
