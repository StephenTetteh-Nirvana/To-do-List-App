import { useState } from 'react'
import '../css/addTask.css'

const AddTask = ({AddTask}) => {

  const [date,setDate] = useState('')
  const [time,setTime] = useState('')
  const [task,setTask] = useState('')

  const addNewTask = () =>{
    const id = Math.floor(Math.random()*100)
    const newTask = {
      id:id,
      task:task,
      date:date,
      time:time
    }
    AddTask(newTask)
    setTask('')
    setDate('')
    setTime('')
  }


  return (
    <div className="container">

        <div className='first-input'>
           <label>Add Date</label>
           <input type="date" 
           placeholder='Date' 
           value={date}
           onChange={(e)=>setDate(e.target.value)}
           required/>
        </div>


          <div className='first-input'>
            <label>Add Time</label>
            <input type="text" 
            placeholder='Time' 
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            required/>
          </div>

        <div className='second-input'>
           <label>Add Task</label>
           <input type='text' 
           placeholder='Add Your Task Here' 
           value={task}
           onChange={(e)=>setTask(e.target.value)}
           required/>
        </div>
         <button className='btn' onClick={addNewTask}>Add Task</button>
    </div>
  )
}

export default AddTask
