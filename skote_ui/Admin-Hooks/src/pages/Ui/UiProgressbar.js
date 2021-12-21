import React from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Container, Progress, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiProgressbar = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Progress Bars | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Progress Bars" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Default Examples</CardTitle>
                  <p className="card-title-desc">
                    Progress components are built with two HTML elements, some
                    CSS to set the width, and a few attributes.
                  </p>
                </CardHeader>
                <CardBody>
                  <div>
                    <div className="mb-4">
                      <Progress color="primary" value={25}></Progress>
                    </div>{" "}

                    <div className="mb-4">
                      <Progress color="primary" value={50}></Progress>
                    </div>

                    <div className="mb-4">
                      <Progress color="primary" value={75}></Progress>
                    </div>

                    <div>
                      <Progress color="primary" value={100}></Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Backgrounds</CardTitle>
                  <p className="card-title-desc">
                    Use background utility classes to change the appearance of
                    individual progress bars.
                  </p>
                </CardHeader>
                <CardBody>
                  <div>
                    <div className="mb-4">
                      <Progress color="success" value={25}></Progress>
                    </div>

                    <div className="mb-4">
                      <Progress color="info" value={50}></Progress>
                    </div>

                    <div className="mb-4">
                      <Progress color="warning" value={75}></Progress>
                    </div>

                    <div>
                      <Progress color="danger" value={100}></Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Labels Example</CardTitle>
                  <p className="card-title-desc">
                    Add labels to your progress bars by placing text within
                    the{" "}
                    <code className="highlighter-rouge">.progress-bar</code>.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <Progress color="primary" value={25}>
                      25%
                    </Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Multiple bars</CardTitle>
                  <p className="card-title-desc">
                    Include multiple progress bars in a progress component if
                    you need.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <Progress multi>
                      <Progress bar color="primary" value={15}></Progress>
                      <Progress bar color="success" value={30}></Progress>
                      <Progress bar color="info" value={20}></Progress>
                    </Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Height</CardTitle>
                  <p className="card-title-desc">
                    We only set a{" "}
                    <code className="highlighter-rouge">height</code> value on
                    the{" "}
                    <code className="highlighter-rouge">.progress-bar</code>,
                    so if you change that value the outer{" "}
                    <code className="highlighter-rouge">.progress</code> will
                    automatically resize accordingly.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress sm</h5>
                      <Progress
                        value={25}
                        color="primary"
                        className="progress-sm"
                      ></Progress>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress md</h5>
                      <Progress
                        value={40}
                        color="success"
                        className="progress-md"
                      ></Progress>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress lg</h5>
                      <Progress
                        value={50}
                        color="warning"
                        className="progress-lg"
                      ></Progress>
                    </div>
                    <div>
                      <h5 className="font-size-13">Progress xl</h5>
                      <Progress
                        value={70}
                        color="danger"
                        className="progress-xl"
                      ></Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Striped</CardTitle>
                  <p className="card-title-desc">
                    Add <code className="highlighter-rouge"> striped </code>{" "}
                    to any to apply a stripe via CSS gradient over the
                    progress bar’s background color.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <div className="mb-4">
                      <Progress striped color="primary" value={25}></Progress>
                    </div>

                    <div className="mb-4">
                      <Progress striped color="success" value={40}></Progress>
                    </div>

                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Animated stripes</CardTitle>
                  <p className="card-title-desc">
                    The striped gradient can also be
                    animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the
                    stripes right to left via CSS3 animations.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <Progress
                      value={75}
                      color="primary"
                      style={{ width: '75%' }}
                      animated
                    ></Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Animated Progress</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.animated-progess</code> class with <code>.progress-bar</code> for animated progressbar.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <div className="animated-progess mb-4">
                      <Progress
                        value={10}
                        color="primary"
                      ></Progress>
                    </div>
                    <div className="animated-progess mb-4">
                      <Progress
                        value={25}
                        color="success"
                      ></Progress>
                    </div>
                    <div className="animated-progess mb-4">
                      <Progress
                        value={50}
                        color="info"
                      ></Progress>
                    </div>
                    <div className="animated-progess mb-4">
                      <Progress
                        value={75}
                        color="warning"
                      ></Progress>
                    </div>
                    <div className="animated-progess">
                      <Progress
                        value={100}
                        color="danger"
                      ></Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="h4">Custom progress</CardTitle>
                  <p className="card-title-desc mb-4">
                    Example of Custom progress
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <div className="custom-progess mb-5">
                      <Progress
                        className="progress-sm"
                        color="danger"
                        value={84}
                        max={100}
                      ></Progress>
                      <div className="avatar-xs progress-icon">
                        <span className="avatar-title rounded-circle border border-danger">
                          <i className="bx bxl-html5 text-danger font-size-18"></i>
                        </span>
                      </div>
                    </div>

                    <div className="custom-progess mb-5">
                      <Progress
                        className="progress-sm"
                        color="primary"
                        value={75}
                        max={100}
                      ></Progress>
                      <div className="avatar-xs progress-icon">
                        <span className="avatar-title rounded-circle border border-primary">
                          <i className="bx bxl-css3 text-primary font-size-18"></i>
                        </span>
                      </div>
                    </div>

                    <div className="custom-progess mb-5">
                      <Progress
                        className="progress-sm"
                        color="info"
                        value={62}
                        max={100}
                      ></Progress>
                      <div className="avatar-xs progress-icon">
                        <span className="avatar-title rounded-circle border border-info">
                          <i className="bx bxl-jquery text-info font-size-18"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle className="h5">
                    Progress Example
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="card-title-desc">You can use these classes with existing components to create new ones.</p>
                  <div className="mt-5">
                    <div className="position-relative m-4">
                      <Progress
                        value={50}
                        color="primary"
                        style={{ height: '1px' }}
                      ></Progress>
                      <button className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>
                        1
                      </button>
                      <button className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>
                        2
                      </button>
                      <button className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: "2rem", height: "2rem" }}>
                        3
                      </button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiProgressbar
