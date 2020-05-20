import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActions from '@material-ui/core/CardActions';
import Swal from 'sweetalert2';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useMutation } from '@apollo/react-hooks';
import LOGOUT from './auth/auth.mutations';

const products = [
  { name: 'Modelo 1', desc: 'Un modelo clásico y sencillo', price: '$200' },
  { name: 'Modelo 2', desc: '¡Personalizado para tu persona favorita!', price: '$250' },
  { name: 'Modelo 3', desc: 'Un detalle lindo para mamá.', price: '$150' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    align: 'center',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

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
  const [Logout, { client }] = useMutation(LOGOUT);
  const history = useHistory();

  const handleSendOrder = async () => {
    try {
      await Logout().then(() => {
        console.log(client);
        client.resetStore();
        // history.go(0);
        history.push('/login');
      });
    } catch (e) {
      console.log(e);
    }
    // Swal.fire({
    //   icon: 'success',
    //   title: '¡Gracias!',
    //   text: 'Tu pedido por 600 ha sido creado.',
    //   showConfirmButton: true,
    //   confirmButtonColor: '#B76E79',
    // });
  };
  const classes = useStyles();
  // const [totalPriceValue, setTotalPriceValue] = useState('');
  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <Container className={classes.cardGrid}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                Order summary
              </Typography>
              <List disablePadding>
                {products.map(product => (
                  <ListItem className={classes.listItem} key={product.name}>
                    <ListItemText primary={product.name} secondary={product.desc} />
                    <Typography variant="body2">{product.price}</Typography>
                  </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" className={classes.total}>
                    $600
                  </Typography>
                </ListItem>
              </List>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom className={classes.title}>
                    A nombre de:
                  </Typography>
                  <Typography gutterBottom>Carlos Garza</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ display: 'flex', marginLeft: 'auto' }}
                onClick={() => handleSendOrder()}
              >
                Hacer pedido
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
