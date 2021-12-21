import PropTypes from 'prop-types'
import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const MiniWidget = props => {
  return (
    <React.Fragment>
      {props.reports.map((report, key) => (
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
                      <i className={report.arrowUpDown}/>
                    </p>
                  </div>
                </Col>
                <Col xs="6">
                  <div>
                    <div>
                      <ReactApexChart
                        options={report.options}
                        series={report.series}
                        type="area"
                        height={40}
                        className="apex-charts"
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

export default MiniWidget

MiniWidget.propTypes = {
  reports: PropTypes.array
}