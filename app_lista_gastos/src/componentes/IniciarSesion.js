import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from'./../imagenes/login.svg';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./../firebase/firebaseConfig";
import Alerta from "../elementos/Alerta";

const Svg = styled(SvgLogin)`
	width: 100%;
	max-height: 12.5rem; /* 200px */
	margin-bottom: 1.25rem; /* 20px */
`;

const IniciarSesion = ()=>{
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e)=>{
    if(e.target.name === 'email'){
      establecerCorreo(e.target.value);
    }else if (e.target.name === 'password'){
      establecerPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});
  
    // Validación del lado del cliente
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje:'Ingrese un correo válido'
      });
      return;
    }
    if (correo === "" || password === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje:'complete todos los campos'
      });
      return;
    }

    try {
      // Registro de usuario con Firebase
      await signInWithEmailAndPassword(auth, correo, password);
      navigate('/');
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      cambiarEstadoAlerta(true);

      let mensaje0;
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje0 = 'La contraseña es incorrecta.';
          break;
        case 'auth/user-not-found':
          mensaje0 = 'Usuario inválido.';
          break;
        default:
          mensaje0 = 'La contraseña es incorrecta.';
          break;
      }
    
      cambiarAlerta({tipo: 'error', mensaje: mensaje0});
    }
  }
    return(
      <>
      <Helmet>
        <title>Iniciar sesion</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesion</Titulo>
          <div>
             <Boton to="/crear-cuenta">Crear cuenta</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type="email" name="email" placeholder="Correo" value={correo} onChange={handleChange}/>
        <Input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange}/>
        <ContenedorBoton> <Boton as="button" type="submit">Iniciar sesion</Boton></ContenedorBoton>
        
      </Formulario>

      <Alerta 
      tipo={alerta.tipo}
      mensaje={alerta.mensaje}
      estadoAlerta={estadoAlerta}
      cambiarEstadoAlerta={cambiarEstadoAlerta}/>
      </>
    );
  }
  
  export default IniciarSesion;