import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from "../elementos/Boton";
import { ContenedorFiltros, Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin  } from './../imagenes/registro.svg';
import styled from "styled-components";


const Svg = styled(SvgLogin)`
width: 100%;
max-height:6.25rem;
margin.bottom:1.25rem;
`;

const RegistroUsuarios=()=>{
    return(
        <>
        <Helmet>
            <title>Crear cuenta</title>
        </Helmet>

        <Header>
            <ContenedorHeader>
                <Titulo>Crear cuenta</Titulo>
                <div>
                    <Boton to="/InicioSesion">Inicio sesion</Boton>
                </div>
            </ContenedorHeader>
        </Header>

        <Formulario>
            <Svg />
            <Input type="email" name="email" placeholder="correo"/>
            <Input type="password" name="password" placeholder="contraseña"/>
            <Input type="password" name="password" placeholder="reptir contraseña"/>
            <ContenedorBoton>
            <Boton as="button" type="submit"primario>Crear cuenta</Boton>
            </ContenedorBoton>
            
        </Formulario>
        </>
       
    );
}

export default RegistroUsuarios;