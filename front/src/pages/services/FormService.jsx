import React, { useState, useEffect } from "react";
import { Select, TextInput, Textarea } from "flowbite-react";
import { createWorker } from "../../axios/axios.user";
import { useAuth } from "../../context/AuthContext";

function FormService() {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [localities, setLocalities] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const { currentUser } = useAuth();

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
      if (selectedProvince) {
        try {
          const response = await fetch(
            `https://apis.datos.gob.ar/georef/api/municipios?provincia=${selectedProvince}`
          );
          const data = await response.json();
          setLocalities(data.municipios);
        } catch (error) {
          console.error("Error fetching localities:", error);
        }
      }
    };

    fetchLocalities();
  }, [selectedProvince]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const _id = currentUser ? currentUser._id : null;
      const province = selectedProvince;
      const city = selectedLocality;
      const desc = description;

      const result = await createWorker(
        _id,
        category,
        desc,
        province,
        city,
        address
      );

      console.log("Trabajador registrado con éxito:", result);
    } catch (error) {
      console.error("Error al registrar el trabajador:", error);
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      <h3 className="text-xl font-bold my-5">
        ¡Registrate como trabajador y conecta con gente de tu zona!
      </h3>
      <div className="max-w-md mb-4">
        <Select
          id="province"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
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
        {" "}
        <Select
          id="city"
          value={selectedLocality}
          onChange={(e) => setSelectedLocality(e.target.value)}
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
      <div className="my-4">
        <TextInput
          id="address"
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Agrega una dirección (opcional)"
          required
          shadow
        />
      </div>
      <div className="max-w-md mb-4">
        <Select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="" disabled selected>
            Selecciona tu oficio
          </option>
          <option value="gasista">Gasista</option>
          <option value="plomero">Plomero</option>
          <option value="albanil">Albañil</option>
          <option value="mecanico">Mecánico</option>
        </Select>
      </div>

      <div className="mb-4">
        <Textarea
          id="desc"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Agrega una descripción"
          required
        />
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-7"
      >
        Registrarme
      </button>
    </form>
  );
}

export default FormService;
