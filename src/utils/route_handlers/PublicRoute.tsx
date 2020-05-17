import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuthenticated from '../hooks/useAuthenticated';
import Loading from '../spinner/Loading';

interface Props extends RouteProps {
  fallback?: string;
}

const PublicRoute: React.FC<Props> = (props: Props) => {
  const { fallback, ...routeProps } = props;

  const { authenticated, loading } = useAuthenticated();

  if (loading) {
    return <Loading />;
  }

  if (authenticated) {
    if (fallback) {
      return <Redirect to={fallback} />;
    }
    return <Redirect to="/catalog" />;
  }

  // eslint-disable-next-line
  return <Route {...routeProps} />;
};

export default PublicRoute;
