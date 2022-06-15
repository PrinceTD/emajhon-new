import React from 'react'
import logo from '../../images/logo.png'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <img className='colorLogo' src={logo}/>
            <div>
                <nav>
                    <a href='/shop'>Shop</a><a href='/order'>Order</a>
                    <a href='/review'>Review</a><a href='/manage'>Manage</a>
                </nav>
            </div>
        </div>
    )
}
