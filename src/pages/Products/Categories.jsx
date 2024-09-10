import React, { useEffect, useState } from 'react';

const Categories = ({setSeries}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('allCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    // console.log(categories);
    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Categories</h2>
            <div className='grid grid-cols-4 lg:grid-cols-8 gap-[2px]'>
                {
                    categories?.map((category, idx) => <>
                        <div onClick={()=>setSeries([category?.category])} key={idx} class="max-w-52 h-52 bg-white flex flex-col items-center justify-center border-4 border-white hover:border-base-200 hover:-translate-y-1 duration-150">
                            <div className='w-28'>
                                <img class="w-28 h-20 object-cover" src={category?.image_url} alt="category_products" />
                            </div>
                            <div class="py-5 text-center">
                                {/* <a href="#" class="block text-xl font-bold text-gray-800" tabindex="0" role="link"></a> */}
                                <span class="text-sm text-gray-700">{category?.category}</span>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Categories;