import './App.css';
import {StyledApp, AboutButton, AboutLogo, ProjectsButton, ProjectLogo, EducationButton, EduLogo, ExperienceButton, ExpLogo, HobbiesButton, HobbyLogo, ContactButton, ContactLogo, LinkedinButton, LinkedinLogo, GithubButton, GithubLogo, JobInfo, StyledName, StyledJobTitle } from './Styles.js';

function App() {
  return (
    <StyledApp>
      <AboutButton>
        <AboutLogo className="icon" />
      </AboutButton>
      <ExperienceButton>
        <ExpLogo className="icon" />
      </ExperienceButton>
      <EducationButton>
        <EduLogo className="icon" />
      </EducationButton>
      <HobbiesButton>
        <HobbyLogo className="icon" />
      </HobbiesButton>
      <LinkedinButton>
        <LinkedinLogo className="icon" />
      </LinkedinButton>
      <GithubButton>
        <GithubLogo className="icon" />
      </GithubButton>
      <ProjectsButton>
        <ProjectLogo className="icon" />
      </ProjectsButton>
      <ContactButton>
        <ContactLogo className="icon" />
      </ContactButton>
      <JobInfo>
        <StyledName>Taryn Martin</StyledName>
        <StyledJobTitle>Front End Software Engineer</StyledJobTitle>
      </JobInfo>
    </StyledApp>
  );
}

export default App;
