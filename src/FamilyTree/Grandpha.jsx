import React from 'react';
import DaD from './DaD';
import Mykaka from './Mykaka';
import Aunty from './Aunty';

const Grandpha = ({hira}) => {
    return (
        <div className='flex gap-4 justify-between  p-5 border-2 w-full border-amber-50'>
            <DaD hira={hira} ></DaD>
            <Mykaka></Mykaka>
            <Aunty></Aunty>
        </div>
    );
};

export default Grandpha;