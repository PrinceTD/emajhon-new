import React from 'react'
import './product.css'

export default function ProductsSIngle(props) {
    const { name, img, price, stock, seller } = props.product

    return (
        <div className='product'>
            <img src={img}></img>
           <div className='allProduct'>
           <h4 className='productName'>{name}</h4>
           <p><small>by: {seller}</small></p>
           <div>
            <p>${price}</p>

           </div>
           <p>only {stock} left in stock - order soon

</p>
           </div>
            
        </div>
    )
}
