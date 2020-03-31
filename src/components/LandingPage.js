import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Lynda Designs
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Cumpleaños, aniversarios, graduaciones y mas.
                            Tenemos un cartas y tarjetas para toda ocasion especial. 
                         </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Iniciar Sesion
                                    </Button>
                            </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Registrarse
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div>
                    <img
                        src="https://www.mujerde10.com/wp-content/uploads/2016/01/cartas-1024x465.jpg"
                        alt="imagen de pagina de inicio"
                    />
                </div>
            </main>
        </React.Fragment>
    );
}