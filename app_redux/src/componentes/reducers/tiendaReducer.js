const estadoInicial = {
  productos: [
      { id: 1, nombre: 'Producto 1' },
      { id: 2, nombre: 'Producto 2' },
      { id: 3, nombre: 'Producto 3' },
      { id: 4, nombre: 'Producto 4' },
      { id: 5, nombre: 'Producto 5' },
      { id: 6, nombre: 'Producto 6' }
  ],
  carrito9: []
}

const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
      case 'AGREGAR_PRODUCTO_AL_CARRITO':
          const { nombre, idProductoAAgregar } = accion;
          return actualizarCantidad(estado, idProductoAAgregar, nombre, 1);

      case 'QUITAR_PRODUCTO_DEL_CARRITO':
          const { idProductoAQuitar } = accion;
          return actualizarCantidad(estado, idProductoAQuitar, '', -1);

      default:
          return estado;
  }
};

const actualizarCantidad = (estado, idProducto, nombre, cantidad) => {
  const productoEnCarrito = estado.carrito9.find(producto => producto.id === idProducto);

  if (!productoEnCarrito && cantidad < 0) {
      // Si el producto no está en el carrito y se intenta quitar, no hacemos nada
      return estado;
  }

  const nuevoCarrito = estado.carrito9.map((producto) => {
      if (producto.id === idProducto) {
          const nuevaCantidad = producto.cantidad + cantidad;
          return {
              ...producto,
              cantidad: nuevaCantidad > 0 ? nuevaCantidad : 0,
          };
      }
      return producto;
  });

  if (!productoEnCarrito && cantidad > 0) {
      // Si el producto no estaba en el carrito y se intenta agregar, lo agregamos
      nuevoCarrito.push({
          id: idProducto,
          nombre,
          cantidad: 1,
      });
  }

  // Elimina el producto del carrito si la nueva cantidad es 0
  const carritoActualizado = nuevoCarrito.filter((producto) => producto.cantidad > 0);

  return {
      ...estado,
      carrito9: carritoActualizado,
  };
};

export default reducer;
