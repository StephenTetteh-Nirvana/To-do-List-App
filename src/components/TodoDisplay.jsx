import '../css/tododisplay.css'
import deleteTodo from '../images/delete.png'
import editTodo from '../images/edit.png'

const TodoDisplay = ({tasks}) => {

  return (
    <div className="TodoDisplay">
      {
        tasks.map((task)=>(
          <div className="todo" key={task.id}>
          <div className="info-box">
            <p className="title">{task.task}</p>
            <p className="subtitle">{task.date} at {task.time}</p>
          </div>
          
          <div className="action-box">
                <button className='editBtn'><img src={editTodo}/></button>
                <button className='deleteBtn'><img src={deleteTodo}/></button>
          </div>
      </div>
        ))
      }
       
    </div>
  )
}

export default TodoDisplay;
