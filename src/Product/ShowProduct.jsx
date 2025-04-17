import React from 'react';

const ShowProduct = ({item}) => {
    return (
        <div className='border-amber-300 m-3'>
            <h1> Name: {item.name} </h1>
            <h2>Price: {item.price} </h2>
            <h1>Quantity: {item?.quantity} </h1>
        </div>
    );
};

export default ShowProduct;