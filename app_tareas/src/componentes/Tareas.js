import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faTimes, faSquare } from "@fortawesome/free-solid-svg-icons";


 // Desestructura la propiedad tarea del objeto que se pasa como argumento.
const Tareas = ({tarea, toggleCompletada, editarTarea, borrarTarea})=>{


 // Utiliza el hook de estado useState para declarar una variable de estado editandoTarea 
 //y su función para cambiar el estado cambiarEditandoTarea. Inicializa editandoTarea como false.
    const [editandoTarea, cambiarEditandoTarea]= useState(false);
    //tarea.texto  es el valor de la variable de estado llamada nuevaTarea
    //cambiarNuevaTarea funcion que le permite cambiar el estado
    const [nuevaTarea, cambiarNuevaTarea]= useState(tarea.texto);

    const handleSubmit = (e)=>{
     e.preventDefault();
     editarTarea(tarea.id, nuevaTarea);
     cambiarEditandoTarea(false)
    }

// Si editandoTarea es true, muestra un formulario para editar la tarea.
// Si editandoTarea es false, muestra el texto de la tarea.
    return(
        
           <li className="lista-tareas__tarea">
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare  }
            className="lista-tareas__icono lista-tareas__icono-check"
            onClick={()=>toggleCompletada(tarea.id)}
            />
            <div className="lista-tareas__texto">
                
                {editandoTarea ?
                <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    className="formulario-editar-tarea__input"
                    value={nuevaTarea}
                    onChange={(e)=>cambiarNuevaTarea(e.target.value)}
                     />
                    <button
                     type="submit"
                     className="formulario-editar-tarea__btn"
                     >
                        Actualizar
                     </button>
                </form>
                : tarea.texto
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
            <FontAwesomeIcon icon={faEdit}
            className="lista-tareas__icono-check"
            onClick={()=>cambiarEditandoTarea(!editandoTarea)}
            />
            <FontAwesomeIcon 
            icon={faTimes}
            className="lista-tareas__icono-check"
            onClick={()=>borrarTarea(tarea.id)}
            />
            </div>
           
            </li>
        
    );
}

export default Tareas;