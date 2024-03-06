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
        <Filter />
        <CardsServices />
        <button className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-10">
          {" "}
          Ver más trabajadores
        </button>
      </div>
    </>
  );
};

export default HomePage;
