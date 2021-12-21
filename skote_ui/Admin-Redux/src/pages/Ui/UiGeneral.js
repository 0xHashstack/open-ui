import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Popover,
  PopoverBody,
  PopoverHeader,
  Row,
  Tooltip,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiGeneral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Popover
      popovertop1: false,
      popoverleft: false,
      popoverright: false,
      popoverbottom: false,
    }
    this.toggletop1 = this.toggletop1.bind(this)
    this.toggleright = this.toggleright.bind(this)
    this.toggleleft = this.toggleleft.bind(this)
    this.togglebottom = this.togglebottom.bind(this)
    this.toggledismiss = this.toggledismiss.bind(this)
    this.toggledismissclose = this.toggledismissclose.bind(this)
  }

  toggletop1() {
    this.setState({ popovertop1: !this.state.popovertop1 })
  }

  toggleleft() {
    this.setState({ popoverleft: !this.state.popoverleft })
  }

  toggleright() {
    this.setState({ popoverright: !this.state.popoverright })
  }

  togglebottom() {
    this.setState({ popoverbottom: !this.state.popoverbottom })
  }

  toggledismiss() {
    this.setState({ popoverdismiss: !this.state.popoverdismiss })
  }

  toggledismissclose() {
    this.setState({ popoverdismiss: false })
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>General | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="General" />

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl={6}>
                        <CardTitle className="h4">Badges</CardTitle>
                        <p className="card-title-desc">
                          Add any of the below mentioned modifier classes to
                          change the appearance of a badge.
                        </p>
                        <div>
                          <span className="badge bg-primary">Primary</span>{" "}
                          <span className="badge bg-success">Success</span>{" "}
                          <span className="badge bg-info">Info</span>{" "}
                          <span className="badge bg-warning">Warning</span>{" "}
                          <span className="badge bg-danger">Danger</span>{" "}
                          <span className="badge bg-dark">Dark</span>
                        </div>

                        <div className="mt-5">
                          <h5 className="font-size-14">Soft Badge</h5>
                          <span className="badge badge-soft-primary">
                            Primary
                          </span>{" "}
                          <span className="badge badge-soft-success">
                            Success
                          </span>{" "}
                          <span className="badge badge-soft-info">Info</span>{" "}
                          <span className="badge badge-soft-warning">
                            Warning
                          </span>{" "}
                          <span className="badge badge-soft-danger">
                            Danger
                          </span>{" "}
                          <span className="badge badge-soft-dark">Dark</span>
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mt-4 mt-lg-0">
                          <CardTitle className="h4">Pill badges</CardTitle>
                          <p className="card-title-desc">
                            Use the <code>.badge-pill</code> modifier className to
                            make badges more rounded (with a larger{" "}
                            <code>border-radius</code>
                            and additional horizontal <code>padding</code>).
                            Useful if you miss the badges from v3.
                          </p>

                          <div>
                            <span className="badge rounded-pill bg-primary">
                              Primary
                            </span>{" "}
                            <span className="badge rounded-pill bg-success">
                              Success
                            </span>{" "}
                            <span className="badge rounded-pill bg-info">
                              Info
                            </span>{" "}
                            <span className="badge rounded-pill bg-warning">
                              Warning
                            </span>{" "}
                            <span className="badge rounded-pill bg-danger">
                              Danger
                            </span>{" "}
                            <span className="badge rounded-pill bg-dark">
                              Dark
                            </span>
                          </div>

                          <div className="mt-5">
                            <h5 className="font-size-14">Soft Badge</h5>
                            <span className="badge rounded-pill badge-soft-primary">
                              Primary
                            </span>{" "}
                            <span className="badge rounded-pill badge-soft-success">
                              Success
                            </span>{" "}
                            <span className="badge rounded-pill badge-soft-info">
                              Info
                            </span>{" "}
                            <span className="badge rounded-pill badge-soft-warning">
                              Warning
                            </span>{" "}
                            <span className="badge rounded-pill badge-soft-danger">
                              Danger
                            </span>{" "}
                            <span className="badge rounded-pill badge-soft-dark">
                              Dark
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-5" />
                    <Row>
                      <Col xl="6">
                        <div className="mt-4">
                          <h4 className="card-title">Badges in Buttons</h4>
                          <p className="card-title-desc">Badges can be used as part of links or buttons to provide a counter.</p>

                          <div className="button-items">
                            <Button color="primary">
                              Notifications <span className="badge bg-success ms-1">4</span>
                            </Button>{" "}
                            <Button color="success">
                              Messages <span className="badge bg-danger ms-1">3</span>
                            </Button>{" "}
                            <Button outline color="secondary">
                              Draft <span className="badge bg-success ms-1">2</span>
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col xl="6">
                        <div className="mt-4">
                          <CardTitle className="h4">
                            Badges Position Examples
                          </CardTitle>
                          <p className="card-title-desc">Example of Badges Position</p>
                          <div className="d-flex flex-wrap gap-3">
                            <Button color="primary" className="position-relative">
                              Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99 <span className="visually-hidden">unread messages</span></span>
                            </Button>

                            <Button color="light" className="position-relative">
                              Alerts <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                            </Button>

                            <Button color="primary" className="position-relative p-0 avatar-xs rounded">
                              <span className="avatar-title bg-transparent">
                                <i className="bx bxs-envelope"></i>
                              </span>
                              <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                            </Button>

                            <Button color="light" className="position-relative p-0 avatar-xs rounded-circle">
                              <span className="avatar-title bg-transparent text-reset">
                                <i className="bx bxs-bell"></i>
                              </span>
                            </Button>

                            <Button color="light" className="position-relative p-0 avatar-xs rounded-circle">
                              <span className="avatar-title bg-transparent text-reset">
                                <i className="bx bx-menu"></i>
                              </span>
                              <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Popovers</CardTitle>
                    <p className="card-title-desc">
                      Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using Bootstrap in RTL.
                    </p>
                    <div className="button-items">
                      <Button
                        id="popovertop1"
                        color="secondary"
                        onClick={this.toggletop1}
                      >
                        Popover on top
                      </Button>
                      <Popover
                        placement="right"
                        isOpen={this.state.popovertop1}
                        target="popovertop1"
                        toggle={this.toggletop1}
                      >
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </PopoverBody>
                      </Popover>
                      &nbsp;
                      <Button
                        id="Popoverright"
                        onClick={this.toggleright}
                        color="secondary"
                      >
                        Popover on right
                      </Button>
                      <Popover
                        placement="right"
                        isOpen={this.state.popoverright}
                        target="Popoverright"
                        toggle={this.toggleright}
                      >
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </PopoverBody>
                      </Popover>
                      &nbsp;
                      <Button
                        id="Popoverbottom"
                        onClick={this.togglebottom}
                        color="secondary"
                      >
                        Popover on bottom
                      </Button>
                      <Popover
                        placement="bottom"
                        isOpen={this.state.popoverbottom}
                        target="Popoverbottom"
                        toggle={this.togglebottom}
                      >
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </PopoverBody>
                      </Popover>
                      &nbsp;
                      <Button
                        id="Popoverleft"
                        onClick={this.toggleleft}
                        color="secondary"
                      >
                        Popover on left
                      </Button>
                      <Popover
                        placement="left"
                        isOpen={this.state.popoverleft}
                        target="Popoverleft"
                        toggle={this.toggleleft}
                      >
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </PopoverBody>
                      </Popover>
                      &nbsp;
                      <Button
                        id="Popoverdismiss"
                        className="btn btn-success"
                        onClick={this.toggledismiss}
                      >
                        Dismissible popover
                      </Button>
                      <Popover
                        onClick={this.toggledismissclose}
                        placement="bottom"
                        isOpen={this.state.popoverdismiss}
                        target="Popoverdismiss"
                        toggle={this.toggledismiss}
                      >
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </PopoverBody>
                      </Popover>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Tooltips</CardTitle>
                    <p className="card-title-desc">
                      Hover over the links below to see tooltips:
                    </p>

                    <div className="button-items">
                      <Tooltip
                        placement="top"
                        isOpen={this.state.tttop}
                        target="TooltipTop"
                        toggle={() =>
                          this.setState({ tttop: !this.state.tttop })
                        }
                      >
                        Hello world!
                      </Tooltip>
                      <Tooltip
                        placement="right"
                        isOpen={this.state.ttright}
                        target="TooltipRight"
                        toggle={() =>
                          this.setState({ ttright: !this.state.ttright })
                        }
                      >
                        Hello world!
                      </Tooltip>
                      <Tooltip
                        placement="bottom"
                        isOpen={this.state.ttbottom}
                        target="TooltipBottom"
                        toggle={() =>
                          this.setState({ ttbottom: !this.state.ttbottom })
                        }
                      >
                        Hello world!
                      </Tooltip>
                      <Tooltip
                        placement="left"
                        isOpen={this.state.ttleft}
                        target="TooltipLeft"
                        toggle={() =>
                          this.setState({ ttleft: !this.state.ttleft })
                        }
                      >
                        Hello world!
                      </Tooltip>

                      <button
                        type="button"
                        className="btn btn-primary"
                        id="TooltipTop"
                      >
                        Tooltip on top
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="TooltipRight"
                      >
                        Tooltip on right
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="TooltipBottom"
                      >
                        Tooltip on bottom
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="TooltipLeft"
                      >
                        Tooltip on left
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">Pagination</CardTitle>
                    <Row>
                      <Col xl={6}>
                        <CardTitle className="h5 font-size-14">Default Example</CardTitle>
                        <p className="card-title-desc">
                          Pagination links indicate a series of related content
                          exists across multiple pages.
                        </p>

                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                Previous
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                Next
                              </Link>
                            </li>
                          </ul>
                        </nav>

                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link"
                                to="#"
                                aria-label="Previous"
                              >
                                <i className="mdi mdi-chevron-left"></i>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link"
                                to="#"
                                aria-label="Next"
                              >
                                <i className="mdi mdi-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </Col>

                      <Col xl={6}>
                        <div className="mt-4 mt-lg-0">
                          <CardTitle className="h5 font-size-14">Disabled and active states</CardTitle>
                          <p className="card-title-desc">
                            Pagination links are customizable for different
                            circumstances. Use <code>.disabled</code> for links
                            that appear un-clickable and <code>.active</code> to
                            indicate the current page.
                          </p>

                          <nav aria-label="...">
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                  Previous
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item active">
                                <Link className="page-link" to="#">
                                  2 <span className="sr-only">(current)</span>
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </nav>

                          <nav aria-label="...">
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <span className="page-link"><i className="mdi mdi-chevron-left"></i></span>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item active">
                                <span className="page-link">
                                  2<span className="sr-only">(current)</span>
                                </span>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  <i className="mdi mdi-chevron-right"></i>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col xl={6}>
                        <div className="mt-4">
                          <CardTitle className="h5 font-size-14">Sizing</CardTitle>
                          <p className="card-title-desc">
                            Fancy larger or smaller pagination? Add{" "}
                            <code>.pagination-lg</code> or{" "}
                            <code>.pagination-sm</code> for additional sizes.
                          </p>

                          <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                              <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                  Previous
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </nav>

                          <nav aria-label="...">
                            <ul className="pagination pagination-sm">
                              <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                  Previous
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mt-4">
                          <CardTitle className="h5 font-size-14">Alignment</CardTitle>
                          <p className="card-title-desc">
                            Change the alignment of pagination components with
                            flexbox utilities.
                          </p>

                          <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                              <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                  Previous
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </nav>

                          <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                              <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                  Previous
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Border spinner</CardTitle>
                    <p className="card-title-desc">
                      Use the border spinners for a lightweight loading
                      indicator.
                    </p>
                    <div>
                      <div
                        className="spinner-border text-primary m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-secondary m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-success m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-info m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-warning m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-danger m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border text-dark m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </CardBody>{" "}
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Growing spinner</CardTitle>
                    <p className="card-title-desc">
                      If you don’t fancy a border spinner, switch to the grow
                      spinner. While it doesn’t technically spin, it does
                      repeatedly grow!
                    </p>
                    <div>
                      <div
                        className="spinner-grow text-primary m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow text-secondary m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow text-success m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-info m-1" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow text-warning m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow text-danger m-1"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-dark m-1" role="status">
                        <span className="sr-only">Loading...</span>
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
}

export default UiGeneral
