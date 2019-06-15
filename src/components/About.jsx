import React from 'react';
import Social from './Social'
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
`;
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;
const AboutIMG = styled.img`
  width: 160px;
  height: 160px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 10px;
  border-radius: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(233, 30, 99);
  border-image: initial;
  margin: 0px auto;
`;

const AboutName = styled.div`
  text-align:center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #C21858;
`;
const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #c21858;
`;
const AbouBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;
const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

/* Tambien puedo usarlo asi ya que solo paso un elemento const About = () => <h1> Hola mundo </h1>;*/

const About = ({avatar, name, profession, bio, address, social}) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutIMG src={avatar} alt={name}/>
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AbouBio> {bio} </AbouBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social}/>
      </div>
    </div>
  </AboutStyle>
);

export default About;
