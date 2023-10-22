import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux';

const Carrito = ({carrito})=>{

    return(
        <div>
            <H3>Carrito de compras</H3>
            {carrito.length > 0 ?
              carrito.map((producto, index)=> {
                return(
                    <Producto key={index}>
                        <NombreProducto>
                            {producto.nombre}
                        </NombreProducto>
                        cantidad: {producto.cantidad}
                    </Producto>
                );
              })
            :
            <p>Aun no hay productos en el carrito</p>
            }
        </div>
    );
}
const H3= styled.h3 `
text-align:center;
margin: 20px;
`;
const Producto= styled.div`
padding: 10px;
border-bottom: 1px solid #ebebf3;
font-size:14px;
`;

const NombreProducto = styled.p`
font-weight: bold;
font-size: 16px;
color: #000;
`;

//la funcion va a tener acceso al estado global 
const mapStateToProps = (estado)=>{
return{
    carrito: estado.carrito
}
}

export default connect(mapStateToProps)(Carrito);