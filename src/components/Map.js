import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: "AIzaSyA0hhQQOW8VPRgQ42EecqdSyvH3lPfRmT8",
    version: "weekly",
    libraries: ["places"]
});

export default class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let self = this;
        const defaultMapOptions = {
            center: {
                lat: 40.762312,
                lng: -73.979345
            },
            zoom: 11
        };
        loader.load().then((google) => {
            const map = new google.maps.Map(
                self.googleMapDiv,
                defaultMapOptions);
            /*
                store them in the state so you can use it later
                E.g. call a function on the map object:
                    this.state.map.panTo(...)
                E.g. create a new marker:
                    new this.state.google.maps.Marker(...)
            */
            this.setState({
                google: google,
                map: map
            });
        });
    }

    render() {
        return (
            <div
                ref={(ref) => { this.googleMapDiv = ref }}
                style={{ height: '100vh', width: '70%' }}>
            </div>
        )
    }
}