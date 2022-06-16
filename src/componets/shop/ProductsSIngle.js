import React from 'react'
import './product.css'

export default function ProductsSIngle(props) {
    // console.log(props)
    const { name, img, price, stock, seller } = props.product

    return (
        <div className='product'>
            <img src={img} width='218px' height='218px' />
           <div className='allProduct'>
           <h4 className='productName'>{name}</h4>
           <p><small>by: {seller}</small></p>
           <div>
            <p>${price}</p>

           </div>
           <p>only {stock} left in stock - order soon</p>
           <button
           onClick={()=> props.handerAddToCard(props.product)} className='btn'>add to card</button>
           </div>
            
        </div>
    )
}
