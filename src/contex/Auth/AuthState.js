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
        typeMessage: '',
        listMessageError: []
    }

    const [ state, dispatch ] = useReducer( authReducer, initialState );

    const getUri = ( typeRole ) => {
        switch( typeRole ) {
            case '1': return '/auth/login/admin';
            case '2': return '/auth/login/student';
            case '3': return '/auth/login/professor';
            default: return null;
        }
    }

    const deleteMessage = () => {
        setTimeout(() => {
            dispatch({ type: types.removeAlert });
        } , 3000);
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
            dispatch({
                type: types.loginFailed,
                payload: error.response.data.errors.errors
            });
        }
        deleteMessage();
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
                listMessageError: state.listMessageError,
                login,
                logout,
                deleteMessage
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
};
