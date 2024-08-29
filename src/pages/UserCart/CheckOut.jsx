import React from 'react';
import NavTop from '../../shared/NavBar/NavTop';
import TitleBanner from '../../shared/TitleBanner';

const CheckOut = () => {
    return (
        <div>
            <NavTop/>
            <TitleBanner route={'Home / checkout'} title={'CheckOut'}/>
        </div>
    );
};

export default CheckOut;