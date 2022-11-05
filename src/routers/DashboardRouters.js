import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';

import { ToolBar } from '../components/UI/ToolBar';

export const DashboardRouters = () => {
    return (
        <>
            <ToolBar />

            <div>
                <Routes>
                    <Route path = '/' element={ <HomeScreen /> }/>
                </Routes>
            </div>
        </>
    );
}
