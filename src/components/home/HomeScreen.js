import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { AdminInformation } from '../InformationUser/AdminInformation';
import { ProfessorInformation } from '../InformationUser/ProfessorInformation';
import { StudentInformation } from '../InformationUser/StudentInformation';

export const HomeScreen = () => {
    const authContext = useContext( AuthContext );
    const { user } = authContext;

    return (
        <>
            {
                user.UserData.role.description == 'ROLE_ALUMNO' && <StudentInformation user={ user }/>
            }
            {
                user.UserData.role.description == 'ROLE_ADMIN' && <AdminInformation user={ user }/>
            }
            {
                user.UserData.role.description == 'ROLE_PROFESOR' && <ProfessorInformation user={ user }/>
            }
        </>
    );
}
