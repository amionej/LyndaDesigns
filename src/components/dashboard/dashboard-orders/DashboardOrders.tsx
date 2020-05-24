import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Swal from 'sweetalert2';
import useAuthenticated from '../../../utils/hooks/useAuthenticated';
import { Order, OrderItem } from '../../profile/profile.types';
import toCurrency from '../../../utils/currency/currency';
import ALL_ORDERS from '../dashboard.queries';
import './dashboard-orders.css';
import { DashboardOrder } from './dashboard-orders.types';
import { Button } from '@material-ui/core';

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

  const { data } = useQuery(ALL_ORDERS, {
    fetchPolicy: 'cache-and-network',
    onError: () => {
      Swal.fire(`Error`, `Lo sentimos, no se pudieron cargar las órdenes`, 'error');
    },
  });

  const orders: DashboardOrder[] = data ? data.allOrders : [];

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <Container className="card-grid">
          <Card className="dashboard-user-card">
            <div className="dashboard-user-orders">
              <h3 className="dashboard-history-title">
                Todas las órdenes, empezando por recientes
              </h3>
              <div className="dashboard-order-list">
                {orders.map((order: DashboardOrder) => {
                  return (
                    <div className="dashboard-order-list-item">
                      <span className="dashboard-list-item-title">
                        Orden #{order.id} pedida en {order.created.slice(0, 10)} por{' '}
                        {order.user.firstName.toUpperCase()} {order.user.lastName.toUpperCase()}
                      </span>
                      <span style={{ color: '#b76e79' }}>{order.user.email}</span>
                      <div className="dashboard-order-items">
                        {order.orderitemSet.map((ot: OrderItem) => {
                          return (
                            <div className="dashboard-order-item">
                              <div className="dashboard-order-item-product">
                                <span>Producto: </span>
                                <span>{ot.productName}</span>
                              </div>
                              <div className="dashboard-order-item-quantity">
                                <span>Cantidad: </span>
                                <span>{ot.quantity}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Status: {order.status}</span>
                        {order.status === 'NOTPAID' && (
                          <Button
                            size="small"
                            color="secondary"
                            // onClick={() => {
                            // }}
                          >
                            CAMBIAR A PAGADA
                          </Button>
                        )}
                        <span className="dashboard-list-item-total">
                          Total: {toCurrency(order.total)}
                        </span>
                      </div>
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
