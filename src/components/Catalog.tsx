import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3];
const pictures = [
  '',
  'https://images-na.ssl-images-amazon.com/images/I/61okjkZiQnL._AC_SX466_.jpg',
  'https://giftcardsupplystore.com/wp-content/uploads/2019/01/kraft_squar-600x600.jpg',
  'https://i2.wp.com/designedbygeeks.com/wp-content/uploads/2018/12/Gift-Card-Holders-angled-view.png?fit=1500%2C1000&ssl=1',
];
const descriptions = [
  '',
  'Un modelo clásico y sencillo.',
  '¡Personalizado para tu persona favorita!',
  'Un detalle lindo para mamá.',
];

const Catalog: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Catalogo
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              ¡Vea todos nuestros diseños y escoja su favorito!
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={pictures[card]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Modelo #{card}
                    </Typography>
                    <Typography>{descriptions[card]}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>
                    <Button size="small" color="primary">
                      Agregar a carrito
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Catalog;
