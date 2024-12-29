import React, { useState } from "react";
import ButtonsFilter from "./ButtonsFilter";
import TaskCard from "./TaskCard";
import tasksData from "../data";

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.status === filter
  );

  const handleFilterChange = (status) => {
    setFilter(status);
    setActiveButton(status);
  };

  const handleAddTask = () => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId]);
    setNewTask({ title: "", dueDate: "", description: "", status: "pending" });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewTask({ title: "", dueDate: "", description: "", status: "pending" });
  };

  const handleEditClick = (id) => {
    setEditingTaskId(editingTaskId === id ? null : id);
  };

  const handleChangeInput = (e, id) => {
    const { name, value } = e.target;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, [name]: value } : task
      )
    );
  };

  const handleToggleStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDeleteClick = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full mt-20 sm:w-4/12 bg-gray-100 p-4">
        <ButtonsFilter
          activeButton={activeButton}
          handleFilterChange={handleFilterChange}
          setShowForm={setShowForm} // Pasa setShowForm aquí
        />
      </div>

      <div className="w-full sm:w-8/12 p-4 bg-gray-200">
        <div className="text-3xl text-purple-600 font-bold mt-4 mb-10">Tasks</div>
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
