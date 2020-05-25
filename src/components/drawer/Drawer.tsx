import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton, Drawer, List, Divider } from '@material-ui/core';
import AdminListItems from './AdminListItems';
import './drawer.css';
import useAuthenticated from '../../utils/hooks/useAuthenticated';
import MenuListItems from './MenuListItems';
import Loading from '../../utils/spinner/Loading';

const AppDrawer: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const history = useHistory();
  const { user, loading } = useAuthenticated();

  if (history.location.pathname === '/login' || history.location.pathname === '/signup')
    return <></>;

  if (loading) {
    return <Loading />;
  }
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
          {drawerOpened ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <span style={{ color: '#b76e79', alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}>
        MENU
      </span>
      <List>{MenuListItems}</List>
      <Divider />
      {user?.isStaff && (
        <>
          <span
            style={{ color: '#b76e79', alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}
          >
            ADMIN
          </span>
          <List>{AdminListItems}</List>
        </>
      )}
    </Drawer>
  );
};

export default AppDrawer;
