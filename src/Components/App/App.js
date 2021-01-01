import './App.css';
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaGraduationCap, FaCode, FaBreadSlice, FaInfo } from "react-icons/fa";
import { GrContact, GrBriefcase } from "react-icons/gr";
import { IconContext} from 'react-icons';

const StyledApp = styled.div`
  background-color: teal;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const Button = styled.button`
  background-color: none;
  border: none;
  font-size: 1em;
`

const AboutButton = styled(Button)`
  grid-row: 3;
  grid-column: 1;
`;

const ProjectsButton = styled(Button)`
  grid-row: 1;
  grid-column: 2;
  text-align: center;
`

const EducationButton = styled(Button)`
  grid-row: 2;
  grid-column: 1;
  text-align: right;
`

const ExperienceButton = styled(Button)`
  grid-row: 2;
  grid-column: 3;
  text-align: left;
`

const HobbiesButton = styled(Button)`
  grid-row: 3;
  grid-column: 3;
`

const ContactButton = styled(Button)`
  grid-row: 5;
  grid-column: 2;
`

const LinkedinButton = styled(Button)`
  grid-row: 4;
  grid-column: 1;
  text-align: right;
`

const GithubButton = styled(Button)`
  grid-row: 4;
  grid-column: 3;
  text-align: left;
`

const JobInfo = styled.div`
  grid-row: 3;
  grid-column: 2;
  text-align: center;
`

const StyledName = styled.h1`
  color: white;
  font-size: 2em;
`

const StyledJobTitle = styled.h2`
  color: white;
  font-size: 1em;
`

function App() {
  return (
    <StyledApp>
      <AboutButton>
        <IconContext.Provider value={{ size: "2em" }}>
          <FaInfo />
        </IconContext.Provider>
        About
      </AboutButton>
      <ExperienceButton>
        <IconContext.Provider value={{ size: "2em" }}>
          <GrBriefcase />
        </IconContext.Provider>
        Experience
      </ExperienceButton>
      <EducationButton>
        <IconContext.Provider value={{ size: "2em" }}>
          {" "}
          <FaGraduationCap />
        </IconContext.Provider>
        Education
      </EducationButton>
      <HobbiesButton>
        <IconContext.Provider value={{ size: "2em" }}>
          <FaBreadSlice />
        </IconContext.Provider>
        Hobbies
      </HobbiesButton>
      <LinkedinButton>
        <IconContext.Provider value={{ size: "2em" }}><FaLinkedin /></IconContext.Provider>
        LinkedIn
      </LinkedinButton>
      <GithubButton>
        <IconContext.Provider value={{ size: "2em" }}><FaGithub /></IconContext.Provider>
        Github
      </GithubButton>
      <ProjectsButton>
        <IconContext.Provider value={{ size: "2em" }}><FaCode /></IconContext.Provider>
        Projects
      </ProjectsButton>
      <ContactButton>
        <IconContext.Provider value={{ size: "2em" }}><GrContact /></IconContext.Provider>
        Contact
      </ContactButton>
      <JobInfo>
        <StyledName>Taryn Martin</StyledName>
        <StyledJobTitle>Front End Software Engineer</StyledJobTitle>
      </JobInfo>
    </StyledApp>
  );
}

export default App;
