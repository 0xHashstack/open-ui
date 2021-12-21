import React from "react";
import MetaTags from 'react-meta-tags';

import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Container,
} from "reactstrap";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiImages = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Images | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Images" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Image Rounded & Circle</CardTitle>
                  <CardSubtitle className="mb-3">
                    Use className <code>.rounded</code> and{" "}
                    <code>.rounded-circle</code>.
                  </CardSubtitle>
                  <Row>
                    <Col md={6}>
                      <img
                        className="rounded ms-2"
                        alt="Skote"
                        width="200"
                        src={img4}
                      />
                    </Col>
                    <Col md={6}>
                      <div className="mt-4 mt-md-0">
                        <img
                          className="rounded-circle avatar-xl"
                          alt="Skote"
                          src={avatar4}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Image thumbnails</CardTitle>
                  <CardSubtitle className="mb-3">
                    In addition to our border-radius utilities, you can use{" "}
                    <code className="highlighter-rouge">.img-thumbnail</code> to
                    give an image a rounded 1px border appearance.
                  </CardSubtitle>
                  <Row>
                    <Col md={6}>
                      <img
                        className="img-thumbnail"
                        alt="Skote"
                        width="200"
                        src={img3}
                      />
                    </Col>
                    <Col md={6}>
                      <div className="mt-4 mt-md-0">
                        <img
                          className="img-thumbnail rounded-circle avatar-xl"
                          alt="Skote"
                          src={avatar3}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Skotes</CardTitle>
                  <CardSubtitle className="mb-3">
                    Images in Bootstrap are made responsive with{" "}
                    <code className="highlighter-rouge">.img-fluid</code>.{" "}
                    <code className="highlighter-rouge">max-width: 100%;</code>{" "}
                    and <code className="highlighter-rouge">height: auto;</code>{" "}
                    are applied to the image so that it scales with the parent
                    element.
                  </CardSubtitle>
                  <CardImg className="img-fluid" src={img2} alt="Skote" />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle>Image Sizes</CardTitle>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col lg={4}>
                          <CardImg
                            src={avatar3}
                            alt="SkoteSkote"
                            className="rounded avatar-sm"
                          />
                          <CardText className="mt-2 mb-lg-0">
                            <code>.avatar-sm</code>
                          </CardText>
                        </Col>
                        <Col lg={4}>
                          <CardImg
                            src={avatar4}
                            alt="Skote"
                            className="rounded avatar-md"
                          />
                          <CardText className="mt-2  mb-lg-0">
                            <code>.avatar-md</code>
                          </CardText>
                        </Col>
                        <Col lg={4}>
                          <CardImg
                            src={avatar5}
                            alt="Skote"
                            className="rounded avatar-lg"
                          />
                          <CardText className="mt-2 mb-lg-0">
                            <code>.avatar-lg</code>
                          </CardText>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col lg={4}>
                          <CardImg
                            src={avatar3}
                            alt="Skote"
                            className="rounded-circle avatar-sm"
                          />
                          <CardText className="mt-2 mb-lg-0">
                            <code>.avatar-sm</code>
                          </CardText>
                        </Col>
                        <Col lg={4}>
                          <CardImg
                            src={avatar4}
                            alt=""
                            className="rounded-circle avatar-md"
                          />
                          <CardText className="mt-2  mb-lg-0">
                            <code>.avatar-md</code>
                          </CardText>
                        </Col>
                        <Col lg={4}>
                          <CardImg
                            src={avatar5}
                            alt="Skote"
                            className="rounded-circle avatar-lg"
                          />
                          <CardText className="mt-2 mb-lg-0">
                            <code>.avatar-lg</code>
                          </CardText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Media Object</h4>
                  <p className="card-title-desc">The images or other media can be
                    aligned top, middle, or bottom. The default is top aligned.
                  </p>


                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img className="rounded avatar-sm" src={avatar3} alt="Generic placeholder image" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>Top-aligned media</h5>
                      <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <img className="rounded avatar-sm" src={avatar5} alt="Generic placeholder image" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>Center-aligned media</h5>
                      <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-end">
                    <div className="flex-shrink-0 me-3">
                      <img className="rounded avatar-sm" src={avatar1} alt="Generic placeholder image" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>Bottom-aligned media</h5>
                      <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiImages;
