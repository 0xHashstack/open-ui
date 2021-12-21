import React, { Component } from "react"
import { Card, CardBody, Col, Input, Label, Nav, NavItem, NavLink, Table } from "reactstrap"
import { Link } from "react-router-dom"
import classnames from "classnames"

//Simple bar
import SimpleBar from "simplebar-react"

class TotalSellingProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1"
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Col xl="4">
          <Card>
            <CardBody>
              <h4 className="card-title mb-4">Tasks</h4>

              <Nav pills className="bg-light rounded">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    In Process
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    Upcoming
                  </NavLink>
                </NavItem>
              </Nav>

              <div className="mt-4">
                <SimpleBar style={{ maxHeight: "250px" }}>
                  <div className="table-responsive">
                    <Table className="table table-nowrap align-middle table-hover mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: "50px" }}>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck01"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck01"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Skote Saas Dashboard
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">Assigned to Mark</p>
                          </td>
                          <td style={{ width: "90px" }}>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck02"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck02"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                New Landing UI
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">
                              Assigned to Team A
                          </p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck03"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck03"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Brand logo design
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">Assigned to Janis</p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck04"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck04"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Blog Template UI
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">
                              Assigned to Dianna
                          </p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck05"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck05"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Multipurpose Landing
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">
                              Assigned to Team B
                          </p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck06"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck06"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Redesign - Landing page
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">Assigned to Jerry</p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="tasklistCheck07"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="tasklistCheck07"
                              />
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 mb-1">
                              <Link to="#" className="text-dark">
                                Skote Crypto Dashboard
                            </Link>
                            </h5>
                            <p className="text-muted mb-0">Assigned to Eric</p>
                          </td>
                          <td>
                            <div>
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link to="#" className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </SimpleBar>
              </div>
            </CardBody>

            <div className="card-footer bg-transparent border-top">
              <div className="text-center">
                <Link
                  to="#"
                  className="btn btn-primary"
                >
                  {" "}
                  Add new Task
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

export default TotalSellingProduct
