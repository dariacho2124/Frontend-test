const FilterButton = ({ label, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`block w-[80%] mx-auto h-[40px] p-0 text-center mb-4 rounded-full flex items-center justify-center ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default FilterButton;
  