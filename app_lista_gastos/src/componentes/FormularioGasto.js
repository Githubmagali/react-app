import React, { useState } from "react";
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";
import { ReactComponent as IconoPlus } from './../imagenes/plus.svg';
import SelectCategorias from "./SelectCategorias";
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import DatePicker from './DatePicker';
import agregarGasto from "../firebase/agregarGasto";
import { useAuth } from './../contextos/AuthContext';
import Alerta from './../elementos/Alerta';


const FormularioGasto = () => {
  const [inputDescripcion, cambiarInputDescripcion] = useState('');
  const [inputCantidad, cambiarInputCantidad] = useState('');
  const [categoria, cambiarCategoria] = useState('hogar');
  const [fecha, cambiarFecha] = useState(new Date());
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});
  const { usuario } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === 'descripcion') {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === 'valor') {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let cantidad = parseFloat(inputCantidad).toFixed(2);
    //console.log(inputDescripcion, inputCantidad, categoria, fecha);
    //console.log(getUnixTime(fecha));

    if (inputDescripcion !== '' && inputCantidad !== '') {

      if(cantidad){
        agregarGasto({
          categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: inputCantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid
          
        })
        //.then regresamos a la promesa que resolvimos
        .then(()=>{
          cambiarCategoria('hogar');
          cambiarInputDescripcion('');
          cambiarInputCantidad('');
          cambiarFecha(new Date());

          cambiarEstadoAlerta(true);
          cambiarAlerta({tipo: 'exito', mensaje:'Ingreso exitoso'})
        })
        .catch((error)=>{
          cambiarEstadoAlerta(true);
          cambiarAlerta({tipo: 'error', mensaje:'Hubo un error'})
        })
      }else{
        cambiarEstadoAlerta(true);
        cambiarAlerta({tipo: 'error', mensaje:'Valor incorrecto'})
      }
     
      
    } else {
      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo: 'error', mensaje:'Completa todos los campos'})
    }

  }
  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectCategorias categoria={categoria} cambiarCategoria={cambiarCategoria} />
        <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
      </ContenedorFiltros>
      <div>
        <Input type="text" name="descripcion" id="descripcion" placeholder="Descripcion" value={inputDescripcion} onChange={handleChange} />
        <InputGrande type="text" name="valor" id="valor" placeholder="$0.00" value={inputCantidad} onChange={handleChange} />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario conIcono type="submit">Agregar gasto <IconoPlus /></Boton>
      </ContenedorBoton>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </Formulario>
  );
}

export default FormularioGasto; 