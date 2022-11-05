import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { StudentInformation } from '../InformationUser/StudentInformation';

export const HomeScreen = () => {
    const authContext = useContext( AuthContext );
    const { user } = authContext;


    return (
        <>
            {
                user.UserData.role.description == 'ROLE_ALUMNO' && <StudentInformation user={ user }/>
            }
        </>
    );
}
