import React from 'react';
import { AuthState } from './contex/Auth/AuthState';
import { AppRouter } from './routers/AppRouter';


export const UniversidadApp = () => {
  return (
    <AuthState>
        <AppRouter />
    </AuthState>
  );
}
