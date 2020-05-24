import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton, Drawer, List, Divider } from '@material-ui/core';
import mainListItems from '../dashboard/listItems';
import './drawer.css';

const AppDrawer: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const history = useHistory();

  if (history.location.pathname === '/login' || history.location.pathname === '/signup')
    return <></>;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: drawerOpened ? 'drawer-paper' : 'drawer-paper-close',
      }}
      open={drawerOpened}
    >
      <div className="toolbar-icon">
        <IconButton onClick={() => setDrawerOpened(!drawerOpened)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};

export default AppDrawer;
