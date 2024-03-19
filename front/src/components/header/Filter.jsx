import React from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = React.useState("Todos");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);

    if (typeof onFilterChange === "function") {
      onFilterChange(filter.toLowerCase());
    }
  };

  const filters = [
    "Todos",
    "Gasistas",
    "Electricistas",
    "Mecanicos",
    "Plomeros",
    "Carpinteros",
  ];

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`${
            selectedFilter === filter
              ? "bg-[#1995AD] text-white"
              : "bg-white text-gray-900"
          } border border-gray-300 hover:bg-[#0001] hover:underline rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
