// import React from 'react';



// const TaskCard = ({ task }) => (
//   <div className="bg-white shadow-md rounded-lg p-4 mb-4">
//     <div className={`text-sm font-bold ${task.priority === 'HIGH PRIORITY' ? 'text-red-500' : 'text-yellow-500'}`}>
//       {task.priority}
//     </div>
//     <div className="text-lg font-semibold">{task.title}</div>
//     <div className="text-sm text-gray-500">{task.dueDate}</div>
//     <div className="flex items-center text-sm text-gray-500 mt-2">
//       <span className="mr-2">{task.comments} comments</span>
//       <span className="mr-2">{task.attachments} attachments</span>
//       <span>{task.subtasks} subtasks</span>
//     </div>
//     <div className="text-sm text-gray-700 mt-2">{task.description}</div>
//     <div className="flex mt-2">
//       {task.tags.map((tag, index) => (
//         <span key={index} className="bg-blue-100 text-blue-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//           {tag}
//         </span>
//       ))}
//     </div>
//     <div className="flex mt-2">
//       {task.team.map((member, index) => (
//         <span key={index} className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
//           {member}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// const TaskBoard = () => (
//   <div className="flex">
//     <div className="w-1/4 bg-gray-100 p-4">
//       <div className="font-bold text-lg mb-4">Tasks</div>
//       <div className="font-bold text-lg mb-4">Completed</div>
//       <div className="font-bold text-lg mb-4">In Progress</div>
//     </div>
//     <div className="w-3/4 p-4">
//       {tasks.map((task, index) => (
//         <TaskCard key={index} task={task} />
//       ))}
//     </div>
//   </div>
// );

// export default TaskBoard;
