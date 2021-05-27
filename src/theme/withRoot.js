/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#242842',
        },
      },
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: '#e77f8e',
          color: '#fff',
        },
      },
      text: {
        background: '#e45a6e',
        borderRadius: '20px',
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        textDecoration: 'none',
        fontFamily: 'Abel',
        textTransform: 'capitalize',
        fontSize: '1.5em',
      },
    },
    MuiAlert: {
      filledSuccess: {
        color: 'white',
      },
      filledError: {
        backgroundColor: '#ff3c58',
      },
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
