import React, {useState, useContext, useEffect} from "react";
import { auth } from "./../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

//creamos el contexto
const AuthContext = React.createContext();


//Hook para acceder al contexto
const useAuth = ()=>{
    return useContext(AuthContext);
}

const AuthProvider = ({children})=>{

    const [usuario, cambiarUsuario] = useState();

    // Creamos un state para saber cuando termina de 
	// cargar la comprobacion de onAuthStateChanged
    const [cargando, cambiarCargando]= useState(true);


    //efecto para ejecutar la comprobacion una sola vez
    useEffect(()=>{
        //Comprobamos que haya un usuario
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario)=>{
          cambiarUsuario(usuario);
          cambiarCargando(false);
        });
        return cancelarSuscripcion;
    }, []);
    
//no renderizar los componentes hijos hasta que haya terminado la comprobación de autenticación
    return(
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children} 
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext, useAuth };