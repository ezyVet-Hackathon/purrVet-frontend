import React from 'react'
import { icons } from '../../utils'

// eslint-disable-next-line import/no-unresolved
import './Services.scss'

function Services(props) {
  return (
    <div className="box-container">
      <div>
        <div className="box">
          <img src={icons.petShop} alt="petshop" />
        </div>
        <div className="box pet-train">
          <img src={icons.petTrain} alt="petTrain" />
        </div>
      </div>

      <div>
        <a href="/find/service/clinics" alt="petClinic">
          <div className="box">
            <img src={icons.petClinic} alt="petClinic" />
          </div>
        </a>

        <div className="box">
          <img src={icons.petCare} alt="petCare" />
        </div>
      </div>
    </div>
  )
}

export default Services
