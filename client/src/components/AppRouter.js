import React, { useContext } from 'react';
import {Routes, Navigate, Route, Outlet} from 'react-router-dom'
import { authRoutes, publicRoutes } from './../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from './../index';

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <>
        <Routes>
            {authRoutes.map((obj) =>
                <Route key={obj.path} path={obj.path} element={obj.component}/>
            )}
            {publicRoutes.map((obj) =>
                <Route key={obj.path} path={obj.path} element={obj.component}/>
            )}
        </Routes>
        </>
);
}

export default AppRouter;


