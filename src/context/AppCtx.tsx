import React, { createContext, useContext, useEffect, useState } from 'react';
import { IPizza } from '../interfaces/interface'

export function usePizzasContext() {
    return useContext(PizzasContext);
}

export const PizzasContext = createContext<IPizza[] | null>(null);

type AppCtxProviderProps = {
    children?: JSX.Element | JSX.Element[]
}

const AppCtxProvider: React.FC<AppCtxProviderProps> = ({ children }) => {
    const [pizzas, setPizzas] = useState<IPizza[]>([]);

    useEffect(() => {
        fetch('/pizzas.json')
            .then(res => res.json())
            .then(data => setPizzas(data))
            .catch(e => console.log(e.message))
    }, [])

    return (
        <PizzasContext.Provider value={pizzas}>
            {children}
        </PizzasContext.Provider>
    )
}

export default AppCtxProvider;