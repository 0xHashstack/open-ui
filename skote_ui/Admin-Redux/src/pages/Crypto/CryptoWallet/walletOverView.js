import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

class WalletOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-3">Overview</h4>

            <div>
              <div id="overview-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  series={this.props.wallet.series}
                  options={this.props.wallet.options}
                  type="line"
                  height={240}
                  className="apex-charts"
                />
              </div>
            </div>
            
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

WalletOverView.propTypes = {
  wallet: PropTypes.any,
};

export default WalletOverView;
