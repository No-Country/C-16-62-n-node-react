import React, { useState, useEffect } from "react";
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
        <Filter onFilterChange={handleFilterChange} />
        <Loading loading={loading}>
          {filteredUsers.length > 0 ? (
            <CardsServices users={filteredUsers} />
          ) : (
            <p>No hay usuarios que coincidan con la categoría seleccionada.</p>
          )}
        </Loading>
        <button
          onClick={handleLoadMoreClick}
          className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-10"
        >
          Ver más trabajadores
        </button>
      </div>
    </>
  );
};

export default HomePage;
