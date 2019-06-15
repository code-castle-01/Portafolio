import React from 'react';

// Styles
import H2Styled from '../Styles/H2Styled';
import H3Styled from '../Styles/H3Styled';
import PStyled from '../Styles/PStyled';

const Certificate = props => (
  <div className="Certificate">
    <div className="Certificate-container">
    <H2Styled name="Certificate"/>
    {props.data.map((cert, index) => (
      <div className="Certificate-item" key={`Cert-${index}`}>
        <H3Styled> {cert.name} @ {cert.institution} - ( {cert.date} ) </H3Styled>
          <PStyled name={cert.description} />
      </div>
    ))}
    </div>
  </div>
);

export default Certificate;
