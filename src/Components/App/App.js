import './App.css';
import {StyledApp, AboutButton, AboutLogo, ProjectsButton, ProjectLogo, EducationButton, EduLogo, ExperienceButton, ExpLogo, HobbiesButton, HobbyLogo, ContactButton, ContactLogo, LinkedinButton, LinkedinLogo, GithubButton, GithubLogo, JobInfo, StyledName, StyledJobTitle } from './Styles.js';

function App() {
  return (
    <StyledApp>
      <AboutButton>
        <AboutLogo />
      </AboutButton>
      <ExperienceButton>
        <ExpLogo />
      </ExperienceButton>
      <EducationButton>
        <EduLogo />
      </EducationButton>
      <HobbiesButton>
        <HobbyLogo />
      </HobbiesButton>
      <LinkedinButton>
        <LinkedinLogo />
      </LinkedinButton>
      <GithubButton>
        <GithubLogo />
      </GithubButton>
      <ProjectsButton>
        <ProjectLogo />
      </ProjectsButton>
      <ContactButton>
        <ContactLogo />
      </ContactButton>
      <JobInfo>
        <StyledName>Taryn Martin</StyledName>
        <StyledJobTitle>Front End Software Engineer</StyledJobTitle>
      </JobInfo>
    </StyledApp>
  );
}

export default App;
