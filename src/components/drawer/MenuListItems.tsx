import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBag, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#B76E79',
    },
    secondary: {
      main: '#b7886e',
    },
  },
});

const MenuListItems = (
  <ThemeProvider theme={colorTheme}>
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHome} size="2x" color="#b7886e" />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
      </Link>
      <Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faShoppingBag} size="2x" color="#b7886e" />
          </ListItemIcon>
          <ListItemText primary="Catálogo" />
        </ListItem>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#b7886e" />
          </ListItemIcon>
          <ListItemText primary="Contacto" />
        </ListItem>
      </Link>
    </div>
  </ThemeProvider>
);

export default MenuListItems;
