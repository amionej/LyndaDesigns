import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
}));

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
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Lynda Designs
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Cumpleaños, aniversarios, graduaciones y mas. Tenemos cartas y tarjetas para toda
              ocasion especial.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                   <Button
                    onClick={() => handleClick('login')} variant="contained" color="primary">
                    Iniciar Sesion
                  </Button>
                </Grid>
                <Grid item>
                <Button
                    onClick={() => handleClick('signup')} variant="outlined" color="primary">
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.images}>
          <img
            src="https://www.mujerde10.com/wp-content/uploads/2016/01/cartas-1024x465.jpg"
            alt="imagen de pagina de inicio"
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
