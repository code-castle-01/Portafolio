import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

// Styles-Compnents

const SocialDiv = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding:0;
`;

const SocialLI = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialA = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`;

const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`;

//#Una manera de hacerlo defniendo un objeto socialColors y pasandolo como parametro en la funcion...
const socialColors = {
  default: "#000000;",
  facebook: "#3b5998", Facebook: "#3b5998",
  twitter: "#38A1F3", Twitter: "#38A1F3",
  github: "#333", Github: "#333",
  youTube: "#bb0000", YouTube: "#bb0000",
  linkedin: "#007bb5", Linkedin: "#007bb5",
  instagram: "#125688", Instagram: "#125688",
  pinterest: "#cb2027", Pinterest: "#cb2027",
  tumblr: "#32506d", Tumblr: "#32506d",
  imgur: "#85bf25", Imgur: "#85bf25",
  flickr: "#ff0084", Flickr: "#ff0084",
  vimeo: "#aad450", Vimeo: "#aad450",
  foursquare: "#0072b1", Foursquare: "#0072b1",
  hi5: "#fd9827", Hi5: "#fd9827",
  whatsApp: "#4dc247", WhatsApp: "#4dc247",
  snapchat: "#fffc00", Snapchat: "#fffc00",
  soundcloud: "#ff8800", Soundcloud: "#ff8800",
  periscope: "#35A3C6", Periscope: "#35A3C6",
  tinder: "#E34514", Tinder: "#E34514"
}

const getColor = name => ({ color: socialColors[name] || socialColors.default })

const Social = props => (
  <SocialDiv>
    {props.social &&
      <SocialUL>
        {props.social.map((item, index) => (
          <SocialLI key={`social-${index}`}>
            <SocialA href={item.url} target="_blank">
              <ThemeProvider theme={getColor(item.name)}>
                <SocialIcon className={`fab fa-${item.name}`}/>
              </ThemeProvider>
            </SocialA>
          </SocialLI>
        ))}
      </SocialUL>
    }
  </SocialDiv>
);

export default Social;

//#Una manera de hacerlo con IF...
/*
const facebook = {color:"#3b5998" }
const twitter = {color:"#38A1F3" }
const linkedin = {color:"#0E76a8"}
const github = {color:"#333"}

const getColor = (name) => {
  if (name === 'facebook') return facebook;
  if (name === 'twitter') return twitter;
  if (name === 'linkedin') return linkedin;
  if (name === 'github') return github;
}
*/

//#Una manera de hacerlo con switch...
/*
const getColor =(name =>{
  switch (name) {
    case 'facebook':
      return {color: "#3b5990"}
    break;
    case 'twitter':
      return {color: "#38A1F3"}
    break;
    case 'linkedin':
      return {color: "#0E76a8"}
    break;
    case 'github':
      return {color: "#333"}
    break;
    default:
      return {color: "#FAFAFA"}
    break;
  }
});
*/