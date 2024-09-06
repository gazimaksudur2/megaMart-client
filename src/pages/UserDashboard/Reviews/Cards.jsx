import React from 'react';
import Card from './Card';

const Cards = ({elements}) => {
    return (
        <div className='my-20 mx-10 grid grid-cols-3 gap-10'>
            {
                elements.map(element=> (<>
                    <Card cardData={element}></Card>
                </>))
            }
        </div>
    );
};

export default Cards;