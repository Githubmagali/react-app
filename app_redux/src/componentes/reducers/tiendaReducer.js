
const estadoInicial ={
productos: [
    {id:1, nombre: 'producto 1'},
    {id:2, nombre: 'producto 2'},
    {id:3, nombre: 'producto 3'},
    {id:4, nombre: 'producto 4'}
  ],
  carrito: []
}


//reducer es una funcion que se va a encargar de administrar el estado global de nuestra app
const reducer = (estado = estadoInicial, accion)=>{
 switch(accion.type){
   case 'AGREGAR_PRODUCTO_AL_CARRITO':
    //hago destructuracion, defino una constante, extraigo nombre y idProductoaAgregar de la accion
    const {nombre, idProductoaAgregar} = accion;

    if (estado.carrito.length === 0){
    return{
      ...estado, 
      carrito: [{id: idProductoaAgregar, nombre: nombre, cantidad:1}]
    }
  }else{
    //de otra forma revisamos que el carrito no tenga otro producto que tengamos que agregar
    //si ya lo tiene actualizamos su valor
    //no tiene el producto entonces lo agregamos
    //para poder editar el arreglo tenemos que clonarlo
    // [...carrito]; la nueva contante es igual a carrito con todos sus valores
      const nuevoCarrito = [...estado.carrito];

      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito)=>{
        return productoDeCarrito.id === idProductoaAgregar
      }).length > 0;

      if(yaEstaEnCarrito){
        nuevoCarrito.forEach((productoDeCarrito, index)=>{
          if(productoDeCarrito.id === idProductoaAgregar){
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index]={
              id:idProductoaAgregar,
              nombre:nombre,
              cantidad: cantidad +1
            }
          }
        });
        //de otra forma agregamos el producto al arreglo
      }else{
        nuevoCarrito.push(
          {
            id: idProductoaAgregar,
            nombre:nombre,
            cantidad: 1
          }
        );
      }

      return {
        ...estado,
        carrito: nuevoCarrito
      }
    }
    
    default:
        return estado;
 }
}


export default reducer;