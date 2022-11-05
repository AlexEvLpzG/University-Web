import { useReducer } from 'react';

import { AuthContext } from './AuthCotext';
import { authReducer } from './authReducer';

import { types } from '../../types/Types';
import { clientAxios } from '../../config/Axios';

export const AuthState = ( props ) => {
    const initialState = {
        isAuthenticated: localStorage.getItem( 'user' ) ? true : false,
        user: localStorage.getItem( 'user' ) ? JSON.parse( localStorage.getItem( 'user' ) ) : null,
        message: null,
        loading: true,
    }

    const [ state, dispatch ] = useReducer( authReducer, initialState );

    const getUri = ( typeRole ) => {
        switch( typeRole ) {
            case '1': return '/auth/login/admin';
            case '2': return '/auth/login/student';
            case '3': return '/auth/login/admin';
            default: return null;
        }
    }

    // * Cuando el usuario inicia sesión
    const login = async( userData ) => {
        try {
            const response = await clientAxios.post( getUri( userData.typeRole ) ,userData );
            response.data.isAuthenticated = true;
            dispatch({
                type: types.login,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                type: 'alert-error'
            }
            dispatch({
                type: types.loginFailed,
                payload: alert
            });
        }
    }

    const logout = () => {
        dispatch({
            type: types.logout
        });
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                login,
                logout
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
};
