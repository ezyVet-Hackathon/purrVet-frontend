import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage, Services } from '.'
import { Layout } from '../components'
import Clinic from '../components/Clinic/Clinic'

import './App.scss'
import Quesions from './Questions/Quesions'

const App = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/find" component={Quesions} />
      <Route exact path="/find/service" component={Services} />
      <Route exact path="/find/service/clinics" component={Clinic} />
    </Layout>
  )
}

export default App
