import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Card, CardBody, Col, Container, Row } from "reactstrap"

// Rating Plugin
import Rating from "react-rating"
import RatingTooltip from "react-rating-tooltip"

class UiRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipContent: ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"],
      tooltipContentMore: ["1", "2", "3", "4", "5", "6", "7", "8"],
      tooltipContentHalf: ["6", "7", "8", "9", "10"],
      tooltipContentMiddle: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      tooltipContentStep: ["2", "4", "6", "8", "10"],
      default: "",
      half: "",
      customize: "",
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Rating | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Rating" />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Default rating</h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_1"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_01"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />{" "}
                          <span>{this.state.default}</span>
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Half rating</h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_12"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_12"}
                                className="mdi mdi-star-outline text-primary"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Disabled rating</h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_2"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_02"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">
                            Readonly rating with a value
                          </h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_3"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_03"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                            defaultRating={3}
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">
                            Customized heart rating
                          </h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate =>
                              this.setState({ customize: rate })
                            }
                            ActiveComponent={
                              <i
                                key={"active_4"}
                                className="mdi mdi-heart text-danger"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_04"}
                                className="mdi mdi-heart-outline text-danger"
                                style={this.state.starStyle}
                              />
                            }
                          />
                          <span>{this.state.customize}</span>
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Only fill selected</h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => alert("Rating : " + rate)}
                            ActiveComponent={
                              <i
                                key={"active_5"}
                                className="mdi mdi-star-outline text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_05"}
                                className="mdi mdi-star-outline text-primary"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Handle events</h5>
                          <RatingTooltip
                            max={5}
                            onChange={rate => alert("Rating : " + rate)}
                            ActiveComponent={
                              <i
                                key={"active_5"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_05"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Customize tooltips</h5>
                          <RatingTooltip
                            max={5}
                            tooltipContent={this.state.tooltipContent}
                            onChange={rate8 => this.setState({ default: rate8 })}
                            ActiveComponent={
                              <i
                                key={"active_6"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_06"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Default rating</h5>
                          <RatingTooltip
                            max={10}
                            tooltipContent={this.state.tooltipContentMore}
                            onChange={rate6 => this.setState({ default: rate6 })}
                            ActiveComponent={
                              <i
                                key={"active_7"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_07"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">
                            Set start rate to 5 [6..10]
                          </h5>

                          <RatingTooltip
                            max={5}
                            tooltipContent={this.state.tooltipContentHalf}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_8"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_08"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">
                            Set start and stop rate [2..10]
                          </h5>
                          <RatingTooltip
                            max={9}
                            tooltipContent={this.state.tooltipContentMiddle}
                            onChange={rate => this.setState({ default: rate })}
                            ActiveComponent={
                              <i
                                key={"active_9"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_09"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">
                            Set start and stop rate [2..10] with step 2
                          </h5>
                          <RatingTooltip
                            max={5}
                            tooltipContent={this.state.tooltipContentStep}
                            onChange={rate4 => this.setState({ default: rate4 })}
                            ActiveComponent={
                              <i
                                key={"active_10"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_010"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Custom icons</h5>
                          <RatingTooltip
                            max={5}
                            tooltipContent={this.state.tooltipContentStep}
                            onChange={rate1 => this.setState({ default: rate1 })}
                            ActiveComponent={
                              <i
                                key={"active_11"}
                                className="mdi mdi-checkbox-marked text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_11"}
                                className="mdi mdi-checkbox-blank-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Fractional rating</h5>
                          <RatingTooltip
                            max={5}
                            tooltipContent={this.state.tooltipContentStep}
                            onChange={rate2 => this.setState({ default: rate2 })}
                            ActiveComponent={
                              <i
                                key={"active_12"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_012"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                            fractions={6}
                          />
                        </div>
                      </Col>

                      <Col xl="3" md="4" sm="6">
                        <div className="p-4 text-center">
                          <h5 className="font-size-15 mb-3">Custom CSS icons</h5>
                          <Rating
                            max={5}
                            tooltipContent={this.state.tooltipContentStep}
                            ActiveComponent={
                              <i
                                key={"active_13"}
                                className="symbol symbol-filled"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_013"}
                                className="symbol symbol-empty"
                                style={this.state.starStyle}
                              />
                            }
                            fractions={2} />
                        </div>
                      </Col>
                    </Row>{" "}
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

export default UiRating
