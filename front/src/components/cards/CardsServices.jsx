import React, { useState } from "react";
import { Avatar, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const initialUsers = [
    {
      _id: "65e659107949dd42e01d56ce",
      email: "santinobertola03@gmail.com",
      name: "Santino Roman Bertola",
      phone: "5492616002891",
      verified: true,
      worker: {
        category: "Mecanico",
        desc: "Hola, soy Santino, de 28 años y me dedico a reparar autos desde los 18.",
        province: "Córdoba, Argentina",
        city: "746280",
      },
    },
    {
      _id: "65e659107949dd42e01d56",
      email: "santinobertola03@gmail.com",
      name: "Pablo Nudenberg",
      phone: "5493541620398204000",
      verified: true,
      worker: {
        category: "Gasista",
        desc: "Pablo. 35 años. Gasista de confianza por zona de Caballito.",
        province: "Caballito, Buenos Aires",
        city: "746280",
      },
    },
    {
      _id: "65e659107949dd42e01d56e",
      email: "santinobertola03@gmail.com",
      name: "Sebastian Castiblanco",
      phone: "5493541620398204000",
      verified: true,
      worker: {
        category: "Plomero",
        desc: "Soy Sebastian, de 22 años y trabajo como plomero junto a mi padre desde los 14 años.",
        province: "Mendoza, Argentina",
        city: "746280",
      },
    },
    {
      _id: "65e659107949dd42e01d56e",
      email: "santinobertola03@gmail.com",
      name: "Sebastian Castiblanco",
      phone: "5493541620398204000",
      verified: true,
      worker: {
        category: "Plomero",
        desc: "Soy Sebastian, de 22 años y trabajo como plomero junto a mi padre desde los 14 años.",
        province: "Mendoza, Argentina",
        city: "746280",
      },
    },
    {
      _id: "65e659107949dd42e01d56e",
      email: "santinobertola03@gmail.com",
      name: "Sebastian Castiblanco",
      phone: "5493541620398204000",
      verified: true,
      worker: {
        category: "Plomero",
        desc: "Soy Sebastian, de 22 años y trabajo como plomero junto a mi padre desde los 14 años.",
        province: "Mendoza, Argentina",
        city: "746280",
      },
    },
  ];

const CardsServices = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleNewUser = (newUser) => {
    // agregar lógica aquí para manejar nuevos usuarios,
    // por ejemplo, actualizar el estado con setUsers([...users, newUser])
  };

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {users.slice(0, 6).map((user) => (
          <Card key={user._id} className="max-w-sm h-full mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user.worker.category}
            </h5>
            <Avatar
              img={`/images/people/profile-picture-${user._id}.jpg`}
              bordered
              color="success"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {user.worker.province}
                </div>
              </div>
            </Avatar>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {user.worker.desc}
            </p>
            <Link to={`/profile/${user._id}`}>
              <button className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 p-2.5 mt-2">
                Ver Perfil
              </button>
            </Link>
          </Card>
        ))}
      </div>
      {/* Puedes agregar un botón o lógica para agregar nuevos usuarios */}
      {/* <button onClick={() => handleNewUser(newUserData)}>Agregar Nuevo Usuario</button> */}
    </>
  );
};

export default CardsServices;