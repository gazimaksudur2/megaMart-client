import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    return (
        authInfo
    );
};

export default useAuth;