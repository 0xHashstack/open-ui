import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Modal,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      modal_standard: false,
      modal_fullscreen: false,
      modal_large: false,
      modal_xlarge: false,
      modal_small: false,
      modal_center: false,
      modal_scroll: false,
      modal_backdrop: false,
    }
    this.tog_standard = this.tog_standard.bind(this)
    this.tog_fullscreen = this.tog_fullscreen.bind(this)
    this.tog_xlarge = this.tog_xlarge.bind(this)
    this.tog_large = this.tog_large.bind(this)
    this.tog_small = this.tog_small.bind(this)
    this.tog_center = this.tog_center.bind(this)
    this.tog_scroll = this.tog_scroll.bind(this)
    this.tog_backdrop = this.tog_backdrop.bind(this)
  }

  tog_standard() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard,
    }))
    this.removeBodyCss()
  }

  removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  tog_fullscreen() {
    this.setState(prevState => ({
      modal_fullscreen: !prevState.modal_fullscreen,
    }))
    this.removeBodyCss()
  }

  tog_backdrop() {
    this.setState(prevState => ({
      modal_backdrop: !prevState.modal_backdrop,
    }))
    this.removeBodyCss()
  }

  tog_large() {
    this.setState(prevState => ({
      modal_large: !prevState.modal_large,
    }))
    this.removeBodyCss()
  }

  tog_xlarge() {
    this.setState(prevState => ({
      modal_xlarge: !prevState.modal_xlarge,
    }))
    this.removeBodyCss()
  }

  tog_small() {
    this.setState(prevState => ({
      modal_small: !prevState.modal_small,
    }))
    this.removeBodyCss()
  }

  tog_center() {
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,
    }))
    this.removeBodyCss()
  }

  tog_scroll() {
    this.setState(prevState => ({
      modal_scroll: !prevState.modal_scroll,
    }))
    this.removeBodyCss()
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Modals | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Modals" />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Modals Examples</CardTitle>
                    <p className="card-title-desc">
                      Modals are streamlined, but flexible dialog prompts
                      powered by JavaScript. They support a number of use cases
                      from user notification to completely custom content and
                      feature a handful of helpful subcomponents, sizes, and
                      more.
                    </p>

                    <div
                      className="modal bs-example-modal"
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>One fine body&hellip;</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
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
                    <CardTitle className="h4">
                      Default Modal
                    </CardTitle>
                    <p className="card-title-desc">Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
                    <div>
                      <button
                        type="button"
                        onClick={this.tog_standard}
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Standard Modal
                      </button>

                      <Modal
                        isOpen={this.state.modal_standard}
                        toggle={this.tog_standard}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0" id="myModalLabel">
                            Modal Heading
                          </h5>
                          <button
                            type="button"
                            onClick={() =>
                              this.setState({ modal_standard: false })
                            }
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>Overflowing text to show scroll behavior</h5>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            onClick={this.tog_standard}
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Fullscreen Modal
                    </CardTitle>
                    <p className="card-title-desc">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.</p>
                    <div>
                      <button
                        type="button"
                        onClick={this.tog_fullscreen}
                        className="btn btn-primary"
                        data-toggle="modal"
                      >
                        Fullscreen Modal
                      </button>
                      <Modal
                        size="xl"
                        isOpen={this.state.modal_fullscreen}
                        toggle={this.tog_fullscreen}
                        className="modal-fullscreen"
                      >
                        <div className="modal-header">
                          <h5
                            className="modal-title mt-0"
                            id="exampleModalFullscreenLabel"
                          >
                            Fullscreen Modal
                          </h5>
                          <button
                            onClick={() =>
                              this.setState({ modal_fullscreen: false })
                            }
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>Overflowing text to show scroll behavior</h5>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p>Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p>Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            onClick={this.tog_fullscreen}
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Optional Sizes
                    </CardTitle>
                    <p className="card-title-desc">Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.</p>
                    <div className="button-items">
                      <button
                        type="button"
                        onClick={this.tog_xlarge}
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bs-example-modal-xl"
                      >
                        Extra large modal
                      </button>
                      <button
                        type="button"
                        onClick={this.tog_large}
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg"
                      >
                        Large modal
                      </button>
                      <button
                        type="button"
                        onClick={this.tog_small}
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target=".bs-example-modal-sm"
                      >
                        Small modal
                      </button>
                    </div>

                    <div>
                      <Modal
                        size="xl"
                        isOpen={this.state.modal_xlarge}
                        toggle={this.tog_xlarge}
                      >
                        <div className="modal-header">
                          <h5
                            className="modal-title mt-0"
                            id="myExtraLargeModalLabel"
                          >
                            Extra large modal
                          </h5>
                          <button
                            onClick={() =>
                              this.setState({ modal_xlarge: false })
                            }
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                        </div>
                      </Modal>
                      <Modal
                        size="lg"
                        isOpen={this.state.modal_large}
                        toggle={this.tog_large}
                      >
                        <div className="modal-header">
                          <h5
                            className="modal-title mt-0"
                            id="myLargeModalLabel"
                          >
                            Large Modal
                          </h5>
                          <button
                            onClick={() =>
                              this.setState({ modal_large: false })
                            }
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                        </div>
                      </Modal>
                      <Modal
                        size="sm"
                        isOpen={this.state.modal_small}
                        toggle={this.tog_small}
                      >
                        <div className="modal-header">
                          <h5
                            className="modal-title mt-0"
                            id="mySmallModalLabel"
                          >
                            Small Modal
                          </h5>
                          <button
                            onClick={() =>
                              this.setState({ modal_small: false })
                            }
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p className="mb-0">
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h5">
                      Vertically Centered
                    </CardTitle>
                    <p className="card-title-desc">Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.tog_center}
                        data-toggle="modal"
                        data-target=".bs-example-modal-center"
                      >
                        Center modal
                      </button>
                      <Modal
                        isOpen={this.state.modal_center}
                        toggle={this.tog_center}
                        centered={true}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">Center Modal</h5>
                          <button
                            type="button"
                            onClick={() =>
                              this.setState({ modal_center: false })
                            }
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p className="mb-0">
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h5">
                      Scrollable modal
                    </CardTitle>
                    <p className="card-title-desc">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.tog_scroll}
                        data-toggle="modal"
                      >
                        Scrollable modal
                      </button>
                      <Modal
                        isOpen={this.state.modal_scroll}
                        toggle={this.tog_scroll}
                        scrollable={true}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">
                            Scrollable modal
                          </h5>
                          <button
                            type="button"
                            onClick={() =>
                              this.setState({ modal_scroll: false })
                            }
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() =>
                                this.setState({ modal_scroll: false })
                              }
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Static Backdrop</CardTitle>
                    <p className="card-title-desc">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
                    <div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.tog_backdrop}
                        data-toggle="modal"
                      >
                        Static backdrop modal
                      </button>
                      <Modal
                        isOpen={this.state.modal_backdrop}
                        toggle={this.tog_backdrop}
                        scrollable={true}
                        backdrop={'static'}
                        id="staticBackdrop"
                      >
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" className="btn-close" onClick={() =>
                            this.setState({ modal_backdrop: false })
                          } aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>I will not close if you click outside me. Don&apos;t even try to press escape key.</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-light" onClick={() =>
                            this.setState({ modal_backdrop: false })
                          }>Close</button>
                          <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                      </Modal>
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
}

export default UiModal