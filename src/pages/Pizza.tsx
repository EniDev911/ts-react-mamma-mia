import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from "../context/AppCtx";


type PizzaParams = {
    id?: string | undefined
}

const Pizza: React.FC = () => {

    const { id } = useParams<PizzaParams>();
    const { getPizza } = useAppContext(); 
    const pizza = getPizza(id);

    return (
        <div className="container">
            <img src={pizza?.img} alt={pizza?.name} />
            <h3>{pizza?.name}</h3>  
            <p>{pizza?.desc}</p>
            <p>Ingredientes</p>
            <ul>
                {pizza?.ingredients.map((ingredient, index) => (
                    <li key={index.toString()}>🍕 {ingredient}</li>
                ))}
            </ul>
            <div>
                <p>$ {pizza?.price || 0}</p>
                <button>Añadir 🛒</button>
            </div>
        </div>
    )
}

export default Pizza


