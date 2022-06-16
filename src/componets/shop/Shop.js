import React, { useEffect, useState } from 'react'
import Cart from './cart/Cart';
import ProductsSIngle from './ProductsSIngle';

import './Shop.css'

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handerAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'>
            <div className='product-container'>
                <h3> Product: {products.length}</h3>
                {
                    products.map(product => <ProductsSIngle
                        product={product}
                        key={product.key}
                        handerAddToCard={handerAddToCard}
                    ></ProductsSIngle>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
