import React from 'react';
import Navigator from './Navigator';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className='min-h-screen w-full flex justify-between'>
            <div className='bg-blue-50 text-base-content min-h-full max-w-80 w-[20%] p-4 border-r-2 border-slate-300 '>
                <Navigator />
            </div>
            <div className='w-[78%] p-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default UserDashboard;