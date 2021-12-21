import React from "react";
import MetaTags from 'react-meta-tags';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap";

// Carousel
import Slide from "./CarouselTypes/slide";
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol";
import Slidewithindicator from "./CarouselTypes/slidewithindicator";
import Slidewithcaption from "./CarouselTypes/slidewithcaption";
import Slidewithfade from "./CarouselTypes/slidewithfade";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiCarousel = () => {
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
                  <CardTitle> Slides Only</CardTitle>
                  <CardSubtitle className="mb-3">
                    Here’s a carousel with slides only. Note the presence of the{" "}
                    <code>.d-block</code> and <code>.img-fluid</code> on
                    carousel images to prevent browser default image alignment.
                  </CardSubtitle>
                  <Slide />
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With controls</CardTitle>
                  <CardSubtitle className="mb-3">
                    Adding in the previous and next controls:
                  </CardSubtitle>
                  <Slidewithcontrol />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With indicators</CardTitle>
                  <CardSubtitle className="mb-3">
                    You can also add the indicators to the carousel, alongside
                    the controls, too.
                  </CardSubtitle>
                  <Slidewithindicator />
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With captions</CardTitle>
                  <CardSubtitle className="mb-3">
                    Add captions to your slides easily with the{" "}
                    <code>.carousel-caption</code> element within any{" "}
                    <code>.carousel-item</code>.
                  </CardSubtitle>
                  <Slidewithcaption />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle>Crossfade</CardTitle>
                  <CardSubtitle className="mb-3">
                    Add <code>.carousel-fade</code> to your carousel to animate
                    slides with a fade transition instead of a slide.
                  </CardSubtitle>
                  <Slidewithfade />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiCarousel;
