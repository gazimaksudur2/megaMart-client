import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from '../UserDashboard/Navigator';

const AdminDashboard = () => {
    return (
        <div className='min-h-screen w-full flex justify-between'>
            <div className='bg-blue-50 text-base-content min-h-full max-w-80 w-[20%] p-4 border-r-2 border-slate-300 flex items-start justify-center'>
                <Navigator />
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;