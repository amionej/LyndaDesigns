import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import { useMutation } from '@apollo/react-hooks';
import CREATE_USER from './signup.mutations';
import GET_TOKEN from '../login/login.mutations';
import GET_CURRENT_USER from '../auth.queries';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://static.diariofemenino.com/media/7097/c/carta-de-amor-para-san-valentin-sm.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const SignUp: React.FC = () => {
  const [firstName, setFirstNameValue] = useState('');
  const [lastName, setLastNameValue] = useState('');
  const [email, setEmailValue] = useState('');
  const [username, setUsernameValue] = useState('');
  const [password, setPasswordValue] = useState('');
  const classes = useStyles();

  const [CreateUser] = useMutation(CREATE_USER);

  const [GetToken] = useMutation(GET_TOKEN, {
    refetchQueries: [
      {
        query: GET_CURRENT_USER,
      },
    ],
  });

  const hangleSignUp = async () => {
    try {
      await CreateUser({
        variables: {
          username,
          password,
          email,
          firstName,
          lastName,
        },
      }).then(() => {
        Swal.fire({
          title: `Bienvenido,
          ${firstName}!`,
          text: 'Tu cuenta ha sido creada.',
          icon: 'success',
          onOpen: () => {
            try {
              GetToken({
                variables: {
                  username,
                  password,
                },
              });
            } catch (e) {
              Swal.fire(`Error`, `Tu cuenta no pudo ser creada`, 'error');
            }
          },
        });
      });
    } catch ({ e }) {
      Swal.fire(`Error`, `Tu cuenta no ha sido creada. Causa: ${e}`, 'error');
    }
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="home-encloser">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="3x" color="#B76E79" className="gohome" />
          </Link>
        </div>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crea una cuenta
          </Typography>
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  name="username"
                  autoComplete="username"
                  onChange={e => setUsernameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => setPasswordValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={() => hangleSignUp()}
            >
              Registrar cuenta
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login">¿Ya tienes cuenta? Inicia Sesion.</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default SignUp;
