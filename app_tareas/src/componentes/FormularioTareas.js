import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4} from 'uuid';


// Desestructura las propiedades tareas y cambiarTareas del objeto que se pasa como argumento.
const FormularioTareas = ({tareas, cambiarTareas})=>{

     // Usa el hook de estado useState para declarar una variable de estado inputTarea con su función para cambiar el estado cambiarInputTarea.
    const [inputTarea, cambiarInputTarea]= useState('');


    const handleInput = (e)=>{
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e)=>{
    e.preventDefault();

     // Utiliza la función cambiarTarea para actualizar el estado de tareas. Agrega una nueva tarea al array de tareas existente.
    cambiarTareas(
        [
        ...tareas,
         {
            id: uuidv4(),
            texto:inputTarea,
            completada:false
         }
    ]);

    //para reiniciar el estado de inputTarea a una cadena vacía, lo que limpia el input del formulario
    cambiarInputTarea ('');

    }
    return(
  <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
    <input
      type="text"
       className="formulario-tareas__input"
       placeholder="Nueva tarea" 
       value={inputTarea}
       onChange={(e)=>handleInput(e)}
       />
  <button 
  type="submit"
  className="formulario-tareas__btn"
  >
  <FontAwesomeIcon icon={faPlusSquare}
   className="formulario-tareas__icono-btn"
  />
   </button>
  </form>
    );
}
export default FormularioTareas;