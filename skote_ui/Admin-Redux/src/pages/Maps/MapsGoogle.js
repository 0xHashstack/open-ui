import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';

import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import { connect } from "react-redux"
import LightData from "./LightData"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const LoadingContainer = () => <div>Loading...</div>

class MapsGoogle extends Component {
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
            <title>Google Maps | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Markers</CardTitle>
                    <p className="card-title-desc">
                      Example of google maps.
                    </p>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        style={{ width: "100%", height: "100%" }}
                        zoom={14}
                      >
                        <Marker
                          title={"The marker`s title will appear as a tooltip."}
                          name={"SOMA"}
                          position={{ lat: 37.778519, lng: -122.40564 }}
                        />
                        <Marker name={"Dolores park"} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Overlays</CardTitle>
                    <p className="card-title-desc">
                      Example of google maps.
                    </p>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        style={{ width: "100%", height: "100%" }}
                        initialCenter={{
                          lat: 40.854885,
                          lng: -88.081807,
                        }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Basic</CardTitle>
                    <p className="card-title-desc">
                      Example of google maps.
                    </p>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Ultra Light</CardTitle>
                    <p className="card-title-desc">
                      Example of google maps.
                    </p>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        styles={LightData.Data}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

MapsGoogle.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapsGoogle)
)
