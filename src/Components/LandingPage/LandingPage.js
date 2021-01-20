import React from 'react';
import {Button, StyledLandingLink, StyledTitle } from '../App/Styles.js';

function LandingPage() {
  return (
    <>
        <StyledLandingLink to="/main">
          <Button className='landing-title'>
            <StyledTitle>
              <h1 className='name'>Taryn Martin</h1>
              <h2 className='title'>Front End Software Engineer</h2>
            </StyledTitle>
          </Button>
        </StyledLandingLink>
    </>
  );
}

export default LandingPage;