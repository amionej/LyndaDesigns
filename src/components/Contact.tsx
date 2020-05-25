import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
  ContactPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    width:'50%'
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
    float: "right",
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

function handleSendMail(fName, lName, email, message, history) {
  Swal.fire(`¡Gracias, ${fName} ${lName}!`, 'Tu mensaje ha sido enviado.', 'success').then(() => {
    history.push('/');
  });
}

const Contact: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setmessageValue] = useState('');
  return (
    <Container className={classes.ContactPage}>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.avatarRow} >
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
                  color="primary"
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
              id="message"
              label="Escriba aqui su mensaje..."
              name="message"
              autoComplete="Mensaje"
              onChange={e => setmessageValue(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() =>
                handleSendMail(firstNameValue, lastNameValue, emailValue, messageValue, history)
              }
            >
              Enviar
            </Button>
          </form>
        </div>
      </ThemeProvider>
    </Container>
  );
};

export default Contact;
