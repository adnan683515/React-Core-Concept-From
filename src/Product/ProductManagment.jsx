import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagment = () => {

    const [products,setProducts]  = useState([])


    return (
        <div className='flex gap-5'>
            <ProductFrom products={products} setProducts={setProducts} ></ProductFrom>
            <ProductTable products={products} ></ProductTable>
        </div>
    );
};

export default ProductManagment;