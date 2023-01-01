import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

// TODO:
// [] PLACE COORDINATES FROM SEARCH TO MAP
// [] CHECK IF MARKER IS INSIDE CIRCLE
const Map = (props) => {
  const [coordinates, setCoordinates] = useState([]);
  const position = [14.680061168255861, 121.00465870025911];

  useEffect(() => {
    setCoordinates(props.coordinates);
  }, []);

  useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }

    var map = L.map("map", {
      center: position,
      zoom: 0,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "Map data &copy; OpenStreetMap contributors",
        }),
      ],
    });

    L.Circle.include({
      contains: function (latLng) {
        return this.getLatLng().distanceTo(latLng) < this.getRadius();
      },
    });

    var circle = L.circle([14.680061168255861, 121.00465870025911], 700).addTo(
      map
    );

    map.fitBounds(circle.getBounds());
  }, []);

  return (
    // <div>
    //   <MapContainer
    //     center={position}
    //     whenCreated={setMap}
    //     zoom={15}
    //     style={{
    //       width: "100%",
    //       height: "500px",
    //     }}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Circle
    //       center={position}
    //       pathOptions={{ fillColor: "purple" }}
    //       radius={700}
    //     />
    //     <Marker position={position}>
    //       <Popup>AIO Caloocan Main Antenna</Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>
    <div
      className="map"
      id="map"
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  );
};

export default Map;
