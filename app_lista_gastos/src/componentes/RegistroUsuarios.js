import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "./../elementos/Header";
import Boton from "../elementos/Boton";
import { Formulario, Input, ContenedorBoton } from "./../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../imagenes/registro.svg";
import styled from "styled-components";
import { auth } from "./../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Alerta from "../elementos/Alerta";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      case "password":
        establecerPassword(e.target.value);
        break;
      case "password2":
        establecerPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(true);
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
    if (correo === "" || password === "" || password2 === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje:'complete todos los campos'
      });
      return;
    }
    if (password !== password2) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje:'La contraseñas no coinciden'
      });
      return;
    }

    try {
      // Registro de usuario con Firebase
      await createUserWithEmailAndPassword(auth, correo, password);
      navigate('/');
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      cambiarEstadoAlerta(true);

      let mensaje0;
      switch(error.code){
        case 'auth/invalid-password':
            mensaje0 = 'La contraseña tiene que ser de al menos 6 caracteres.'
            break;
        case 'auth/email-already-in-use':
            mensaje0 = 'Ya existe una cuenta con el correo electrónico proporcionado.'
        break;
        case 'auth/invalid-email':
            mensaje0 = 'El correo electrónico no es válido.'
        break;
        default:
            mensaje0 = 'Hubo un error al intentar crear la cuenta.'
        break;
    }
      cambiarAlerta({tipo: 'error', mensaje: mensaje0});
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar sesión</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type="email" name="email" placeholder="Correo" value={correo} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange} />
        <Input type="password" name="password2" placeholder="Repetir contraseña" value={password2} onChange={handleChange} />
        <ContenedorBoton>
          <Boton as="button" type="submit">
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta 
      tipo={alerta.tipo}
      mensaje={alerta.mensaje}
      estadoAlerta={estadoAlerta}
      cambiarEstadoAlerta={cambiarEstadoAlerta}/>

    </>
  );
};

export default RegistroUsuarios;
