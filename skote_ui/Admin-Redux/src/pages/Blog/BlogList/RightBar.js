import React, { Component } from "react"
import { Card, CardBody, Col } from "reactstrap"
import { Link } from "react-router-dom"

// import images
import img1 from '../../../assets/images/small/img-7.jpg';
import img2 from '../../../assets/images/small/img-4.jpg';
import img3 from '../../../assets/images/small/img-6.jpg';

export default class RightBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xl={3} lg={4}>
          <Card>
            <CardBody className="p-4">
              <div className="search-box">
                <p className="text-muted">Search</p>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control rounded bg-light border-light"
                    placeholder="Search..."
                  />
                  <i className="mdi mdi-magnify search-icon"></i>
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <p className="text-muted">Categories</p>

                <ul className="list-unstyled fw-medium">
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> Development{" "}
                      <span className="badge badge-soft-success badge-pill float-end ms-1 font-size-12">
                        04
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> Project
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> Travel
                      <span className="badge badge-soft-success badge-pill ms-1 float-end font-size-12">
                        12
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="my-4" />

              <div>
                <p className="text-muted">Archive</p>

                <ul className="list-unstyled fw-medium">
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> 2020{" "}
                      <span className="badge badge-soft-success badge-pill float-end ms-1 font-size-12">
                        03
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> 2019{" "}
                      <span className="badge badge-soft-success badge-pill float-end ms-1 font-size-12">
                        06
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> 2018{" "}
                      <span className="badge badge-soft-success badge-pill float-end ms-1 font-size-12">
                        05
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="my-4" />

              <div>
                <p className="text-muted mb-2">Popular Posts</p>

                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item text-muted py-3 px-2">
                    <div className="media align-items-center">
                      <div className="me-3">
                        <img
                          src={img1}
                          alt=""
                          className="avatar-md h-auto d-block rounded"
                        />
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 text-truncate">
                          Beautiful Day with Friends
                        </h5>
                        <p className="mb-0 text-truncate">10 Apr, 2020</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="list-group-item text-muted py-3 px-2">
                    <div className="media align-items-center">
                      <div className="me-3">
                        <img
                          src={img2}
                          alt=""
                          className="avatar-md h-auto d-block rounded"
                        />
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 text-truncate">
                          Drawing a sketch
                        </h5>
                        <p className="mb-0 text-truncate">24 Mar, 2020</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="list-group-item text-muted py-3 px-2">
                    <div className="media align-items-center">
                      <div className="me-3">
                        <img
                          src={img3}
                          alt=""
                          className="avatar-md h-auto d-block rounded"
                        />
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 text-truncate">
                          Project discussion with team
                        </h5>
                        <p className="mb-0 text-truncate">11 Mar, 2020</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <p className="text-muted">Tags</p>

                <div className="d-flex flex-wrap gap-2 widget-tag">
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Design
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Development
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Business
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Project
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Travel
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Lifestyle
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="badge bg-light font-size-12">
                      Photography
                    </Link>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}
