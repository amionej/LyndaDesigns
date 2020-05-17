import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Apollo from './api/ApolloClient';
import Homepage from './components/home/HomePage';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/SignUp';
import AuthProvider from './components/auth/AuthProvider';
import Appbar from './components/appbar/Appbar';
import Footer from './components/footer/Footer';
import PublicRoute from './utils/route_handlers/PublicRoute';
import FreeRoute from './utils/route_handlers/FreeRoute';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '85vh',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Apollo>
        <AuthProvider>
          <Appbar />
          <main className={classes.content}>
            <Switch>
              <FreeRoute exact path="/" component={Homepage} />
              <FreeRoute exact path="/catalog" component={Catalog} />
              <FreeRoute exact path="/contact" component={Contact} />
              <FreeRoute exact path="/cart" component={Cart} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/signup" component={SignUp} />
            </Switch>
          </main>
          <Footer />
        </AuthProvider>
      </Apollo>
    </BrowserRouter>
  );
};

export default App;
