import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getType } from 'typesafe-actions';
import { useHistory, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useMutation } from '@apollo/react-hooks';
import { CartState, CartObject } from './cart.types';
import toCurrency from '../../utils/currency/currency';
import './cart.css';
import '../../utils/currency/currency.css';
import QuantityButtons from '../../utils/quantity-buttons/QuantityButtons';
import useAuthenticated from '../../utils/hooks/useAuthenticated';
import { removeProductFromCart, clearCart } from './cart.actions';
import CREATE_ORDER from './cart.mutations';

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

const Cart: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartObjects = useSelector((state: CartState) => state.cartObjects);

  const { authenticated, user } = useAuthenticated();

  const [CreateOrder] = useMutation(CREATE_ORDER);

  const handleSendOrder = async () => {
    try {
      await CreateOrder({
        variables: {
          OrderItemInput: cartObjects.map((cartObject: CartObject) => {
            return { productId: cartObject.product.id, quantity: cartObject.quantity };
          }),
        },
      }).then(() => {
        Swal.fire({
          title: `Éxito,
          ${user.firstName}!`,
          text: 'Tu orden ha sido pedida.',
          icon: 'success',
          onOpen: () => {
            dispatch({
              type: getType(clearCart),
            });
          },
          onClose: () => {
            history.push('/profile');
          },
        });
      });
    } catch ({ e }) {
      Swal.fire(`Error`, `Tu no ha sido procesada. Causa: ${e}`, 'error');
    }
  };

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <Container className="card-grid">
          <Card className="card">
            {cartObjects.length > 0 ? (
              <CardContent className="card-content">
                <Typography variant="h6" gutterBottom>
                  Resumen de tu carrito
                </Typography>
                <ul className="cart-list">
                  {cartObjects.map((cartObject: CartObject, index) => (
                    <li className="list-item" key={cartObject.product.id}>
                      <div className="list-item-start">
                        <img
                          src={`https://lyndaapi.s3.us-east-2.amazonaws.com/${cartObject.product.image.image}`}
                          alt="imagen_de_producto"
                          className="product-image"
                        />
                        <div className="product-text">
                          <span className="product-title">{cartObject.product.productName}</span>
                          <span className="product-description">
                            {cartObject.product.description}
                          </span>
                          <Button
                            size="small"
                            className="product-eliminate"
                            onClick={() => {
                              dispatch({
                                type: getType(removeProductFromCart),
                                payload: cartObject,
                              });
                            }}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>

                      <div className="list-item-end">
                        <QuantityButtons
                          quantity={cartObject.quantity}
                          index={index}
                          className="quantity-buttons"
                        />
                        <span className="currency product-price">
                          {toCurrency(cartObject.product.price * cartObject.quantity)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-details">
                  <div className="cart-name">
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={`cart-message ${!authenticated && 'cart-message-alert'}`}
                    >
                      {authenticated
                        ? 'Este pedido (sin cobro) se hará a nombre de:'
                        : 'Debes iniciar sesión para poder hacer un pedido'}
                    </Typography>
                    {authenticated && (
                      <Typography gutterBottom>
                        {user.firstName} {user.lastName}
                      </Typography>
                    )}
                  </div>
                  <div className="cart-total">
                    <ListItemText primary="Total" />
                    <span className="currency total">
                      {toCurrency(
                        cartObjects.reduce<number>(
                          (sum, object) => sum + object.quantity * object.product.price,
                          0,
                        ),
                      )}
                    </span>
                  </div>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ display: 'flex', marginLeft: 'auto', marginTop: '50px' }}
                  onClick={() => handleSendOrder()}
                  disabled={!authenticated}
                >
                  Hacer pedido
                </Button>
              </CardContent>
            ) : (
              <div className="no-products">
                <FontAwesomeIcon icon={faExclamationCircle} size="4x" color="#18571e" />
                <h2 className="no-products-title">¡No tienes productos seleccionados!</h2>
                <Link to="/catalog" className="no-products-link">
                  Ir a catálogo
                </Link>
              </div>
            )}
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
