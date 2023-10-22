import React from "react";
import Tareas from "./Tareas";


const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
   const toggleCompletada = (id) => {
      cambiarTareas(tareas.map((tarea00) => {
         if (tarea00.id === id) {
            return { ...tarea00, completada: !tarea00.completada }
         }
         return tarea00;
      }));
   }

   //nuevoTexto: Es el nuevo texto que se asignará a la tarea.
   //cambiarTareas: es una función que se utiliza para actualizar el estado de las tareas, esta en App.js
   const editarTarea = (id, nuevoTexto) => {
      cambiarTareas(tareas.map((tarea00) => {
         if (tarea00.id === id) {
            return { ...tarea00, texto: nuevoTexto }
         }
         return tarea00;
      }));

   }
   //filter va  a ejecutarse y va a mostrar todos los elementos del arreglo
   //tarea00.id !== id ; tarea es distinto al id ? Si, es igual lo mantiene
   // Si es distinto sale de la funcion

   const borrarTarea = (id) => {
      cambiarTareas(tareas.filter((tarea00) => {
         if (tarea00.id !== id) {
            return tarea00;
         }
         return;
      }));

   }



   return (
      <ul className="lista-tareas">
         {tareas.length > 0 ?
            tareas.map((tarea, index) => {
               
               if (mostrarCompletadas) {
                  return <Tareas
                     key={index}
                     tarea={tarea}
                     toggleCompletada={toggleCompletada}
                     editarTarea={editarTarea}
                     borrarTarea={borrarTarea}
                  />
               } else if (!tarea.completada) {
                  return <Tareas
                     key={index}
                     tarea={tarea}
                     toggleCompletada={toggleCompletada}
                     editarTarea={editarTarea}
                     borrarTarea={borrarTarea}
                  />

               }
               return;
            })
            : <div className="lista-tareas__mensaje">No hay tareas pendientes</div>
         }
      </ul>
   );
}

export default ListaTareas;