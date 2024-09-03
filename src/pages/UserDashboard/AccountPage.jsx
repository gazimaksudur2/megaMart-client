import React from 'react';
import Profile from './Profile';

const AccountPage = () => {
    return (
        <div>
            <h2 className='my-4 text-xl font-open font-semibold'>Account Details</h2>
            <div className=''>
                <Profile/>    
            </div>            
        </div>
    );
};

export default AccountPage;