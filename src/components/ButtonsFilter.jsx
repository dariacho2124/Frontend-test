import React from "react";
import FilterButton from "./FilterButton";
import { useTasks } from "./context/TasksContext";
import { faPlus, faTasks, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

const ButtonsFilter = () => {
  const { activeButton, setShowForm, setFilter, setActiveButton } = useTasks();

  const filterButtons = [
    { label: "Add Task", value: "add",icon: faPlus },
    { label: "All Tasks", value: "all", icon: faTasks },
    { label: "Completed", value: "completed", icon: faCheckCircle },
    { label: "Pending", value: "pending", icon: faClock },
  ];

  return (
    <div>
      {filterButtons.map(({ label, value, icon }) => (
        <FilterButton
          key={value}
          label={label}
          icon={icon}
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
