import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Sasuri = ({hira}) => {

    const gold = useContext(AssetContext)
    return (
        <div className='border-2 border-pink-400 p-2 '>
            <h1>amk amr meye {hira} dise   </h1>
            <h1>amk amr meye {gold} dise   </h1>
        </div>
    );
};

export default Sasuri;