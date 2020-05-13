import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  product: string,
  quantity: number,
  amount: number,
) {
  return { id, date, name, product, quantity, amount };
}

const rows = [
  createData(0, '13 mayo, 2020', 'Carlos Garza', 'Modelo #1', 3, 300.0),
  createData(1, '13 mayo, 2020', 'Jorge Amione', 'Modelo #1', 2, 200.0),
  createData(2, '13 mayo, 2020', 'Gerardo Suarez', 'Modelo #2', 10, 1000.0),
  createData(3, '12 mayo, 2020', 'Pedro Gonzalez', 'Modelo #3', 11, 1100.0),
  createData(4, '12 mayo, 2020', 'Jose Ramirez', 'Modelo #3', 20, 2000.0),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
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

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <Title>Ordenes Recientes</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="right">Costo total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Button variant="outlined" color="secondary">
            Ver más ordenes
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}
