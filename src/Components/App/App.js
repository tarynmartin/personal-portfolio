import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from '../Main/Main.js';
import LandingPage from '../LandingPage/LandingPage.js';
import {StyledApp} from './Styles.js';

function App() {
  const history = createBrowserHistory();
  return (
    <StyledApp>
      <Router history={history}>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Router>
    </StyledApp>
  );
}

export default App;