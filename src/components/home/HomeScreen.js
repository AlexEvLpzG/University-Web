import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { AdminInformation } from '../InformationUser/AdminInformation';
import { ProfessorInformation } from '../InformationUser/ProfessorInformation';
import { StudentInformation } from '../InformationUser/StudentInformation';

export const HomeScreen = () => {
    const authContext = useContext( AuthContext );
    const { user } = authContext;
    const[ LoadData, setLoadData ] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoadData( true );
        }, 300);
    }, []);

    return (
        <>
            <div className='information__user'>
                {
                    !LoadData ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    :
                        <div>
                            {
                                user.UserData.role.description === 'ROLE_ALUMNO' && <StudentInformation user={ user }/>
                            }
                            {
                                user.UserData.role.description === 'ROLE_ADMIN' && <AdminInformation user={ user }/>
                            }
                            {
                                user.UserData.role.description === 'ROLE_PROFESOR' && <ProfessorInformation user={ user }/>
                            }
                        </div>
                }
            </div>
        </>
    );
}
