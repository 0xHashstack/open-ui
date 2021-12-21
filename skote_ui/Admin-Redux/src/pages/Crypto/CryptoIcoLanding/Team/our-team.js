import React, { Component } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

import { Link } from "react-router-dom"

//Import Images
import avatar2 from "../../../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../../assets/images/users/avatar-8.jpg"
import avatar5 from "../../../../assets/images/users/avatar-5.jpg"
import avatar1 from "../../../../assets/images/users/avatar-1.jpg"

class OurTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step1: true,
      step2: false,
      candidates: [
        {
          imgUrl: avatar2,
          name: "Mark Hurley",
          designation: "CEO & Lead",
          socials: [
            { id: 1, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 2, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 3, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar3,
          name: "Calvin Smith",
          designation: "Blockchain developer",
          socials: [
            { id: 4, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 5, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 6, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar8,
          name: "Vickie Sample",
          designation: "Designer",
          socials: [
            { id: 7, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 8, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 9, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar5,
          name: "Vickie Sample",
          designation: "Designer",
          socials: [
            { id: 10, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 11, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 12, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar1,
          name: "Alma Farley",
          designation: "App developer",
          socials: [
            { id: 13, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 14, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 15, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
      ],
      responsive: {
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="team">
          <Container>
            <Row>
              <Col lg="12">
                <div className="text-center mb-5">
                  <div className="small-title">Team</div>
                  <h4>Meet our team</h4>
                </div>
              </Col>
            </Row>

            <Col lg="12"> 
              {/* <div className="hori-timeline"> */}
                <div
                  className="owl-carousel owl-theme events navs-carousel"
                  id="timeline-carousel"
                  dir="ltr"
                >
                  {this.state.step1 ? (
                    <>
                      <Row>
                        <Col md={4}>
                          <div className="item">
                            <Card className="text-center team-box">
                              <CardBody>
                                <div>
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>

                                <div className="mt-3">
                                  <h5>Mark Hurley</h5>
                                  <p className="text-muted mb-0">CEO & Lead</p>
                                </div>
                              </CardBody>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="item">
                            <div className="card text-center team-box">
                              <div className="card-body">
                                <div>
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>

                                <div className="mt-3">
                                  <h5>Calvin Smith</h5>
                                  <p className="text-muted mb-0">
                                    Blockchain developer
                                  </p>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container2">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="item">
                            <div className="card text-center team-box">
                              <div className="card-body">
                                <div>
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>
                                <div className="mt-3">
                                  <h5>Vickie Sample</h5>
                                  <p className="text-muted mb-0">Designer</p>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container4">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ) : null}

                  {this.state.step2 ? (
                    <>
                      <Row>
                        <Col md={4}>
                          <div className="item">
                            <div className="card text-center team-box">
                              <div className="card-body">
                                <div>
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>

                                <div className="mt-3">
                                  <h5>Amy Hood </h5>
                                  <p className="text-muted mb-0">Designer</p>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container6">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="item">
                            <div className="card text-center team-box">
                              <div className="card-body">
                                <div>
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>

                                <div className="mt-3">
                                  <h5>Mark Hurley</h5>
                                  <p className="text-muted mb-0">CEO & Lead</p>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="item">
                            <div className="card text-center team-box">
                              <div className="card-body">
                                <div>
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded"
                                  />
                                </div>

                                <div className="mt-3">
                                  <h5>Calvin Smith</h5>
                                  <p className="text-muted mb-0">
                                    Blockchain developer
                                  </p>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-top">
                                <div className="d-flex mb-0 team-social-links" id="tooltip-container2">
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Facebook"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Linkedin"
                                    >
                                      <i className="mdi mdi-linkedin"></i>
                                    </Link>
                                  </div>
                                  <div className="flex-fill">
                                    <Link
                                      to="#"
                                      data-toggle="tooltip"
                                      title="Google"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ) : null}

                  <div className="owl-nav" style={{ textAlign: "center" }}>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ step1: true, step2: false })
                      }}
                      className="border-0"
                      disabled={this.state.step1}
                    >
                      <i className="mdi mdi-chevron-left"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ step1: false, step2: true })
                      }}
                      className="border-0"
                      disabled={this.state.step2}
                    >
                      <i className="mdi mdi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              {/* </div> */}
            </Col>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default OurTeam
