import React, { useState, useEffect } from 'react'
import { Backdrop, CircularProgress, Grid, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { icons } from '../../utils'
import { serverInstance } from '../../instances'
import VetDoctorCard from './VetDoctorCard'

import './VetInfo.scss'

const VetInfoCard = ({ clinicInfo }) => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [clinicData, setClinicData] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await serverInstance.get('/vets', {
          params: {
            id,
          },
        })
        setClinicData(data.data)
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  const vetMock = [
    {
      src: icons.vetName,
      content: 'Mr. Leeanna Henderson',
    },
    {
      src: icons.vetRegister,
      content: '5 years',
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
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
      }}
    >
      <Grid
        container
        spacing={3}
        style={{
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3">{clinicData?.name ?? ''}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div>
            <img
              src={icons.clinic}
              alt="Clinic"
              style={{
                maxWidth: 'none',
                maxHeight: 200,
              }}
              width="100%"
              height="auto"
            />
          </div>
        </Grid>
        <Grid item xs={6} md={4} style={{ textAlign: 'left' }}>
          <Typography variant="body1">Languages:</Typography>
          <ul>
            {(clinicData?.languages ?? []).map((c) => {
              return <li>{c}</li>
            })}
          </ul>
        </Grid>
        <Grid item xs={6} md={4} style={{ textAlign: 'left' }}>
          <Typography variant="body1">Animals:</Typography>
          <ul>
            {(clinicData?.animals ?? []).map((c) => {
              return <li>{c}</li>
            })}
          </ul>
        </Grid>
        <Grid item xs={12}>
          <p>List clinics</p>
          {(clinicData?.vets ?? []).map((c) => {
            return <VetDoctorCard vetDoctorInfo={c} />
          })}
        </Grid>
      </Grid>
      <Backdrop
        open={loading}
        style={{
          zIndex: 10000,
        }}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  )
}

export default VetInfoCard
