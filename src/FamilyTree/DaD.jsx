import React from 'react';
import Myself from './Myself';
import MySis from './MySis';

const DaD = ({hira}) => {
    return (
        <div className='border-2 border-b-blue-700 p-5'>
            <h1>My Dad</h1>
            <div className='flex gap-3.5 px-5 justify-between   border-2 border-amber-300'>

                <Myself hira={hira}></Myself>
                <MySis></MySis>

            </div>
        </div>
    );
};

export default DaD;