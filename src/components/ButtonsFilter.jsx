import React from "react";
import FilterButton from "./FilterButton";
import { useTasks } from "./context/TasksContext";

const ButtonsFilter = () => {
  const { activeButton, setShowForm, setFilter, setActiveButton } = useTasks();

  const filterButtons = [
    { label: "Add Task", value: "add" },
    { label: "All Tasks", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
  ];

  return (
    <div>
      {filterButtons.map(({ label, value }) => (
        <FilterButton
          key={value}
          label={label}
          isActive={activeButton === value}
          onClick={() => {
            if (value === "add") {
              setShowForm(true);
            } else {
              setShowForm(false);
              setFilter(value);
              setActiveButton(value);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ButtonsFilter;
