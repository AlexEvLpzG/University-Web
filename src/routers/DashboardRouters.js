import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToolBar } from '../components/UI/ToolBar';

export const DashboardRouters = () => {
    return (
        <>
            <ToolBar />
            <div>
                <Routes>

                </Routes>
            </div>
        </>
    );
}
