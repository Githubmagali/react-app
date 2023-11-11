import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "./../elementos/Header";
import Boton from "../elementos/Boton";
import { Formulario, Input, ContenedorBoton } from "./../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../imagenes/registro.svg";
import styled from "styled-components";
import { auth } from "./../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
  const [error, setError] = useState(null);

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

    // Validación del lado del cliente
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      console.log("Error en el correo electrónico");
      return;
    }
    if (correo === "" || password === "" || password2 === "") {
      console.log("Datos incompletos");
      return;
    }
    if (password !== password2) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    try {
      // Registro de usuario con Firebase
      await createUserWithEmailAndPassword(auth, correo, password);
      console.log("Usuario creado con éxito");
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      let mensaje;
      switch(error.code){
        case 'auth/invalid-password':
            mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
            break;
        case 'auth/email-already-in-use':
            mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
        break;
        case 'auth/invalid-email':
            mensaje = 'El correo electrónico no es válido.'
        break;
        default:
            mensaje = 'Hubo un error al intentar crear la cuenta.'
        break;
    }
      
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
      {error && <p>{error}</p>}
    </>
  );
};

export default RegistroUsuarios;
