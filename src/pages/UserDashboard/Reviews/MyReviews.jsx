import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cards from './Cards';

const MyReviews = () => {
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://job-task-server-2-self.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // console.log(data);
                const values = [];
                for (const val of data) {
                    if (!values.find((value) => val?.category === value)) {
                        values.push(val?.category);
                        // console.log(val.category + " & " + values.length);
                    }
                    // console.log(!(values.find((value) => val.category != value)));
                }
                setCategories(values);
            });
        // console.log(categories);
    }, []);
    return (
        <div>
            <p>total data : {data?.length}</p>
            <div className="mx-auto">
                <h2>All cards are goes here</h2>
                <p>{categories?.length}</p>
                <div className="grid grid-cols-3 gap-10">
                    {/* {data && data.map((cardData) => <Card cardData={cardData} />)} */}
                </div>

                <Tabs>
                    <TabList>
                        {
                            categories?.map((value) => (<Tab>{value}</Tab>))
                        }
                        {/* <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab> */}
                    </TabList>
                    {
                        categories?.map((value) => (<TabPanel className='grid grid-cols-3 gap-10'>
                            <Cards elements={(data?.filter(each => each?.category === value))} />
                        </TabPanel>))
                    }
                    {/* <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel> */}
                </Tabs>
            </div>
        </div>
    );
};

export default MyReviews;