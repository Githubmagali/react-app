import React,  { useState }  from "react";
import styled from "styled-components";
import bd from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 


const FormularioAgregarContacto =()=>{

    const [nombre00, cambiarNombre] = useState('');
    const [correo00, cambiarCorreo] = useState('');

    const onSubmit = async (e)=>{
        e.preventDefault();
     
        //addDoc es una funcion asincrona(se ejecuta de fondo) nos va a devolver una promesa, quiere decir a su vez que nos va a indicar
        //cuando termino de agregar el doc a la base de datos
        //entonces lo correcto es esperar hasta que el documento fue agregado a la base de datos para poder limpiar los campos
        //y que la operacion sea correcta
        //try catch atrapan el error en caso de que hubiera
       try{

        await addDoc(collection(bd, 'usuarios'),{
            nombre00:nombre00,
            correo00:correo00
        });
      
    }catch(error){
        console.log(error);
    }
    cambiarNombre('');
    cambiarCorreo('');
    }

    return(
        <form action="" onSubmit={onSubmit}>
            <Input type="text" name="nombre" value={nombre00} onChange={(e)=> cambiarNombre(e.target.value)} placeholder="Nombre y apellido" />
            <Input type="email" name="correo" value={correo00} onChange={(e)=> cambiarCorreo(e.target.value)} placeholder="Correo" />
            <Boton  type="submit">Agregar</Boton>
        </form>
    );
}


const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

const Boton = styled.button`
	padding: 10px 30px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}`


export default FormularioAgregarContacto;
