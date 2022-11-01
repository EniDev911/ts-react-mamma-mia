import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppCtx";
import {formatValue} from '../utilities/format'
import { IPizza } from "../interfaces/@types";

type CardItemPizzaProps = {
  pizza: IPizza;
};

const CardItemPizza: React.FC<CardItemPizzaProps> = ({ pizza }) => {
  const navigate = useNavigate();

  const { increaseCartQuantity } = useAppContext();

  return (
    <article className="item">
      <figure>
        <img src={pizza.img} alt={pizza.name} />
      </figure>
      <div>
        <h3>{pizza.name}</h3>
        <hr />
        <p>Ingredientes:</p>
        <ul>
          {pizza.ingredients.map((ingrediente, index) => (
            <li key={index.toString()}>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />
        <p className="text-center fs-2">$ {formatValue(pizza.price)}</p>
        <div>
          <button
            className="btn bg-primary"
            onClick={() => navigate("/pizza/" + pizza.id)}
          >
            Ver más 👀
          </button>
          <button
            className="btn bg-secondary"
            onClick={() => increaseCartQuantity(pizza.id)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardItemPizza;
