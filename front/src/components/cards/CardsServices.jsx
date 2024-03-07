import React from "react";
import { Card } from "flowbite-react";
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
            <div className="flex justify-center items-center">
              <img
                className="h-24 w-24 object-cover rounded-full"
                src={
                  user.worker.fileAvatar || "https://via.placeholder.com/150"
                }
                alt="Foto del usuario"
              />
            </div>

            <div className="space-y-1 font-medium dark:text-white text-center">
              <div>{user.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {user.worker.province}
              </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
              {user.worker.desc}
            </p>
            <div className="flex justify-center mt-2">
              <Link to={`/profile/${user._id}`}>
                <button className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 p-2.5">
                  Ver Perfil
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardsServices;
