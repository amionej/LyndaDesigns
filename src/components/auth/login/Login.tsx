import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import GET_CURRENT_USER from '../auth.queries';
import GET_TOKEN from './login.mutations';
import './login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span>Lynda Designs</span>
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://i2.wp.com/designedbygeeks.com/wp-content/uploads/2018/12/Gift-Card-Holders-angled-view.png?fit=1500%2C1000&ssl=1)',
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#B76E79',
    color: 'white',
  },
}));

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const [GetToken] = useMutation(GET_TOKEN, {
    refetchQueries: [
      {
        query: GET_CURRENT_USER,
      },
    ],
  });

  const handleSignIn = async () => {
    try {
      await GetToken({
        variables: {
          username,
          password,
        },
      }).then(() => {
        history.push('/catalog');
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="3x" color="#B76E79" className="goback" />
        </Link>
        <div className={classes.paper}>
          <FontAwesomeIcon
            icon={faSignInAlt}
            style={{ marginBottom: '5px' }}
            size="3x"
            color="#ffd9d9"
          />
          <Typography component="h1" variant="h5">
            Inicio de Sesion
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={username}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // type="submit"
              onClick={() => handleSignIn()}
            >
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">¿No tienes cuenta? Registrate</Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
};
export default Login;
