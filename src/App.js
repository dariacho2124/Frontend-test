import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import { TasksProvider } from "./components/context/TasksContext";

function App() {
  return (
    <TasksProvider> 
      <Router future={{ v7_relativeSplatPath: true }}>
      <main className="w-full min-h-screen bg-[#f3f4f6]">
        <Routes>
          <Route path="/" element={<Tasks />} />
        </Routes>
      </main>
    </Router> 
    </TasksProvider>
   
  );
}

export default App;
