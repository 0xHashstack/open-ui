import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input
} from "reactstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

//import Charts
import StackedColumnChart from "./StackedColumnChart"

import modalimage1 from "../../assets/images/product/img-7.png"
import modalimage2 from "../../assets/images/product/img-4.png"

//import action
import { getChartsData } from "../../store/actions"

// Pages Components
import WelcomeComp from "./WelcomeComp"
import MonthlyEarning from "./MonthlyEarning"
import SocialSource from "./SocialSource"
import ActivityComp from "./ActivityComp"
import TopCities from "./TopCities"
import LatestTranaction from "./LatestTranaction"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import classNames from "classnames";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        {
          title: "Revenue",
          iconClass: "bx-archive-in",
          description: "$35, 723",
        },
        {
          title: "Average Price",
          iconClass: "bx-purchase-tag-alt",
          description: "$16.2",
        },
      ],
      email: [
        { title: "Week", linkto: "#", isActive: false },
        { title: "Month", linkto: "#", isActive: false },
        { title: "Year", linkto: "#", isActive: true },
      ],
      modal: false,
      subscribemodal: false,
      chartSeries: [],
      periodType: "yearly"
    }

    this.togglemodal.bind(this)
    this.togglesubscribemodal.bind(this)
  }

  componentDidMount() {
    const { onGetChartsData } = this.props;
    setTimeout(() => this.setState({ subscribemodal: true }), 2000);
    onGetChartsData("yearly");
  }


  togglemodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  togglesubscribemodal = () => {
    this.setState(prevState => ({
      subscribemodal: !prevState.subscribemodal,
    }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, chartSeries: this.props.chartsData })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dashboard | Skote - React Admin & Dashboard Template</title> 
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title={this.props.t("Dashboards")}
              breadcrumbItem={this.props.t("Dashboard")}
            />
            <Row>
              <Col xl="4">
                <WelcomeComp />
                <MonthlyEarning />
              </Col>
              <Col xl="8">
                <Row>
                  {/* Reports Render */}
                  {this.state.reports.map((report, key) => (
                    <Col md="4" key={"_col_" + key}>
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                {report.title}
                              </p>
                              <h4 className="mb-0">{report.description}</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + report.iconClass + " font-size-24"
                                  }
                                />
                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Card>
                  <CardBody>
                    <div className="d-sm-flex flex-wrap">
                      <CardTitle className="card-title mb-4 h4">
                        Email Sent
                      </CardTitle>
                      <div className="ms-auto">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={classNames(
                                { "active": this.state.periodType === "weekly" },
                                "nav-link"
                              )}
                              onClick={() => {
                                this.setState({ ...this.state, periodType: "weekly" });
                                this.props.onGetChartsData("weekly")
                              }}
                              id="one_month"
                            >
                              Week
                            </Link>{" "}
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={classNames(
                                { "active": this.state.periodType === "monthly" },
                                "nav-link"
                              )}
                              onClick={() => {
                                this.setState({ ...this.state, periodType: "monthly" });
                                this.props.onGetChartsData("monthly")
                              }}
                              id="one_month"
                            >
                              Month
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={classNames(
                                { "active": this.state.periodType === "yearly" },
                                "nav-link"
                              )}
                              onClick={() => {
                                this.setState({ ...this.state, periodType: "yearly" });
                                this.props.onGetChartsData("yearly")
                              }}
                              id="one_month"
                            >
                              Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <StackedColumnChart chartSeries={this.state.chartSeries} />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl="4">
                <SocialSource />
              </Col>
              <Col xl="4">
                <ActivityComp />
              </Col>
              <Col xl="4">
                <TopCities />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <LatestTranaction />
              </Col>
            </Row>
          </Container>
        </div>

        <Modal
          isOpen={this.state.subscribemodal}
          role="dialog"
          autoFocus={true}
          data-toggle="modal"
          centered
          toggle={this.togglesubscribemodal}
        >
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button type="button" className="btn-close" onClick={() =>
                this.setState({ subscribemodal: false })
              } data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-4">

                <div className="avatar-md mx-auto mb-4">
                  <div className="avatar-title bg-light  rounded-circle text-primary h1">
                    <i className="mdi mdi-email-open"></i>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <h4 className="text-primary">Subscribe !</h4>
                    <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                    <div className="input-group  rounded bg-light"  >
                      <Input type="email" className="form-control bg-transparent border-0" placeholder="Enter Email address" />
                      <Button color="primary" type="button" id="button-addon2">
                        <i className="bx bxs-paper-plane"></i>
                      </Button>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal}
          role="dialog"
          autoFocus={true}
          centered={true}
          className="exampleModal"
          tabindex="-1"
          toggle={this.togglemodal}
        >
          <div className="modal-content">
            <ModalHeader toggle={this.togglemodal}>Order Details</ModalHeader>
            <ModalBody>
              <p className="mb-2">
                Product id: <span className="text-primary">#SK2540</span>
              </p>
              <p className="mb-4">
                Billing Name:{" "}
                <span className="text-primary">Neal Matthews</span>
              </p>

              <div className="table-responsive">
                <Table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div>
                          <img src={modalimage1} alt="" className="avatar-sm" />
                        </div>
                      </th>
                      <td>
                        <div>
                          <h5 className="text-truncate font-size-14">
                            Solid Color T-Shirt
                          </h5>
                          <p className="text-muted mb-0">$ 225 x 1</p>
                        </div>
                      </td>
                      <td>$ 255</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div>
                          <img src={modalimage2} alt="" className="avatar-sm" />
                        </div>
                      </th>
                      <td>
                        <div>
                          <h5 className="text-truncate font-size-14">
                            Hoodie (Blue)
                          </h5>
                          <p className="text-muted mb-0">$ 145 x 1</p>
                        </div>
                      </td>
                      <td>$ 145</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <h6 className="m-0 text-right">Sub Total:</h6>
                      </td>
                      <td>$ 400</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <h6 className="m-0 text-right">Shipping:</h6>
                      </td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <h6 className="m-0 text-right">Total:</h6>
                      </td>
                      <td>$ 400</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                color="secondary"
                onClick={this.togglemodal}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func
}

const mapStateToProps = ({ Dashboard }) => ({
  chartsData: Dashboard.chartsData,
})

const mapDispatchToProps = dispatch => ({
  onGetChartsData: (periodType) => dispatch(getChartsData(periodType)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(withTranslation()(Dashboard))

