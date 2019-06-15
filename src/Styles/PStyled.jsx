import React from 'react'
import styled from 'styled-components';

// este seria el bloque que contiene el estilo
const StyledP = styled.p`
  color: #767676;
  font-weight: 3000;
  margin: .5em 0 1.2em 0;
`;

// este vendria siendo el componente a importar
const PStyled = ({name}) => <StyledP>{name}</StyledP>;
export default PStyled;
