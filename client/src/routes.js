import { Admin } from './pages/Admin';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE } from './utils/consts';
import { Basket } from './pages/Basket';
import { Shop } from './pages/Shop';
import { DevicePage } from './pages/DevicePage';
import { Auth } from './pages/Auth';
import React from 'react';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        component: <Basket/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: <Shop/>
    },
    {
        path: DEVICE_ROUTE + "/:id",
        component: <DevicePage/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth/>
    },
]