import React, { useState } from "react";

import { Button, Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiNotifications = () => {
  const [showEasing, setshowEasing] = useState("swing");
  const [hideEasing, sethideEasing] = useState("linear");
  const [showMethod, setshowMethod] = useState("fadeIn");
  const [hideMethod, sethideMethod] = useState("fadeOut");
  const [showDuration, setshowDuration] = useState(300);
  const [hideDuration, sethideDuration] = useState(1000);
  const [timeOut, settimeOut] = useState(5000);
  const [extendedTimeOut, setextendedTimeOut] = useState(1000);

  function showToast() {
    const ele = document.getElementsByName("toastType");
    const position = document.getElementsByName("positions");
    let toastType;
    const title = document.getElementById("title").value;
    let message = "Have fun storming the castle!";

    if (document.getElementById("message").value !== "")
      message = document.getElementById("message").value;

    //Close Button
    const closeButton = document.getElementById("closeButton").checked;

    //Debug
    const debug = document.getElementById("debugInfo").checked;

    //Progressbar
    const progressBar = document.getElementById("progressBar").checked;

    //Duplicates
    const preventDuplicates = document.getElementById("preventDuplicates").checked;

    //Newest on Top
    const newestOnTop = document.getElementById("newestOnTop").checked;

    //position class
    let positionClass = "toast-top-right";

    //Fetch position
    for (let p = 0; p < position.length; p++) {
      if (position[p].checked) positionClass = position[p].value;
    }

    //Show Easing
    const showEasing = document.getElementById("showEasing").value;

    //Hide Easing
    const hideEasing = document.getElementById("hideEasing").value;

    //show method
    const showMethod = document.getElementById("showMethod").value;

    //Hide method
    const hideMethod = document.getElementById("hideMethod").value;

    //show duration
    const showDuration = document.getElementById("showDuration").value;

    //Hide duration
    const hideDuration = document.getElementById("hideDuration").value;

    //timeout
    const timeOut = document.getElementById("timeOut").value;

    //extended timeout
    const extendedTimeOut = document.getElementById("extendedTimeOut").value;

    //Fetch checked Type
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) toastType = ele[i].value;
    }

    toastr.options = {
      positionClass: positionClass,
      timeOut: timeOut,
      extendedTimeOut: extendedTimeOut,
      closeButton: closeButton,
      debug: debug,
      progressBar: progressBar,
      preventDuplicates: preventDuplicates,
      newestOnTop: newestOnTop,
      showEasing: showEasing,
      hideEasing: hideEasing,
      showMethod: showMethod,
      hideMethod: hideMethod,
      showDuration: showDuration,
      hideDuration: hideDuration
    };

    // setTimeout(() => toastr.success(`Settings updated `), 300)
    //Toaster Types
    if (toastType === "info") toastr.info(message, title);
    else if (toastType === "warning") toastr.warning(message, title);
    else if (toastType === "error") toastr.error(message, title);
    else toastr.success(message, title);
  }

  function clearToast() {
    toastr.clear();
  }

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Notifications" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col xl="4">
                      <div className="control-group">
                        <div className="controls">
                          <div className="mb-3">
                            <Label className="form-label">Title</Label>
                            <input
                              id="title"
                              type="text"
                              className="input-large form-control"
                              placeholder="Enter a title ..."
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Message</Label>
                            <textarea
                              className="input-large form-control"
                              id="message"
                              rows="3"
                              placeholder="Enter a message ..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="control-group my-4">
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="closeButton"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="closeButton"
                          >
                            Close Button
                          </Label>
                        </div>

                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input input-mini" id="addBehaviorOnToastClick" value="checked" />
                          <Label className="form-check-label" htmlFor="addBehaviorOnToastClick">Add behavior on toast click</Label>
                        </div>

                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="debugInfo"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="debugInfo"
                          >
                            Debug
                          </Label>
                        </div>

                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="progressBar"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="progressBar"
                          >
                            Progress Bar
                          </Label>
                        </div>

                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="preventDuplicates"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="preventDuplicates"
                          >
                            Prevent Duplicates
                          </Label>
                        </div>

                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="addClear"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="addClear"
                          >
                            Add button to force clearing a toast, ignoring focus
                          </Label>
                        </div>

                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="newestOnTop"
                            value="checked"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="newestOnTop"
                          >
                            Newest on top
                          </Label>
                        </div>
                      </div>
                    </Col>

                    <Col xl="2">
                      <div className="control-group" id="toastTypeGroup">
                        <div className="controls mb-4">
                          <Label>Toast Type</Label>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio1"
                              name="toastType"
                              className="form-check-input"
                              value="success"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio1"
                            >
                              Success
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio2"
                              name="toastType"
                              className="form-check-input"
                              value="info"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio2"
                            >
                              Info
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio3"
                              name="toastType"
                              className="form-check-input"
                              value="warning"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio3"
                            >
                              Warning
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio4"
                              name="toastType"
                              className="form-check-input"
                              value="error"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio4"
                            >
                              Error
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div className="control-group" id="positionGroup">
                        <div className="controls mb-4">
                          <Label>Position</Label>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio5"
                              name="positions"
                              className="form-check-input"
                              value="toast-top-right"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio5"
                            >
                              Top Right
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio6"
                              name="positions"
                              className="form-check-input"
                              value="toast-bottom-right"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio6"
                            >
                              Bottom Right
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio7"
                              name="positions"
                              className="form-check-input"
                              value="toast-bottom-left"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio7"
                            >
                              Bottom Left
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio8"
                              name="positions"
                              className="form-check-input"
                              value="toast-top-left"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio8"
                            >
                              Top Left
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio9"
                              name="positions"
                              className="form-check-input"
                              value="toast-top-full-width"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio9"
                            >
                              Top Full Width
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio10"
                              name="positions"
                              className="form-check-input"
                              value="toast-bottom-full-width"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio10"
                            >
                              Bottom Full Width
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio11"
                              name="positions"
                              className="form-check-input"
                              value="toast-top-center"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio11"
                            >
                              Top Center
                            </Label>
                          </div>

                          <div className="form-check mb-2">
                            <input
                              type="radio"
                              id="radio12"
                              name="positions"
                              className="form-check-input"
                              value="toast-bottom-center"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="radio12"
                            >
                              Bottom Center
                            </Label>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3">
                      <div className="control-group">
                        <div className="controls">
                          <div className="mb-3">
                            <Label htmlFor="showEasing">Show Easing</Label>
                            <input
                              id="showEasing"
                              type="text"
                              placeholder="swing, linear"
                              className="input-mini form-control"
                              value={showEasing}
                              onChange={e => {
                                setshowEasing(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="hideEasing">Hide Easing</Label>
                            <input
                              id="hideEasing"
                              type="text"
                              placeholder="swing, linear"
                              className="input-mini form-control"
                              value={hideEasing}
                              onChange={e => {
                                sethideEasing(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="showMethod">Show Method</Label>
                            <input
                              id="showMethod"
                              type="text"
                              placeholder="show, fadeIn, slideDown"
                              className="input-mini form-control"
                              value={showMethod}
                              onChange={e => {
                                setshowMethod(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="hideMethod">Hide Method</Label>
                            <input
                              id="hideMethod"
                              type="text"
                              placeholder="hide, fadeOut, slideUp"
                              className="input-mini form-control"
                              value={hideMethod}
                              onChange={e => {
                                sethideMethod(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3">
                      <div className="control-group">
                        <div className="controls">
                          <div className="mb-3">
                            <Label htmlFor="showDuration">Show Duration</Label>
                            <input
                              id="showDuration"
                              type="text"
                              placeholder="ms"
                              className="input-mini form-control"
                              value={showDuration}
                              onChange={e => {
                                setshowDuration(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="hideDuration">Hide Duration</Label>
                            <input
                              id="hideDuration"
                              type="text"
                              placeholder="ms"
                              className="input-mini form-control"
                              value={hideDuration}
                              onChange={e => {
                                sethideDuration(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="timeOut">Time out</Label>
                            <input
                              id="timeOut"
                              type="text"
                              placeholder="ms"
                              className="input-mini form-control"
                              value={timeOut}
                              onChange={e => {
                                settimeOut(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="extendedTimeOut">
                              Extended time out
                            </Label>
                            <input
                              id="extendedTimeOut"
                              type="text"
                              placeholder="ms"
                              className="input-mini form-control"
                              value={extendedTimeOut}
                              onChange={e => {
                                setextendedTimeOut(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md="12">
                      <div className="d-flex flex-wrap gap-2">
                        <Button
                          type="button"
                          color="primary"
                          id="showtoast"
                          onClick={() => {
                            showToast();
                          }}
                        >
                          Show Toast
                        </Button>{" "}
                        <Button
                          type="button"
                          color="danger"
                          id="cleartoasts"
                          onClick={() => {
                            clearToast();
                          }}
                        >
                          Clear Toasts
                        </Button>{" "}
                        <Button
                          type="button"
                          color="danger"
                          id="clearlasttoast"
                        >
                          Clear Last Toast
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <Col md="12">
                      <pre id="toastrOptions" className="toastr-options" />
                    </Col>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiNotifications;
