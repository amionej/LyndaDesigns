import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

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

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <Title>Ganancias</Title>
        <Typography component="p" variant="h4">
          $3,000.00
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          el 13 de mayo, 2020
        </Typography>
        <div>
          <Button variant="outlined" color="secondary">
            Ver Balance
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}
