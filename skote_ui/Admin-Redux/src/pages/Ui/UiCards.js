import React, { Component } from "react";
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  CardColumns,
  CardDeck,
  CardFooter,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

// import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class UiCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Cards | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Cards" />

            <Row>
              <Col md={6} xl={3}>
                <Card>
                  <CardImg top className="img-fluid" src={img1} alt="Skote" />
                  <CardBody>
                    <CardTitle className="h4 mt-0">Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                    <Link
                      to="#"
                      className="btn btn-primary"
                    >
                      Button
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              <Col mg={6} xl={3}>
                <Card>
                  <CardImg top className="img-fluid" src={img2} alt="Skote" />
                  <CardBody>
                    <CardTitle className="h4 mt-0">Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                  </ul>
                  <CardBody>
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                    <Link to="#" className="card-link">
                      Another link
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col mg={6} xl={3}>
                <Card>
                  <CardImg top className="img-fluid" src={img3} alt="Skote" />
                  <CardBody>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} xl={3}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mt-0">Card title</CardTitle>
                    <p className="font-14 text-muted">
                      Support card subtitle
                    </p>
                  </CardBody>
                  <CardImg className="img-fluid" src={img4} alt="Skote" />
                  <CardBody>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                    <Link to="#" className="card-link">
                      Another link
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card body>
                  <CardTitle className="h3 mt-0">
                    Special title treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </Card>
              </Col>
              <Col md={6}>
                <Card body>
                  <CardTitle className="h3 mt-0">
                    Special title treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card body>
                  <CardTitle className="h4 mt-0">
                    Special title treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </Card>
              </Col>

              <Col lg={4}>
                <Card body className="text-center">
                  <CardTitle className="h4 mt-0">
                    Special title treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </Card>
              </Col>

              <Col lg={4}>
                <Card body className="text-end">
                  <CardTitle className="h4 mt-0">
                    Special title treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card>
                  <CardHeader className="h5 bg-transparent border-bottom text-uppercase">Featured</CardHeader>
                  <CardBody>
                    <CardTitle className="h4 mt-0">
                      Special title treatment
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card>
                  <CardHeader className="bg-transparent border-bottom">Quote</CardHeader>
                  <CardBody>
                    <blockquote className="card-blockquote mb-0">
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </CardText>
                      <footer className="blockquote-footer font-size-12 mt-0">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card>
                  <CardHeader className="bg-transparent border-bottom text-uppercase">Featured</CardHeader>
                  <CardBody>
                    <CardTitle className="h4 mt-0">
                      Special title treatment
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Link
                      to="#"
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </Link>
                  </CardBody>
                  <CardFooter className="bg-transparent border-top text-muted">2 days ago</CardFooter>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card>
                  <CardImg top className="img-fluid" src={img5} alt="Skote" />
                  <CardBody>
                    <CardTitle className="mt-0">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mt-0">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                  </CardBody>
                  <CardImg
                    bottom
                    className="img-fluid"
                    src={img7}
                    alt="Skote"
                  />
                </Card>
              </Col>

              <Col lg={4}>
                <Card>
                  <CardImg className="img-fluid" src={img6} alt="Skote" />
                  <CardImgOverlay>
                    <CardTitle className="text-white mt-0">
                      Card title
                    </CardTitle>
                    <CardText className="text-light">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <CardText>
                      <small className="text-white">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <Row className="no-gutters align-items-center">
                    <Col md={4}>
                      <CardImg className="img-fluid" src={img2} alt="Skote" />
                    </Col>
                    <Col md={8}>
                      <CardBody>
                        <CardTitle className="h5">Card title</CardTitle>
                        <CardText>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <Row className="no-gutters align-items-center">
                    <Col md={8}>
                      <CardBody>
                        <CardTitle className="h5">Card title</CardTitle>
                        <CardText>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Col>
                    <Col md={4}>
                      <CardImg className="img-fluid" src={img3} alt="Skote" />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card color="primary" className="text-white-50">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-bullseye-arrow me-3"></i> Primary
                      Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card color="success" className="text-white-50">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-check-all me-3"></i> Success Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card color="info" className="text-white-50">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-alert-circle-outline me-3"></i>Info
                      Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card color="warning" className="text-white-50">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-alert-outline me-3"></i>Warning Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card color="danger" className="text-white-50">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-block-helper me-3"></i>Danger Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card color="dark" className="text-light">
                  <CardBody>
                    <CardTitle className="h5 mt-0 mb-4 text-white">
                      <i className="mdi mdi-alert-circle-outline me-3"></i>Dark
                      Card
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <Card outline color="primary" className="border border-primary">
                  <CardHeader className="bg-transparent border-primary">
                    <h5 className="my-0 text-primary">
                      <i className="mdi mdi-bullseye-arrow me-3"></i>Primary
                      outline Card
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="h5 mt-0">card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card outline color="danger" className="border border-danger">
                  <CardHeader className="bg-transparent border-danger">
                    <h5 className="my-0 text-danger">
                      <i className="mdi mdi-block-helper me-3"></i>Danger
                      outline Card
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="h5 mt-0">card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card outline color="success" className="border border-success">
                  <CardHeader className="bg-transparent border-success">
                    <h5 className="my-0 text-success">
                      <i className="mdi mdi-check-all me-3"></i>Success Card
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="h5 mt-0">card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="col-12 mb-4">
                <h4 className="my-3">Card groups</h4>
                <CardDeck className="card-deck-wrapper">
                  <div className="card-group">
                    <Card className="mb-4">
                      <CardImg top className="img-fluid" src={img4} alt="Skote" />
                      <CardBody>
                        <CardTitle className="mt-0">Card title</CardTitle>
                        <CardText>
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is a
                          little bit longer.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardImg top className="img-fluid" src={img5} alt="Skote" />
                      <CardBody>
                        <CardTitle className="mt-0">Card title</CardTitle>
                        <CardText>
                          This card has supporting text below as a natural lead-in
                          to additional content.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardImg top className="img-fluid" src={img6} alt="Skote" />
                      <CardBody>
                        <CardTitle className="mt-0">Card title</CardTitle>
                        <CardText>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                </CardDeck>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <h4 className="my-3">Cards Masonry</h4>
                <CardColumns>
                  <Card>
                    <CardImg top src={img3} alt="Skote" />
                    <CardBody>
                      <CardTitle className="h5">Card title that wraps to a new line</CardTitle>
                      <CardText>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <blockquote className="blockquote-reverse  mb-0">
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </CardText>
                        <footer className="blockquote-footer mt-0">
                          <small className="text-muted">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top src={img5} alt="Skote" />
                    <CardBody>
                      <CardTitle className="h5">Card title</CardTitle>
                      <CardText>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card color="primary" className="text-white text-center p-3">
                    <blockquote className="card-blockquote mb-0">
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat.
                      </CardText>
                      <footer className="blockquote-footer mt-0">
                        <small className="text-white">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card>
                  <Card className="text-center">
                    <CardBody>
                      <CardTitle className="h5">Card title</CardTitle>
                      <CardText>
                        This card has a regular title and short paragraphy of
                        text below it.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top src={img7} alt="Skote" />
                  </Card>
                  <Card className="p-3 text-end">
                    <blockquote className="blockquote mb-0">
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </CardText>
                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle className="h5">Card title</CardTitle>
                      <CardText>
                        This is another card with title and supporting text
                        below. This card has some additional content to make it
                        slightly taller overall.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </CardColumns>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default UiCards;
