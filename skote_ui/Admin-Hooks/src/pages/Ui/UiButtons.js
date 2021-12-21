import React, { useState } from "react";
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom";

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiButtons = () => {
  const [drp_link, setdrp_link] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Buttons | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Buttons" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Default buttons</CardTitle>
                  <p className="card-title-desc">
                    Bootstrap includes six predefined button styles, each
                    serving its own semantic purpose.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn btn-primary "
                    >
                      Primary
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-secondary "
                    >
                      Secondary
                    </Button>
                    <Button
                      color="success"
                      className="btn btn-success "
                    >
                      Success
                    </Button>
                    <Button
                      color="info"
                      className="btn btn-info "
                    >
                      Info
                    </Button>
                    <Button
                      color="warning"
                      className="btn btn-warning "
                    >
                      Warning
                    </Button>
                    <Button
                      color="danger"
                      className="btn btn-danger "
                    >
                      Danger
                    </Button>
                    <Button
                      color="dark"
                      className="btn btn-dark "
                    >
                      Dark
                    </Button>
                    <Button color="link" className="btn btn-link ">
                      Link
                    </Button>
                    <Button
                      color="light"
                      className="btn btn-light "
                    >
                      Light
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Outline buttons</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Replace the default modifier classes with the{" "}
                    <code className="highlighter-rouge">.btn-outline-*</code>{" "}
                    ones to remove all background images and colors on any
                    button.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      outline

                    >
                      Primary
                    </Button>
                    <Button color="secondary" outline>
                      Secondary
                    </Button>
                    <Button
                      color="success"
                      outline

                    >
                      Success
                    </Button>
                    <Button
                      color="info"
                      outline

                    >
                      Info
                    </Button>
                    <Button
                      color="warning"
                      outline

                    >
                      Warning
                    </Button>
                    <Button
                      color="danger"
                      outline

                    >
                      Danger
                    </Button>
                    <Button
                      color="dark"
                      outline

                    >
                      Dark
                    </Button>
                    <Button color="light" outline >
                      Light
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Rounded buttons</CardTitle>
                  <p className="card-title-desc">
                    Use class <code>.btn-rounded</code> for button round border.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn-rounded "
                    >
                      Primary
                    </Button>
                    <Button
                      color="secondary"
                      className="btn-rounded "
                    >
                      Secondary
                    </Button>
                    <Button
                      color="success"
                      className="btn-rounded "
                    >
                      Success
                    </Button>
                    <Button
                      color="info"
                      className="btn-rounded "
                    >
                      Info
                    </Button>
                    <Button
                      color="warning"
                      className="btn-rounded "
                    >
                      Warning
                    </Button>
                    <Button
                      color="danger"
                      className="btn-rounded "
                    >
                      Danger
                    </Button>
                    <Button
                      color="dark"
                      className="btn-rounded "
                    >
                      Dark
                    </Button>
                    <Button color="link" className="btn-rounded ">
                      Link
                    </Button>
                    <Button color="light" className="btn-rounded ">
                      Light
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Buttons with icon</CardTitle>
                  <p className="card-title-desc">Add icon in button.</p>

                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary "
                    >
                      <i className="bx bx-smile font-size-16 align-middle me-2"></i>{" "}
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success "
                    >
                      <i className="bx bx-check-double font-size-16 align-middle me-2"></i>{" "}
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning "
                    >
                      <i className="bx bx-error font-size-16 align-middle me-2"></i>{" "}
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger "
                    >
                      <i className="bx bx-block font-size-16 align-middle me-2"></i>{" "}
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark "
                    >
                      <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>{" "}
                      Loading
                    </button>
                    <button
                      type="button"
                      className="btn btn-light "
                    >
                      <i className="bx bx-hourglass bx-spin font-size-16 align-middle me-2"></i>{" "}
                      Loading
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle>Snip Buttons</CardTitle>

                  <Row>
                    <Col lg={4}>
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-3">Example 1</h5>

                        <div>
                          <div
                            className="btn-group btn-group-example mb-3"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-primary w-sm"
                            >
                              Left
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary w-sm"
                            >
                              Middle
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary w-sm"
                            >
                              Right
                            </button>
                          </div>

                          <div>
                            <div
                              className="btn-group btn-group-example mb-3"
                              role="group"
                            >
                              <button
                                type="button"
                                className="btn btn-primary w-xs"
                              >
                                <i className="mdi mdi-thumb-up"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger w-xs"
                              >
                                <i className="mdi mdi-thumb-down"></i>
                              </button>
                            </div>
                          </div>

                          <div>
                            <div
                              className="btn-group btn-group-example"
                              role="group"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary w-xs"
                              >
                                <i className="bx bx-menu-alt-right"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary w-xs"
                              >
                                <i className="bx bx-menu"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary w-xs"
                              >
                                <i className="bx bx-menu-alt-left"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <div className="col-lg-4">
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-3">Example 2</h5>

                        <div className="d-flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="btn btn-primary  btn-label"
                          >
                            <i className="bx bx-smile label-icon"></i> Primary
                          </button>
                          <button
                            type="button"
                            className="btn btn-success  btn-label"
                          >
                            <i className="bx bx-check-double label-icon"></i>{" "}
                            Success
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning  btn-label"
                          >
                            <i className="bx bx-error label-icon "></i> Warning
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger  btn-label"
                          >
                            <i className="bx bx-block label-icon "></i> Danger
                          </button>
                          <button
                            type="button"
                            className="btn btn-dark  btn-label"
                          >
                            <i className="bx bx-loader label-icon "></i> Dark
                          </button>
                          <button
                            type="button"
                            className="btn btn-light  btn-label"
                          >
                            <i className="bx bx-hourglass label-icon "></i>{" "}
                            Light
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-3">Example 3</h5>

                        <div className="d-flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="btn btn-primary  w-sm"
                          >
                            <i className="mdi mdi-download d-block font-size-16"></i>{" "}
                            Download
                          </button>
                          <button
                            type="button"
                            className="btn btn-light  w-sm"
                          >
                            <i className="mdi mdi-upload d-block font-size-16"></i>{" "}
                            Upload
                          </button>
                          <button
                            type="button"
                            className="btn btn-success  w-sm"
                          >
                            <i className="mdi mdi-pencil d-block font-size-16"></i>{" "}
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger  w-sm"
                          >
                            <i className="mdi mdi-trash-can d-block font-size-16"></i>{" "}
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Buttons Sizes</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Add <code>.btn-lg</code> or <code>.btn-sm</code> for
                    additional sizes.
                  </p>

                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <Button
                      color="primary"
                      className="btn btn-lg "
                    >
                      Large button
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-lg "
                    >
                      Large button
                    </Button>
                    <Button
                      color="primary"
                      className="btn-sm"
                    >
                      Small button
                    </Button>
                    <Button
                      color="secondary"
                      className=" btn-sm "
                    >
                      Small button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Buttons width</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Add <code>.w-xs</code>, <code>.w-sm</code>,{" "}
                    <code>.w-md</code> and <code> .w-lg</code> className for
                    additional buttons width.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary w-xs "
                    >
                      Xs
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger w-sm "
                    >
                      Small
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning w-md "
                    >
                      Medium
                    </button>
                    <button
                      type="button"
                      className="btn btn-success w-lg "
                    >
                      Large
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Button tags</CardTitle>
                  <p className="mb-3 card-title-desc">
                    The <code className="highlighter-rouge">.btn</code>
                    classes are designed to be used with the{" "}
                    <code className="highlighter-rouge">
                      &lt;button&gt;
                    </code>{" "}
                    element. However, you can also use these classes on{" "}
                    <code className="highlighter-rouge">&lt;Link&gt;</code> or{" "}
                    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                    elements (though some browsers may apply a slightly
                    different rendering).
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <Link
                      className="btn btn-primary "
                      to="#"
                      role="button"
                    >
                      Link
                    </Link>
                    <Button
                      color="success"
                      className="btn btn-success "
                      type="submit"
                    >
                      Button
                    </Button>
                    <input
                      className="btn btn-info"
                      type="button"
                      value="Input"
                    />
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="Submit"
                    />
                    <input
                      className="btn btn-warning"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Toggle states</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle=&quot;button&ldquo;
                    </code>
                    to toggle a button’s{" "}
                    <code className="highlighter-rouge">active</code>
                    state. If you’re pre-toggling a button, you must manually
                    add the <code className="highlighter-rouge">
                      .active
                    </code>{" "}
                    class
                    <strong>and</strong>{" "}
                    <code className="highlighter-rouge">
                      aria-pressed=&quot;true&ldquo;
                    </code>{" "}
                    to the
                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn btn-primary "
                      data-toggle="button"
                      aria-pressed="false"
                    >
                      Single toggle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Block Buttons</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Create block level buttons—those that span the full width of
                    a parent—by adding{" "}
                    <code className="highlighter-rouge">.btn-block</code>.
                  </p>

                  <div className="d-grid gap-2">
                    <Button color="primary" type="button" className="btn-lg">Block level button</Button>
                    <Button color="secondary" type="button" className="btn-sm">Block level button</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Checkbox & Radio Buttons</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle=&quot;buttons&ldquo;
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <div>
                      <div className="d-flex flex-wrap gap-3">
                        <div className="btn-group" role="group">
                          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
                          <label className="btn btn-primary" htmlFor="btncheck1">Checkbox 1</label>

                          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                          <label className="btn btn-primary" htmlFor="btncheck2">Checkbox 2</label>

                          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                          <label className="btn btn-primary" htmlFor="btncheck3">Checkbox 3</label>
                        </div>

                        <div className="btn-group" role="group">
                          <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" defaultChecked />
                          <label className="btn btn-outline-primary" htmlFor="btncheck4">Checkbox 4</label>

                          <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
                          <label className="btn btn-outline-primary" htmlFor="btncheck5">Checkbox 5</label>

                          <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off" />
                          <label className="btn btn-outline-primary" htmlFor="btncheck6">Checkbox 6</label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex flex-wrap gap-3">
                        <div className="btn-group" role="group">
                          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                          <label className="btn btn-secondary" htmlFor="btnradio1">Radio 1</label>

                          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                          <label className="btn btn-secondary" htmlFor="btnradio2">Radio 2</label>

                          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                          <label className="btn btn-secondary" htmlFor="btnradio3">Radio 3</label>
                        </div>

                        <div className="btn-group" role="group">
                          <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" defaultChecked />
                          <label className="btn btn-outline-secondary" htmlFor="btnradio4">Radio 4</label>

                          <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                          <label className="btn btn-outline-secondary" htmlFor="btnradio5">Radio 5</label>

                          <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off" />
                          <label className="btn btn-outline-secondary" htmlFor="btnradio6">Radio 6</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Button group</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Wrap a series of buttons with{" "}
                    <code className="highlighter-rouge">.btn</code> in{" "}
                    <code className="highlighter-rouge">.btn-group</code>.
                  </p>

                  <Row>
                    <Col md={6}>
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Button color="primary">Left</Button>
                          <Button color="primary">Middle</Button>
                          <Button color="primary">Right</Button>
                        </div>

                        <div className="btn-group">
                          <Link to="#" className="btn btn-outline-primary active">Left</Link>
                          <Link to="#" className="btn btn-outline-primary">Middle</Link>
                          <Link to="#" className="btn btn-outline-primary">Right</Link>
                        </div>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="d-flex flex-wrap gap-3 mt-4 mt-md-0">
                        <div className="btn-group">
                          <Button color="secondary" type="button"><i className="bx bx-menu-alt-right"></i></Button>
                          <Button color="secondary" type="button"><i className="bx bx-menu"></i></Button>
                          <Button color="secondary" type="button"><i className="bx bx-menu-alt-left"></i></Button>
                        </div>

                        <div className="btn-group">
                          <button type="button" className="btn btn-outline-secondary"><i className="bx bx-menu-alt-right"></i></button>
                          <button type="button" className="btn btn-outline-secondary"><i className="bx bx-menu"></i></button>
                          <button type="button" className="btn btn-outline-secondary"><i className="bx bx-menu-alt-left"></i></button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Button toolbar</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Combine sets of button groups into button toolbars for more
                    complex components.Use utility className as needed to
                    space out groups, buttons, and more.
                  </p>
                  <div className="d-flex flex-wrap gap-4">
                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="First group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          1
                        </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          2
                        </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          3
                        </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          4
                        </Button>
                      </div>
                      <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          5
                        </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          6
                        </Button>
                        <Button color="secondary" className="btn btn-secondary">
                          7
                        </Button>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <Button color="secondary" className="btn btn-secondary">
                          8
                        </Button>
                      </div>
                    </div>

                    <div className="btn-toolbar">
                      <div className="btn-group me-2">
                        <button type="button" className="btn btn-outline-secondary">1</button>
                        <button type="button" className="btn btn-outline-secondary">2</button>
                        <button type="button" className="btn btn-outline-secondary">3</button>
                        <button type="button" className="btn btn-outline-secondary">4</button>
                      </div>
                      <div className="btn-group me-2">
                        <button type="button" className="btn btn-outline-secondary">5</button>
                        <button type="button" className="btn btn-outline-secondary">6</button>
                        <button type="button" className="btn btn-outline-secondary">7</button>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-outline-secondary">8</button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Instead of applying button sizing classes to every button in
                    a group, just add{" "}
                    <code className="highlighter-rouge">.btn-group-*</code> to
                    each <code className="highlighter-rouge">.btn-group</code>,
                    including each one when nesting multiple groups.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>

                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-outline-primary">Left</button>
                      <button type="button" className="btn btn-outline-primary">Middle</button>
                      <button type="button" className="btn btn-outline-primary">Right</button>
                    </div>
                  </div>

                  <br />

                  <div className="d-flex flex-wrap gap-3">
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary">Left</button>
                      <button type="button" className="btn btn-secondary">Middle</button>
                      <button type="button" className="btn btn-secondary">Right</button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-outline-secondary">Left</button>
                      <button type="button" className="btn btn-outline-secondary">Middle</button>
                      <button type="button" className="btn btn-outline-secondary">Right</button>
                    </div>
                  </div>

                  <br />

                  <div className="d-flex flex-wrap gap-3">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-danger">Left</button>
                      <button type="button" className="btn btn-danger">Middle</button>
                      <button type="button" className="btn btn-danger">Right</button>
                    </div>

                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-danger">Left</button>
                      <button type="button" className="btn btn-outline-danger">Middle</button>
                      <button type="button" className="btn btn-outline-danger">Right</button>
                    </div>
                  </div>

                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Vertical variation</CardTitle>
                  <p className="mb-3 card-title-desc">
                    Make a set of buttons appear vertically stacked rather than
                    horizontally.Split button dropdowns are not supported here.
                  </p>
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <Button
                        type="button"
                        color="secondary"
                        className="btn btn-secondary"
                      >
                        Button
                      </Button>

                      <ButtonDropdown
                        isOpen={drp_link}
                        toggle={() => {
                          setdrp_link(!drp_link);
                        }}
                      >
                        <DropdownToggle caret color="secondary">
                          Dropdown <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Dropdown link</DropdownItem>
                          <DropdownItem>Dropdown link</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                      <Button
                        color="secondary"
                        type="button"
                        className="btn btn-secondary"
                      >
                        Button
                      </Button>
                      <Button
                        color="secondary"
                        type="button"
                        className="btn btn-secondary"
                      >
                        Button
                      </Button>
                    </div>

                    <div className="btn-group-vertical">
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" defaultChecked />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiButtons;
