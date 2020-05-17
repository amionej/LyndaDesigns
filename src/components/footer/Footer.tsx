import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './footer.css';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <span>Lynda Designs</span>
      {new Date().getFullYear()}.
    </Typography>
  );
};

const Footer: React.FC = () => {
  const history = useHistory();
  if (history.location.pathname === '/login' || history.location.pathname === '/signup')
    return <></>;
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body1">Lynda Designs</Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
