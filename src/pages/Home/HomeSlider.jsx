import React from 'react';
import { Button, Carousel, ConfigProvider, Space } from 'antd';
import { PiX } from 'react-icons/pi';
import Slider from './Slider';

const contentStyle = {
    padding: '40px',
    margin: 0,
    height: '500px',
    color: '#000',
    textAlign: 'center',
};

const HomeSlider = () => {
    const homeContent1 = {
        type: 'Best Seller',
        title: 'Creative Sofa',
        product: 'sofa',
        caption: 'Torem ipsum dolor sit amet, consectetur adipisicing elisted do eiusmo tempor Incididunt ut labore et aolore magna',
        img: 'https://furns-react.netlify.app/images/slider-image/slider-2.png'
    }
    const homeContent2 = {
        type: 'New Products',
        title: 'Flexible Chair',
        product: 'chair',
        caption: 'Torem ipsum dolor sit amet, consectetur adipisicing elisted do eiusmo tempor Incididunt ut labore et aolore magna',
        img: 'https://furns-react.netlify.app/images/slider-image/slider-1.png'
    }
    return (
        <div className='bg-[#d7d7c1] '>
            <ConfigProvider
                theme={{
                    components: {
                        Carousel: {
                            arrowSize: 30,
                            arrowOffset: 16,
                        }
                        // Seed Token
                        // colorPrimary: '#00b96b',
                        // borderRadius: 2,

                        // Alias Token
                        // colorBgContainer: '#f6ffed',
                    },
                }}
            >
                <Carousel arrows easing='linear' infinite={false} className='w-[90%] py-[5%] mx-auto min-h-[700px]'>
                    <div className=''>
                        <div style={contentStyle} className=''>
                            {/* <h3 className='text-4xl'>Hello, This is First Page.</h3> */}
                            <Slider content={homeContent1}/>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className=''>
                            {/* <h3 className='text-4xl'>Hello, This is First Page.</h3> */}
                            <Slider content={homeContent2}/>
                        </div>
                    </div>
                </Carousel>
            </ConfigProvider>
        </div>
    );
};

export default HomeSlider;