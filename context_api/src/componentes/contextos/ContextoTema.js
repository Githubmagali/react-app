import React from "react";
import { useState } from "react";

//creamos el contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({children})=>{
//useState va SIEMPRE dentro de un componente, en este caso ProveedorTema
    const [tema00, cambiarTema] = useState(
        {
        alineado: 'center',
        fuente: 30
    }
    );

    const aumentarFuente = ()=> cambiarTema( {...tema00, fuente: tema00.fuente + 1 });

    const dismunuirFuente = ()=> cambiarTema( { ...tema00, fuente: tema00.fuente - 1 } );

    const alineadoIzqu = () => {
        console.log("Alineado a la izquierda");
        cambiarTema({ ...tema00, alineado: 'left' });
      };
      
    const alineadoCentro = ()=> cambiarTema( {...tema00, alineado: 'center' } );
    const alineadoDerecha = ()=> cambiarTema( {...tema00, alineado: 'right' } );

    return ( 
        <ContextoTema.Provider value={{tema00, aumentarFuente, dismunuirFuente, alineadoIzqu, alineadoCentro, alineadoDerecha }}>
        {children}
        </ContextoTema.Provider>
        );
  
}

export {ContextoTema, ProveedorTema};