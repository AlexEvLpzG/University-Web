import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { FormNewStudent } from '../components/InformationUser/FormNewStudent';
import { ListProfesorInformation } from '../components/InformationUser/ListProfesorInformation';
import { ListStudentInformation } from '../components/InformationUser/ListStudentInformation';
import { StudentKardex } from '../components/InformationUser/StudentKardex';

import { ToolBar } from '../components/UI/ToolBar';
import { AuthContext } from '../contex/Auth/AuthCotext';

export const DashboardRouters = () => {
    const authContext = useContext( AuthContext );
    const { user } = authContext;

    return (
        <>
            <ToolBar />

            <div>
                <Routes>
                    {
                        ( user.UserData.role.description === 'ROLE_ALUMNO' || user.UserData.role.description === 'ROLE_ADMIN' )
                        &&
                        <>
                            <Route path='/kardex/:id' element={ <StudentKardex /> }/>
                        </>
                    }

                    {
                        ( user.UserData.role.description === 'ROLE_ADMIN' )
                            &&
                        <>
                            <Route path='/kardex/:id' element={ <StudentKardex /> }/>
                            <Route path='/alumnos' element={ <ListStudentInformation /> }/>
                            <Route path='/profesores' element={ <ListProfesorInformation /> }/>
                            <Route path='/nuevo-alumno' element={ <FormNewStudent /> }/>
                        </>
                    }

                    <Route path='*' element={ <Navigate to='/' /> } />

                    <Route path = '/' element={ <HomeScreen /> }/>
                </Routes>
            </div>
        </>
    );
}
