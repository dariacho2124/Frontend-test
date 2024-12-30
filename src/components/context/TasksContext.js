import React, { createContext, useContext, useState } from "react";
import tasksData from "../../data";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
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
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
        activeButton,
        setActiveButton,
        newTask,
        setNewTask,
        showForm,
        setShowForm,
        editingTaskId,
        setEditingTaskId,
        filteredTasks,
        handleFilterChange,
        handleAddTask,
        handleInputChange,
        handleCancel,
        handleEditClick,
        handleChangeInput,
        handleToggleStatus,
        handleDeleteClick,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
