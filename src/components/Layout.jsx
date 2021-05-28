import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

import { icons } from '../utils'
import './Components.scss'

function Layout(props) {
  const { children } = props

  return (
    <div>
      <div className="navbar">
        <div>
          <img className="logo" src={icons.ezyvet} alt="logo" />
        </div>

        <div className="navbar-link-button" position="static">
          <div className="menu-container">
            <div>Product</div>
            <div>Resources</div>
            <div>About us</div>
            <div>Career</div>
            <a href="/find">Find a vet</a>
          </div>

          <div className="demo-button-container">
            <a href="/find/service">
              <button type="button" className="demo-button">
                Book a demo
              </button>
            </a>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Layout
