import React from 'react';
import styled, {keyframes} from 'styled-components';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;

`;
const SkillsH5 = styled.h5`
  margin: .5em0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #f8BBD0;
`;
// para mostrar el % que tenemos de habilidad

const move = keyframes`
  0% { background-position: 0 0; };
  100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
  display: block;
  height: 100%;
  width: ${props => props.width};
  border-radius: 8px;
  background-color: #C2185b;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right:0px;
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;
  }
`;

const Skills = props => (
  <div className="Skills-">
    <SkillsContainer>
      {props.data.map((ski, index) => (
        <div className="Skills-item" key={`Ski-${index}`}>
          <SkillsH5>{ski.name}</SkillsH5>
          <SkillsLine>
            <SkillsSpan width={ski.percentage}/>
          </SkillsLine>
        </div>
      ))}
    </SkillsContainer>
  </div>
);

export default Skills;

/* keyframes = sirve para añadir animaciones al componente, y nos permite trabjar las
animaciones desde el css */