import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import Routes from 'routes'
import GlobalStyle from './styles'

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </>
)

export default App
