import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import '../../css/App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import store from '../redux-store';
import Apollo from '../../api/ApolloClient';
import Homepage from '../home/HomePage';
import Catalog from '../catalog/Catalog';
import Contact from '../Contact';
import Cart from '../cart/Cart';
import Login from '../auth/login/Login';
import SignUp from '../auth/signup/SignUp';
import AuthProvider from '../auth/AuthProvider';
import Appbar from '../appbar/Appbar';
import Footer from '../footer/Footer';
import PublicRoute from '../../utils/route_handlers/PublicRoute';
import FreeRoute from '../../utils/route_handlers/FreeRoute';
import PrivateRoute from '../../utils/route_handlers/PrivateRoute';
import Profile from '../profile/Profile';
import DashboardOrders from '../dashboard/dashboard-orders/DashboardOrders';
import DashboardProducts from '../dashboard/dashboard-products/DashboardProducts';
import AppDrawer from '../drawer/Drawer';
import './transition.css';
import './routes.css';

const Routes: React.FC = () => {
  const { innerWidth: width } = window;
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
        <section className="route-section">
          <ReduxProvider store={store}>
            <Apollo>
              <AuthProvider>
                <Appbar />
                <main className={width > 800 ? 'app-content desktop' : 'app-content mobile'}>
                  {width > 1000 && <AppDrawer />}
                  <Switch location={location}>
                    <FreeRoute exact path="/" component={Homepage} />
                    <FreeRoute exact path="/catalog" component={Catalog} />
                    <FreeRoute exact path="/contact" component={Contact} />
                    <FreeRoute exact path="/cart" component={Cart} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/signup" component={SignUp} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/dashboard-orders" component={DashboardOrders} />
                    <PrivateRoute exact path="/dashboard-products" component={DashboardProducts} />
                  </Switch>
                </main>
                <Footer />
              </AuthProvider>
            </Apollo>
          </ReduxProvider>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
