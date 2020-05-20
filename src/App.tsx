import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Routes from './components/routes/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
