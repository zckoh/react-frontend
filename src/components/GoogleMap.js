import React, { Component } from 'react';
import '../assets/css/map.css';
import { MDBContainer, MDBBtn } from 'mdbreact';

var map;
var infowindow;

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this);
        var places = {};
        var genNextPage = null;
    }

    createMarker(place) {
        var marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        window.google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
    }

    callback(results, status, pagination) {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            this.places = Object.assign({}, this.places, results);
            for (var i = 0; i < results.length; i++) {
                this.createMarker(results[i]);
            }
            this.getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        }
    };
    
    onScriptLoad() {
        map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        infowindow = new window.google.maps.InfoWindow();
        var cambridge = new window.google.maps.LatLng(52.1942,0.1374);

        var request = {
            location: cambridge,
            radius: '700',
            type: ['restaurant']
        };

        var service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, this.callback.bind(this));
    }

    componentDidMount() {
        if (!window.google) {
            const ApiKey = 'AIzaSyBlE2qsjqK3S_3Mh3M_oVjwvqGjRIJ8644';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=${ApiKey}&libraries=places`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad();
            })
        } else {
            this.onScriptLoad();
        }
    }

    render() {
        return (
            <MDBContainer>
                <div className="map-box" id={this.props.id} />
                <MDBBtn 
                    color="info"
                    onClick={ () => {if (this.getNextPage) this.getNextPage();} }
                >
                    Search More
                </MDBBtn>
                <MDBBtn 
                    color="primary"
                    onClick={ () => {if (this.getNextPage) this.getNextPage();} }
                >
                    Randomly Choose 1
                </MDBBtn>
            </MDBContainer>
        );
    }
}

export default GoogleMap;