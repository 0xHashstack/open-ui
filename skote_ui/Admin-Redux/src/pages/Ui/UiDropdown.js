import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dropdowns | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Single button dropdowns</CardTitle>
                    <p className="card-title-desc">
                      Any single <code className="highlighter-rouge">.btn</code>{" "}
                      can be turned into a dropdown toggle with some markup
                      changes. Here’s how you can put them to work with either{" "}
                      <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                      elements:
                    </p>
                    <Row>
                      <Col sm={6}>
                        <Dropdown
                          isOpen={this.state.singlebtn}
                          toggle={() =>
                            this.setState({ singlebtn: !this.state.singlebtn })
                          }
                        >
                          <DropdownToggle className="btn btn-secondary" caret>
                            Dropdown button{" "}
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                      <Col sm={6}>
                        <Dropdown
                          isOpen={this.state.singlebtn1}
                          toggle={() =>
                            this.setState({
                              singlebtn1: !this.state.singlebtn1,
                            })
                          }
                          className="mt-4 mt-sm-0"
                        >
                          <DropdownToggle className="btn btn-secondary" caret>
                            Dropdown Link{" "}
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Variant</CardTitle>
                    <p className="card-title-desc">
                      The best part is you can do this with any button variant,
                      too:
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                      <Dropdown
                        isOpen={this.state.btnprimary1}
                        toggle={() =>
                          this.setState({
                            btnprimary1: !this.state.btnprimary1,
                          })
                        }
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                        >
                          Primary <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                      <Dropdown
                        isOpen={this.state.btnsecondary1}
                        toggle={() =>
                          this.setState({
                            btnsecondary1: !this.state.btnsecondary1,
                          })
                        }
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-secondary"
                        >
                          Secondary <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                      <Dropdown
                        isOpen={this.state.btnsuccess1}
                        toggle={() =>
                          this.setState({
                            btnsuccess1: !this.state.btnsuccess1,
                          })
                        }
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-success"
                        >
                          Success <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        isOpen={this.state.btnInfo1}
                        toggle={() =>
                          this.setState({ btnInfo1: !this.state.btnInfo1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-info">
                          Info <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        isOpen={this.state.btnWarning1}
                        toggle={() =>
                          this.setState({
                            btnWarning1: !this.state.btnWarning1,
                          })
                        }
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-warning"
                        >
                          Warning <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        isOpen={this.state.btnDanger1}
                        toggle={() =>
                          this.setState({ btnDanger1: !this.state.btnDanger1 })
                        }
                      >
                        <DropdownToggle tag="button" className="btn btn-danger">
                          Danger <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Split button dropdowns</CardTitle>
                    <p className="card-title-desc">
                      The best part is you can do this with any button variant,
                      too:
                    </p>
                    <div className="d-flex gap-2 flex-wrap">
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_primary1}
                          toggle={() =>
                            this.setState({
                              drp_primary1: !this.state.drp_primary1,
                            })
                          }
                        >
                          <Button id="caret" color="primary">Primary</Button>
                          <DropdownToggle caret color="primary" className="dropdown-toggle-split"><i className="mdi mdi-chevron-down"></i></DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_secondary1}
                          toggle={() =>
                            this.setState({
                              drp_secondary1: !this.state.drp_secondary1,
                            })
                          }
                        >
                          <Button id="caret" color="secondary">
                            Secondary
                          </Button>
                          <DropdownToggle caret color="secondary" className="dropdown-toggle-split">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_success1}
                          toggle={() =>
                            this.setState({
                              drp_success1: !this.state.drp_success1,
                            })
                          }
                        >
                          <Button id="caret" color="success">
                            Success
                          </Button>
                          <DropdownToggle caret color="success" className="dropdown-toggle-split">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_info1}
                          toggle={() =>
                            this.setState({ drp_info1: !this.state.drp_info1 })
                          }
                        >
                          <Button id="caret" color="info">
                            Info
                          </Button>
                          <DropdownToggle caret color="info" className="dropdown-toggle-split">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_warning1}
                          toggle={() =>
                            this.setState({
                              drp_warning1: !this.state.drp_warning1,
                            })
                          }
                        >
                          <Button id="caret" color="warning">
                            Warning
                        </Button>
                          <DropdownToggle caret color="warning" className="dropdown-toggle-split">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="btn-group mb-2">
                        <ButtonDropdown
                          isOpen={this.state.drp_danger1}
                          toggle={() =>
                            this.setState({
                              drp_danger1: !this.state.drp_danger1,
                            })
                          }
                        >
                          <Button id="caret" color="danger">
                            Danger
                        </Button>
                          <DropdownToggle caret color="danger" className="dropdown-toggle-split">
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Sizing</CardTitle>
                    <p className="card-title-desc mb-3">
                      Button dropdowns work with buttons of all sizes, including
                      default and split dropdown buttons.
                    </p>
                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary}
                        toggle={() =>
                          this.setState({
                            drp_secondary: !this.state.drp_secondary,
                          })
                        }
                      >
                        <DropdownToggle
                          caret
                          color="primary"
                          className="btn-lg"
                        >
                          Large button{" "}
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group me-1 mt-2">
                      <Button color="secondary" className="btn btn-secondary btn-lg">
                        Large button
                      </Button>
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_lg}
                        toggle={() =>
                          this.setState({
                            drp_secondary_lg: !this.state.drp_secondary_lg,
                          })
                        }
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-lg"
                        >
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_sm}
                        toggle={() =>
                          this.setState({
                            drp_secondary_sm: !this.state.drp_secondary_sm,
                          })
                        }
                      >
                        <DropdownToggle
                          caret
                          color="info"
                          className="btn btn-info btn-sm"
                        >Small button
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary_sm1}
                        toggle={() =>
                          this.setState({
                            drp_secondary_sm1: !this.state.drp_secondary_sm1,
                          })
                        }
                      >
                        <Button className="btn btn-secondary btn-sm">
                          Small button
                        </Button>
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Dropup variation</CardTitle>
                    <p className="card-title-desc">
                      Trigger dropdown menus above elements by adding{" "}
                      <code className="highlighter-rouge">.dropup</code> to the
                      parent element.
                    </p>
                    <div className="d-flex gap-2 flex-wrap">
                      <Dropdown
                        isOpen={this.state.dropup1}
                        direction="up"
                        toggle={() =>
                          this.setState({ dropup1: !this.state.dropup1 })
                        }
                      >
                        <DropdownToggle className="btn btn-secondary">
                          Dropup <i className="mdi mdi-chevron-up"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <ButtonDropdown
                        direction="up"
                        isOpen={this.state.drp_up11}
                        toggle={() =>
                          this.setState({
                            drp_up11: !this.state.drp_up11,
                          })
                        }
                      >
                        <Button id="caret" color="secondary">
                          Split dropup
                        </Button>
                        <DropdownToggle caret color="secondary">
                          <i className="mdi mdi-chevron-up"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Menu alignment</CardTitle>
                    <p className="card-title-desc">
                      Add{" "}
                      <code className="highlighter-rouge">
                        .dropdown-menu-end
                      </code>{" "}
                      to a{" "}
                      <code className="highlighter-rouge">.dropdown-menu</code>{" "}
                      to right align the dropdown menu.
                    </p>
                    <ButtonDropdown
                      isOpen={this.state.drop_align}
                      direction="right" className="dropdown-menu-end"
                      toggle={() =>
                        this.setState({ drop_align: !this.state.drop_align })
                      }
                    >
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary"
                      >
                        Menu is right-aligned{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Dropright variation</CardTitle>
                    <p className="card-title-desc">
                      Trigger dropdown menus at the right of the elements by
                      adding <code>.dropend</code> to the parent element.
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                      <Dropdown
                        isOpen={this.state.info_dropup1}
                        direction="right"
                        className="btn-group dropend"
                        toggle={() =>
                          this.setState({
                            info_dropup1: !this.state.info_dropup1,
                          })
                        }
                      >
                        <DropdownToggle className="btn btn-info" caret>
                          Dropright <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="right-start">
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <ButtonDropdown
                        direction="right"
                        className="btn-group dropend"
                        isOpen={this.state.infodrp_up11}
                        toggle={() =>
                          this.setState({
                            infodrp_up11: !this.state.infodrp_up11,
                          })
                        }
                      >
                        <Button id="caret" color="info">
                          Split dropend
                        </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="right-start">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Dropleft variation</CardTitle>
                    <p className="card-title-desc">
                      Trigger dropdown menus at the right of the elements by
                      adding <code>.dropstart</code> to the parent element.
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                      <Dropdown
                        isOpen={this.state.info_dropup111}
                        direction="left"
                        className="btn-group dropstart"
                        toggle={() =>
                          this.setState({
                            info_dropup111: !this.state.info_dropup111,
                          })
                        }
                      >
                        <DropdownToggle className="btn btn-info">
                          <i className="mdi mdi-chevron-left"></i> Dropleft
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="left-start">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <ButtonDropdown
                        direction="left"
                        className="btn-group dropstart"
                        isOpen={this.state.infodrp_up1111}
                        toggle={() =>
                          this.setState({
                            infodrp_up1111: !this.state.infodrp_up1111,
                          })
                        }
                      >
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-left"></i>
                        </DropdownToggle>
                        <Button id="caret" color="info">
                          Split dropstart
                        </Button>
                        <DropdownMenu data-popper-placement="left-start">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
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

export default UiDropdown
