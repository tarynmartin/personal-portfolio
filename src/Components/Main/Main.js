import React from 'react';
import {StyledMain, Button, AboutLink, AboutLogo, ProjectsLink, ProjectLogo, EducationLink, EduLogo, ExperienceLink, ExpLogo, HobbiesLink, HobbyLogo, ContactLink, ContactLogo, LinkedinLink, LinkedinLogo, GithubLink, GithubLogo } from '../App/Styles.js';

function Main() {
  return (
    <StyledMain>
      <AboutLink to="/about">
        <Button>
          <AboutLogo className="icon" />
        </Button>
      </AboutLink>
      <ExperienceLink to="/experience">
        <Button>
          <ExpLogo className="icon" />
        </Button>
      </ExperienceLink>
      <EducationLink to="/education">
        <Button>
          <EduLogo className="icon" />
        </Button>
      </EducationLink>
      <HobbiesLink to="/hobbies">
        <Button>
          <HobbyLogo className="icon" />
        </Button>
      </HobbiesLink>
      <LinkedinLink
        to={"https://www.linkedin.com/in/tarynmartin919/"}
        target="_blank"
        onClick={(event) => {
          event.preventDefault();
          window.open("https://www.linkedin.com/in/tarynmartin919/");
        }}
      >
        <Button>
          <LinkedinLogo className="icon" />
        </Button>
      </LinkedinLink>
      <GithubLink
        to={"https://github.com/tarynmartin"}
        target="_blank"
        onClick={(event) => {
          event.preventDefault();
          window.open("https://github.com/tarynmartin");
        }}
      >
        <Button>
          <GithubLogo className="icon" />
        </Button>
      </GithubLink>
      <ProjectsLink to='/projects'>
        <Button>
          <ProjectLogo className="icon" />
        </Button>
      </ProjectsLink>
      <ContactLink to='/contact'>
        <Button>
          <ContactLogo className="icon" />
        </Button>
      </ContactLink>
    </StyledMain>
  );
}

export default Main;