import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../components/auth/Login';
import { AuthContext } from '../contex/Auth/AuthCotext';
import { DashboardRouters } from './DashboardRouters';

import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const authContext = useContext( AuthContext );
    const { isAuthenticated } = authContext;

    useEffect(() => {
        if( isAuthenticated ) {
            setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }

        setChecking( false );
    }, [ isAuthenticated, setChecking, setIsLoggedIn])

    if( checking ) {
        return (
            <div className='loaded__container'>
                <span className='loader'>Espere un momento, por favor....</span>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/login'
                    element={
                        <PublicRoute isAuthenticated={ isLoggedIn }>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path='/*'
                    element={
                        <PrivateRoute isAuthenticated={ isLoggedIn }>
                            <DashboardRouters />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
