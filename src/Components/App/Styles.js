import styled from "styled-components";
import img from '../../assets/tim-mossholder-G-IId4_X6mA-unsplash.jpg';
import { Link } from 'react-router-dom';
import { Github } from "@styled-icons/fa-brands/Github";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { AboutDotMe } from "@styled-icons/simple-icons/AboutDotMe"; 
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
//import { GraduationCap } from "@styled-icons/fa-solid/GraduationCap";
//import { Briefcase } from "@styled-icons/fa-solid/Briefcase";
import { MessageRounded } from "@styled-icons/boxicons-solid/MessageRounded";

export const StyledApp = styled.div`
  background-image: url(${img});
  background-size: cover;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export const StyledMain = styled.div`
  font-family: "Vollkorn", serif;
  background-image: radial-gradient(circle, #008a8c, #003738);
  color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(4, 1fr);
`;


export const Button = styled.button`
  border: none;
  margin: 0.8em;
  background-color: transparent;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items; center;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover button span .icon {
    display: none;
  }

  &:hover button span:after{
    cursor: pointer;
    background-color: white;
    color: #953800;
    font-family: "Rakkas", cursive;
    font-size: 3em;
    width: 30vw;
    height: 15vh;
    padding: 0.5em;
    border-radius: 10px;
    text-align: center;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const StyledOutsideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items; center;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover button span .icon {
    display: none;
  }

  &:hover button span:after{
    cursor: pointer;
    background-color: white;
    color: #953800;
    font-family: "Rakkas", cursive;
    font-size: 1em;
    width: 15vw;
    height: 10vh;
    padding: 0.5em;
    border-radius: 10px;
    text-align: center;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const StyledLinks = styled.div`
  grid-row: 4;
  grid-column: 1;
  display: grid;
  grid-template-coloumns: repeat(2, auto);
`

export const AboutLink = styled(StyledLink)`
  grid-row: 1;
  grid-column: 1;

  &:hover button span:after{
    content: 'About Me';
  }
`;

export const AboutLogo = styled(AboutDotMe)`
  color: white;
  height: 6em;
`;

export const ProjectsLink = styled(StyledLink)`
  grid-row: 2;
  grid-column: 1;

  &:hover button span:after {
    content: "Projects";
  }
`;

export const ProjectLogo = styled(LaptopCode)`
  color: white;
  height: 6em;
`;

export const ContactLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 1;

  &:hover button span:after {
    content: "Contact Me";
  }
`;

export const ContactLogo = styled(MessageRounded)`
  color: white;
  height: 6em;
`;

export const LinkedinLink = styled(StyledOutsideLink)`
  grid-column: 1;

  &:hover button span:after {
    content: "See Profile";
  }
`;

export const LinkedinLogo = styled(Linkedin)`
  color: white;
  height: 3em;
`;

export const GithubLink = styled(StyledOutsideLink)`
  grid-column: 2;

  &:hover button span:after {
    content: "See Profile";
  }
`;

export const GithubLogo = styled(Github)`
  color: white;
  height: 3em;
`;

export const StyledImgDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const StyledHeadshot = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 4em 0;
`

export const StyledLandingLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 2;
`;

export const StyledTitle = styled.div`
  font-family: "Rakkas", cursive;
  letter-spacing: 0.2em;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  box-sizing: border-box;

  & .name {
    color: white;
    font-size: 6em;
    grid-row: 2;
  }

  & .title {
    color: white;
    font-size: 4em;
    grid-row: 3;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .name,
  &:hover .title {
    color: #16d5d9;
  }
`;