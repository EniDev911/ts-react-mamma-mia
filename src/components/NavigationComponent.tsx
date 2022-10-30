import React from 'react'
import { Link } from 'react-router-dom';
import cartPng from '../assets/png/cart.png';

const Navigation: React.FC = () => {

    return (
        <nav className='nav'>
            <ul className='nav__container'>
                <li>
                    <Link to="/" className="nav__link">🍕 Pizzería Mamma Mia!</Link>
                </li>
                <li>
                    <Link to="/carrito" className='nav__link'>
                        <img src={cartPng} alt="cart" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation