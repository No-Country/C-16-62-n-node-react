import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Modal, Button } from "flowbite-react";

const ProfileUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}/user/${id}`);
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const handleContactButtonClick = () => {
    window.open(`https://wa.me/${userData?.phone}`, '_blank');
  };


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user profile</div>;

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 object-cover rounded-full"
            src={userData ? userData.profilePictureUrl : "https://via.placeholder.com/150"}
            alt="Foto del usuario"
          />
          <div className="text-left">
            <p className="text-xl text-gray-800 font-bold mb-1">
              {userData ? userData.name : "Nombre de Usuario"}
            </p>
            <p className="text-base text-gray-500 font-normal">
              Email: {userData ? userData.email : "Correo electrónico no disponible"}
            </p>
            <p className="text-base text-gray-500 font-normal">
              Zona de Residencia: {userData && userData.address ? userData.address.province : "No disponible"}.
            </p>
            {/* Incluir más detalles del usuario según lo que se retorne de tu API */}
          </div>
        </div>
        {/* Considera añadir secciones adicionales aquí, por ejemplo, reseñas o información adicional del perfil */}
      </div>

      
      <div className="text-center mt-6">
            <Button
              onClick={handleContactButtonClick}
            >
              Contactar
            </Button>
          </div>
    </div>
  );
};

export default ProfileUser;