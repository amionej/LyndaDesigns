import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-multi-carousel';
import GestureIcon from '@material-ui/icons/Gesture';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import 'react-multi-carousel/lib/styles.css';
// import '../css/HomePage.css';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const handleClick = (link: string) => {
  window.location.href = link;
};

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container>
            <Carousel responsive={responsive} autoPlay infinite focusOnSelect centerMode>
              <div>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Lynda Designs
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Cumpleaños, aniversarios, graduaciones y más.
                </Typography>
              </div>
              <div>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Crea una cuenta
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Así podrás hacer pedidos.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Button
                      onClick={() => handleClick('signup')}
                      variant="outlined"
                      color="primary"
                    >
                      Registrarme
                    </Button>
                  </Grid>
                </div>
              </div>
              <div>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Nuestro catálogo.
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Escoge tu preferido.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={1} justify="center">
                    <Button
                      onClick={() => handleClick('catalog')}
                      variant="contained"
                      color="primary"
                    >
                      Catálogo
                    </Button>
                  </Grid>
                </div>
              </div>
              <div>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Inicia Sesión
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Haz tu pedidos ahora.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button
                        onClick={() => handleClick('login')}
                        variant="outlined"
                        color="primary"
                      >
                        Iniciar Sesion
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  ¿Intrigado?
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Contáctanos para cualquier duda que tengas.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button
                        onClick={() => handleClick('contact')}
                        variant="contained"
                        color="primary"
                      >
                        Contacto
                      </Button>
                    </Grid>
                  </Grid>
                </div>
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
      </main>
    </>
  );
};

export default HomePage;
