import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
})

export { history }

export default reducer
