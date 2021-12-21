import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactApexChart from "react-apexcharts";

class OverviewChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Overview</CardTitle>
          <ReactApexChart
            options={this.props.options}
            series={this.props.series}
            type="bar"
            height="290"
            className="apex-charts"
          />
        </CardBody>
      </Card>
    );
  }
}

OverviewChart.propTypes = {
  options: PropTypes.object,
  series: PropTypes.array,
};

export default OverviewChart;
