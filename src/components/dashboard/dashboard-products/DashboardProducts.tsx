import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { ThemeProvider } from '@material-ui/styles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import GET_PRODUCTS from '../../catalog/catalog.queries';
import Loading from '../../../utils/spinner/Loading';
import { Product } from '../../catalog/catalog.types';
import '../../catalog/catalog.css';
import { UPDATE_PRODUCT, DELETE_PRODUCT, UPLOAD_IMAGE } from '../dashboard.mutations';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#B76E79',
    },
  },
});

const DashboardProducts: React.FC = () => {
  const [file, setFile] = useState<File>(null);
  const { data, loading } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
  });

  const products = data ? data.allProducts : [];

  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [
      {
        query: GET_PRODUCTS,
      },
    ],
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [
      {
        query: GET_PRODUCTS,
      },
    ],
  });

  const [uploadProductImage] = useMutation(UPLOAD_IMAGE, {
    refetchQueries: [
      {
        query: GET_PRODUCTS,
      },
    ],
  });

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Link style={{ alignSelf: 'center', marginTop: '4rem', textDecoration:"none" }} to="/create-product">
            <Button
              size="large"
              style={{
                color: 'white',
                backgroundColor: '#b7886e',
                fontWeight: 'bold',
              }}
            >
              CREAR UN NUEVO PRODUCTO
            </Button>
          </Link>

          {loading ? (
            <Loading />
          ) : (
            <Container className="cardGrid" maxWidth="md">
              <Grid container spacing={4}>
                {products.map((p: Product) => (
                  <Grid item key={p.id} xs={12} sm={6} md={4}>
                    <Card className="card">
                      {p.image?.image ? (
                        <CardMedia
                          className="cardMedia"
                          image={`https://lyndaapi.s3.us-east-2.amazonaws.com/${p.image.image}`}
                          title={p.productName}
                        />
                      ) : (
                        <div
                          style={{
                            height: '45%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            padding: '0 5px',
                          }}
                        >
                          <Button
                            variant="contained"
                            component="label"
                            style={{ backgroundColor: 'grey', color: 'white' }}
                          >
                            {file ? file.name : 'Selecciona una imagen'}
                            <input
                              type="file"
                              style={{ display: 'none' }}
                              onChange={e => {
                                setFile(e.target.files[0]);
                              }}
                            />
                          </Button>
                          <Button
                            disabled={!file}
                            variant="contained"
                            component="label"
                            style={
                              file
                                ? { backgroundColor: '#B76E79', color: 'white' }
                                : { backgroundColor: 'rgba(235, 206, 211, 0.979)', color: 'white' }
                            }
                            onClick={async () => {
                              try {
                                await uploadProductImage({
                                  variables: {
                                    id: p.id,
                                    image: file,
                                  },
                                }).then(() => {
                                  Swal.fire(`¡Exito!`, 'Tu imagen ha sido asignada.', 'success')
                                });
                              } catch ({ e }) {
                                // Ignore write errors
                              }
                            }}
                          >
                            Súbela
                          </Button>
                        </div>
                      )}
                      <CardContent className="cardContent">
                        <Typography gutterBottom variant="h5" component="h2">
                          {p.productName}
                        </Typography>
                        <Typography>{p.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={async () => {
                            try {
                              await updateProduct({
                                variables: {
                                  id: p.id,
                                  status: !p.status,
                                },
                              }).then(() => {});
                            } catch ({ e }) {
                              Swal.fire(
                                `Error`,
                                `El producto no ha podido ser cambiado. Causa: ${e}`,
                                'error',
                              );
                            }
                          }}
                        >
                          {p.status ? 'Marcar NO disponible' : 'Marcar disponible'}
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          onClick={async () => {
                            try {
                              await deleteProduct({
                                variables: {
                                  id: p.id,
                                },
                              }).then(() => {});
                            } catch ({ e }) {
                              Swal.fire(
                                `Error`,
                                `El producto no ha podido ser borrado. Causa: ${e}`,
                                'error',
                              );
                            }
                          }}
                        >
                          Borrar
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default DashboardProducts;
