import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import Routes from 'routes'
import GlobalStyle from './styles';

const App = () => {
  useEffect(() => {
    store.dispatch({ type: 'app/init' });
  }, []);

  return (<>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </>);
};

export default App
