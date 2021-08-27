import React, {useState} from 'react';
//import headshot from '../../assets/taryn-headshot.jpg';
import About from '../About/About.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import {StyledMain, Button, StyledLinks, StyledMainContent, AboutButton, AboutLogo, ProjectsButton, ProjectLogo, ContactButton, ContactLogo, LinkedinLink, LinkedinLogo, GithubLink, GithubLogo } from '../App/Styles.js';

function Main() {
  const [button, setButton] = useState('');

  return (
    <StyledMain>
      <AboutButton onClick={() => setButton('about')}>
        <span>
          <AboutLogo className="icon" />
        </span>
      </AboutButton>
      <ProjectsButton onClick={() => setButton('project')}>
        <span>
          <ProjectLogo className="icon" />
        </span>
      </ProjectsButton>
      <ContactButton onClick={() => setButton('contact')}>
        <span>
          <ContactLogo className="icon" />
        </span>
      </ContactButton>
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
      <StyledMainContent>
        {button === '' &&
          'Please click on a button for more information'
        }
        {button === 'about' &&
          <About />
        }
        {button === 'project' &&
          <Projects />
        }
        {button === 'contact' &&
          <Contact />
        }
      </StyledMainContent>
    </StyledMain>
  );
}

export default Main;
