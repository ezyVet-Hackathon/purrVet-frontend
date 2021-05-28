// import { GoogleMap, Marker, withScriptjs, withGoogleMap, Google } from 'react-google-maps'
import React, { createRef } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import vets from './vets.json'

// const MapComponent = (props) => {
//   return (
//     <GoogleMap
//       defaultZoom={8}
//       key
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//       <Marker
//         position={{ lat: -34.397, lng: 150.644 }}
//       />
//     </GoogleMap>
//   );
// }

// const MapView = () => {
//   return (
//     <div style={{
//       padding: 30,
//       textAlign: "center"
//     }}>
//       <h1>purrVet Finder</h1>
//       <MapComponent
//         isMarkerShown
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKX3VD9qQtp6esG1Xe52s3vT1DAm72W&pov=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}

//       />
//     </div>
//   )
// }

const mapStyles = {
  width: '100%',
  height: '100%',
}

const AnotherMap = (props) => {
  const mapRef = createRef()
  const { google } = props

  const handleOnClick = (propsEvent, marker) => {
    const currentMapRef = mapRef.current.map
    console.log('marker', marker)
    console.log(currentMapRef.getBounds())
  }

  const handleDragEnd = (map) => {
    console.log('drag end', props, map.getBounds())
  }

  const getFilteredResult = (latRange, lngRange) => {}

  return (
    <>
      <h1>Test</h1>
      <Map
        google={google}
        zoom={14}
        ref={mapRef}
        style={mapStyles}
        initialCenter={{
          lat: -36.849761,
          lng: 174.7628903,
        }}
        onDragend={(propsEvent, map) => {
          handleDragEnd(props, map)
        }}
      >
        {vets.map((c) => {
          return (
            <Marker
              name={c.name}
              position={{
                lat: c.location.lat,
                lng: c.location.lng,
              }}
              onClick={(propsEvent, marker) => handleOnClick(propsEvent, marker)}
            />
          )
        })}
      </Map>
    </>
  )
}

// export default MapComponent;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKX3VD9qQtp6esG1Xe52s3vT1DAm72Wpo',
})(AnotherMap)
