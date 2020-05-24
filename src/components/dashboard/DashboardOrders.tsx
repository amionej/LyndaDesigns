import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Swal from 'sweetalert2';
import LOGOUT from '../auth/auth.mutations';
import useAuthenticated from '../../utils/hooks/useAuthenticated';
import USER_ORDERS from '../profile/profile.queries';
import { Order, OrderItem } from '../profile/profile.types';
import '../profile/profile.css';
import toCurrency from '../../utils/currency/currency';

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

const Profile: React.FC = () => {
  const { user } = useAuthenticated();
  const history = useHistory();
  const [Logout, { client }] = useMutation(LOGOUT);

  const { data } = useQuery(USER_ORDERS, {
    fetchPolicy: 'cache-and-network',
    onError: () => {
      Swal.fire(`Error`, `Lo sentimos, no se pudieron cargar tus órdenes`, 'error');
    },
  });

  const orders = data ? data.userOrders : [];

  const handleLogout = async () => {
    try {
      await Logout().then(() => {
        client.resetStore();
        history.push('/login');
      });
    } catch (e) {
      history.push('/login');
    }
  };

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <Container className="card-grid">
          <Card className="user-card">
            <div className="user-orders">
              <h3 className="history-title">Historial de órdenes</h3>
              <div className="order-list">
                {orders.map((order: Order) => {
                  return (
                    <div className="order-list-item">
                      <span className="list-item-title">
                        Orden #{order.id} pedida en {order.created.slice(0, 10)}
                      </span>
                      <div className="order-items">
                        {order.orderitemSet.map((ot: OrderItem) => {
                          return (
                            <div className="order-item">
                              <div className="order-item-product">
                                <span>Producto: </span>
                                <span>{ot.productName}</span>
                              </div>
                              <div className="order-item-quantity">
                                <span>Cantidad: </span>
                                <span>{ot.quantity}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <span className="list-item-total">Total: {toCurrency(order.total)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Profile;
