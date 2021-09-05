import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'config/routes'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route path={routes.root()} component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
