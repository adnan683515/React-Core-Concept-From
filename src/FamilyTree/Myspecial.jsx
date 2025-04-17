import React, { use } from 'react';
import Sasuri from './Sasuri';
import { MoneyContext } from './FamilyTree';

const Myspecial = ({ name, hira }) => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div className='w-[50%]  m-auto h-1/2 border-2 rounded-md border-amber-600 '>
            <h1>Name: {name} </h1>

            <button className='bg-black border-1 border-blue-600 ' onClick={() => setMoney(money + 1000)} > Add 1000 tk </button>
            <Sasuri hira={hira} ></Sasuri>
        </div>
    );
};

export default Myspecial;