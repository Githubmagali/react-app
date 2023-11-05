import React from "react";
import styled from "styled-components";
import {ReactComponent as Puntos} from './../imagenes/puntos.svg';





const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Fondo = ()=>{
    return(
        <>
        <PuntosArriba />
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill0opacity="1" d="M0,160L30,176C60,192,120,224,180,197.3C240,171,300,85,360,90.7C420,96,480,192,540,234.7C600,277,660,267,720,234.7C780,203,840,149,900,112C960,75,1020,53,1080,42.7C1140,32,1200,32,1260,37.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></Svg>
        <PuntosAbajo />
        </>
    );
}

export default Fondo;