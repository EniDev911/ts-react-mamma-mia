import React, { createContext, useContext, useEffect, useState } from 'react';
import { IApp, IPizza, ICart } from '../interfaces/@types';

const AppContext = createContext<IApp>({} as IApp);

// custom hook
export function useAppContext() {
    return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
    children?: JSX.Element | JSX.Element[]
}

const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {

    const [pizzas, setPizzas] = useState<IPizza[]>([]);
    const [cartItems, setCartItems] = useState<ICart[]>([]);

    /**
     * 
     * @param {string} id > identificador único para buscar la cantidad de ese item en el carrito
     * @returns {number} > la cantidad del item encontrado o en su lugar 0
     */
    const getItemQuantity = (id: string): number => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    /**
     * 
     * @param {string} id > identificador único para buscar en catálogo
     * @returns {IPizza}  > returns una pizza del catálogo
     */
    const getPizza = (id: string): IPizza => {
        const pizza = pizzas.find(p => p.id === id);
        return pizza as IPizza;
    }
    /**
     * 
     * @param {string} id > identificador único para buscar en el carrito
     */
    const increaseCartQuantity = (id: string) => {
        setCartItems(currItems => {
            // si el item no se encuentra en el carrito 
            if (currItems.find(item => item.id === id) == null){
                // creamos un nuevo carrito para incluir el nuevo item con su propiedad quantity en 1
                return [...currItems, {id, quantity: 1}];
            } else {
                return currItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item
                    }
                })
            }
        })
    }

    /**
     * 
     * @param id  > identificador único para buscar en el carrito
     */
    const decreaseCartQuantity = (id: string) => {
        setCartItems(currItems => {
            // si el item encontrado, tiene su propiedad quantity en 1
            if (currItems.find(item => item.id === id)?.quantity === 1){
                // aplicamos un filter sin el item actual
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item
                    }
                })
            }
        })
    }
    useEffect(() => {
        fetch('./pizzas.json')
            .then(res => res.json())
            .then(data => setPizzas(data))
            .catch(e => console.error(e.message))
    }, [])

    return (
        <AppContext.Provider value={{
            pizzas, 
            getPizza,
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;