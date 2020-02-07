import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/css/map.css';

const Listing = ({ places }) => (
    <ul>{places && places.map(p => <li key={p.id}>{p.name}</li>)}</ul>
);

export class MapSearchResults extends Component {
    state = {
        places: []
    };

    onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

    searchNearby = (map, center) => {
        const { google } = this.props;

        const service = new google.maps.places.PlacesService(map);

        // Specify location, radius and place types for your Places API search.
        const request = {
            location: center,
            radius: '1000',
            type: ['restaurant']
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK)
                this.setState({ places: results });
        });
    };

    render() {
        return (
            <Map
                className="map"
                google={this.props.google}
                onReady={this.onMapReady}
                visible={false}
                initialCenter={this.props.initialCoords}
            >
                <Listing places={this.state.places} />
            </Map>
        );
    }
}

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlE2qsjqK3S_3Mh3M_oVjwvqGjRIJ8644',
    LoadingContainer: LoadingContainer
})(MapSearchResults);