import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from 'typesafe-actions';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from 'react-modal';
import { ThemeProvider } from '@material-ui/styles';
import './catalog.css';
import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCTS from './catalog.queries';
import Loading from '../../utils/spinner/Loading';
import { Product } from './catalog.types';
import QuantityButtons from '../../utils/quantity-buttons/QuantityButtons';
import { addProductToCart } from '../cart/cart.actions';
import { CartState } from '../cart/cart.types';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#B76E79',
    },
  },
});

const Catalog: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [quantity, setQuantity] = useState(1);

  const { data, loading } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'cache-and-network',
  });

  const products = data ? data.allProducts : [];

  const dispatch = useDispatch();

  const cartObjects = useSelector((state: CartState) => state.cartObjects);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <div className="heroContent">
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              className="paperColor"
              gutterBottom
            >
              Catalogo
            </Typography>
            <Typography variant="h5" align="center" className="paperColor" paragraph>
              ¡Vea todos nuestros diseños y escoja su favorito!
            </Typography>
          </Container>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <Container className="cardGrid" maxWidth="md">
            <Grid container spacing={4}>
              {products.map((p: Product) => (
                <Grid item key={p.id} xs={12} sm={6} md={4}>
                  <Card className="card">
                    <CardMedia
                      className="cardMedia"
                      image={`http://127.0.0.1:8000/media/${p.image.image}`}
                      title={p.productName}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setQuantity(1);
                        setSelectedProduct(p);
                        setIsOpen(true);
                      }}
                    />
                    <CardContent className="cardContent">
                      <Typography gutterBottom variant="h5" component="h2">
                        {p.productName}
                      </Typography>
                      <Typography>{p.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        disabled={!p.status || cartObjects.some(c => c.product.id === p.id)}
                        size="small"
                        color="primary"
                        onClick={() => {
                          setQuantity(1);
                          setSelectedProduct(p);
                          setIsOpen(true);
                        }}
                      >
                        {cartObjects.some(c => c.product.id === p.id)
                          ? 'Producto en carrito'
                          : 'Seleccionar'}
                      </Button>
                      <span className={`action-btns ${p.status ? 'available' : 'unavailable'}`}>
                        {p.status ? 'Disponible' : 'Agotado'}
                      </span>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}

        {selectedProduct && (
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => {
              closeModal();
            }}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
          >
            <Container maxWidth="md">
              <CardMedia
                className="cardMedia"
                image={`http://127.0.0.1:8000/media/${selectedProduct.image.image}`}
                title={selectedProduct.description}
              />
              <CardContent
                className="cardContent"
                style={{ textAlign: 'center', borderBottom: '1px solid #B76E79' }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  {selectedProduct.productName}
                </Typography>
                <Typography>{selectedProduct.description}</Typography>
              </CardContent>
              <div className="modal-actions">
                <span>¿Cuántos quieres?</span>
                <QuantityButtons quantity={quantity} setQuantity={setQuantity} />
                <Button
                  color="primary"
                  style={{ paddingTop: '1rem', fontSize: '1rem' }}
                  onClick={() => {
                    dispatch({
                      type: getType(addProductToCart),
                      payload: {
                        product: selectedProduct,
                        quantity,
                      },
                    });
                    Swal.fire(`¡Exito!`, 'Producto agregado a carrito', 'success');
                    closeModal();
                  }}
                >
                  Agregar a carrito
                </Button>
              </div>
            </Container>
          </Modal>
        )}
      </ThemeProvider>
    </>
  );
};

export default Catalog;
