import React from 'react';

const Filter = ({ onFilterChange }) => { 
    const [selectedFilter, setSelectedFilter] = React.useState("Todos");

    const handleFilterClick = (filter) => {
      setSelectedFilter(filter);
    
      if (typeof onFilterChange === "function") {
        onFilterChange(filter.toLowerCase());
      }
    };

    const filters = ["Todos", "Gasistas", "Electricistas", "Mecanicos", "Plomeros", "Carpinteros"];

    return (
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {filters.map((filter) => (
                <button
                    key={filter}
                    type="button"
                    className={`text-${selectedFilter === filter ? "white" : "gray-900"} border border-white hover:bg-[#0001] hover:underline bg-${selectedFilter === filter ? "[#1995AD]" : "white"} rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
                    onClick={() => handleFilterClick(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Filter;