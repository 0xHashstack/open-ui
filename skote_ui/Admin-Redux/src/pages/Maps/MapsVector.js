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
import Vector from "./Vectormap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class MapsVector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick() {
    alert("You clicked in this marker")
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Vector Maps | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">World Map</CardTitle>
                    <p className="card-title-desc">
                      Example of vector map.
                    </p>

                    <div id="world-map-markers" className="vector-map-height">
                      <Vector
                        value="world_mill"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">USA Map</CardTitle>
                    <p className="card-title-desc">
                      Example of vector map.
                    </p>

                    <div id="usa" className="vector-map-height">
                      <Vector
                        value="us_aea"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Canada Map</CardTitle>
                    <p className="card-title-desc">
                      Example of vector map.
                    </p>

                    <div id="uk" className="vector-map-height">
                      <Vector
                        value="ca_lcc"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Asia Vector Map</CardTitle>
                    <p className="card-title-desc">
                      Example of vector map.
                    </p>

                    <div id="chicago" className="vector-map-height">
                      <Vector
                        value="asia_mill"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
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

export default MapsVector
