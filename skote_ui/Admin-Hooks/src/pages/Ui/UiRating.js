import React, { useState } from "react";
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

// Rating Plugin
import Rating from "react-rating";
import RatingTooltip from "react-rating-tooltip";

const UiRating = () => {
  const [def, setdef] = useState("");
  const [rate, setRate] = useState("");
  const [stopRate, setStopRate] = useState("");
  const [secondrate, setSecondRate] = useState("");
  const [startrate, setStartrate] = useState("");
  const [customize, setcustomize] = useState("");
  const starStyle = {};

  const tooltipContent = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"];
  const tooltipContentMore = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const tooltipContentHalf = ["6", "7", "8", "9", "10"];
  const tooltipContentMiddle = [
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
  ];
  const tooltipContentStep = ["2", "4", "6", "8", "10"];

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
                        <h5 className="font-16 m-b-15">Default rating</h5>
                        <RatingTooltip
                          max={5}
                          onChange={rate => {
                            setdef(rate);
                          }}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />{" "}
                        <span>{def}</span>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-size-15 mb-3">Half rating</h5>
                        <RatingTooltip
                          max={5}
                          onChange={rate => {
                            setRate(rate);
                          }}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-primary"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Disabled rating</h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                          readonly={true}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Readonly rating with a value
                        </h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                          readonly={true}
                          initialRating={3}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Customized heart rating
                        </h5>
                        <RatingTooltip
                          max={5}
                          onChange={rate => {
                            setcustomize(rate);
                          }}
                          ActiveComponent={
                            <i
                              className="mdi mdi-heart text-danger"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-heart-outline text-danger"
                              style={starStyle}
                            />
                          }
                        />
                        <span>{customize}</span>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Handle events</h5>
                        <Rating
                          onChange={rate => alert("Rating : " + rate)}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Customize tooltips</h5>
                        <RatingTooltip
                          max={5}
                          clearRating={false}
                          onChange={rate => {
                            setdef(rate);
                          }}
                          tooltipContent={tooltipContent}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Default rating</h5>
                        <RatingTooltip
                          max={8}
                          clearRating={false}
                          tooltipContent={tooltipContentMore}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start rate to 5 [6..10]
                        </h5>
                        <RatingTooltip
                          max={5}
                          clearRating={false}
                          onChange={() => {
                            setStartrate(!startrate);
                          }}
                          tooltipContent={tooltipContentHalf}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10]
                        </h5>
                        <RatingTooltip
                          max={11}
                          onChange={() => {
                            setSecondRate(!secondrate);
                          }}
                          clearRating={false}
                          tooltipContent={tooltipContentMiddle}
                          defaultRating={4}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10]
                        </h5>
                        <RatingTooltip
                          max={5}
                          clearRating={false}
                          onChange={() => {
                            setStopRate(!stopRate);
                          }}
                          tooltipContent={tooltipContentStep}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom icons</h5>
                        <Rating
                          stop={5}
                          emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                          fullSymbol={[
                            "mdi mdi-battery-20 fa-2x text-primary",
                            "mdi mdi-battery-50 fa-2x text-primary",
                            "mdi mdi-battery-70 fa-2x text-primary",
                            "mdi mdi-battery-90 fa-2x text-primary",
                          ]}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Fractional rating</h5>
                        <Rating
                          // onChange={rate => {
                          //     setdef(rate)
                          //   }} 
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                          fractions={6}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                        <Rating onChange={rate => {
                          setdef(rate);
                        }} fractions={2} />
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
  );
};
export default UiRating;
