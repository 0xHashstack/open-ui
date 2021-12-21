import React from "react"
import { Container, Row, Col } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import WalletBalance from "./wallet-balance"
import OverView from "./overview"
import Transactions from "./transactions"
import Notifications from "./notifications"
import BuySell from "./buy-sell"

//Bitcoin Chart
const series1 = [
  { name: "BTC", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
]
const options1 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//Etherium Chart
const series2 = [
  { name: "ETH", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
]
const options2 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#3452e1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//LiteCoin Chart
const series3 = [
  { name: "LTC", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
]
const options3 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

const Dashboard = () => {
  const reports = [
    {
      title: "Bitcoin",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      value: "$ 57,986.76",
      desc: "+ 0.0012 ( 0.2 % )",
      series: series1,
      options: options1,
      arrowUpDown : 'mdi mdi-arrow-up ms-1 text-success'
    },
    {
      title: "Ethereum",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: "$ 2,077.53",
      desc: "- 4.102 ( 0.1 % )",
      series: series2,
      options: options2,
      arrowUpDown : 'mdi mdi-arrow-down ms-1 text-danger'
    },
    {
      title: "litecoin",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: "$ 225.01",
      desc: "+ 1.792 ( 0.1 % )",
      series: series3,
      options: options3,
      arrowUpDown : 'mdi mdi-arrow-up ms-1 text-success'
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
            <title>Crypto Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Crypto" />
          <Row>
            <CardUser />

            <Col xl="8">
              <CardWelcome />

              <Row>
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            <WalletBalance />

            <OverView />
          </Row>

          <Row>
            <Transactions />

            <Notifications />

            <BuySell />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
