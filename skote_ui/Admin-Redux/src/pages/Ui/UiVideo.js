import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Video | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Video" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive embed video 16:9</CardTitle>
                    <p className="card-title-desc">
                      Aspect ratios can be customized with modifier classNames.
                    </p>

                    <div className="ratio ratio-16x9">
                      <iframe
                        title="test"
                        allowFullScreen
                        src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                      ></iframe>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive embed video 21:9</CardTitle>
                    <p className="card-title-desc">
                      Aspect ratios can be customized with modifier classNames.
                    </p>

                    <div className="ratio ratio-21x9">
                      <iframe
                        title="test1"
                        allowFullScreen
                        src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                      ></iframe>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive embed video 4:3</CardTitle>
                    <p className="card-title-desc">
                      Aspect ratios can be customized with modifier classNames.
                    </p>

                    <div className="ratio ratio-4x3">
                      <iframe
                        title="tes2"
                        allowFullScreen
                        src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                      ></iframe>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive embed video 1:1</CardTitle>
                    <p className="card-title-desc">
                      Aspect ratios can be customized with modifier classNames.
                    </p>

                    <div className="ratio ratio-1x1">
                      <iframe
                        title="test3"
                        src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default UiVideo
