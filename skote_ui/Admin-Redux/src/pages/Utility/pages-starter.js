import React, { Component } from "react"
import { Container } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class PagesStarter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Starter Page | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Utility" breadcrumbItem="Starter Page" />
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default PagesStarter
