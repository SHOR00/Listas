import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef, useState} from 'react'
import './App.css'
function AgregarTarea() {
  
  const [tarea, setTarea] = useState("");
  
  localStorage.setItem('tareaStorage', tarea);
  
  const rStorage =  localStorage.getItem("tareaStorage")
  
  const input = useRef();
  const lista = useRef();

  
  const f =()=>{
    lista.current.innerHTML += `<li key=${input.current.value}>${input.current.value}</li>`
    input.current.value = ""
    setTarea(lista.current.innerHTML) 
  };
  
  return (
    <>
    <div className='entradas'>
      <input ref={input}></input>
      
      <button onClick={f}>agregar</button>
    </div>
      <ListGroup ref={lista}
        style={{
          color:'white', 
          background:'black'}}
        onDoubleClick={(e)=>{e.target.remove(e.target)
                      setTarea(lista.current.innerHTML)}}
        ></ListGroup>
    </>
  );
}

export default AgregarTarea;