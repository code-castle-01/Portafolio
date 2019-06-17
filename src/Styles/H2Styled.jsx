
import React from 'react'; //imr
import styled from 'styled-components'; //isc

const StyledH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300; /*formato de grosor */
  letter-spacing: .8px; /*Espaciado*/
  color: #c2185b;
`;

const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>; // return explicito
export default H2Styled;