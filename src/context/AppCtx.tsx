import React, { createContext, useContext, useEffect, useState } from "react";
import { IApp, IPizza, ICart } from "../interfaces/@types";
import {formatValue} from '../utilities/format'

const AppContext = createContext<IApp>({} as IApp);

// hooks
export function useAppContext() {
  return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  /**
   *
   * @param {string} id > identificador único para buscar en catálogo
   * @returns {IPizza}  > returns una pizza del catálogo
   */
  const getPizza = (id: string): IPizza => {
    const pizza = pizzas.find((p) => p.id === id);
    return pizza as IPizza;
  };
  /**
   *
   * @param {string} id > identificador único para buscar en el carrito
   */
  const increaseCartQuantity = (id: string) => {
    setCartItems((currItems) => {
      // si el item no se encuentra en el carrito
      if (currItems.find((item) => item.id === id) == null) {
        // creamos un nuevo carrito para incluir el nuevo item con su propiedad quantity en 1
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            // al item encontrado se le incrementa en 1 su propiedad quantity
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  /**
   *
   * @param id  > identificador único para buscar en el carrito
   */
  const decreaseCartQuantity = (id: string) => {
    setCartItems((currItems) => {
      // si el item encontrado, tiene su propiedad quantity en 1
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        // aplicamos un filter sin el item actual
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const totalCart = (items: ICart[]) => {
    const total = items.reduce((total, cartItem) => {
      const item = getPizza(cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
    return formatValue(total);
  };

  useEffect(() => {
    fetch("./pizzas.json")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <AppContext.Provider
      value={{
        pizzas,
        getPizza,
        totalCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
