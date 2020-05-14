import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const FreeRoute: React.FC<RouteProps> = (props: RouteProps) => {
  // eslint-disable-next-line
  return <Route {...props} />;
};

export default FreeRoute;
