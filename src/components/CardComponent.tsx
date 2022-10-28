import React from 'react'
import { IPizza } from '../interfaces/interface'

type CardComponentProps = {
    pizza: IPizza
}

const CardComponent: React.FC<CardComponentProps> = ({ pizza }) => {

    return (
        <article>
            <figure>
                <img src={pizza.img} alt="pizza image" />
            </figure>
            <div>
                <h3>{pizza.name}</h3>
                <hr />
                <p>Ingredientes:</p>
                <ul>
                    {
                        pizza.ingredients.map((ingrediente, index) => (
                            <li key={index.toString()}>🍕 {ingrediente}</li>
                        ))
                    }
                </ul>
                <hr />
                <p className='text-center fs-2'>$ {pizza.price}</p>
                <div>
                    <button className='bg-primary'>Ver más 👀</button>
                    <button className='bg-secondary'>Añadir 🛒</button>
                </div>
            </div>
        </article>
    )
}

export default CardComponent;