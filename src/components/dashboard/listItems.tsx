import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';
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

const mainListItems = (
  <ThemeProvider theme={colorTheme}>
    <div>
      <Link to="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/dashboard/orders">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Ordenes" />
        </ListItem>
      </Link>
      <Link to="/dashboard/products">
        <ListItem button>
          <ListItemIcon>
            <LayersIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
      </Link>
    </div>
  </ThemeProvider>
);

export default mainListItems;
