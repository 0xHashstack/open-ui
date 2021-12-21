import React,{useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import classnames from "classnames"
import img1 from "../../assets/images/small/img-6.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-1.jpg"

//SimpleBar
import SimpleBar from "simplebar-react"

const Posts = props => {
  const [activeTab, setActiveTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  return (
    <React.Fragment>
      <Col xl={4} lg={6}>
        <Card>
          <CardHeader className="bg-transparent border-bottom">
            <div className="d-flex flex-wrap">
              <div className="me-2">
                <h5 className="card-title mt-1 mb-0">Posts</h5>
              </div>
              <ul
                className="nav nav-tabs nav-tabs-custom card-header-tabs ms-auto"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1")
                    }}
                  >
                    Recent
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2")
                    }}
                  >
                    Popular
                  </NavLink>
                </NavItem>
              </ul>
            </div>
          </CardHeader>

          <CardBody>
            <SimpleBar style={{ maxHeight: "295px" }}>
              <div>
                <TabContent activeTab={activeTab}>
                  <TabPane className="show" tabId="1">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img1}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Beautiful Day with Friends
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">10 Nov, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img2}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>
                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Drawing a sketch
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">02 Nov, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img3}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Project discussion with team
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">24 Oct, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img2}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Riding bike on road
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">20 Oct, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>
                    </ul>
                  </TabPane>

                  <TabPane className="show" tabId="2">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img1}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Drawing a sketch
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">02 Nov, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img2}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Beautiful Day with Friends
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">10 Nov, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img3}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Riding bike on road
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">20 Oct, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>

                      <li className="list-group-item py-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              src={img2}
                              alt=""
                              className="avatar-md h-auto d-block rounded"
                            />
                          </div>

                          <div className="align-self-center overflow-hidden me-auto">
                            <div>
                              <h5 className="font-size-14 text-truncate">
                                <Link to="#" className="text-dark">
                                  Project discussion with team
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">24 Oct, 2020</p>
                            </div>
                          </div>

                          <UncontrolledDropdown className="ms-2">
                            <DropdownToggle
                              className="text-muted font-size-14"
                              color="white"
                              type="button"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else
                              </Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </li>
                    </ul>
                  </TabPane>
                </TabContent>
              </div>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Posts
