import React from "react";
import CardsServices from "../../components/cards/CardsServices";
import Filter from "../../components/header/Filter";

const HomePage = () => {
  return (
    <>
      <div>
        <Filter />
        <CardsServices />
        <h1>Servicios Online</h1>
      </div>
    </>
  );
};

export default HomePage;
