import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from'./../imagenes/login.svg';
import styled from "styled-components";

const Svg = styled(SvgLogin)`
	width: 100%;
	max-height: 12.5rem; /* 200px */
	margin-bottom: 1.25rem; /* 20px */
`;

const IniciarSesion = ()=>{
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

      <Formulario>
        <Svg />
        <Input type="text" name="nombre" placeholder="Nombre completo"/>
        <Input type="password" name="password" placeholder="Contraseña"/>
        <Input type="password" name="password2" placeholder="Repetir contraseña"/>
        <ContenedorBoton> <Boton primario type="submit">Crear cuenta</Boton></ContenedorBoton>
        
      </Formulario>
      </>
    );
  }
  
  export default IniciarSesion;