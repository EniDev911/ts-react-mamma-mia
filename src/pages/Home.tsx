import React, { useState } from "react";
import CardComponent from "../components/CardComponent";
import { useAppContext } from "../context/AppCtx";

const Home: React.FC = () => {
    
  const { pizzas } = useAppContext();
  return (
    <>
      <section className="hero__container">
        <div className="hero__texts">
          <h2 className="hero__title">¡Pizzería Mamma Mia!</h2>
          <h4 className="hero__subtitle">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </h4>
          <hr />
        </div>
      </section>
      <div className="container">
        <div className="grid">
          {pizzas?.map((pizza) => (
            <CardComponent key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
