import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_CURRENT_USER from './auth.queries';
import AuthContext, { AuthState, initialAuthState } from './AuthContext';
import Loading from '../../utils/spinner/Loading';

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, setState] = useState<AuthState>(initialAuthState);

  const { data, loading } = useQuery(GET_CURRENT_USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!loading) {
      const userData = data?.me;
      if (userData) {
        setState({ user: userData, authenticated: true, loading: false });
      } else {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    }
  }, [data, loading]);

  if (state.loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
