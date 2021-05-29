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
import { useHistory } from 'react-router-dom'
import { icons } from '../../utils'

import './Clinic.scss'

const ClinicCard = ({ clinicInfo, setHighlightedMarker, setShowReviewModal, setReviews }) => {
  const history = useHistory()

  console.log(clinicInfo)
  const onAddressClick = () => {
    alert('Address was clicked')
  }

  const handleReviewClick = (reviewArr) => {
    console.log('passed in', reviewArr)
    setReviews(reviewArr)
    setShowReviewModal(true)
  }

  const clinicMock = [
    {
      src: icons.clinicName,
      content: clinicInfo?.name ?? 'Vet care',
    },
    {
      src: icons.clinicPhone,
      content: clinicInfo?.googleResults?.formatted_phone_number ?? '(+64) 234-567-809',
    },
    {
      src: icons.clinicHour,
      content: '8:00am - 2:00pm',
    },
    {
      src: icons.clinicStar,
      content: clinicInfo?.googleResults?.rating?.$numberDecimal ?? '3.5',
      onClick: true,
      onClickFunction: handleReviewClick,
      params: clinicInfo?.googleResults?.reviews,
    },
    {
      src: icons.location,
      content: clinicInfo?.vicinity,
      onClick: true,
      onClickFunction: onAddressClick,
    },
  ]

  const renderInfoNew = (clinic) => (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <img src={clinic.src} alt="clinic-info" />
          </ListItemIcon>
          <ListItemText
            primary={clinic.content}
            style={{
              cursor: clinic.onClick ? 'pointer' : 'default',
            }}
            onClick={() => {
              if (clinic.onClick) {
                clinic.onClickFunction(clinic?.params)
              }
            }}
          />
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
        <CardActionArea
          onClick={() => {
            history.push(`/clinics/${clinicInfo?._id ?? ''}`)
          }}
        >
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
              onClick={() => {
                history.push(`/clinics/${clinicInfo?._id ?? ''}`)
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

export default ClinicCard
