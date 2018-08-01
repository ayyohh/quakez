import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {

    let quakeMarkers = this.props.quakesData.map((element, index) => (
      <Marker key={index}
        title={element.properties.place}
        name={element.properties.place}
        position={{
          lat: element.geometry.coordinates[1],
          lng: element.geometry.coordinates[0]
        }}
      />
    )
  )

    return (
      <div className="mapContainer">
        <Map google={this.props.google}
          initialCenter={{
            lat: 37.78,
            lng: -122.44
        }}
        style={{width: '50%', height: '80%'}}
        zoom={1}
        onClick={this.onMapClicked}>

        {quakeMarkers}

        </Map>
      </div>
    );

  }

}

// const LoadingContainer = (props) => {
//   <div >
//     <img src={'../public/images/throbber.gif'} alt="Loading..."/>
//   </div>
// }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')

})(MapContainer)
