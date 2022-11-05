import { types } from '../../types/Types';

export const dataReducer = ( state, action ) => {
    switch ( action.type ) {
        case types.getInformationUser:
            return {
                ...state,
                userFound: action.payload,
                message: action.payload.message,
            };
        case types.getKardexById:
            return {
                ...state,
                kardexFound: action.payload.kardex,
                studentSearch: action.payload.studentFound
            };
        case types.getAllProdessor:
            return {
                ...state,
                professorList: action.payload,
            }
        case types.getAllStudent:
            return {
                ...state,
                studentList: action.payload,
            }
        case types.logout:
            return {
                userFound: {},
                kardexFound: {},
                message: ""
            }
        default:
            return state;
    }
}
