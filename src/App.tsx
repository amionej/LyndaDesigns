import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { IconButton } from '@material-ui/core';
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
    content: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '85vh',
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    menuButton: {
      marginRight: 16,
      marginLeft: -12,
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
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

const App = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (link: string) => {
    setAnchorEl(null);
    window.location.href = link;
  };

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        {/* Si la pagina es login o signup no se muestra el appbar */}
        {history.location.pathname === '/login' || history.location.pathname === '/signup' ? (
          <></>
        ) : (
          /* <AppBar */
          <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  aria-label="Menu"
                  color="inherit"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={()=>handleClick("/")}>Página Principal</MenuItem>
                  <MenuItem onClick={()=>handleClick("/catalog")}>Catálogo</MenuItem>
                  <MenuItem onClick={()=>handleClick("/contact")}>Contacto</MenuItem>
                </Menu>
                <Typography
                  variant="h6"
                  onClick={() => handleClick('/')}
                  style={{ cursor: 'pointer' }}
                >
                  LyndaLogo
                </Typography>
                <section className={classes.rightToolbar}>
                  <IconButton color="inherit" aria-label="Save" onClick={()=>handleClick("/cart")}>
                    <ShoppingCartIcon />
                  </IconButton>
                  <Button color="inherit" onClick={() => handleClick('login')}>
                    {' '}
                    Login
                  </Button>
                </section>
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
