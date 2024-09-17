import React from 'react';
import { Carousel, ConfigProvider } from 'antd';

const contentStyle = {
    margin: 0,
    height: '450px',
    width: '100%',
    color: '#fff',
    borderRadius: '10px',
    objectFit: 'cover',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const MaterialCarousel = ({ images }) => (
    <div className='w-full bg-base-200 rounded-lg'>
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        arrowSize: 30,
                        arrowOffset: 12,
                    },
                },
                token: {
                    colorBgContainer: '#6c706d',
                    colorText: '#6c706d'
                }
            }}
        >
            <Carousel arrows dotPosition='bottom' speed={700} fade="true" infinite={true} >
                {
                    images?.map(image => <>
                        <div className=''>
                            <img style={contentStyle} className='scale-90' src={image} alt="slideImage" />
                        </div>
                    </>)
                }
            </Carousel>
        </ConfigProvider>
    </div>
);
export default MaterialCarousel;