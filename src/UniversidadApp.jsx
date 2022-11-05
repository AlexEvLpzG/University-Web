import React from 'react';
import { AuthState } from './contex/Auth/AuthState';
import { DataState } from './contex/Data/DataState';
import { AppRouter } from './routers/AppRouter';


export const UniversidadApp = () => {
  return (
    <DataState>
      <AuthState>
          <AppRouter />
      </AuthState>
    </DataState>
  );
}
