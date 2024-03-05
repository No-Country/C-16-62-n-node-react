import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Select,
} from "flowbite-react";
import { useAuth } from "../../context/AuthContext";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    worker: {
      province: "",
      city: "",
      category: "",
    },
  });
  const navigate = useNavigate();

  const [provinces, setProvinces] = useState([]);
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://apis.datos.gob.ar/georef/api/provincias"
        );
        const data = await response.json();
        setProvinces(data.provincias);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchLocalities = async () => {
      if (formData.province) {
        try {
          const response = await fetch(
            `https://apis.datos.gob.ar/georef/api/municipios?provincia=${formData.province}`
          );
          const data = await response.json();
          setLocalities(data.municipios);
        } catch (error) {
          console.error("Error fetching localities:", error);
        }
      }
    };

    fetchLocalities();
  }, [formData.province]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      ...(name === "province" || name === "city"
        ? {
            worker: {
              ...prevState.worker,
              [name]: value,
            },
          }
        : {
            [name]: value,
          }),
    }));
  };

  const handleLogout = () => {
    logout();
    setOpenModal(false);
    navigate("/login");
  };

  const isWorker = currentUser && currentUser.workerData;
  useEffect(() => {
    if (currentUser) {
      setFormData((prevData) => ({
        ...prevData,
        name: isWorker ? currentUser.workerData?.name || "" : currentUser.name,
        email: isWorker
          ? currentUser.workerData?.email || ""
          : currentUser.email,
        phone: isWorker
          ? currentUser.workerData?.phone || ""
          : currentUser.phone,
        worker: {
          province: isWorker ? currentUser?.workerData?.worker.province || "" : "",
          city: isWorker ? currentUser?.workerData?.worker.city || "" : "",
          category: isWorker ? currentUser?.workerData?.worker.category || "" : "",
        },
      }));
    }
  }, [currentUser, isWorker]);

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
              {currentUser?.workerData?.name ||
                currentUser?.name ||
                "Nombre de Usuario"}
            </p>
            <p className="text-base text-gray-500 font-normal">
              Zona de Residencia:{" "}
              {formData.worker.province ||
                currentUser?.workerData?.worker.province ||
                currentUser?.worker.province ||
                "No disponible"}
              .
            </p>
            <p className="text-base text-gray-500 font-normal">
              Email:{" "}
              {currentUser?.workerData?.email ||
                currentUser?.email ||
                "Correo electrónico no disponible"}
            </p>
            <div className="text-base text-gray-500 font-normal">
              Oficio:{" "}
              {formData.worker.category ||
                currentUser?.workerData?.worker.category ||
                currentUser?.worker.category ||
                "No disponible"}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowEditModal(true)}
            className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Editar perfil
          </button>
          <Modal
            show={showEditModal}
            size="md"
            onClose={() => setShowEditModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="mb-4">
                <h3 className="font-bold text-xl">
                  Actulaliza los datos de tu perfil
                </h3>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <TextInput
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <TextInput
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <TextInput
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-4">
                  <Select
                    id="province"
                    value={formData.province}
                    onChange={(e) => {
                      setFormData((prevData) => ({
                        ...prevData,
                        province: e.target.value,
                        city: "",
                      }));
                    }}
                    required
                  >
                    <option value="" disabled>
                      Selecciona tu provincia
                    </option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.nombre}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="mb-4">
                  <Select
                    id="city"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData((prevData) => ({
                        ...prevData,
                        city: e.target.value,
                      }));
                    }}
                    required
                  >
                    <option value="" disabled>
                      Selecciona tu localidad
                    </option>
                    {localities.map((locality) => (
                      <option key={locality.id} value={locality.id}>
                        {locality.nombre}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm "
                    onClick={() => {
                      /* Añade aquí la lógica para guardar los cambios */
                    }}
                  >
                    Guardar cambios
                  </Button>
                  <Button color="gray" onClick={() => setShowEditModal(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
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
            className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Ver más reseñas
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          type="button"
          className="text-white bg-[#ad1919] hover:bg-[#be1c1c] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
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
