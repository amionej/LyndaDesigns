import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Order from './Order';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: '#B76E79',
        padding: theme.spacing(8, 0, 6),
    },
    paperColor: {
        color: theme.palette.background.paper,
    },
}));

const orders= [
  {
    user: 'Juan Angel',
    date: 'Nov 12 2020',
    product: 'Carta membretada'
  }
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        className={classes.paperColor}
                        gutterBottom
                    >
                        Mis Productos
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.paperColor} paragraph>
                        Edite sus productos
                    </Typography>
                </Container>
            </div>
          <Grid container spacing={4}>
            {orders.map((order) => (
              <Order key={order.user} post={order} />
            ))}
          </Grid>
        </main>
    </React.Fragment>
  );
}