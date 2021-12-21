import React, { Component } from "react"
import { Container, Row } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogGrid from "./BlogGrid"
import RightBar from "../BlogList/RightBar"

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Blog Grid | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Blog" breadcrumbItem="Blog Grid" />
            <Row>
              <BlogGrid />
              <RightBar />
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}