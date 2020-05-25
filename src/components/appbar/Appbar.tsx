import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import { IconButton } from '@material-ui/core';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CartState } from '../cart/cart.types';
import useAuthenticated from '../../utils/hooks/useAuthenticated';
import './appbar.css';

const AppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { innerWidth: width } = window;

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { user, authenticated } = useAuthenticated();

  const cartObjects = useSelector((state: CartState) => state.cartObjects);

  const history = useHistory();

  if (history.location.pathname === '/login' || history.location.pathname === '/signup')
    return <></>;
  return (
    <MUIAppBar position="static">
      <Toolbar>
        {width <= 1000 && (
          <>
            <IconButton className="menu-but" aria-label="Menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <div className="menu-link-encloser">
                <Link to="/" className="menu-link">
                  Página Principal
                </Link>
                <Link to="/catalog" className="menu-link">
                  Catálogo
                </Link>
                <Link to="/contact" className="menu-link">
                  Contacto
                </Link>
              </div>
            </Menu>
          </>
        )}
        <Typography variant="h6" color="textPrimary">
          LyndaLogo
        </Typography>
        <section className="right-tool-bar">
          <div className="cart-link">
            <Link to="cart" className="shopping-cart-link">
              <ShoppingCartIcon />
            </Link>
            <span className="cart-objects-badge">{cartObjects.length}</span>
          </div>
          {authenticated ? (
            <Link to="/profile" className="profile-link">
              {`${user.firstName[0]}${user.lastName[0]}`}
            </Link>
          ) : (
            <Link to="/login" className="login-link">
              Iniciar Sesión
            </Link>
          )}
        </section>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
