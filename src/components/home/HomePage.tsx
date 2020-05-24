import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-multi-carousel';
import GestureIcon from '@material-ui/icons/Gesture';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import 'react-multi-carousel/lib/styles.css';
import './homepage.css';
import useAuthenticated from '../../utils/hooks/useAuthenticated';

const useStyles = makeStyles(theme => ({
  images: {
    textAlign: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  paperColor: {
    color: theme.palette.background.paper,
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1199, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 899, min: 651 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
  },
};

const HomePage: React.FC = () => {
  const classes = useStyles();

  const { authenticated, user } = useAuthenticated();

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <div className="hero-content">
          <Container>
            <Carousel
              responsive={responsive}
              autoPlay={false}
              infinite
              partialVisible={false}
              focusOnSelect
              itemClass="carousel-item"
            >
              {authenticated && (
                <div className="carousel-div-item">
                  <span className="carousel-item-title">Bonito día, {user.firstName}.</span>
                  <span className="carousel-item-desc">¡Nos da gusto que estés de vuelta!</span>
                </div>
              )}
              <div className="carousel-div-item">
                <span className="carousel-item-title">Lynda Designs</span>
                <span className="carousel-item-desc">
                  Cumpleaños, aniversarios, graduaciones y más.
                </span>
              </div>
              {!authenticated && (
                <div className="carousel-div-item">
                  <span className="carousel-item-title">Crea una cuenta</span>
                  <span className="carousel-item-desc">Así podrás hacer pedidos.</span>
                  <Link to="/signup" className="carousel-link">
                    Registrarme
                  </Link>
                </div>
              )}
              <div className="carousel-div-item">
                <span className="carousel-item-title">Nuestro catálogo</span>
                <span className="carousel-item-desc">Escoge tu preferido.</span>
                <Link to="/catalog" className="carousel-link">
                  Catálogo
                </Link>
              </div>
              {!authenticated && (
                <div className="carousel-div-item">
                  <span className="carousel-item-title">Inicia Sesión</span>
                  <span className="carousel-item-desc">Haz tu pedidos ahora.</span>
                  <Link to="/login" className="carousel-link">
                    Iniciar Sesion
                  </Link>
                </div>
              )}
              <div className="carousel-div-item">
                <span className="carousel-item-title">¿Intrigado?</span>
                <span className="carousel-item-desc">
                  Contáctanos para cualquier duda que tengas.
                </span>
                <Link to="/contact" className="carousel-link">
                  Contacto
                </Link>
              </div>
            </Carousel>
          </Container>
        </div>
        <div>
          <Container className={classes.container}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <GestureIcon fontSize="large" />
                  <Typography variant="h4" className={classes.title} align="center">
                    Personalizadas
                  </Typography>
                  <Typography variant="h6" align="center">
                    Hechas para cada quien, sin importar lo que buscas.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <TrendingUpIcon fontSize="large" />
                  <Typography variant="h4" className={classes.title} align="center">
                    De Alta Calidad
                  </Typography>
                  <Typography variant="h6" align="center">
                    No te preocupes por la calidad, siempre serán excelentes.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <QueryBuilderIcon fontSize="large" />
                  <Typography variant="h4" className={classes.title} align="center">
                    Siempre a tiempo
                  </Typography>
                  <Typography variant="h6" align="center">
                    Nunca te preocupes por el día de entrega. Ahí estaremos.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
