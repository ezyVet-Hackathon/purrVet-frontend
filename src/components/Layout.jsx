import { AppBar, Toolbar, Button, IconButton, Drawer, Link, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import './Components.scss'
import { icons } from '../utils'

const headersData = [
  {
    label: 'Product',
    href: '/',
  },
  {
    label: 'Resources',
    href: '/',
  },
  {
    label: 'About us',
    href: '/',
  },
  {
    label: 'Careers',
    href: '/',
  },
]

const getMenuButtons = () => {
  return headersData.map(({ label, href, color = 'inherit' }) => {
    return (
      <Button
        {...{
          key: label,
          color,
          to: href,
          component: RouterLink,
          className: 'menu-button',
        }}
      >
        {label}
      </Button>
    )
  })
}

const ezyVetLogo = (
  <a href="https://www.ezyvet.com/">
    <div className="logo-container">
      <img className="logo" src={icons.ezyvet} alt="ezyVet Logo" />
    </div>
  </a>
)

const demoButton = (
  <button className="btn find-vet" type="button">
    Find a Vet
  </button>
)

export default function Layout() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar className="toolbar">
        {ezyVetLogo}
        <div>{getMenuButtons()}</div>
        {demoButton}
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar className="toolbar">
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="drawer-container">{getDrawerChoices()}</div>
        </Drawer>

        {ezyVetLogo}
        {demoButton}

        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    )
  }

  return (
    <header>
      <AppBar className="header">{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  )
}
