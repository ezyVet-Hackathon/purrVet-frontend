import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage, MapPage, Services } from '.'
import { Layout } from '../components'
import Clinic from '../components/Clinic/Clinic'
import VetInfo from '../components/VetInfo/VetInfo'

import './App.scss'

const App = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/map" component={MapPage} />
      <Route exact path="/find" component={Quesions} />
      <Route exact path="/find/service" component={Services} />
      <Route exact path="/find/service/clinics" component={Clinic} />
      <Route exact path="/find/service/vets" component={VetInfo} />
    </Layout>
  )
}

export default App
