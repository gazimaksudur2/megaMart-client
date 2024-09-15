import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/Authprovider';
import useAxios from './useAxios';

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const axios = useAxios();
    useEffect(() => {
            // console.log('here in auth : '+authInfo?.token);
            authInfo?.token && axios.get(`/user?email=${authInfo?.user?.email}`, { withCredentials: true })
                .then(res => setUserData(res.data));
    }, [authInfo]);

    // console.log(userData);

    return (
        { ...authInfo, userDB: userData }
    );
};

export default useAuth;