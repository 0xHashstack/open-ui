import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

//SimpleBar
import SimpleBar from "simplebar-react"
// import images
import user1 from "../../assets/images/users/avatar-2.jpg"

const Comments = props => {
  return (
    <React.Fragment>
      <Col xl={4} lg={6}>
        <Card>
          <CardBody>
            <div className="d-flex flex-wrap">
              <div className="me-2">
                <h5 className="card-title mb-3">Comments</h5>
              </div>
              <UncontrolledDropdown className="ms-auto">
                <DropdownToggle
                  className="text-muted font-size-16"
                  color="white"
                  type="button"
                >
                  <i className="mdi mdi-dots-horizontal"></i>
                </DropdownToggle>
                <DropdownMenu direction="right">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Something else
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <SimpleBar style={{ maxHeight: "300px" }}>
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item py-3">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <div className="avatar-title rounded-circle bg-light text-primary">
                          <i className="bx bxs-user"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="font-size-14 mb-1">
                          Delores Williams{" "}
                          <small className="text-muted float-end">
                            1 hr Ago
                          </small>
                        </h5>
                        <p className="text-muted">
                          If several languages coalesce, the grammar of the
                          resulting of the individual
                        </p>
                        <div>
                          <Link to="#" className="text-success">
                            <i className="mdi mdi-reply me-1"></i> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item py-3">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <img
                          src={user1}
                          alt=""
                          className="img-fluid d-block rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="font-size-14 mb-1">
                          Clarence Smith{" "}
                          <small className="text-muted float-end">
                            2 hrs Ago
                          </small>
                        </h5>
                        <p className="text-muted">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet
                        </p>
                        <div>
                          <Link to="#" className="text-success">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>

                        <div className="d-flex pt-3">
                          <div className="avatar-xs me-3">
                            <div className="avatar-title rounded-circle bg-light text-primary">
                              <i className="bx bxs-user"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-14 mb-1">
                              Silvia Martinez{" "}
                              <small className="text-muted float-end">
                                2 hrs Ago
                              </small>
                            </h5>
                            <p className="text-muted">
                              To take a trivial example, which of us ever
                              undertakes
                            </p>
                            <div>
                              <Link to="#" className="text-success">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item py-3">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <div className="avatar-title rounded-circle bg-light text-primary">
                          <i className="bx bxs-user"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="font-size-14 mb-1">
                          Keith McCoy{" "}
                          <small className="text-muted float-end">
                            12 Aug
                          </small>
                        </h5>
                        <p className="text-muted">
                          Donec posuere vulputate arcu. phasellus accumsan
                          cursus velit
                        </p>
                        <div>
                          <Link to="#" className="text-success">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Comments
