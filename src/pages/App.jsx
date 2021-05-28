import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage } from '.'
import { Layout } from '../components'

import './App.scss'

const App = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
    </Layout>
  )
}

export default App
