import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
    newProductPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#B76E79',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
        height: '100%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatarRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatarText: {
        margin: theme.spacing(1),
    },
    sendedMessage: {
        margin: theme.spacing(3, 0, 2),
        height: '100px',
    },
    roseGold: {
        borderColor: '#B76E79',
    },
}));

const colorTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#B76E79',
        },
    },
});

function handleSendnewProduct(newProductName, price, imageLink, descripcion) {
    console.log(newProductName, price, imageLink, descripcion);
    Swal.fire(`¡Listo!`, 'Su newProducto ha sido agregado.', 'success');
}

const NewProduct: React.FC = () => {
    const classes = useStyles();
    const [newProductNameValue, setnewProductNameValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [imageLinkValue, setImageLinkValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    return (
        <Container className={classes.newProductPage}>
            <ThemeProvider theme={colorTheme}>
                <CssBaseline />
                <div className={classes.paper}>
                    <div className={classes.avatarRow}>
                        <Avatar className={classes.avatar}>
                            <AddBoxIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.avatarText}>
                            Nuevo Producto
                        </Typography>
                    </div>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Nombre"
                                    label="Nombre del newProducto"
                                    name="Nombre"
                                    autoComplete="Nombre"
                                    onChange={e => setnewProductNameValue(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            className={classes.sendedMessage}
                            variant="outlined"
                            required
                            fullWidth
                            id="price"
                            label="Asigne un precio..."
                            name="price"
                            autoComplete="0"
                            onChange={e => setPriceValue(e.target.value)}
                        />
                        <TextField
                            className={classes.sendedMessage}
                            variant="outlined"
                            required
                            fullWidth
                            id="link"
                            label="Link a imagen..."
                            name="link"
                            autoComplete="0"
                            onChange={e => setImageLinkValue(e.target.value)}
                        />
                        <TextField
                            className={classes.sendedMessage}
                            variant="outlined"
                            required
                            fullWidth
                            id="descripcion"
                            label="Descripcion..."
                            name="descripcion"
                            autoComplete="0"
                            onChange={e => setDescriptionValue(e.target.value)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() =>
                                handleSendnewProduct(newProductNameValue, priceValue, imageLinkValue, descriptionValue)
                            }
                        >
                            Guardar
                        </Button>
                    </form>
                </div>
            </ThemeProvider>
        </Container>
    );
};

export default NewProduct;
