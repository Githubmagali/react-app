import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastosDelMesPorCategoria from "../hooks/useObtenerGastosDelMesPorCategoria";
import { ListaDeCategorias, ElementoListaCategorias, Categoria, Valor } from './../elementos/ElementosDeLista.js';
import IconoCategoria from './../elementos/IconoCategoria.js';
import convertirAMoneda from './../funciones/convertirAMoneda.js';


const GastosPorCategorias = ()=>{

  const GastosPorCategoria =useObtenerGastosDelMesPorCategoria();
 console.log(GastosPorCategoria);
 
    return(
      <>
      <Helmet>
        <title>Gastos por categoria</title>
      </Helmet>
  
      <Header>
          <BtnRegresar />
          <Titulo> Gastos por categoria</Titulo>
      
      </Header>

      <ListaDeCategorias>
        {GastosPorCategoria.map((elemento, index)=>{
           return( 
            <ElementoListaCategorias key={index}>
               <Categoria><IconoCategoria  nombre={elemento.categoria}/>{elemento.categoria}</Categoria>
               <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
            </ElementoListaCategorias>
           );
        })}
      </ListaDeCategorias>
      <BarraTotalGastado />
      </>
    );
  }
  
  export default GastosPorCategorias;