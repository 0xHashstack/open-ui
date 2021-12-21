import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const PagesTimeline = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const statuses = [
    {
      id: 1,
      stausTitle: "Ordered",
      iconClass: "bx-copy-alt",
      description: "New common language will be more simple than existing.",
    },
    {
      id: 2,
      stausTitle: "Packed",
      iconClass: "bx-package",
      description:
        "To an English person, it will seem like simplified English existence.",
    },
    {
      id: 3,
      stausTitle: "Shipped",
      iconClass: "bx-car",
      description:
        "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 4,
      stausTitle: "Delivered",
      iconClass: "bx-badge-check",
      description:
        "To an English person, it will seem like simplified English existence.",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Timeline | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Timeline" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Horizontal Timeline</CardTitle>

                  <div className="hori-timeline">
                    <div
                      className="owl-carousel owl-theme  navs-carousel events"
                      id="timeline-carousel"
                    >
                      {step1 ? (
                        <>
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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  It will be as simple as occidental in fact it
                                  will be Cambridge
                                </p>
                              </div>
                            </div>
                          </div>

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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  To an English person, it will seem like
                                  simplified English existence.
                                </p>
                              </div>
                            </div>
                          </div>

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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  For science, music, sport, etc, Europe uses
                                  the same vocabulary.
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {step2 ? (
                        <>
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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  New common language will be more simple than
                                  existing.
                                </p>
                              </div>
                            </div>
                          </div>

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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  It will be as simple as occidental in fact it
                                  will be Cambridge
                                </p>
                              </div>
                            </div>
                          </div>

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
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon" />
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  To an English person, it will seem like
                                  simplified English existence.
                                </p>
                              </div>
                            </div>
                          </div>
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
                          <i className="mdi mdi-chevron-left" />
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
                          <i className="mdi mdi-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-5">Vertical Timeline</CardTitle>
                  <div className="">
                    <ul className="verti-timeline list-unstyled">
                      {/* Render Horizontal Timeline Events */}
                      {statuses.map((status, key) => (
                        <li key={key} className="event-list">
                          <div className="event-timeline-dot">
                            <i
                              className={
                                status.id === 3
                                  ? "bx bx-right-arrow-circle bx-fade-right"
                                  : "bx bx-right-arrow-circle"
                              }
                            />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i
                                className={
                                  "bx " + status.iconClass + " h2 text-primary"
                                }
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5>{status.stausTitle}</h5>
                                <p className="text-muted">
                                  {status.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PagesTimeline
