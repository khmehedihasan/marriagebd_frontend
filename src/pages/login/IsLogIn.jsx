import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function IsLogIn(){
    const {status} = useAuth();

    return(status? <Outlet /> : <Navigate to="/logIn" />)
}

export default IsLogIn;