import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import AddTask from './components/AddTask';
import TodoDisplay from './components/TodoDisplay';





function App() {

  const [tasks,setTasks] = useState([])
  const [showAddTask,setShowAddTask] = useState(false)
  const [editedTask,setEditedTask] = useState("")

  const addTask = (newTask) =>{
     setTasks([...tasks,newTask])
     console.log(tasks)
  }

  const deleteTodoItem = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
   }

   const editTodoItem = (task) => {
      setEditedTask(task)
   }

   const saveTask = (updatedTask) => {
        const updatedTasks = tasks.map(task=>task.id === updatedTask.id ? updatedTask : task)
        setTasks(updatedTasks)
        setEditedTask(null)
   }

  const toggleAddTask = () => {
           setShowAddTask(!showAddTask)
  }

  return (
    <div className="App">
          <ToastContainer/>
        <div className='todoContainer'>
          <div className='todoHeader'>
            <Header/>
            <Button show={toggleAddTask} text={showAddTask ? "Close" : "Open"} color={showAddTask ? "red" : "green"}/>
          </div>

          {showAddTask ? (<AddTask AddTask={addTask} editTask={editedTask} saveTask={saveTask}/>) : console.log("hidden")}

          {
            tasks.length > 0 ? (
                 <TodoDisplay tasks={tasks} deleteItem={deleteTodoItem} editItem={editTodoItem}/>
            ) : (
                <h1 className='no-tasks'>No Tasks To Show</h1>
            )}
         
     
        </div>
    </div>
  );
}

export default App;
