import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";


const Carrito1 = ({carrito00})=>{


    return(
        <div>
        {carrito00.length > 0 ? 
            carrito00.map((producto, index)=>{
                return(
                    <Producto key={index}>
                        <NombreProducto>
                            {producto.nombre}
                        </NombreProducto>
                        Candidad: {producto.cantidad}
                    </Producto>
                )
            })
            :
            <p>Aun no hay productos</p>
        }
        </div>
    );
}

const Producto = styled.div `
padding: 10px;
border-bottom: 1px solid #ebebf3;
font-size: 14px;
 `;
 const NombreProducto = styled.p `
 font-weight: bold;
 font-size: 16px;
 color: #000;
 `;


 const mapStateToProps=(estado)=>{
    return{
        carrito00: estado.carrito9
    }
 }
export default connect(mapStateToProps)(Carrito1);