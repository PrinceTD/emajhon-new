import React, { useEffect, useState } from 'react'
import ProductsSIngle from './ProductsSIngle';

import './Shop.css'

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shopContainer'>
            <div className='product-container'>
                <h3> Product: {products.length}</h3>
                {
                    products.map(product => <ProductsSIngle product={product}
                    ></ProductsSIngle>)
                }
            </div>
            <div className='cart-container'>
                <h3> Order Summary</h3>
                <h5>Item order</h5>
            </div>
        </div>
    )
}
