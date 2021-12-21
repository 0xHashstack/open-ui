import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"

const RoadMap = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

  return (
    <React.Fragment>
      <section className="section bg-white" id="roadmap">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Timeline</div>
                <h4>Our Roadmap</h4>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
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
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  12 September
                                </div>
                                <h5 className="mb-4">First event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  It will be as simple as occidental in fact it
                                  will be Cambridge
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  06 October
                                </div>
                                <h5 className="mb-4">Second event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  To an English person, it will seem like
                                  simplified English existence.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div
                            className="item event-list active"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  25 October
                                </div>
                                <h5 className="mb-4">Third event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  For science, music, sport, etc, Europe uses
                                  the same vocabulary.
                                </p>
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
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  04 November
                                </div>
                                <h5 className="mb-4">Fourth event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  New common language will be more simple than
                                  existing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  19 November
                                </div>
                                <h5 className="mb-4">Sixth event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  It will be as simple as occidental in fact it
                                  will be Cambridge
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  21 December
                                </div>
                                <h5 className="mb-4">Seventh event</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  To an English person, it will seem like
                                  simplified English existence.
                                </p>
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
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default RoadMap
