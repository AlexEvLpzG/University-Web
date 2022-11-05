import { useReducer } from 'react';

import { DataContext } from './DataContext';
import { dataReducer } from './dataReducer';

import { types } from '../../types/Types';
import { clientAxios } from '../../config/Axios';

export const DataState = ( props ) => {
    const initialState = {
        userFound: {},
        kardexFound: [],
        studentSearch: {},
        message: null,
    }

    const [ state, dispatch ] = useReducer( dataReducer, initialState );

    const getUri = ( typeRole ) => {
        switch( typeRole ) {
            case 'ROLE_ADMIN': return '/admin';
            case 'ROLE_ALUMNO': return '/student';
            case 'ROLE_PROFESOR': return '/profesor';
            default: return null;
        }
    }

    const getInformationById = async( userData ) => {
        try {
            const response = await clientAxios.get( getUri( userData.typeRole ) + `/${ userData.id }`, {
                headers: {
                    'Authorization': userData.token
                }
            });
            dispatch({
                type: types.getInformationUser,
                payload: response.data.UserData
            });
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                type: 'alert-error'
            }
            dispatch({
                type: types.getInformationUserFailed,
                payload: alert
            });
        }
    }

    const clean = () => {
        dispatch({
            type: types.logout
        });
    }

    const getInformationKardexById = async( userData ) => {
        try {
            const response = await clientAxios.get(  `/kardex/${ userData.id }`, {
                headers: {
                    'Authorization': userData.token
                }
            });
            const responseAlumno = await clientAxios.get(  `/student/${ userData.id }`, {
                headers: {
                    'Authorization': userData.token
                }
            });
            dispatch({
                type: types.getKardexById,
                payload: { kardex: response.data.kardex, studentFound: responseAlumno.data.UserData }
            });
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                type: 'alert-error'
            }
            dispatch({
                type: types.getInformationKardexByIdFailed,
                payload: alert
            });
        }
    }

    return (
        <DataContext.Provider
            value={{
                userFound: state.userFound,
                message: state.message,
                kardexFound: state.kardexFound,
                studentSearch: state.studentSearch,
                getInformationById,
                clean,
                getInformationKardexById
            }}
        >
            { props.children }
        </DataContext.Provider>
    );
};
