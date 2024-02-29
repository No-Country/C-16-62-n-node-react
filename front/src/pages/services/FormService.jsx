import React, { useState, useEffect } from "react";
import { Select, Label, TextInput, FileInput, Textarea } from "flowbite-react";

function FormService() {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [localities, setLocalities] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSelectedFile(null);
    setDescription("");
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
          id="adress"
          type="text"
          placeholder="Agrega una dirección (opcional)"
          required
          shadow
        />
      </div>
      <div className="max-w-md mb-4">
        <Select id="services" required>
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
          id="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Agrega una descripción"
          multiline
          required
        />
      </div>

      <div className="mb-4">
        <FileInput
          id="photo"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-7"
      >
        Registrarme
      </button>
    </form>
  );
}

export default FormService;
