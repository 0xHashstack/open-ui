import React, { Component } from "react";
import Leaflet from "leaflet";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});


export const pointerIcon = new L.Icon({
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

export default class MapMarkerCustomIcons extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };


  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
