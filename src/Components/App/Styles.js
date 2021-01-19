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
  background-color: black;
  color: white;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;


export const Button = styled.button`
  border: none;
  margin: 0.8em;
  background-color: transparent;
  text-align: center;

  &:hover .icon {
    color: orange;
    cursor: pointer;
  }
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
`;

export const AboutLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 1;
`;

export const AboutLogo = styled(AboutDotMe)`
  color: white;
  height: 6em;
`;

export const ProjectsLink = styled(StyledLink)`
  grid-row: 1;
  grid-column: 2;
  margin-left: 35%;
`;

export const ProjectLogo = styled(LaptopCode)`
  color: white;
  height: 6em;
`;

export const EducationLink = styled(StyledLink)`
  grid-row: 1 / span 2;
  grid-column: 1;
  margin: 6.5em;
  margin-left: 65%
`;

export const EduLogo = styled(GraduationCap)`
  color: white;
  height: 6em;
`;

export const ExperienceLink = styled(StyledLink)`
  grid-row: 1 / span 2;
  grid-column: 3;
  margin: 6.5em;
  margin-left: 5%;
`;

export const ExpLogo = styled(Briefcase)`
  color: white;
  height: 6em;
`;

export const HobbiesLink = styled(StyledLink)`
  grid-row: 3;
  grid-column: 3;
  margin-left: 30%;
`;

export const HobbyLogo = styled(Hiking)`
  color: white;
  height: 6em;
`;

export const ContactLink = styled(StyledLink)`
  grid-row: 5;
  grid-column: 2;
  margin-left: 35%;
`;

export const ContactLogo = styled(MessageRounded)`
  color: white;
  height: 6em;
`;

export const LinkedinLink = styled(StyledLink)`
  grid-row: 4 / span 2;
  grid-column: 1;
  margin: 6.5em;
  margin-left: 65%;
`;

export const LinkedinLogo = styled(Linkedin)`
  color: white;
  height: 6em;
`;

export const GithubLink = styled(StyledLink)`
  grid-row: 4 / span 2;
  grid-column: 3;
  margin: 6.5em;
  margin-left: 5%;
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