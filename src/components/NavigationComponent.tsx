import React from "react";
import { Link } from "react-router-dom";
import cartPng from "../assets/png/cart.png";
import { useAppContext } from "../context/AppCtx";

const Navigation: React.FC = () => {
  const { cartItems, totalCart } = useAppContext();
  const cartQuantity = cartItems.reduce((acc, item) => item.quantity + acc, 0);
  
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li>
          <Link to="/" className="nav__link">
            🍕 Pizzería Mamma Mia!
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/carrito" className="nav__link">
            <img src={cartPng} alt="imagen carrito" />
              {(cartQuantity > 0) 
                ? <span className="nav__item-counter">{cartQuantity}</span>
                : undefined 
              }
          </Link>{" "}
          <span>$ {totalCart(cartItems)}</span>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
