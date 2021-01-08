import React from 'react';
import { Link } from 'react-router-dom';
import {AboutButton, AboutLogo, ProjectsButton, ProjectLogo, EducationButton, EduLogo, ExperienceButton, ExpLogo, HobbiesButton, HobbyLogo, ContactButton, ContactLogo, LinkedinButton, LinkedinLogo, GithubButton, GithubLogo, JobInfo, StyledName, StyledJobTitle } from '../App/Styles.js';

function LandingPage() {
  return (
    <>
      <AboutButton>
        <Link to="/about">
          <AboutLogo className="icon" />
        </Link>
      </AboutButton>
      <ExperienceButton>
        <Link to="/experience">
          <ExpLogo className="icon" />
        </Link>
      </ExperienceButton>
      <EducationButton>
        <Link to="/education">
          <EduLogo className="icon" />
        </Link>
      </EducationButton>
      <HobbiesButton>
        <Link to="/hobbies">
          <HobbyLogo className="icon" />
        </Link>
      </HobbiesButton>
      <LinkedinButton>
        <Link
          to={"https://www.linkedin.com/in/tarynmartin919/"}
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/tarynmartin919/");
          }}
        >
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
          }}
        >
          <GithubLogo className="icon" />
        </Link>
      </GithubButton>
      <ProjectsButton>
        <Link to="/projects">
          <ProjectLogo className="icon" />
        </Link>
      </ProjectsButton>
      <ContactButton>
        <Link to="/contact">
          <ContactLogo className="icon" />
        </Link>
      </ContactButton>
      <JobInfo>
        <StyledName>Taryn Martin</StyledName>
        <StyledJobTitle>Front End Software Engineer</StyledJobTitle>
      </JobInfo>
    </>
  );
}

export default LandingPage;