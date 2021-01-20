import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from '../Main/Main.js';
import LandingPage from '../LandingPage/LandingPage.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Education from '../Education/Education.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Hobbies from '../Hobbies/Hobbies.js';
import {StyledApp} from './Styles.js';

function App() {
  const history = createBrowserHistory();
  return (
    <StyledApp>
      <Router history={history}>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path='/experience'>
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/Hobbies">
          <Hobbies />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Router>
    </StyledApp>
  );
}

export default App;