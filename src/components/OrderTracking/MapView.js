import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const myLatLng = {lat: 19.4368747, lng: -99.1412259};

class ViewMaps extends Component {
    static defaultProps = {
        center: myLatLng,
        zoom: 12
};

render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC6ymkUmHMLmj5Sr6xDHhC50YYfmT1QP3U' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
            lat={19.43676970998405}
            lng={-99.14099943570316}
            text="Usuario"
        />
        <AnyReactComponent
            lat={19.372794328102774}
            lng={-99.17858404330478}
            text="piker"
        />
        </GoogleMapReact>
        </div>
    );
    }
}

export default ViewMaps;