import React, { useState, useEffect } from "react";
import CardsServices from "../../components/cards/CardsServices";
import Filter from "../../components/header/Filter";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    const fetchInitialUsers = async () => {
      try {
        const initialUsers = [
          {
            _id: "65e659107949dd42e01d56ce",
            email: "santinobertola0123@gmail.com",
            name: "Santino Roman Bertola",
            phone: "5492616002891",
            verified: true,
            worker: {
              category: "mecanico",
              desc: "Hola, soy Santino, de 28 años y me dedico a reparar autos desde los 18.",
              province: "Córdoba, Argentina",
              city: "746280",
            },
          },
          {
            _id: "65e8fddff4990c3d3179f008",
            email: "PabloNudeberg@gmail.com",
            name: "Pablo Nudenberg",
            phone: "5493541620398204000",
            verified: true,
            worker: {
              category: "gasista",
              desc: "Pablo. 35 años. Gasista de confianza por zona de Caballito.",
              province: "Caballito, Buenos Aires",
              city: "746280",
            },
          },
          {
            _id: "65e9369defeb668787ecffb8",
            email: "Santiii@gmail.com",
            name: "Sebastian Castiblanco",
            phone: "5493541620398204000",
            verified: true,
            worker: {
              category: "plomero",
              desc: "Soy Sebastian, de 22 años y trabajo como plomero junto a mi padre desde los 14 años.",
              province: "Mendoza, Argentina",
              city: "746280",
            },
          },
          {
            _id: "65e9383cefeb668787ecffbd",
            email: "juan@gmail.com",
            name: "JUANCITO PEREZ",
            phone: "5493541620535",
            verified: true,
            worker: {
              category: "mecanico",
              desc: "Soy Sebastian, de 22 años y trabajo como Mecanico junto a mi padre desde los 14 años.",
              province: "Mendoza, Argentina",
              city: "746280",
            },
          },
        ];

        setAllUsers(initialUsers);
        setFilteredUsers(initialUsers);
        setLoading(false);

        // console.log("Initial users loaded:", initialUsers);
      } catch (error) {
        console.error("Error fetching initial users:", error);
        setLoading(false);
      }
    };

    fetchInitialUsers();
  }, []);

  const handleFilterChange = (category) => {
    setLoading(true);

    const lowerCaseCategory = category.toLowerCase();
    setSelectedCategory(category);

    const usersToShow =
      lowerCaseCategory === "todos"
        ? allUsers
        : allUsers.filter(
            (user) => user.worker.category.toLowerCase() === lowerCaseCategory
          );

    console.log("Filtered users:", usersToShow);
    setFilteredUsers(usersToShow);
    setLoading(false);
  };

  
  const handleLoadMoreClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
