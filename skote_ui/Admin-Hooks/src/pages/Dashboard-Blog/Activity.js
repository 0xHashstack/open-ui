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

const Activity = props => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
                <h5 className="card-title mb-4">Activity</h5>
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
            <SimpleBar style={{ maxHeight: "280px" }}>
              <div className="mt-2">
                <ul className="verti-timeline list-unstyled">
                  <li className="event-list active">
                    <div className="event-timeline-dot">
                      <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <h5 className="font-size-14">
                          10 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Posted{" "}
                          <span className="font-weight-semibold">
                            Beautiful Day with Friends
                          </span>{" "}
                          blog... <a href="#">View</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <h5 className="font-size-14">
                          08 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          If several languages coalesce, the grammar of the
                          resulting... <a href="#">Read</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <h5 className="font-size-14">
                          02 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Create{" "}
                          <span className="font-weight-semibold">
                            Drawing a sketch blog
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <h5 className="font-size-14">
                          24 Oct{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          In enim justo, rhoncus ut, imperdiet a venenatis vitae
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <h5 className="font-size-14">
                          21 Oct{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SimpleBar>
            <div className="text-center mt-4">
              <a
                href=""
                className="btn btn-primary  btn-sm"
              >
                View More <i className="mdi mdi-arrow-right ms-1"></i>
              </a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Activity
