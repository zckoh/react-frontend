import React, { useState } from "react";
import {
    MDBContainer, MDBView, MDBRow, MDBCol,
    MDBIcon, MDBMask, MDBCard, MDBCardBody,
    MDBBtn, MDBCollapse
} from "mdbreact";
import MapContainer from '../../../components/MapContainer.js';
import MapSearchResults from '../../../components/MapSearchResults.js';
import '../../../assets/css/map.css';

const EatOutTab = () => {
    return (
        <MDBContainer>
            <p>
                This should show up if EATING OUT!
            </p>
            {/* Pass in coordinates that is provided */}

            <div className="map-wrapper">
                <MapContainer initialCoords={{ lat: 52.1942, lng: 0.1374 }} />
            </div>
            <MDBContainer>
            <MapSearchResults initialCoords={{ lat: 52.1942, lng: 0.1374 }} />
            </MDBContainer>
        </MDBContainer>
    );
}

export default EatOutTab;