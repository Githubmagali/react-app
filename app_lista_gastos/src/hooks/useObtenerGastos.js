import { useState, useEffect } from "react";
import { db } from './../firebase/firebaseConfig';
import { useAuth } from './../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit } from "firebase/firestore";

const useObtenerGastos = () => {
  // Estado local
  const { usuario } = useAuth();
  const [gastos, cambiarGastos] = useState([]);
  const [ultimoGasto, cambiarUltimoGasto]= useState(null);
  const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

  // Efecto secundario que se ejecuta cuando cambia el usuario
  useEffect(() => {
      // Construye una consulta para obtener los gastos del usuario actual
      const consulta = query(
          collection(db, 'gastos'),
          where('uidUsuario', '==', usuario.uid),
          orderBy('fecha', 'desc'),
          limit(10)
      );

      // Establece un listener para cambios en la consulta
      const unsuscribe = onSnapshot(consulta, (snapshot) => {
        if (snapshot.docs.length > 0) {
          // Si hay documentos en el resultado de la consulta
          cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]); // Actualiza el estado del último gasto con el último documento de la consulta
          cambiarHayMasPorCargar(true); // Indica que hay más documentos por cargar
        } else {
          // Si no hay documentos en el resultado de la consulta
          cambiarHayMasPorCargar(false); // Indica que no hay más documentos por cargar
        }
      
        cambiarGastos(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          })
        );
        // Actualiza el estado de los gastos con los datos de todos los documentos de la consulta,
        // asignándoles un campo 'id' igual al ID del documento en Firestore
      });
      
      // Devuelve una función de limpieza que se ejecutará al desmontar el componente
      return unsuscribe;
  }, [usuario]); // La dependencia 'usuario' asegura que el efecto se ejecute cuando cambia el usuario

  // Devuelve el estado y funciones necesarios para usar en otros componentes
  return [gastos, useObtenerGastos, hayMasPorCargar];
}

export default useObtenerGastos;
