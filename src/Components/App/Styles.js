import styled from "styled-components";
import img from '../../assets/tim-mossholder-G-IId4_X6mA-unsplash.jpg';
import { Link } from 'react-router-dom';
import { Github } from "@styled-icons/fa-brands/Github";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { AboutDotMe } from "@styled-icons/simple-icons/AboutDotMe"; 
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
import { GraduationCap } from "@styled-icons/fa-solid/GraduationCap";
import { Briefcase } from "@styled-icons/fa-solid/Briefcase";
import { Hiking } from "@styled-icons/fa-solid/Hiking";
import { MessageRounded } from "@styled-icons/boxicons-solid/MessageRounded";

export const StyledApp = styled.div`
  background-image: url(${img});
  background-size: cover;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const StyledMain = styled.div`
  background-image: radial-gradient(circle, #008a8c, #003738);
  color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
    color: orange;
    font-size: 3em;
    font-weight: bolder;
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

export const AboutLink = styled(StyledLink)`
  grid-row: 2;
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
  grid-row: 1;
  grid-column: 2;

  &:hover button span:after {
    content: "Projects";
  }
`;

export const ProjectLogo = styled(LaptopCode)`
  color: white;
  height: 6em;
`;

export const EducationLink = styled(StyledLink)`
  grid-row: 1;
  grid-column: 1;

  &:hover button span:after {
    content: "Education";
  }
`;

export const EduLogo = styled(GraduationCap)`
  color: white;
  height: 6em;
`;

export const ExperienceLink = styled(StyledLink)`
  grid-row: 1;
  grid-column: 3;

  &:hover button span:after {
    content: "Experience";
  }
`;

export const ExpLogo = styled(Briefcase)`
  color: white;
  height: 6em;
`;

export const HobbiesLink = styled(StyledLink)`
  grid-row: 2;
  grid-column: 3;

  &:hover button span:after {
    content: "Hobbies";
  }
`;

export const HobbyLogo = styled(Hiking)`
  color: white;
  height: 6em;
`;

export const ContactLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 2;

  &:hover button span:after {
    content: "Contact Me";
  }
`;

export const ContactLogo = styled(MessageRounded)`
  color: white;
  height: 6em;
`;

export const LinkedinLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 1;

  &:hover button span:after {
    content: "LinkedIn Profile";
  }
`;

export const LinkedinLogo = styled(Linkedin)`
  color: white;
  height: 6em;
`;

export const GithubLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 3;

  &:hover button span:after {
    content: "Github Profile";
  }
`;

export const GithubLogo = styled(Github)`
  color: white;
  height: 6em;
`;

export const StyledHeadshot = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 250px;
`

export const StyledLandingLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 2;
`;

export const StyledTitle = styled.div`
  & .name {
    color: white;
    font-size: 4em;
  }

  & .title {
    color: white;
    font-size: 2em;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .name, &:hover .title {
    color: orange;
  }
`;