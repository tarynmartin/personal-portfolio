import styled from "styled-components";
import { Github } from "@styled-icons/fa-brands/Github";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { AboutDotMe } from "@styled-icons/simple-icons/AboutDotMe"; 
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
import { GraduationCap } from "@styled-icons/fa-solid/GraduationCap";
import { Briefcase } from "@styled-icons/fa-solid/Briefcase";
import { Hiking } from "@styled-icons/fa-solid/Hiking";
import { MessageRounded } from "@styled-icons/boxicons-solid/MessageRounded";

export const StyledApp = styled.div`
  background-color: teal;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 30%;
  box-shadow: 0px 5px 6px #027171, inset 0px 2px 3px #007676;
  margin: 0.8em;

  &:hover {
    background-color: #f2827f;
  }

  &:hover .icon {
    color: white;
  }
`;

export const AboutButton = styled(Button)`
  grid-row: 3;
  grid-column: 1;
  margin-left: 30%;
`;

export const AboutLogo = styled(AboutDotMe)`
  color: teal;
  height: 6em;
`;

export const ProjectsButton = styled(Button)`
  grid-row: 1;
  grid-column: 2;
  margin-left: 35%;
`;

export const ProjectLogo = styled(LaptopCode)`
  color: teal;
  height: 6em;
`;

export const EducationButton = styled(Button)`
  grid-row: 2;
  grid-column: 1;
  margin-left: 60%
`;

export const EduLogo = styled(GraduationCap)`
  color: teal;
  height: 6em;
`;

export const ExperienceButton = styled(Button)`
  grid-row: 2;
  grid-column: 3;
  margin-left: 10%;
`;

export const ExpLogo = styled(Briefcase)`
  color: teal;
  height: 6em;
`;

export const HobbiesButton = styled(Button)`
  grid-row: 3;
  grid-column: 3;
  margin-left: 30%;
`;

export const HobbyLogo = styled(Hiking)`
  color: teal;
  height: 6em;
`;

export const ContactButton = styled(Button)`
  grid-row: 5;
  grid-column: 2;
  margin-left: 35%;
`;

export const ContactLogo = styled(MessageRounded)`
  color: teal;
  height: 6em;
`;

export const LinkedinButton = styled(Button)`
  grid-row: 4;
  grid-column: 1;
  margin-left: 60%;
`;

export const LinkedinLogo = styled(Linkedin)`
  color: teal;
  height: 6em;
`;

export const GithubButton = styled(Button)`
  grid-row: 4;
  grid-column: 3;
  margin-left: 10%;
`;

export const GithubLogo = styled(Github)`
  color: teal;
  height: 6em;
`;

export const JobInfo = styled.div`
  grid-row: 3;
  grid-column: 2;
  text-align: center;
`;

export const StyledName = styled.h1`
  color: white;
  font-size: 2em;
`;

export const StyledJobTitle = styled.h2`
  color: white;
  font-size: 1em;
`;