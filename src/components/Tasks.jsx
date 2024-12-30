import React from "react";
import ButtonsFilter from "./ButtonsFilter";
import TaskCard from "./TaskCard";
import { useTasks } from "./context/TasksContext";

const Tasks = () => {
  const {
    filteredTasks,
    activeButton,
    handleFilterChange,
    showForm,
    setShowForm,
    newTask,
    handleInputChange,
    handleAddTask,
    handleCancel,
    editingTaskId,
    handleEditClick,
    handleChangeInput,
    handleToggleStatus,
    handleDeleteClick,
  } = useTasks();

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full mt-20 sm:w-4/12 bg-gray-100 p-4">
        <ButtonsFilter
          activeButton={activeButton}
          handleFilterChange={handleFilterChange}
          setShowForm={setShowForm}
        />
      </div>

      <div className="w-full sm:w-8/12 p-4 bg-gray-200">
        <div className="text-3xl text-purple-600 font-bold mt-4 mb-10">
          Tasks Manager
        </div>
        {showForm ? (
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="Task Title"
              className="mb-2 p-2 w-full border border-gray-300 rounded"
            />
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleInputChange}
              className="mb-2 p-2 w-full border border-gray-300 rounded"
            />
            <textarea
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              placeholder="Task Description"
              className="mb-2 p-2 w-full border border-gray-300 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={handleAddTask}
                className="bg-blue-500 w-[140px] text-white p-2 rounded"
              >
                Add Task
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 w-[140px] text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                isEditing={task.id === editingTaskId}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onToggleStatus={handleToggleStatus}
                onChangeInput={(e) => handleChangeInput(e, task.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
