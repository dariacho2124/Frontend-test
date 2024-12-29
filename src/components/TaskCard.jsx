const TaskCard = ({
    task,
    onEditClick,
    onDeleteClick,
    isEditing,
    onChangeInput,
    onToggleStatus,
  }) => (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="text-lg font-semibold">
        {isEditing ? (
          <input
            type="text"
            name="title"
            value={task.title || ""}
            onChange={onChangeInput}
            className="border border-gray-300 p-2 rounded"
            
          />
        ) : (
          task.title
        )}
      </div>
      <div className="text-sm text-gray-500">
        {isEditing ? (
          <input
            type="date"
            name="dueDate"
            value={task.dueDate || ""}
            onChange={onChangeInput}
            className="border border-gray-300 p-2 rounded"
          />
        ) : (
          task.dueDate
        )}
      </div>
      <div className="text-sm text-gray-700 mt-2">Status: {task.status}</div>
      <div className="text-sm text-gray-700 mt-2">
        {isEditing ? (
          <textarea
            name="description"
            value={task.description || ""}
            onChange={onChangeInput}
            className="border border-gray-300 p-2 rounded w-full"
          />
        ) : (
          task.description
        )}
      </div>
      <div className="flex mt-4">
        {isEditing ? (
          <button 
            onClick={() => onEditClick(task.id)}
            className="bg-yellow-500 text-white w-40 h-12 rounded-full text-white p-2 mr-2"
          >
            Save
          </button>
        ) : task.status === "pending" ? (
          <>
            <button
              onClick={() => onToggleStatus(task.id, "completed")}
              className="bg-green-500 text-white w-40 h-10 rounded-full text-white  mr-2"
            >
              Mark as Completed
            </button>
          </>
        ) : null}
        <button
          onClick={() => onEditClick(task.id)}
          className="bg-blue-500 text-white w-[100px] h-10 rounded-full text-white p-2 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteClick(task.id)}
          className="bg-red-500 text-white w-[100px] h-10 rounded-full text-white p-2 mr-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
  export default TaskCard