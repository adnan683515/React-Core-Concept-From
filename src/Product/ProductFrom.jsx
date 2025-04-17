import React from 'react';

const ProductFrom = ({products,setProducts}) => {

    const handleProductFrom = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        console.log(name, price, quantity)
        const proudct = {
            name,
            price,quantity
        }
        setProducts([...products,proudct])
    }
    return (
        <div>
            <form onSubmit={handleProductFrom} className='space-y-2'>
                <input type="text" placeholder='Product Name' name='name' />
                <br />
                <input type="text" placeholder='Product price' name='price' />
                <br />
                <input type="text" placeholder='Product Quantity' name='quantity' />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ProductFrom;