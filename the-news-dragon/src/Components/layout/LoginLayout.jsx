import React from 'react';
import NavigationBari from '../router/NavigationBari';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBari></NavigationBari>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;