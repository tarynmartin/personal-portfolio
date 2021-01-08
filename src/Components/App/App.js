import './App.css';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {StyledApp, AboutButton, AboutLogo, ProjectsButton, ProjectLogo, EducationButton, EduLogo, ExperienceButton, ExpLogo, HobbiesButton, HobbyLogo, ContactButton, ContactLogo, LinkedinButton, LinkedinLogo, GithubButton, GithubLogo, JobInfo, StyledName, StyledJobTitle } from './Styles.js';

function App() {
  const history = createBrowserHistory();
  return (
    <StyledApp>
      <Router history={history}>
        <Route path="/">
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
            <Link
              to={"https://www.linkedin.com/in/tarynmartin919/"}
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.linkedin.com/in/tarynmartin919/");
              }}>
                <LinkedinLogo className="icon" />
            </Link>
          </LinkedinButton>
          <GithubButton>
            <Link
              to={"https://github.com/tarynmartin"}
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://github.com/tarynmartin");
              }}>
                <GithubLogo className="icon" />
              </Link>
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
        </Route>
      </Router>
    </StyledApp>
  );
}

export default App;


{/* <Route path="https://www.linkedin.com/in/tarynmartin919/">
  <LinkedinButton>
    <LinkedinLogo className="icon" />
  </LinkedinButton>
</Route>; */}

// onClick={(event) => {
//               console.log('click')
//               window.open(
//                 this.makeHref("https://www.linkedin.com/in/tarynmartin919/")
//               );
//             }}