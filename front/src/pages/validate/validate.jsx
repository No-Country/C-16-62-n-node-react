import React, { useState } from "react";

const validate = () => {
  const [validationCode, setValidationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h3 className="text-black text-2xl m-4">
        Se ha enviado un código de validación a tu email.
      </h3>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="shadow appearance-none border m-6 border-[#1995AD] rounded w-full py-2 px-3 text-black leading-tight focus:border-[#2aa0b8]"
            placeholder="Ingrese el código de validación"
            value={validationCode}
            onChange={(e) => setValidationCode(e.target.value)}
            required
          />
        <button
          type="submit"
          className="m-4 text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
        >
          Validar
        </button>
      </form>
    </div>
  );
};

export default validate;
