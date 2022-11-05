import { types } from '../../types/Types';

export const dataReducer = ( state, action ) => {
    switch ( action.type ) {
        case types.getInformationUser:
            return {
                ...state,
                userFound: action.payload,
                message: action.payload.message,
            };
        case types.logout:
            return {
                userFound: {},
                message: ""
            }
        default:
            return state;
    }
}
