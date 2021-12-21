import React, { Component } from "react"
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from "reactstrap"

import ReactApexChart from "react-apexcharts"

class MiniWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        {this.props.reports.map((report, key) => (
          <Col sm="4" key={key}>
            <Card>
              <CardBody>
                <p className="text-muted mb-4">
                  <i
                    className={
                      report.icon +
                      " h2 text-" +
                      report.color +
                      " align-middle mb-0 me-3"
                    }
                  />{" "}
                  {report.title}{" "}
                </p>

                <Row>
                  <Col xs="6">
                    <div>
                      <h5>{report.value}</h5>
                      <p className="text-muted text-truncate mb-0">
                        {report.desc}{" "}
                        <i className={"ms-1 mdi " + report.arrow} />
                      </p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div>
                      <div className="apex-charts">
                        <ReactApexChart
                          options={report.options}
                          series={report.series}
                          type="area"
                          height={40}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    )
  }
}

MiniWidget.propTypes = {
  reports: PropTypes.any
}


export default MiniWidget
