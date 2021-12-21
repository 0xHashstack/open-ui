import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import ReactApexChart from "react-apexcharts"

const series = [76, 67, 61]
const walletOptions = {
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "35%",
        background: "transparent",
        image: void 0,
      },
      track: {
        show: !0,
        startAngle: void 0,
        endAngle: void 0,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 12,
        dropShadow: {
          enabled: !1,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        name: {
          show: !0,
          fontSize: "16px",
          fontWeight: 600,
          offsetY: -10,
        },
        value: {
          show: !0,
          fontSize: "14px",
          offsetY: 4,
          formatter: function (e) {
            return e + "%"
          },
        },
        total: {
          show: !0,
          label: "Total",
          color: "#373d3f",
          fontSize: "16px",
          fontFamily: void 0,
          fontWeight: 600,
          formatter: function (e) {
            return (
              e.globals.seriesTotals.reduce(function (e, t) {
                return e + t
              }, 0) + "%"
            )
          },
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  colors: ["#3452e1", "#f1b44c", "#50a5f1"],
  labels: ["Ethereum", "Bitcoin", "Ethereum"],
  legend: { show: !1 },
}

const WalletBalance = () => {
  return (
    <React.Fragment>
      <Col xl="8">
        <Card>
          <CardBody>
            <div className="float-end">
              <select  defaultValue="MA" className="form-select form-select-sm ms-2">
                <option value="MA">March</option>
                <option value="FE">February</option>
                <option value="JA">January</option>
                <option value="DE">December</option>
              </select>
            </div>
            <h4 className="card-title mb-3">Wallet Balance</h4>

            <Row>
              <Col lg="4">
                <div className="mt-4">
                  <p>Available Balance</p>
                  <h4>$ 6134.39</h4>

                  <p className="text-muted mb-4">
                    {" "}
                    + 0.0012.23 ( 0.2 % ){" "}
                    <i className="mdi mdi-arrow-up ms-1 text-success" />
                  </p>

                  <Row>
                    <Col xs="6">
                      <div>
                        <p className="mb-2">Income</p>
                        <h5>$ 2632.46</h5>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div>
                        <p className="mb-2">Expense</p>
                        <h5>$ 924.38</h5>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary btn-sm">
                      View more <i className="mdi mdi-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="4" sm="6">
                <div>
                  <div id="wallet-balance-chart">
                    <ReactApexChart
                      options={walletOptions}
                      series={series}
                      type="radialBar"
                      height={300}
                      className="apex-charts"
                    />
                  </div>
                </div>
              </Col>

              <Col lg="4" sm="6" className="align-self-center">
                <div>
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary" />{" "}
                    Ethereum
                  </p>
                  <h5>
                    4.5701 ETH ={" "}
                    <span className="text-muted font-size-14">$ 1123.64</span>
                  </h5>
                </div>

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-warning" />{" "}
                    Bitcoin
                  </p>
                  <h5>
                    0.4412 BTC ={" "}
                    <span className="text-muted font-size-14">$ 4025.32</span>
                  </h5>
                </div>

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info" />{" "}
                    Litecoin
                  </p>
                  <h5>
                    35.3811 LTC ={" "}
                    <span className="text-muted font-size-14">$ 2263.09</span>
                  </h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default WalletBalance
