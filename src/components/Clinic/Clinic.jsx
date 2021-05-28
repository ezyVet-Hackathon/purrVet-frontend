import React from 'react'
import { icons } from '../../utils'

import './Clinic.scss'

function Clinic({ clinicInfo }) {
  const clinicMock = [
    {
      src: icons.clinicName,
      content: 'Vet care',
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
    <div className="clinic-card">
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

export default Clinic
