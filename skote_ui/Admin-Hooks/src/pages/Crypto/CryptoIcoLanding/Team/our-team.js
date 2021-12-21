import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"

//Import Images
import { Link } from "react-router-dom"
import avatar2 from "../../../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../../assets/images/users/avatar-8.jpg"
import avatar5 from "../../../../assets/images/users/avatar-5.jpg"
import avatar1 from "../../../../assets/images/users/avatar-1.jpg"

const OurTeam = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

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
            <div className="hori-timeline">
              <div
                className="owl-carousel owl-theme  navs-carousel events"
                id="timeline-carousel"
              >
                {step1 ? (
                  <>
                    <Row>
                      <Col md={4}>
                        <div className="item">
                          <div className="card text-center team-box">
                            <div className="card-body">
                              <div>
                                <img src={avatar2} alt="" className="rounded" />
                              </div>

                              <div className="mt-3">
                                <h5>Mark Hurley</h5>
                                <p className="text-muted mb-0">CEO & Lead</p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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
                                <img src={avatar3} alt="" className="rounded" />
                              </div>

                              <div className="mt-3">
                                <h5>Calvin Smith</h5>
                                <p className="text-muted mb-0">
                                  Blockchain developer
                                </p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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
                                <img src={avatar8} alt="" className="rounded" />
                              </div>
                              <div className="mt-3">
                                <h5>Vickie Sample</h5>
                                <p className="text-muted mb-0">Designer</p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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

                {step2 ? (
                  <>
                    <Row>
                      <Col md={4}>
                        <div className="item">
                          <div className="card text-center team-box">
                            <div className="card-body">
                              <div>
                                <img src={avatar8} alt="" className="rounded" />
                              </div>
                              <div className="mt-3">
                                <h5>Vickie Sample</h5>
                                <p className="text-muted mb-0">Designer</p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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
                                <img src={avatar5} alt="" className="rounded" />
                              </div>

                              <div className="mt-3">
                                <h5>Alma Farley</h5>
                                <p className="text-muted mb-0">App developer</p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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
                                <img src={avatar1} alt="" className="rounded" />
                              </div>

                              <div className="mt-3">
                                <h5>Amy Hood </h5>
                                <p className="text-muted mb-0">Designer</p>
                              </div>
                            </div>
                            <div className="card-footer bg-transparent border-top">
                              <div className="d-flex mb-0 team-social-links">
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Facebook"
                                  >
                                    <i className="mdi mdi-facebook"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Linkedin"
                                  >
                                    <i className="mdi mdi-linkedin"/>
                                  </Link>
                                </div>
                                <div className="flex-fill">
                                  <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    title="Google"
                                  >
                                    <i className="mdi mdi-google"/>
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
                      setStep1(true)
                      setStep2(false)
                    }}
                    className="border-0"
                    disabled={step1}
                  >
                    <i className="mdi mdi-chevron-left"/>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep1(false)
                      setStep2(true)
                    }}
                    className="border-0"
                    disabled={step2}
                  >
                    <i className="mdi mdi-chevron-right"/>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default OurTeam
