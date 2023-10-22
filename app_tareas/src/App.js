import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
import Tareas from './componentes/Tareas';
import { v4 as uuidv4} from 'uuid';

//tareas; es el estado actual,
// cambiarTareas; es una función que permite cambiar el estado.
const App = ()=> {
 

  //obtenemos las tareas guardadas
  const tareasGuardadas= localStorage.getItem('tareas') ?
  JSON.parse(localStorage.getItem('tareas')) : [];
  //establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);


//[tareas]; hace que se ejecute cada que las tareas cambien
//{}; la primera vez
//setItem establece un elemento dentro del espacio local. ('tareas'); nombre del elemento y el elemento que queremos grardar
//localStorage guarda los elemento como cadena de texto y para eso usamos JSON.stringify, que lo pasa con formato JSON
  useEffect(()=>{
 localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  
  // Inicializa el estado de mostrarCompletadas con el valor almacenado en localStorage o true por defecto.
  const [mostrarCompletadas, cambiarmostrarCompletadas] = useState(
    localStorage.getItem('mostrarCompletadas') !== null ?
      localStorage.getItem('mostrarCompletadas') === 'true' :
      true
  );

/*
let configMostrarCompletadass ='';  '';: Se declara una variable llamada configMostrarCompletadas e inicializa con una cadena vacía
if(localStorage.getItem('mostrarCompletadas')===nul){
  configMostrarCompletadas = true;
}else{
  configMostrarCompletadas= localStorage.getItem('mostrarCompletadas')==='true';
}

const [mostrarCompletadas, cambiarmostrarCompletadas] = useState configMostrarCompletadass;
*/

   // Efecto para almacenar en localStorage cada vez que cambia el estado de mostrarCompletadas.
   useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
   <Header mostrarCompletadas={mostrarCompletadas} cambiarmostrarCompletadas={cambiarmostrarCompletadas}/>
   <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
   <ListaTareas
    tareas={tareas}
    cambiarTareas={cambiarTareas}
    mostrarCompletadas={mostrarCompletadas}
    />
    </div>
  );
}

export default App;
