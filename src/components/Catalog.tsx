import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from 'react-modal';
import { ThemeProvider } from '@material-ui/styles';
import '../css/Catalog.css';
import { useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: '#B76E79',
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
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  paperColor: {
    color: theme.palette.background.paper,
  },
}));

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#B76E79',
    },
  },
});

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState();
  const [description, setDescription] = React.useState('');
  const [number, setNumber] = React.useState('');
  function openModal(picture, desc, num) {
    setImage(picture);
    setDescription(desc);
    setNumber(num);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ThemeProvider theme={colorTheme}>
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
                Catalogo
              </Typography>
              <Typography variant="h5" align="center" className={classes.paperColor} paragraph>
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
                      title={descriptions[card]}
                      style={{ cursor: 'pointer' }}
                      onClick={() => openModal(pictures[card], descriptions[card], card)}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Modelo #{card}
                      </Typography>
                      <Typography>{descriptions[card]}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          openModal(pictures[card], descriptions[card], card);
                        }}
                      >
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

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              },
              content: {
                position: 'fixed',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: 'auto',
                border: '1px solid #ccc',
                background: '#fff',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              },
            }}
            contentLabel="Example Modal"
          >
            <Container className={classes.cardGrid} maxWidth="md">
              <CardMedia className={classes.cardMedia} image={image} title={description} />
              <CardContent className={classes.cardContent} style={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Modelo #{number}
                </Typography>
                <Typography>{description}</Typography>
                <Button size="large" color="primary">
                  Agregar a carrito
                </Button>
              </CardContent>
            </Container>
          </Modal>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Catalog;
