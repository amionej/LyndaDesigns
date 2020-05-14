import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.css';

const Loading: React.FC = () => {
  return (
    <div className="spinner-encloser">
      <CircularProgress className="spinner" color="secondary" size={100} />
    </div>
  );
};

// const Loading = () => <p>ptm</p>;

export default Loading;
