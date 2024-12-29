const FilterButton = ({ label, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`block w-[80%] mx-auto p-4 text-center mb-4 rounded-full ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default FilterButton;
  