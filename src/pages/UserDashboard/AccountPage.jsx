import React, { useState } from 'react';
import Profile from './Profile';
import AddressBook from './AddressBook';
import SavedPayment from './SavedPayment';
import { Outlet } from 'react-router-dom';
import ProfileEdit from './ProfileEdit';

const AccountPage = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div className='px-12'>
            <h2 className='my-4 text-xl font-open font-semibold'>Account Details</h2>
            <div className='flex items-start gap-10'>
                {
                    edit ? <ProfileEdit setEdit={setEdit}/> : <Profile setEdit={setEdit} />
                }
                <div className='flex flex-col gap-10'>
                    <AddressBook />
                    <SavedPayment />
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AccountPage;