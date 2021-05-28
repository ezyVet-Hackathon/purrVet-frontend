import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { icons } from '../../utils'

import './Clinic.scss'

const ClinicCard = ({ clinicInfo, setHighlightedMarker }) => {
  const onAddressClick = () => {
    alert('Address was clicked')
  }

  const clinicMock = [
    {
      src: icons.clinicName,
      content: clinicInfo?.name || 'Vet care',
    },
    {
      src: icons.clinicPhone,
      content: '(+64) 234-567-809',
    },
    {
      src: icons.clinicHour,
      content: '8:00am - 2:00pm',
    },
    {
      src: icons.clinicStar,
      content: '3.5',
    },
    {
      src: icons.location,
      content: clinicInfo?.vicinity,
      onClick: true,
      onClickFunction: onAddressClick,
    },
  ]

  const renderInfo = (clinic) => (
    <div className="clinic-box">
      <img src={clinic.src} alt="clinic-info" />
      <Typography
        variant="body1"
        style={{
          cursor: clinic.onClick ? 'pointer' : 'default',
        }}
        onClick={() => {
          if (clinic.onClick) {
            clinic.onClickFunction()
          }
        }}
      >
        {clinic.content}
      </Typography>
    </div>
  )

  const renderInfoNew = (clinic) => (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <img src={clinic.src} alt="clinic-info" />
          </ListItemIcon>
          <ListItemText primary={clinic.content} />
        </ListItem>
      </List>
    </>
  )

  return (
    <>
      <Card
        onMouseEnter={() => {
          setHighlightedMarker(clinicInfo?.name || '')
        }}
        onMouseLeave={() => {
          setHighlightedMarker('')
        }}
      >
        <CardActionArea>
          <CardMedia
            image={icons.clinic}
            style={{
              height: 140,
            }}
          />
        </CardActionArea>

        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
              {clinicInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </Typography> */}
          <div>
            {clinicMock.map((clinic) => renderInfoNew(clinic))}

            {/* <div className="clinic-box location-container">
              <img src={icons.location} alt="location" />
              <div className="location-info">{clinicInfo.vicinity}</div>
            </div> */}
          </div>
        </CardContent>
        <CardContent>
          <div
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}
          >
            <Button
              color="primary"
              variant="contained"
              style={{
                width: '90%',
                backgroundColor: '#47BFAF',
                borderRadius: 20,
                marginBottom: 30,
              }}
            >
              View Details
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{
                width: '90%',
                backgroundColor: '#47BFAF',
                borderRadius: 20,
              }}
            >
              Book
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function Clinic({ clinicInfo, setHighlightedMarker }) {
  const clinicMock = [
    {
      src: icons.clinicName,
      content: clinicInfo.name || 'Vet care',
    },
    {
      src: icons.clinicPhone,
      content: '(+64) 234-567-809',
    },
    {
      src: icons.clinicHour,
      content: '8:00am - 2:00pm',
    },
    {
      src: icons.clinicStar,
      content: '3.5',
    },
  ]

  const renderInfo = (src, content) => (
    <div className="clinic-box">
      <img src={src} alt="clinic-info" />
      <div>{content}</div>
    </div>
  )

  return (
    <div
      className="clinic-card"
      onMouseEnter={() => {
        setHighlightedMarker(clinicInfo.name)
      }}
      onMouseLeave={() => {
        setHighlightedMarker('')
      }}
    >
      <a href="/find/service/vets">
        <img className="clinic-img" src={icons.clinic} alt="clinic" />
      </a>
      <div>
        {clinicMock.map((clinic) => renderInfo(clinic.src, clinic.content))}

        <div className="clinic-box location-container">
          <img src={icons.location} alt="location" />
          <div className="location-info">181 Onewa Road, Birkenhead, Auckland 0626</div>
        </div>
      </div>

      <button className="btn" type="button">
        Book
      </button>
    </div>
  )
}

export default ClinicCard
