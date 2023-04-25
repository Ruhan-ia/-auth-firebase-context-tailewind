import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;