import React from "react"
import { Container, Row } from "reactstrap"
import MetaTags from 'react-meta-tags';

//import component
import CardUser from "./CardUser"
import Settings from "./Settings"
import Posts from "./Posts"
import Comments from "./Comments"
import TapVisitors from "./TapVisitors"
import Activity from "./Activity"
import PopularPost from "./PopularPost"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const index = props => {
  const series = [
    {
      name: "Current",
      data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
    },
    {
      name: "Previous",
      data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
    },
  ]

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#556ee6", "#f1b44c"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Blog Dashboard | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Blog" />
          <Row>
            {/* card user */}
            <CardUser options={options} series={series} />
            <Settings />
          </Row>
          <Row>
            <Posts />
            <Comments />
            <TapVisitors />
          </Row>
          <Row>
            {" "}
            <Activity />
            <PopularPost />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index
