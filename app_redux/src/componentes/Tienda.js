import React from "react";
import Productos from "./Productos";
import styled from "styled-components";


const Tienda = ()=>{
    return(
        <div>
            <H1>Tienda</H1>
            <Productos />
        </div>
    );
}

const H1 = styled.h1`
    text-align: center
`;
export default Tienda;