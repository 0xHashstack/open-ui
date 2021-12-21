import React, { useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import MetaTags from "react-meta-tags"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import Earning from "./earning"
import SalesAnalytics from "./sales-analytics"
import TotalSellingProduct from "./total-selling-product"
import Tasks from "./tasks"
import ChatBox from "./chat-box"

const DashboardSaas = props => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ];
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Saas Dashboard | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Saas" />

          {/* Card User */}
          <CardUser />

          <Row>
            {/* welcome card */}
            <CardWelcome />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            {/* earning */}
            <Earning />

            {/* sales anytics */}
            <SalesAnalytics />
          </Row>

          <Row>
            {/* total selling product */}
            <TotalSellingProduct />

            {/* tasks */}
            <Tasks />

            {/* chat box */}
            <ChatBox />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DashboardSaas
