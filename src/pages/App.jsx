import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage, MapPage } from '.'
import { Layout } from '../components'

import './App.scss'

const App = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/map" component={MapPage} />
    </Layout>
  )
}

export default App
