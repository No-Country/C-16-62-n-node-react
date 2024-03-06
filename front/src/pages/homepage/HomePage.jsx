import React, { useState } from "react";
import CardsServices from "../../components/cards/CardsServices";
import Filter from "../../components/header/Filter";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadMoreClick = () => {
    // Aquí debes colocar la lógica para cargar más trabajadores
    // Puedes usar setLoading(true) antes de la carga y setLoading(false) después de la carga
    setLoading(true);

    // Simulación de carga (puedes reemplazar esto con tu lógica real de carga)
    setTimeout(() => {
      // Agrega lógica para cargar más trabajadores aquí
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <Filter />
        <Loading loading={loading}>
          <CardsServices />
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