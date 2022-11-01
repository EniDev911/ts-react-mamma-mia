import React from "react";
import { useAppContext } from "../context/AppCtx";
import {formatValue} from '../utilities/format'

type CartItemProps = {
  id: string;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { getPizza, increaseCartQuantity, decreaseCartQuantity } =
    useAppContext();
  const item = getPizza(id);

  if (item == null) return null;

  return (
    <article className="detail__item">
      <div className="detail__figure">
        <figure>
          <img src={item.img} alt={item.name} />
        </figure>
        <h4>{item.name}</h4>
      </div>
      <div className="detail__actions">
        <div className="detail__item-total">${formatValue((item.price * quantity))}</div>
        <button
          className="btn bg-primary"
          onClick={() => increaseCartQuantity(item.id)}
        >
          +
        </button>
        {quantity}
        <button
          className="btn bg-secondary"
          onClick={() => decreaseCartQuantity(item.id)}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
