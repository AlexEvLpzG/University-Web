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
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
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
