import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const OverviewChart = ({ options, series }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Overview</CardTitle>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="290"
          className="apex-charts"
        />
      </CardBody>
    </Card>
  );
};

OverviewChart.propTypes = {
  options: PropTypes.object,
  series: PropTypes.array,
};

export default OverviewChart;
