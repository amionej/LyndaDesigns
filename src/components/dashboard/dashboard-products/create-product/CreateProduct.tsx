import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PRODUCT } from '../../dashboard.mutations';
import GET_PRODUCTS from '../../../catalog/catalog.queries';
import './create-product.css';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '50%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffd9d9',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#B76E79',
    color: 'white',
  },
}));

const CreateProduct: React.FC = () => {
  const history = useHistory();

  const [productName, setProductNameValue] = useState('');
  const [description, setDescriptionValue] = useState('');
  const [price, setPriceValue] = useState('');
  const classes = useStyles();

  const [CreateUser] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [
      {
        query: GET_PRODUCTS,
      },
    ],
  });

  const handleCreateProduct = async () => {
    try {
      await CreateUser({
        variables: {
          productName,
          description,
          price,
        },
      }).then(() => {
        Swal.fire({
          title: 'Éxito',
          text: 'El producto ha sido creada.',
          icon: 'success',
          onClose: () => {
            history.push('/dashboard-products');
          },
        });
      });
    } catch ({ e }) {
      Swal.fire(`Error`, `Tu cuenta no ha sido creada. Causa: ${e}`, 'error');
    }
  };

  return (
    <Grid container>
      <CssBaseline />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Link to="/dashboard-products" style={{ alignSelf: 'center', marginTop: '20px' }}>
          <FontAwesomeIcon icon={faBackward} size="3x" color="#B76E79" className="go-back" />
        </Link>
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{ alignSelf: 'center', marginBottom: '30px' }}
          >
            Crea un nuevo producto
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2} style={{ justifyContent: 'center' }}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="productName"
                  name="productName"
                  variant="outlined"
                  required
                  fullWidth
                  id="productName"
                  label="Nombre del producto"
                  autoFocus
                  onChange={e => setProductNameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Descripción"
                  name="description"
                  autoComplete="description"
                  onChange={e => setDescriptionValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="price"
                  label="Precio"
                  name="price"
                  autoComplete="price"
                  onChange={e => setPriceValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={() => handleCreateProduct()}
            >
              Crear Producto
            </Button>
          </form>
        </div>
      </div>
    </Grid>
  );
};
export default CreateProduct;
