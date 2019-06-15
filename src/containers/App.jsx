import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experiencie from '../components/Experiencie';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;

    @media only screen and (max-width: 767px){
      background: #0723f436;
    }
  }
`;


const App = () => {
  // const data cuando comience a correr la app, la funcion useGetData carga el estado la data
  const data = useGetData();
  console.log(data);
/* Esta validacion es necesaria por la forma en que asignamos los elementos que traemons de la api, useEffect funciona despues que montamos la info
por eso si los datos son exactamente igual a nada data.length === 0 ? si no hay nada muestra el cargando si todo esta bien carga el componente MAIN */
  return data.length === 0 ? <h1> Cargando...</h1> : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      <Info>
        <Education
          data={data.education}
        />
        <Experiencie
          data={data.experience}
        />
        <Certificate
          data={data.certificate}
        />
        <Skills
          data={data.skills}
        />
      </Info>
    </Main>
  );
}

export default App;