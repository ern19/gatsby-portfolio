import React, { Component } from 'react';
import Map from '../components/Map';

class inventory extends Component {
    render() {
        return (
            <Map isMarkerShown 
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
        );
    }
}

export default inventory;