import React from 'react';
import { User } from './auth.types';

export interface AuthState {
  user: User;
  authenticated: boolean;
  loading: boolean;
}

export const initialAuthState = {
  user: null,
  authenticated: false,
  loading: true,
};

export default React.createContext<AuthState>(initialAuthState);
