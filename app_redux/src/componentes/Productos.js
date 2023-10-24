import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";




const Productos = ({productos, agregarProductoAlCarrito, quitarProductoAlCarrito})=>{



    return (
        <div>
        <h3>Productos</h3>
        <ContenedorProductos>
            {productos.map((producto, index)=>{
                 return(
                    <Producto key={index}>
                   <p>{producto.nombre}</p>
                   <Boton onClick={()=>agregarProductoAlCarrito(producto.id, producto.nombre)}>+</Boton>
                    <Boton onClick={() => quitarProductoAlCarrito(producto.id, producto.nombre)}>-</Boton>

                    </Producto>
                 )
            })}
        </ContenedorProductos>
        </div>
    );
}
const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Producto =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    width: 40%;
    margin: 2px;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;


const mapStateToProps = (estado)=>{
  return{
    productos: estado.productos
  }
}
//dispatch; envio de accion
const mapDispatchToProps = (dispatch) => {
    return {
        agregarProductoAlCarrito: (idProductoAAgregar00, nombre00) => {
            dispatch({
                type: 'AGREGAR_PRODUCTO_AL_CARRITO',
                idProductoAAgregar: idProductoAAgregar00,
                nombre: nombre00
            });
        },
        quitarProductoAlCarrito: (idProductoAQuitar, nombre) => {
            dispatch({
                type: 'QUITAR_PRODUCTO_DEL_CARRITO',
                idProductoAQuitar: idProductoAQuitar,
                nombre: nombre
            });
        }
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Productos);