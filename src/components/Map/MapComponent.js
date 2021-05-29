// import { GoogleMap, Marker, withScriptjs, withGoogleMap, Google } from 'react-google-maps'
import React, { createRef, useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
// import vets from './vets.json'
import locationMarkerIcon from './location.png'
// import VetInfo from './VetInfo/VetInfo'
import Clinic from '../Clinic/Clinic'
import { serverInstance } from '../../instances'
import { icons } from '../../utils'

const AnotherMap = (props) => {
  const { google } = props
  const mapRef = createRef()
  const [latLngRange, setLatLngRange] = useState({
    latStart: -36.83456595506769,
    latEnd: -36.87641344510359,
    lngStart: 174.70432471335747,
    lngEnd: 174.81275748662532,
  })
  const [vets, setVets] = useState([])
  const [filterVets, setFilterVets] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentLocation, setCurrentLocation] = useState({
    // lat: -36.849761,
    // lng: 174.7628903
    lat: -36.8505321,
    lng: 174.7825924,
  })
  const [highlightedMarker, setHighlightedMarker] = useState('')

  const [transportMode, setTransportMode] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviews, setReviews] = useState([])

  const getData = async (postObj) => {
    try {
      const response = await serverInstance.post('/clinic-search', postObj)

      // setVets(response.data)
      return response.data
    } catch (err) {
      console.error('failed to get data', err)
      return []
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (err) => {
        console.error('error getCurrentPosition', err)
        alert('Please allow the website to get your location to improve your experience!')
      }
    )
  }, [])

  const constructSearchObj = (boundResult) => {
    const searchObj = {
      bounds: boundResult,
      searchTerm,
    }

    return searchObj
  }

  const getBoundsRange = (map) => {
    const boundResult = map?.getBounds()
    if (!boundResult) {
      return null
    }
    const northEast = boundResult?.getNorthEast()
    const southWest = boundResult?.getSouthWest()

    if (!northEast || !southWest) {
      return null
    }

    const northEastLat = northEast.lat()
    const northEastLng = northEast.lng()
    const southWestLat = southWest.lat()
    const southWestLng = southWest.lng()

    const boundObj = {
      latStart: southWestLat,
      latEnd: northEastLat,
      lngStart: southWestLng,
      lngEnd: northEastLng,
    }
    return boundObj
  }

  const getFilteredResult = (boundObj, vetsList) => {
    const filterVetsStore = []

    // Check if the vet center is within the given region bound
    // If true, then render the marker
    // Else, do not render it
    // eslint-disable-next-line no-restricted-syntax
    for (const c of vetsList) {
      const currentLat = c.location.lat
      const currentLng = c.location.lng

      if (currentLat >= boundObj.latStart && currentLat <= boundObj.latEnd) {
        if (currentLng >= boundObj.lngStart && currentLng <= boundObj.lngEnd) {
          filterVetsStore.push(c)
        }
      }
    }

    setFilterVets(filterVetsStore)
    setLoading(false)
  }

  const handleSearch = async () => {
    const currentMapRef = mapRef.current.map
    const boundResult = getBoundsRange(currentMapRef)

    try {
      const searchObj = constructSearchObj(boundResult)

      const mapData = await getData(searchObj)

      getFilteredResult(boundResult, mapData)
    } catch (err) {
      console.error('handleSearch error', err)
      getFilteredResult(boundResult, [])
    }
  }

  const handleMapEvent = async (propsMap, map) => {
    setLoading(true)
    const boundResult = getBoundsRange(map)

    if (boundResult === null) {
      setLoading(false)
      return
    }

    const searchObj = constructSearchObj(boundResult)

    const mapData = await getData(searchObj)

    getFilteredResult(boundResult, mapData)
  }

  const handleMapReady = async (propsMap, map) => {
    try {
      handleMapEvent(propsMap, map)
    } catch (err) {
      console.error('handleMapReady error', err)
    }
  }

  const handleOnClick = (propsMap, marker) => {
    const currentMapRef = mapRef.current.map
  }

  return (
    <>
      <h1>Test</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            variant="outlined"
            label="Search clinic here"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setTransportMode('bus')
            }}
          >
            Bus
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="primary" variant="contained">
            Train
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="primary" variant="contained">
            Walk
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" onClick={() => handleSearch()}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Map
        google={google}
        zoom={16}
        ref={mapRef}
        containerStyle={{
          width: '100%',
          height: '600px',
          position: 'relative',
        }}
        initialCenter={currentLocation}
        center={currentLocation}
        gestureHandling={'cooperative' || 'greedy' || 'cooperative'}
        onDragend={(propsMap, map) => {
          handleMapEvent(propsMap, map)
        }}
        onZoomChanged={(propsMap, map) => {
          handleMapEvent(propsMap, map)
        }}
        onReady={(propsMap, map) => {
          handleMapReady(propsMap, map)
        }}
      >
        {filterVets.map((c) => {
          const scaledSizeGoogle =
            highlightedMarker === c.name ? new google.maps.Size(40, 50) : new google.maps.Size(20, 30)
          return (
            <Marker
              name={c.name}
              position={{
                lat: c.location.lat,
                lng: c.location.lng,
              }}
              onClick={(propsMap, marker) => handleOnClick(propsMap, marker)}
              icon={{
                url: locationMarkerIcon,
                scaledSize: scaledSizeGoogle,
              }}
            />
          )
        })}
        <Marker
          name="Me"
          position={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          icon={{
            url: icons.currentLocationMarker,
            scaledSize: new google.maps.Size(15, 27),
          }}
        />
      </Map>
      <Grid
        container
        spacing={3}
        style={{
          marginTop: 30,
        }}
      >
        {filterVets.map((c) => {
          return (
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <Clinic
                clinicInfo={c}
                setHighlightedMarker={setHighlightedMarker}
                setReviews={setReviews}
                setShowReviewModal={setShowReviewModal}
              />
            </Grid>
          )
        })}
      </Grid>
      <Backdrop style={{ zIndex: 10000 }} open={loading}>
        <CircularProgress />
      </Backdrop>
      <Dialog
        open={showReviewModal}
        onEscapeKeyDown={() => setShowReviewModal(false)}
        onBackdropClick={() => setShowReviewModal(false)}
      >
        <DialogTitle onClose={() => setShowReviewModal(false)}>List of reviews</DialogTitle>
        <DialogContent dividers>
          <List>
            {(reviews ?? []).length === 0 ? (
              <Typography variant="body1">No data available for this clinic.</Typography>
            ) : (
              (reviews ?? []).map((c) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt={c?.author_name ?? ''}
                          src={c?.profile_photo_url ?? '/static/images/avatar/1.jpg'}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={c?.author_name ?? 'Name'}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="textPrimary">
                              {`${c?.relative_time_description ?? ''} - `}
                            </Typography>
                            <Typography component="span" variant="body2" color="textPrimary">
                              {`Rating: ${c?.rating ?? '4.7'} - `}
                            </Typography>
                            {c?.text ?? ''}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                )
              })
            )}
          </List>
        </DialogContent>
      </Dialog>
    </>
  )
}

// export default MapComponent;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKX3VD9qQtp6esG1Xe52s3vT1DAm72Wpo',
})(AnotherMap)
