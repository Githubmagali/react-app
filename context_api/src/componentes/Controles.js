import React, {useContext} from "react";
import styled from "styled-components";
import {ContextoTema} from "./contextos/ContextoTema";


const Controles = () => {

    const {aumentarFuente, dismunuirFuente, alineadoIzqu, alineadoCentro, alineadoDerecha}= useContext(ContextoTema);
  
    return (
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente} >Aumentar fuente</Boton>
                <Boton onClick={dismunuirFuente}> Disminuir fuente</Boton>
            </div>

            <div>
                <Boton onClick={alineadoIzqu}>Izquierda</Boton>
                <Boton onClick={alineadoCentro}>Centro</Boton>
                <Boton onClick={alineadoDerecha}>Derecha</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;

export default Controles;