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

// Carousel
import Slide from "./CarouselTypes/slide"
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
import Slidewithindicator from "./CarouselTypes/slidewithindicator"
import Slidewithcaption from "./CarouselTypes/slidewithcaption"
import Slidewithfade from "./CarouselTypes/slidewithfade"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Carousel | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Carousel" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4"> Slides Only</CardTitle>
                    <p className="card-title-desc">
                      Here’s a carousel with slides only. Note the presence of
                      the <code>.d-block</code> and <code>.img-fluid</code> on
                      carousel images to prevent browser default image
                      alignment.
                    </p>
                    <Slide />
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">With controls</CardTitle>
                    <p className="card-title-desc">
                      Adding in the previous and next controls:
                    </p>
                    <Slidewithcontrol />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">With indicators</CardTitle>
                    <p className="card-title-desc">
                      You can also add the indicators to the carousel, alongside
                      the controls, too.
                    </p>
                    <Slidewithindicator />
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">With captions</CardTitle>
                    <p className="card-title-desc">
                      Add captions to your slides easily with the{" "}
                      <code>.carousel-caption</code> element within any{" "}
                      <code>.carousel-item</code>.
                    </p>
                    <Slidewithcaption />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Crossfade</CardTitle>
                    <p className="card-title-desc">
                      Add <code>.carousel-fade</code> to your carousel to
                      animate slides with a fade transition instead of a slide.
                    </p>
                    <Slidewithfade />
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

export default UiCarousel
