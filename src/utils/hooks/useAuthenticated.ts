import { useContext } from 'react';
import AuthContext, { AuthState } from '../../components/auth/AuthContext';

const useAuthenticated: () => AuthState = () => useContext(AuthContext);

export default useAuthenticated;
