import { types } from '../../types/Types';

export const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case types.login:
            localStorage.setItem( 'user', JSON.stringify( action.payload ) );
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                message: action.payload.message,
            };
        case types.logout:
            localStorage.removeItem( 'user' );
            return {
                isAuthenticated: false,
                user: '',
                message: action.payload,
                listMessageError: []
            };
        case types.loginFailed:
            localStorage.removeItem( 'user' );
            return {
                ...state,
                typeMessage: 'alert-bad',
                user: '',
                listMessageError: action.payload
            }
        case types.removeAlert:
            return {
                ...state,
                message: '',
                typeMessage: '',
                listMessageError: []
            }
        default:
            return state;
    }
}
