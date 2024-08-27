import React from 'react';
import SubSection from '../../shared/SubSection';
import BestProduct from './BestProduct';

const BestSelling = () => {
    return (
        <div className='mt-16'>
            <SubSection Heading={"Best Selling Categories"} SubHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"} />
            <div className='w-[70%] mx-auto flex items-center justify-between py-8'>
                <BestProduct image={'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149&w=96&q=75'} type={"Bedroom"} />
                <BestProduct image={'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425&w=96&q=75'} type={"Living"} />
                <BestProduct image={'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177&w=96&q=75'} type={"Dining"} />
                <BestProduct image={'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129&w=96&q=75'} type={"Lounge"} />
                <BestProduct image={'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75'} type={"Office Chair"} />
            </div>
        </div>
    );
};

export default BestSelling;