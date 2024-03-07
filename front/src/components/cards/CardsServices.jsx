import React, { useState } from "react";
import { Avatar, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CardsServices = ({ users }) => {
  console.log("Users Data:", users);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {users.slice(0, 6).map((user) => (
          <Card key={user._id} className="max-w-sm h-full mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user.worker.category.toUpperCase()}
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
