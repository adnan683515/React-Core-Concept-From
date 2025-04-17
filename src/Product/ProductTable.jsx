import React from 'react';
import ShowProduct from './ShowProduct';

const ProductTable = ({products}) => {
    return (
        <div>
            <h1>Prduct: {products.length} </h1>
            <div>
                {
                    products.map((item,index)=> <ShowProduct key={index} item={item} ></ShowProduct> )
                }
            </div>
        </div>
    );
};

export default ProductTable;