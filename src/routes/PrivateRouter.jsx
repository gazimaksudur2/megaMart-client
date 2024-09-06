import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }else if(user){
        return children;
    }

    return (
        <Navigate to={'/authenticate'} state={{from: location}}/>
    );
};

export default PrivateRouter;