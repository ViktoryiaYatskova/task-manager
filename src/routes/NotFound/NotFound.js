import React from 'react'
import { Link } from 'react-router-dom'
import { DefaultTemplate } from 'components/templates'
import { routes } from 'config/routes'

const NotFound = () => (
  <DefaultTemplate>
    <h1>Page not found</h1>
    <Link to={routes.root()}>Go to home</Link>
  </DefaultTemplate>
)

export default NotFound
