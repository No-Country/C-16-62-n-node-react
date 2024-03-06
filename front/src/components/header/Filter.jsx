import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Todos los servicios
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:bg-[#0001] hover:underline bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Gasistas
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:bg-[#0001] hover:underline bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Electricistas
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:bg-[#0001] hover:underline bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Mecanicos
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:bg-[#0001] hover:underline bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Plomeros
        </button>
      </div>
    </>
  );
};

export default Filter;
