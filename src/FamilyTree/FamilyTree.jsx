import React, { createContext, useState } from 'react';
import Grandpha from './Grandpha';

export const AssetContext = createContext('')

export const MoneyContext = createContext('')

const FamilyTree = () => {

    const [money,setMoney] = useState(0)

    const hira = 'Hira'
    const gold = 'Gold'

    return (
        <div className='border-2 w-[80%] p-5 m-auto flex justify-center items-center rounded-md  border-amber-400'>
            <div className='w-[80%] '>
                <h1 className='text-center my-2'>Grand Parents</h1>
                <h1>Our Money: {money} </h1>
                <MoneyContext value={[money,setMoney]} >
                    <AssetContext.Provider value={gold} >
                        <Grandpha hira={hira} className='w-full' ></Grandpha>
                    </AssetContext.Provider>
                </MoneyContext>
            </div>
        </div>
    );
};

export default FamilyTree;