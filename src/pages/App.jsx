import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

import { HomePage, MapPage, Services } from '.'
import { ErrorPage, Layout } from '../components'
import Clinic from '../components/Clinic/Clinic'
import VetInfo from '../components/VetInfo/VetInfo'
import Questions from './Questions/Questions'

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/find" component={Questions} />
        <Route path="/clinics/:id" component={VetInfo} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )
}

export default App
