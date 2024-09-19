import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/Authprovider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    const axios = useAxios();
    // useEffect(() => {
    //         // console.log('here in auth : '+authInfo?.token);
    //         authInfo?.token && axios.get(`/user?email=${authInfo?.user?.email}`, { withCredentials: true })
    //             .then(res => setUserData(res.data));
    // }, [authInfo]);
    const {data: userDB, refetch} = useQuery({
        queryKey: ['userDB'],
        queryFn: ()=>{
            const info = axios.get(`/user?email=${authInfo?.user?.email}`, {withCredentials: true})
            .then(res=> res.data);
            return info;
        },
        enabled: authInfo?.token,
    })


    return (
        { ...authInfo, userDB, refetch }
    );
};

export default useAuth;