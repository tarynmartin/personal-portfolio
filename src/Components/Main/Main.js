import React from 'react';
import {StyledMain, Button, AboutLink, AboutLogo, ProjectsLink, ProjectLogo, EducationLink, EduLogo, ExperienceLink, ExpLogo, HobbiesLink, HobbyLogo, ContactLink, ContactLogo, LinkedinLink, LinkedinLogo, GithubLink, GithubLogo } from '../App/Styles.js';

function Main() {
  return (
    <StyledMain>
      <AboutLink to="/about">
        <Button>
          <span>
            <AboutLogo className="icon"></AboutLogo>
          </span>
        </Button>
      </AboutLink>
      <ExperienceLink to="/experience">
        <Button>
          <span>
            <ExpLogo className="icon" />
          </span>
        </Button>
      </ExperienceLink>
      <EducationLink to="/education">
        <Button>
          <span>
            <EduLogo className="icon" />
          </span>
        </Button>
      </EducationLink>
      <HobbiesLink to="/hobbies">
        <Button>
          <span>
            <HobbyLogo className="icon" />
          </span>
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
          <span>
            <LinkedinLogo className="icon" />
          </span>
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
          <span>
            <GithubLogo className="icon" />
          </span>
        </Button>
      </GithubLink>
      <ProjectsLink to="/projects">
        <Button>
          <span>
            <ProjectLogo className="icon" />
          </span>
        </Button>
      </ProjectsLink>
      <ContactLink to="/contact">
        <Button>
          <span>
            <ContactLogo className="icon" />
          </span>
        </Button>
      </ContactLink>
    </StyledMain>
  );
}

export default Main;