import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { ListProfesorInformation } from '../components/InformationUser/ListProfesorInformation';
import { ListStudentInformation } from '../components/InformationUser/ListStudentInformation';
import { StudentKardex } from '../components/InformationUser/StudentKardex';

import { ToolBar } from '../components/UI/ToolBar';

export const DashboardRouters = () => {
    return (
        <>
            <ToolBar />

            <div>
                <Routes>
                    <Route path='/kardex/:id' element={ <StudentKardex /> }></Route>
                    <Route path='/profesores' element={ <ListProfesorInformation /> }></Route>
                    <Route path='/alumnos' element={ <ListStudentInformation /> }></Route>

                    <Route path = '/' element={ <HomeScreen /> }/>
                </Routes>
            </div>
        </>
    );
}
