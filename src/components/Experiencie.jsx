import React from 'react';

// Styles
import H2Styled from '../Styles/H2Styled';
import H3Styled from '../Styles/H3Styled';
import PStyled from '../Styles/PStyled';

const Experiencie = props => (
  <div className="Experiencie">
    <H2Styled name="Experience:" />
      <div className="Experiencie-container">
      {props.data.map((job, index) => (
        <div className="Experiencie-item" key={`Job-${index}`}>
        <H3Styled>{job.jobTitle} @ {job.company} -
          <span> ({job.endDate} / {job.startDate}) </span>
        </H3Styled>
        <PStyled name= {job.jobDescription}/>
      </div>
    ))}
    </div>
  </div>
);

export default Experiencie;
