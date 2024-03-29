import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';

const App = () => {
    const productos = [
		{id: 1, nombre: 'Producto 1'},
		{id: 2, nombre: 'Producto 2'},
		{id: 3, nombre: 'Producto 3'},
		{id: 4, nombre: 'Producto 4'}
    ];
    
    const [carrito, cambiarCarrito] = useState([]);
    // [
    //     {id: 1, nombre: 'Producto 1', cantidad: 1},
    //     {id: 2, nombre: 'Producto 2', cantidad: 2}
    // ]
    const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
      // Si el carrito no tiene elementos entonces agregamos uno.
      if(carrito.length === 0){
          cambiarCarrito([{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]);
      } else {
          // De otra foma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
    // Si ya lo tiene entonces queremos actualizar su valor.
    // Si no tiene el producto entonces lo agregamos.

          // Para poder editar el arreglo tenemos que clonarlo.
          const nuevoCarrito = [...carrito];

          // Comprobamos si el carrito ya tiene el ID del producto a agregar.
          const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
              return productoDeCarrito.id === idProductoAAgregar
          }).length > 0;

          // Si ya tiene el producto entonces lo tenemos que actualizar.
          if(yaEstaEnCarrito){
              // Para ello tenemos que buscarlo, obtener su posicion en el arreglo.
              // Y en base a su posicion ya actualizamos el valor.
              nuevoCarrito.forEach((productoDeCarrito, index) => {
                  if(productoDeCarrito.id === idProductoAAgregar){
                      const cantidad = nuevoCarrito[index].cantidad;
                      nuevoCarrito[index] = {
                          id: idProductoAAgregar, 
                          nombre: nombre, 
                          cantidad: cantidad + 1
                      }
                  }
              });
          // De otra forma entonces agregamos el producto al arreglo.
          } else {
              nuevoCarrito.push(
                  {
                      id: idProductoAAgregar,
                      nombre: nombre,
                      cantidad: 1
                  }
              );
          }

          // Por ultimo actualizamos el carrito.
          cambiarCarrito(nuevoCarrito);
      }
  }

  
    const quitarProductoAlCarrito = (idProductoAQuitar, nombre) => {
      if (carrito.length === 0) {
          cambiarCarrito([{ id: idProductoAQuitar, nombre: nombre, cantidad: 1 }]);
      } else {
          const nuevoCarrito = [...carrito];
          const yaEstaEnCarrito = nuevoCarrito.some(productoDeCarrito => productoDeCarrito.id === idProductoAQuitar);
  
          if (yaEstaEnCarrito) {
              nuevoCarrito.forEach((productoDeCarrito, index) => {
                  if (productoDeCarrito.id === idProductoAQuitar) {
                      const cantidad = nuevoCarrito[index].cantidad;
  
                      // Restamos 1 a la cantidad si es mayor a 1, de lo contrario eliminamos el producto
                      nuevoCarrito[index] = {
                          id: idProductoAQuitar,
                          nombre: nombre,
                          cantidad: cantidad > 1 ? cantidad - 1 : 0
                      };
                  }
              });
          } else {
              nuevoCarrito.push({
                  id: idProductoAQuitar,
                  nombre: nombre,
                  cantidad: 1
              });
          }
  
          cambiarCarrito(nuevoCarrito);
      }
  }
  

	return (
		<Contenedor>
			<Menu>
				<NavLink to="/">Inicio</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/tienda">Tienda</NavLink>
			</Menu>
			<main>
				<Routes>
                    <Route path="*" element={<Error404 />}/>
					<Route path="/" element={<Inicio />}/>
					<Route path="/blog" element={<Blog />}/>
					<Route path="/tienda" element={
                        <Tienda 
                            productos={productos} 
                            agregarProductoAlCarrito={agregarProductoAlCarrito}
                            quitarProductoAlCarrito={quitarProductoAlCarrito}
                        />
                    } />
				</Routes>
			</main>
			<aside>
                <Carrito carrito={carrito}/>
			</aside>
		</Contenedor>
	);
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;