import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef, useState, useEffect} from 'react'
import './App.css'

function AgregarTarea() {
  
  const input = useRef();
  const lista = useRef();
  
  const [tarea, setTarea] = useState(localStorage.getItem("memoria"));
  
  useEffect(()=>{lista.current.innerHTML = tarea},[])
  
  const setLocalStorage = value =>{
    try {
       setTarea(JSON.stringify(value))
      localStorage.setItem('memoria', value)
    } catch (error) {
       console.error(error)
    }
    
  }

  
  const f =()=>{
    lista.current.innerHTML += `<li key=${input.current.value}>${input.current.value}</li>`
    input.current.value = ''
    setLocalStorage(lista.current.innerHTML) 
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
      setLocalStorage(lista.current.innerHTML)}}
        ></ListGroup>
    </>
  );
}

export default AgregarTarea;