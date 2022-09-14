import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function IsLogOut(){
    const { status } = useAuth();
    
    return(status? <Navigate to="/profile" />: <Outlet />)
}

export default IsLogOut;