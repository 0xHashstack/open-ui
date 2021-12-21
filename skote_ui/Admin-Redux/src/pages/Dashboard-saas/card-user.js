import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg"

class CardUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings_Menu: false,
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  //Setting Menu
  toggleSettings() {
    this.setState(prevState => ({
      settings_Menu: !prevState.settings_Menu,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="4">
                    <div className="d-flex">
                      <div className="me-3">
                        <img
                          src={avatar1}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center">
                        <div className="text-muted">
                          <p className="mb-2">Welcome to skote dashboard</p>
                          <h5 className="mb-1">Henry wells</h5>
                          <p className="mb-0">UI / UX Designer</p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="align-self-center">
                    <div className="text-lg-center mt-4 mt-lg-0">
                      <Row>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Total Projects
                            </p>
                            <h5 className="mb-0">48</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Projects
                            </p>
                            <h5 className="mb-0">40</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Clients
                            </p>
                            <h5 className="mb-0">18</h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col lg="4" className="d-none d-lg-block">
                    <div className="clearfix mt-4 mt-lg-0">
                      <Dropdown
                        isOpen={this.state.settings_Menu}
                        toggle={this.toggleSettings}
                        className="float-end"
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                        >
                          <i className="bx bxs-cog align-middle me-1"></i>{" "}
                          Setting
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">Something else</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default CardUser
