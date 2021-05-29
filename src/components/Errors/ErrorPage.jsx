import React from 'react'
import { icons } from '../../utils'

import './Errors.scss'

const ErrorPage = (props) => {
  return (
    <div className="messageContainer">
      <h1 className="notFoundText">Oh no, the router cannot be found</h1>
      <img className="largeIcon" src={icons.notFound} alt="Not found" />
    </div>
  )
}

export default ErrorPage
