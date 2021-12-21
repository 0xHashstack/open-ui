import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import image
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const images = [img1, img2, img3, img4, img5, img6, img7];
const imageZoom = [img3, img7];

class UiLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isFits: false,
      isEffects: false,
      isGallery: false,
      isGalleryZoom: false,
      isOpen: false,
      isOpen1: false,
      modal_standard: false,
    };
    this.openModal = this.openModal.bind(this);
    this.openModal1 = this.openModal1.bind(this);
    this.tog_standard = this.tog_standard.bind(this);
  }

  tog_standard() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard,
    }));
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  openModal1() {
    this.setState({ isOpen1: true });
  }

  render() {
    const { photoIndex } = this.state;

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Lightbox | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Lightbox" />

            {this.state.isFits ? (
              <Lightbox
                mainSrc={images[1]}
                enableZoom={false}
                imageCaption={
                  "Caption. Can be aligned it to any side and contain any HTML."
                }
                onCloseRequest={() => this.setState({ isFits: false })}
              />
            ) : null}

            {this.state.isEffects ? (
              <Lightbox
                mainSrc={images[2]}
                enableZoom={false}
                onCloseRequest={() => this.setState({ isEffects: false })}
              />
            ) : null}

            {this.state.isGallery ? (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                enableZoom={false}
                onCloseRequest={() => this.setState({ isGallery: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
                imageCaption={"Project " + parseFloat(photoIndex + 1)}
              />
            ) : null}

            {this.state.isGalleryZoom ? (
              <Lightbox
                mainSrc={imageZoom[photoIndex]}
                nextSrc={imageZoom[(photoIndex + 1) % imageZoom.length]}
                prevSrc={
                  imageZoom[(photoIndex + imageZoom.length - 1) % imageZoom.length]
                }
                onCloseRequest={() => this.setState({ isGalleryZoom: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + imageZoom.length - 1) % imageZoom.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % imageZoom.length,
                  })
                }
              />
            ) : null}

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Single image lightbox</CardTitle>
                    <p className="card-title-desc">
                      Three simple popups with different scaling settings.
                    </p>
                    <Row>
                      <Col className="col-6">
                        <div>
                          <h5 className="mt-0 font-size-14">
                            Fits (Horz/Vert)
                          </h5>
                          <img
                            onClick={() => this.setState({ isFits: true })}
                            className="img-fluid"
                            alt="Skote"
                            src={img2}
                            width="145"
                          />
                        </div>
                      </Col>
                      <Col className="col-6">
                        <div>
                          <h5 className="mt-0 font-size-14">Effects</h5>
                          <img
                            onClick={() => this.setState({ isEffects: true })}
                            className="img-fluid"
                            alt=""
                            src={img3}
                            width="75"
                          />

                          <CardText className="mt-2 mb-0 text-muted">
                            No gaps, zoom animation, close icon in top-right
                            corner.
                          </CardText>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Lightbox gallery</CardTitle>
                    <p className="card-title-desc">
                      In this example lazy-loading of images is enabled for the
                      next image based on move direction.{" "}
                    </p>
                    <div className="popup-gallery d-flex flex-wrap">
                      <div className="img-fluid">
                        <img
                          src={img1}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 0 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img2}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 1 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img3}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 2 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img4}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 3 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img5}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 4 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img6}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 5 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Zoom Gallery</CardTitle>
                    <p className="card-title-desc">
                      Zoom effect works only with images.
                    </p>

                    <div className="zoom-gallery d-flex flex-wrap">
                      <img
                        src={img3}
                        className="float-left"
                        onClick={() =>
                          this.setState({ isGalleryZoom: true, photoIndex: 0 })
                        }
                        alt=""
                        width="275"
                      />
                      <img
                        src={img7}
                        className="float-left"
                        onClick={() =>
                          this.setState({ isGalleryZoom: true, photoIndex: 1 })
                        }
                        alt=""
                        width="275"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Popup with video or map</CardTitle>
                    <p className="card-title-desc">
                      In this example lazy-loading of images is enabled for the
                      next image based on move direction.{" "}
                    </p>

                    <Row>
                      <Col>
                        <div className="button-items">
                          <Button
                            className="btn btn-secondary"
                            onClick={this.openModal}
                          >
                            Open Youtube Video
                          </Button>{" "}
                          <Button
                            className="btn btn-secondary"
                            onClick={this.openModal1}
                          >
                            Open Vimeo Video
                          </Button>{" "}
                          <ModalVideo
                            videoId="L61p2uyiMSo"
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            onClose={() => this.setState({ isOpen: false })}
                          />
                          <ModalVideo
                            videoId="L61p2uyiMSo"
                            channel="youtube"
                            isOpen={this.state.isOpen1}
                            onClose={() => this.setState({ isOpen1: false })}
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">Popup with form</CardTitle>
                    <div>
                      <Link
                        onClick={() =>
                          this.setState({ isModal: !this.state.modal })
                        }
                        to="#"
                        className="popup-form btn btn-primary"
                      >
                        Popup form
                      </Link>
                    </div>

                    <Modal
                      size="lg"
                      isOpen={this.state.isModal}
                      toggle={() =>
                        this.setState({ isModal: !this.state.isModal })
                      }
                    >
                      <ModalHeader
                        toggle={() =>
                          this.setState({ isModal: !this.state.isModal })
                        }
                      >
                        Form
                      </ModalHeader>
                      <ModalBody>
                        <form>
                          <Row>
                            <Col lg={4}>
                              <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <textarea
                                  className="form-control"
                                  id="subject"
                                  rows="3"
                                ></textarea>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <div className="text-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </ModalBody>
                    </Modal>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default UiLightbox;
