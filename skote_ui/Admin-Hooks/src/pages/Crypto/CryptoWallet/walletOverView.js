import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const WalletOverView = ({ wallet }) => {
  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-3">Overview</h4>
        <div>
          <div id="overview-chart" dir="ltr">
            <ReactApexChart
              series={wallet.series}
              options={wallet.options}
              type="line"
              height={240}
              className="apex-charts"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

WalletOverView.propTypes = {
  wallet: PropTypes.any,
}

export default WalletOverView
