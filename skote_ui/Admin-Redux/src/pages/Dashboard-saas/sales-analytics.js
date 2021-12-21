import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class SalesAnalytics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [56, 38, 26],
      options: {
        maintainAspectRatio: false,
        labels: ["Series A", "Series B", "Series C"],
        colors: ["#556ee6", "#34c38f", "#f46a6a"],
        legend: { show: !1 },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
            },
          },
        },
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <Col xl="4">
          <Card>
            <CardBody>
              <h4 className="card-title mb-4">Sales Analytics</h4>

              <div>
                <div id="donut-chart" className="apex-charts">
                  <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    height={262}
                  />
                </div>
              </div>

              <div className="text-center text-muted">
                <Row>
                  <Col xs="4">
                    <div className="mt-4">
                      <p className="mb-2 text-truncate">
                        <i className="mdi mdi-circle text-primary me-1"/>{" "}
                        Product A
                      </p>
                      <h5>$ 2,132</h5>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="mt-4">
                      <p className="mb-2 text-truncate">
                        <i className="mdi mdi-circle text-success me-1"/>{" "}
                        Product B
                      </p>
                      <h5>$ 1,763</h5>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="mt-4">
                      <p className="mb-2 text-truncate">
                        <i className="mdi mdi-circle text-danger me-1"/>{" "}
                        Product C
                      </p>
                      <h5>$ 973</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

export default SalesAnalytics
