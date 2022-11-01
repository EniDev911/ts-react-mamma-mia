import React from 'react'
import { useAppContext } from '../context/AppCtx';

type CartItemProps = {
  id : string,
  quantity : number
}

const CartItem : React.FC<CartItemProps> = ({id, quantity}) => {

  const {getPizza, increaseCartQuantity, decreaseCartQuantity} = useAppContext();
  const item = getPizza(id)

  if (item == null) return null

  return (
    <article className="detail__item">
      <figure>
        <img src={item.img} alt={item.name} style={{width: "125px"}}/>
      </figure>
      <div>{item.name}</div>
      <div>{item.price * quantity}</div>
      <button onClick={() => increaseCartQuantity(item.id)}>+</button>
        {quantity}
      <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
    </article>
  )
}

export default CartItem;