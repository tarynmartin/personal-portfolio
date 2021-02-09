import React from 'react';
//import headshot from '../../assets/taryn-headshot.jpg';
import {StyledMain, Button, StyledLinks, AboutLogo, AboutLink, ProjectsLink, ProjectLogo, ContactLink, ContactLogo, LinkedinLink, LinkedinLogo, GithubLink, GithubLogo } from '../App/Styles.js';

function Main() {
  return (
    <StyledMain>
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
        <Button>
          <span>
            <AboutLogo className="icon" />
          </span>
        </Button>
      </AboutLink>
      <StyledLinks>
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
      </StyledLinks>
    </StyledMain>
  );
}

export default Main;