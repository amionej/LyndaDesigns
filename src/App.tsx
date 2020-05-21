import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './components/routes/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
