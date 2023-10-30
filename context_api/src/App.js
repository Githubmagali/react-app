import React, {useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Post from './componentes/Post';
import AcercaDe from './componentes/AcercaDe';
import Error404 from './componentes/Error404';
import styled from 'styled-components';
import {ContextoTema} from './componentes/contextos/ContextoTema';

const App = () => {

	//Aquí, useContext se utiliza para obtener el 
	//valor actual del contexto de tema (ContextoTema). La variable tema00 se extrae de este contexto
	const {tema00} = useContext(ContextoTema);
		
//Se pasa la variable del tema
// (tema00) como una prop llamada tema0 al componente Main.
// Esto significa que dentro del componente Main podes acceder al tema a través de props.tema0
	return (

		<BrowserRouter>
			<ContenedorPrincipal>
				<Header />
				
				<Main tema00={tema00}>
					<Routes>
						<Route path="*" element={<Error404 />} />
						<Route path="/" element={<Inicio />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/post/:id" element={<Post />} />
						<Route path="/acerca-de" element={<AcercaDe />} />
					</Routes>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
}

const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
    font-size: ${props => props.tema00 ? props.tema00.fuente + 'px' : '16px'};
	text-align: ${props => props.tema00 ? props.tema00.alineado : 'right'};
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
export default App;