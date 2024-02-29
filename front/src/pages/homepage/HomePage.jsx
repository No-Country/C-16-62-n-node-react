import React from "react";
import CardsServices from "../../components/cards/CardsServices";
import Filter from "../../components/header/Filter";
import Banners from "../../components/gallery/Banners";
import Carusel from "../../components/gallery/Carusel";
import GerStart from "../../components/footer/GerStart";
import TogleLegislation from "../../components/lesgilation/TogleLegislation";
import Marketing from "../../components/gallery/Marketing";

function HomePage(){
  return (
    <>
      <div>
        <Banners />
        <TogleLegislation />
        <Filter />
        <CardsServices />
        <GerStart />
        <Carusel />
        <Marketing />
      </div>
    </>
  );
};

export default HomePage;
