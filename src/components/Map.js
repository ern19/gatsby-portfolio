import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.80833333, lng: -84.37555556 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.80833333, lng: -84.37555556 }} />}
  </GoogleMap>
))


export default Map;