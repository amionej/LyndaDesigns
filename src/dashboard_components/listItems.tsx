import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';

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

const handleClick = (link: string) => {
  window.location.href = link;
};

const mainListItems = (
  <ThemeProvider theme={colorTheme}>
    <div>
      <ListItem button onClick={()=>handleClick("/dashboard")}>
        <ListItemIcon>
          <DashboardIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={()=>handleClick("/dashboardorders")}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Ordenes" />
      </ListItem>
      <ListItem button onClick={()=>handleClick("/dashboardproducts")}>
        <ListItemIcon>
          <LayersIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
    </div>
  </ThemeProvider>
);

export default mainListItems;
