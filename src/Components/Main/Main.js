import React from 'react';
import headshot from '../../assets/taryn-headshot.jpg';
import {StyledMain, Button, AboutLink, ProjectsLink, ProjectLogo, EducationLink, EduLogo, ExperienceLink, ExpLogo, ContactLink, ContactLogo, LinkedinLink, LinkedinLogo, GithubLink, GithubLogo, StyledHeadshot, StyledImgDiv } from '../App/Styles.js';

function Main() {
  return (
    <StyledMain>
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
      <AboutLink to="/about">
        <StyledImgDiv>
          <StyledHeadshot
            src={headshot}
            alt="headshot of Taryn Martin"
          ></StyledHeadshot>
        </StyledImgDiv>
      </AboutLink>
    </StyledMain>
  );
}

export default Main;