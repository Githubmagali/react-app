import React, {useContext} from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import { useAuth } from "./../contextos/AuthContext";


const ListaDeGastos = ()=>{

const {usuario} = useAuth();
console.log(usuario);

    return(
      <>
      <Helmet>
      <title>Lista de gastos </title>
    </Helmet>

    <Header>
        <BtnRegresar />
        <Titulo> Lista de gastos </Titulo>
    
    </Header>
    
  </>
    );
}
  export default ListaDeGastos;