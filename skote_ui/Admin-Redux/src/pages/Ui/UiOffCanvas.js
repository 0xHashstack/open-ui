import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import {
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class UiOffCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isTop: false,
      isRight: false,
      isBottom: false,
      isEnableScroll: false,
      isBackdrop: false,
      isScrollBackDrop: false,
    };
    this.toggleLeftCanvas = this.toggleLeftCanvas.bind(this);
    this.toggleTopCanvas = this.toggleTopCanvas.bind(this);
    this.toggleRightCanvas = this.toggleRightCanvas.bind(this);
    this.toggleBottomCanvas = this.toggleBottomCanvas.bind(this);
    this.toggleEnableScroll = this.toggleEnableScroll.bind(this);
    this.toggleBackdrop = this.toggleBackdrop.bind(this);
    this.toggleScrollBackDrop = this.toggleScrollBackDrop.bind(this);
  }

  toggleTopCanvas() {
    this.setState({ isTop: !this.state.isTop });
  }
  toggleBottomCanvas() {
    this.setState({ isBottom: !this.state.isBottom });
  }
  toggleLeftCanvas() {
    this.setState({ open: !this.state.open });
  }
  toggleRightCanvas() {
    this.setState({ isRight: !this.state.isRight });
  }
  toggleEnableScroll() {
    this.setState({ isEnableScroll: !this.state.isEnableScroll });
  }
  toggleBackdrop() {
    this.setState({ isBackdrop: !this.state.isBackdrop });
  }
  toggleScrollBackDrop() {
    this.setState({ isScrollBackDrop: !this.state.isScrollBackDrop });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>OffCanvas | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Ui Elements" breadcrumbItem="OffCanvas" />
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Demo</CardTitle>
                    <p className="card-title-desc">
                      Offcanvas can toggle open or closed.
                    </p>
                    <div>
                      <Button color="primary" onClick={this.toggleLeftCanvas}>
                        Open
                      </Button>
                      <Offcanvas
                        isOpen={this.state.open}
                        toggle={this.toggleLeftCanvas}
                      >
                        <OffcanvasHeader toggle={this.toggleLeftCanvas}>
                          Offcanvas
                        </OffcanvasHeader>
                        <OffcanvasBody>
                          <div>
                            Some text as placeholder. In real life you can have
                            the elements you have chosen. Like, text, images,
                            lists, etc.
                          </div>
                          <UncontrolledDropdown className="mt-3">
                            <DropdownToggle
                              className="btn btn-primary"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                            >
                              Dropdown button{" "}
                              <i className="mdi mdi-chevron-down"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <li>
                                <DropdownItem>Action</DropdownItem>
                              </li>
                              <li>
                                <DropdownItem>Another action</DropdownItem>
                              </li>
                              <li>
                                <DropdownItem>Something else here</DropdownItem>
                              </li>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </OffcanvasBody>
                      </Offcanvas>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Placement</CardTitle>
                    <p className="card-title-desc">
                      Offcanvas Diffrent Placement Example: Top, End & Bottom
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Button color="primary" onClick={this.toggleTopCanvas}>
                        Toggle top offcanvas
                      </Button>
                      <Button color="primary" onClick={this.toggleRightCanvas}>
                        Toggle right offcanvas
                      </Button>
                      <Button color="primary" onClick={this.toggleBottomCanvas}>
                        Toggle bottom offcanvas
                      </Button>
                    </div>
                    {/* Top offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isTop}
                      direction="top"
                      toggle={this.toggleTopCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleTopCanvas}>
                        Offcanvas Top
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                    {/* Right offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isRight}
                      direction="end"
                      toggle={this.toggleRightCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleRightCanvas}>
                        Offcanvas Right
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                    {/* Bottom offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isBottom}
                      direction="bottom"
                      toggle={this.toggleBottomCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleBottomCanvas}>
                        Offcanvas Bottom
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Backdrop</CardTitle>
                    <p className="card-title-desc">
                      Scrolling the <code>&lt;body&gt;</code> element is
                      disabled when an offcanvas and its backdrop are visible.
                      Use the <code>scrollable</code> attribute to toggle{" "}
                      <code>&lt;body&gt;</code> scrolling and{" "}
                      <code>backdrop</code> to toggle the backdrop.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Button color="primary" onClick={this.toggleEnableScroll}>
                        Enable body scrolling
                      </Button>
                      <Button color="primary" onClick={this.toggleBackdrop}>
                        Enable backdrop (default)
                      </Button>
                      <Button
                        color="primary"
                        onClick={this.toggleScrollBackDrop}
                      >
                        Enable both scrolling & backdrop
                      </Button>
                    </div>
                    <Offcanvas
                      isOpen={this.state.isEnableScroll}
                      scrollable
                      backdrop={false}
                      toggle={this.toggleEnableScroll}
                    >
                      <OffcanvasHeader toggle={this.toggleEnableScroll}>
                        Colored with scrolling
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Try scrolling the rest of the page to see this option
                          in action.
                        </div>
                      </OffcanvasBody>
                    </Offcanvas>

                    <Offcanvas
                      isOpen={this.state.isBackdrop}
                      toggle={this.toggleBackdrop}
                    >
                      <OffcanvasHeader toggle={this.toggleBackdrop}>
                        Offcanvas with backdrop
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Try scrolling the rest of the page to see this option
                          in action.
                        </div>
                      </OffcanvasBody>
                    </Offcanvas>

                    <Offcanvas
                      isOpen={this.state.isScrollBackDrop}
                      scrollable
                      toggle={this.toggleScrollBackDrop}
                    >
                      <OffcanvasHeader toggle={this.toggleScrollBackDrop}>
                        Backdroped with scrolling
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Try scrolling the rest of the page to see this option
                          in action.
                        </div>
                      </OffcanvasBody>
                    </Offcanvas>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiOffCanvas;
