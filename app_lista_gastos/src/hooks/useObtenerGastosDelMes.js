import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from "../contextos/AuthContext";
import { collection, orderBy, where, onSnapshot, query } from "firebase/firestore";

const useObtenerGastosDelMes = () => {

    const [gastos, establecerGastos] = useState([]);
    const { usuario } = useAuth();

    useEffect(() => {
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));


        if(usuario){
            const consulta = query(
                collection(db, 'gastos'),
                orderBy('fecha', 'desc'),
                where('fecha', '>=', inicioDeMes),
                where('fecha', '<=', finDeMes),
                where('uidUsuario', '==', usuario.uid)
        
              );

               const unsuscribe = onSnapshot(consulta, (snapshot)=>{
                establecerGastos(snapshot.docs.map((documento)=>{
                    return {...documento.data(), id:documento.id}
                }))

              }, (error) => {console.log(error)});

      

            //useEffect tiene que retornar una funcion que se va a ejecutar cuando se desmonte el componente
            //en este caso queremos que se ejecute unsuscribe a la colleccion de firebase
            return unsuscribe;
        }
        
         //lo agregamos a las dependencias y evita que si el usuario cambie no intente acceder nuevamente a la base de datos
    }, [usuario]);

    return gastos;
}

export default useObtenerGastosDelMes;