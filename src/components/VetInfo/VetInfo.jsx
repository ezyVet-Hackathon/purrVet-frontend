import React from 'react'
import { icons } from '../../utils'

import './VetInfo.scss'

function VetInfo({ clinicInfo }) {
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
    <div className="clinic-card">
      <a href="/find/service/vets">
        <img className="clinic-img" src={icons.vet} alt="clinic" />
      </a>
      <div className="">{vetMock.map((vet) => renderInfo(vet.src, vet.content))}</div>

      <div className="clinic-box mail-container">
        <img src={icons.vetMail} alt="mail" />
        <div className="mail-info">naomi.mitchelle@example.com</div>
      </div>
    </div>
  )
}

export default VetInfo
