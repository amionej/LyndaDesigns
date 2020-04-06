import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import client from './api/ApolloClient';
import Homepage from './components/HomePage';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';

const history = createBrowserHistory();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '85vh',
    },
    logo: {},
    paper: {
      flexGrow: 1,
    },
    container: {
      flexGrow: 1,
      padding: theme.spacing(0),
      textAlign: 'center',
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }),
);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Lynda Designs
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const handleClick = (link: string) => {
  window.location.href = link;
};

const App = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        {/* Si la pagina es login o signup no se muestra el appbar */}
        {history.location.pathname === '/login' || history.location.pathname === '/signup' ? (
          <></>
        ) : (
          /* <AppBar */
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  className={classes.logo}
                  onClick={() => handleClick('/')}
                  style={{ cursor: 'pointer' }}
                >
                  LyndaDesignsLogo
                </Typography>

                <Grid container spacing={3} className={classes.container}>
                  <Grid item xs={4}>
                    <Button
                      onClick={() => handleClick('catalog')}
                      className={classes.paper}
                      color="inherit"
                    >
                      Catalogo
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      onClick={() => handleClick('contact')}
                      className={classes.paper}
                      color="inherit"
                    >
                      Contacto
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      onClick={() => handleClick('cart')}
                      className={classes.paper}
                      color="inherit"
                    >
                      Carrito
                    </Button>
                  </Grid>
                </Grid>

                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
          /* <AppBar */
        )}

        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </main>

        {/* Si la pagina es login o signup no se muestra el footer */}
        {history.location.pathname === '/login' || history.location.pathname === '/signup' ? (
          <></>
        ) : (
          /* <Footer /> */
          <footer className={classes.footer} style={{ textAlign: 'center' }}>
            <Container maxWidth="sm">
              <Typography variant="body1">Footer.</Typography>
              <Copyright />
            </Container>
          </footer>
          /* <Footer /> */
        )}
      </Router>
    </ApolloProvider>
  );
};

export default App;
