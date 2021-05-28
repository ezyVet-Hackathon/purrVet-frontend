import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Layout(props) {
  const classes = useStyles()

  const { children } = props

  return (

    <div>
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src={icons.ezyvet} alt="logo" />
          <span className="hamburger"> </span>
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
            <button type="button" className="demo-button">
              Book a demo
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
