import '../css/button.css'



const Button = ({show,text,color}) => {
  return (
    <div className="container">
       <button onClick={show} style={{backgroundColor : color}}>{text}</button>
    </div>
  )
}

export default Button
