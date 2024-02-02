import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import AddTask from './components/AddTask';
import TodoDisplay from './components/TodoDisplay';





function App() {

  const [tasks,setTasks] = useState([
    {
      id:4,
      task:'Go to the legon event',
      date:'02/03/2024',
      time:'2:30 PM',
    },
    {
      id:7,
      task:'Go to school',
      date:'02/03/2024',
      time:'4:30 PM',
    },
    {
      id:5,
      task:'Go to work',
      date:'02/03/2024',
      time:'8:50 PM',
    }
  ])

  const addTask = (newTask) =>{
     setTasks([...tasks,newTask])
     console.log(tasks)
  }

  const [showAddTask,setShowAddTask] = useState(true)

  const toggleAddTask = () => {
           setShowAddTask(!showAddTask)
  }

  return (
    <div className="App">
        <div className='todoContainer'>
          <div className='todoHeader'>
            <Header/>
            <Button show={toggleAddTask} text={showAddTask ? "Close" : "Open"} color={showAddTask ? "red" : "green"}/>
          </div>

          {showAddTask ? (<AddTask AddTask={addTask}/>) : console.log("hidden")}

          {
            tasks.length > 0 ? (
                 <TodoDisplay tasks={tasks}/>
            ) : (
                <h1>No Tasks To Show</h1>
            )}
         
     
        </div>
    </div>
  );
}

export default App;
