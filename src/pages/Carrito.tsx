import React from "react";
import CartItem from "../components/CartItemComponent";
import { useAppContext } from "../context/AppCtx";

const Carrito: React.FC = () => {

  const { cartItems, totalCart } = useAppContext();

  return (
    <section className="detail">
      <h4 className="detail__text">Detalles del pedido:</h4>
      <div className="detail__container">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <p className="detail__total">Total: {totalCart(cartItems)}</p>
        <button
          className="btn bg-success"
          onClick={() => {
            if (
              confirm(
                `¿Estás seguro de llevar llevar la compra por $${totalCart(
                  cartItems
                )}`
              )
            )
              return alert("Pagado");
          }}
        >
          Ir a pagar
        </button>
      </div>
    </section>
  );
};

export default Carrito;
