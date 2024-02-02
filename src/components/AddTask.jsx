import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import { useEffect, useState } from 'react'
import '../css/addTask.css'

const AddTask = ({AddTask,editTask,saveTask}) => {

  const [day,setDay] = useState('')
  const [task,setTask] = useState('')
  const [editing,setEditing] = useState(false)

  const addNewTask = () =>{
    if(!day){
      toast.error("Please Add Day and Time",{
        autoClose: 1500
      })
      return;
    }
    if(!task){
      toast.error("Please Add A Task",{
        autoClose: 1500
      })
      return;
    }
    const id = Math.floor(Math.random()*100)
    const newTask = {
      id:id,
      task:task,
      day:day
    }
    AddTask(newTask)
    toast.success("Task Added Successfully",{
      autoClose: 1500,
      pauseOnHover:false
    })
    setTask('')
    setDay('')
  }



  useEffect(()=>{
    if(editTask){
       setDay(editTask.day)
       setTask(editTask.task)
       setEditing(true)
    }else{
      setEditing(false)
    }
  },[editTask])

  const handleSaveTask = () => {
    if(!day){
      toast.error("Please Add Day and Time",{
        autoClose: 1500
      })
      return;
    }
    if(!task){
      toast.error("Please Add A Task",{
        autoClose: 1500
      })
      return;
    }
    const updatedTask = {
      ...editTask,day:day,task:task
    }
    saveTask(updatedTask)
    setDay('')
    setTask('')
    toast.success("Task Updated Successfully",{
      autoClose: 1500,
      pauseOnHover:false
    })
    setEditing(false)
  }



  return (
    <div className="container">

        <div className='first-input'>
           <label>Date & Time</label>
           <input type="text" 
           placeholder='Date & Time' 
           value={day}
           onChange={(e)=>setDay(e.target.value)}
           />
        </div>

        <div className='second-input'>
           <label>Add Task</label>
           <input type='text' 
           placeholder='Add Your Task Here' 
           value={task}
           onChange={(e)=>setTask(e.target.value)}
           />
        </div>

        {
          editing ? (
            <button className='btn' onClick={handleSaveTask}>Save Task</button>
          ) : (
            <button className='btn' onClick={addNewTask}>Add Task</button>
          )
        }  
    </div>
  )
}

export default AddTask
