import React, { useState } from "react";
import {
    MDBContainer, MDBView, MDBRow, MDBCol,
    MDBIcon, MDBMask, MDBCard, MDBCardBody,
    MDBBtn, MDBCollapse
} from "mdbreact";
import MapContainer from '../../../components/MapContainer.js';
import MapSearchResults from '../../../components/MapSearchResults.js';
import GoogleMap from '../../../components/GoogleMap.js';
import '../../../assets/css/map.css';

const EatOutTab = () => {
    return (
        <div>
            <h3>
                Eating Out!
            </h3>
            {/* Pass in coordinates that is provided */}
            {/* <div 
            className="map-wrapper"
            > */}
            {/* <GoogleMap/> */}
            <GoogleMap
                id="myMap"
                options={{
                center: { lat: 52.1942, lng: 0.1374 },
                zoom: 14
                }}
                // onMapLoad={map => {
                // var marker = new window.google.maps.Marker({
                //     position: { lat: 52.1942, lng: 0.1374 },
                //     map: map,
                //     title: 'Hello Cambridge!'
                // });
                // }}
            />
            {/* </div> */}
            {/* <div className="map-wrapper">
                <MapContainer initialCoords={{ lat: 52.1942, lng: 0.1374 }} />
            </div>
            <MDBContainer>
            <MapSearchResults initialCoords={{ lat: 52.1942, lng: 0.1374 }} />
            </MDBContainer> */}
        </div>
    );
}

export default EatOutTab;