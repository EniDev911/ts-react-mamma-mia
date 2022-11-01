import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppCtx";
import { IPizza } from "../interfaces/@types";

type PizzaParams = {
  id?: string;
};

const Pizza: React.FC = () => {
  const { id } = useParams<PizzaParams>();
  const { getPizza, increaseCartQuantity } = useAppContext();
  const pizza = getPizza(id as string) as IPizza;

  return (
      <div
        className="detail__product"
      >
        <figure className="detail__product-figure">
          <img
            src={pizza.img}
            alt={pizza.name}
          />
        </figure>
        <div
          className="detail__body"
        >
          <h3 className="detail__body-title">{pizza.name}</h3>
          <div className="detail__body-text">
          <p>{pizza.desc}</p>
          <p className="fw-b">Ingredientes:</p>
          <ul>
            {pizza?.ingredients.map((ingredient, index) => (
              <li key={index.toString()}>🍕 {ingredient}</li>
            ))}
          </ul>
         </div>   
          <div className="detail__body-footer">
            <p className="fs-2">$ {pizza.price || 0}</p>
            <button
              className="btn bg-secondary"
              onClick={() => increaseCartQuantity(pizza.id)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
  );
};

export default Pizza;
