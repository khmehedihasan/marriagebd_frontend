import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import usePackageAuth from '../../hooks/usePackageAuth';

function IsPackage(){
    const {status} = usePackageAuth();

    return(status? <Outlet /> : <Navigate to="/package" />)
}

export default IsPackage;