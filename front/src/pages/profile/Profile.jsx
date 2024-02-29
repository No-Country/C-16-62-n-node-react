import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useAuth } from "../../context/AuthContext";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const reviews = [
  {
    id: 1,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
  {
    id: 2,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
  {
    id: 3,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
];

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const navigate  = useNavigate();

  const handleLogout = () => {
    logout();
    setOpenModal(false);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Foto del usuario"
          />
          <div className="text-left">
            <p className="text-xl text-gray-800 font-bold mb-1">
            {currentUser ? currentUser.name : 'Nombre de Usuario'}
            </p>
            <p className="text-base text-gray-500 font-normal">
              Zona de Residencia: {currentUser ? currentUser.location : 'Lugar de residencia'}.
            </p>
            <p className="text-base text-gray-500 font-normal">
              {currentUser ? currentUser.email : 'Email del usuario'}
            </p>
          </div>
          <button
            type="button"
            class="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Editar perfil
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mt-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reseñas</h2>
        <div className="flex flex-wrap -mx-4">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <p className="text-gray-600">"{review.content}"</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500">
                    <span>Por: {review.author}</span>,{" "}
                    <span>Fecha: {review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            type="button"
            class="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Ver más reseñas
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          type="button"
          class="text-white bg-[#ad1919] hover:bg-[#be1c1c] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={() => setOpenModal(true)}
        >
          Cerrar sesión
        </button>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14" />
              <h3 className="mb-5 text-lg font-normal">
                ¿Estás seguro que deseas cerrar sesión?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleLogout}>
                  {"Si"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
   </div>
  );
};

export default Profile;
