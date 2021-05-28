import React from 'react'
import { icons } from '../../utils'

import './Clinic.scss'

function Clinic(props) {
  return (
    <div className="clinic-card">
      <img className="clinic-img" src={icons.clinic} alt="clinic" />

      <div>
        <div className="clinic-box">
          <img src={icons.clinicName} alt="clinicName" />
          <div>Vet care</div>
        </div>

        <div className="clinic-box">
          <img src={icons.clinicPhone} alt="clinicPhone" />
          <div>(+64) 234-567-809</div>
        </div>

        <div className="clinic-box">
          <img src={icons.clinicHour} alt="clinicHour" />
          <div>8:00am - 2:00pm</div>
        </div>

        <div className="clinic-box">
          <img src={icons.clinicStar} alt="clinicStar" />
          <div>3.5</div>
        </div>

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

export default Clinic
