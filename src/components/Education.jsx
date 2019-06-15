import React from 'react';

// Styles
import H2Styled from '../Styles/H2Styled';
import H3Styled from '../Styles/H3Styled';
import PStyled from '../Styles/PStyled';


const Education = props => (
  <div className="Education">
    <H2Styled name="Education:" />
      <div className="Education-container">
      {props.data.map((edu, index) => (
        <div className="Education-item" key={`Edu-${index}`}>
          <H3Styled>{edu.degree} @ {edu.institution} -
            <span> ({edu.endDate} / {edu.startDate}) </span>
          </H3Styled>
          <PStyled name={edu.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Education;

/* el metodo map nos permite iterar por un arreglo y retornar un arreglo por cada uno de los elementos */
/* debo usar ({children}) cuando el componente este bajo otra etique no pasar props */
/* <H2Styled name="Educación" /> aqui solo le asigno un nombre */
/* <PStyled name={edu.name} /> aqui le estoy pasando el valor que traigo de la api */