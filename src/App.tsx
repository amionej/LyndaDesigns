import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/ApolloClient';
import './App.css';

const App = () => {
  return <ApolloProvider client={client}>App</ApolloProvider>;
};

export default App;
