import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bd from "../firebase/firebaseConfig";
import { collection, onSnapshot } from 'firebase/firestore';
import Contacto from "./Contacto";

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([]);

    useEffect(()=>{
        onSnapshot(
        collection(bd, 'usuarios'),
        (snapshot)=>{
             
            const arregloUsuarios = snapshot.docs.map((documento)=>{
                return{...documento.data(), id: documento.id}
            })

            cambiarContactos(arregloUsuarios);
        },
        (error) => {
            console.log(error);
        }
        );

    }, []);
    
    return (
        contactos.length > 0 && 
            <ContenedorContactos>
                {contactos.map((contacto00, index) => (
                    <Contacto
                        key={index}
                        id={contacto00.id}
                        nombre00={contacto00.nombre00}
                        correo00={contacto00.correo00}
                    />
                ))}
            </ContenedorContactos>
        
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;
