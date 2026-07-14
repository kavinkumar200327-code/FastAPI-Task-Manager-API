import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = "http://127.0.0.1:8000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try{
      const response = await axios.get(`${API}/tasks`);
      setTasks(response.data);
    }
    catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await axios.post(`${API}/tasks`, task);
    fetchTasks();
  };

  const updateTask = async (task) => {
    await axios.put(`${API}/tasks/${task.id}`, task);
    setEditingTask(null);
    fetchTasks();
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`${API}/tasks/${taskId}`);
    fetchTasks();
  }

return(

  <div className="container">
    <h1>Task Manager</h1>

    <TaskForm
    addTask={addTask}
    updateTask={updateTask}
    editingTask={editingTask}
    />

    <TaskList
    tasks={tasks}
    deleteTasks={deleteTask}
    setEditingTask={setEditingTask}
    />
  </div>

  );
}

export default App;