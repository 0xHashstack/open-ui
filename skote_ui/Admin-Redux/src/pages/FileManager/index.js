import React, { Component } from "react"
import { Card, CardBody, Container } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import Component
import FileLeftBar from "./FileLeftBar"
import FileList from "./FileList"
import RecentFile from "./RecentFile"
import Storage from "./Storage"
const series = [76]
const options = {
  chart: {
    height: 150,
    type: "radialBar",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#556ee6"],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5, // margin is in pixels
      },

      hollow: {
        size: "60%",
      },

      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: "16px",
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  stroke: {
    dashArray: 3,
  },
  labels: ["Storage"],
}

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filemanager: {
        options: options,
        series: series,
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>File Manager | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Apps" breadcrumbItem="File Manager" />
            <div className="d-xl-flex">
              <div className="w-100">
                <div className="d-md-flex">
                  {/* FileRightBar  */}
                  <FileLeftBar />
                  <div className="w-100">
                    <Card>
                      <CardBody>
                        <FileList />
                        <RecentFile />
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
              <Storage filemanager={this.state.filemanager} />
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
