import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/ApolloClient';
import Homepage from './components/HomePage/HomePage';
import './App.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        {/* <AppBar />> */}
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
};

export default App;
