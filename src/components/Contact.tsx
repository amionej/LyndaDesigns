import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    ContactPage: {
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
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        height : '100%'
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
        height: '100px'
    },
}));

function handleSendMail(fName, lName, email, message) {
    console.log(fName, lName, email, message);
    Swal.fire(`¡Gracias, ${fName} ${lName}!`, "Tu mensaje ha sido enviado.", 'success');
  }

const Contact: React.FC = () => {
    const classes = useStyles();
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setmessageValue] = useState('');
    return (
        <Container className={classes.ContactPage}>
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatarRow}>
                    <Avatar className={classes.avatar}>
                        <CallIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.avatarText}>
                        Llamanos: 65 84 42 36
                    </Typography>
                </div>
                <div className={classes.avatarRow}>
                    <Avatar className={classes.avatar}>
                        <MailIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.avatarText}>
                       Envianos un correo
                    </Typography>
                </div>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                autoFocus
                                onChange={e => setFirstNameValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Apellido"
                                name="lastName"
                                autoComplete="lname"
                                onChange={e => setLastNameValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Correo electronico"
                                name="email"
                                autoComplete="email"
                                onChange={e => setEmailValue(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        className={classes.sendedMessage}
                        variant="outlined"
                        required
                        fullWidth
                        id="messaage"
                        label="Escriba aqui su mensaje..."
                        name="messaage"
                        autoComplete="Mensaje"
                        onChange={e => setmessageValue(e.target.value)}
                        />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleSendMail(firstNameValue, lastNameValue, emailValue, messageValue)}
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Contact;
