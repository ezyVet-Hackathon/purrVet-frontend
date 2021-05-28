import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage } from '.'
import { Layout } from '../components'

import './App.scss'
import Quesions from './Questions/Quesions'

const App = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/find" component={Quesions} />
    </Layout>
  )
}

export default App
