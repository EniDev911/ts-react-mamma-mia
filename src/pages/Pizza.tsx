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
    <div className="container">
        <div style={{display: 'flex', border: '1px solid black'}}>
      <figure>
        <img src={pizza.img} alt={pizza.name} style={{width: '100%', height: '100%'}}/>
      </figure>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
      <h3>{pizza.name}</h3>
      <hr />
      <p>{pizza.desc}</p>
      <p>Ingredientes</p>
      <ul>
        {pizza?.ingredients.map((ingredient, index) => (
          <li key={index.toString()}>🍕 {ingredient}</li>
        ))}
      </ul>
      <div>
        <p>$ {pizza.price || 0}</p>
        <button type="button" onClick={() => increaseCartQuantity(pizza.id)}>
          Añadir 🛒
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Pizza;
