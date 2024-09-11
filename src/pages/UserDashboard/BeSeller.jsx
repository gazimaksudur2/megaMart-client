import React from 'react';

const BeSeller = () => {
    const sellFacility = [
        {
            title: "Reach",
            info: "Millions of customers on MegaMart, Bangladesh's most visited shopping destination",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRHlsxhvlhfsc1eu7JHShnJJxY6HUotR3KvqthLCu5SJGpS5l0",
        },
        {
            title: "Free Registration",
            info: "Account registration & listing items for sale is free",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCzbdYZWbCcJ2IuBuQQvG2vHW3vjOOWZJ4SVryBl2tEI4WLQNn",
        },
        {
            title: "Reliable Shipping",
            info: "Fast, reliable and hassle free delivery through MegaMart logistic network",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQb8lYN5IhvYakwPixOVqPsKD7k49jxfIMU85gHEDRwq930jcCZ",
        },
        {
            title: "Timely Payments",
            info: "Funds are safely deposited directly to your bank account on a weekly basis",
            image: "https://t4.ftcdn.net/jpg/03/34/18/33/240_F_334183329_NaielBH570p9ANkqgyz1SnpMwLSHSgog.jpg",
        },
        {
            title: "Marketing Tools",
            info: "Find new customers & grow more with advertising and our whole range of marketing tools",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6D0-A-izj_Zlbcdm2wdkbaiF51M78scNyX1C0PmH4eF_w-8mQ",
        },
        {
            title: "Support&Training",
            info: "Learn all about ecommerce for free and get help with seller support and MegaMart Community",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7FZ57qzQW8zQV32wM8X-b5b3PY4-0DTJMeCDgkzXU8nKQuCm1",
        }
    ]
    return (
        <div className='p-10'>
            {/* <h2 className='text-xl font-semibold text-gray-700'>Create a Seller Account</h2> */}
            <h2 className='text-2xl font-semibold text-gray-700'>Why sell on MegaMart?</h2>
            <div className='w-full p-6 mt-10 flex flex-wrap items-start justify-between gap-5'>
                {
                    sellFacility.map((each, idx)=><>
                        <div key={idx} className='basis-72 flex-1 h-44 bg-gradient-to-br from-blue-50 to-blue-100  p-5 flex items-center justify-center gap-5 rounded-lg'>
                            <img className='w-20 h-20 object-cover' src={each.image} alt="eachImage" />
                            <div className='flex flex-col items-start justify-between'>
                                <h2 className='pb-4 text-xl font-semibold text-gray-600'>{each?.title}</h2>
                                <p className='text-sm'>{each?.info}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default BeSeller;