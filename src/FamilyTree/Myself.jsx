import React from 'react';
import Myspecial from './Myspecial';

const Myself = ({hira}) => {
    const mySp = "Tumi"
    return (
        <div className='border-2 w-48  h-96 my-4 rounded-md border-amber-400'>
            <h1>My Self</h1>
            <Myspecial name={mySp} hira={hira} ></Myspecial>
        </div>
    );
};

export default Myself;