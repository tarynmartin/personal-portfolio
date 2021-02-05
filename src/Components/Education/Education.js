import React from "react";
import {StyledEducation, StyledTitle, StyledEduParagraph, StyledBackground} from './styles.js';

function Education() {
  return (
    <StyledEducation>
      <StyledTitle>Education</StyledTitle>
      <StyledBackground>
        <StyledEduParagraph>
          From 2005 to 2009, I went to Juniata College for my degree in
          Psychology. I had always been interested in how people make choices
          and wanted to learn more about the scientific reasons we make the
          choices we do (as we understand them at this point).
        </StyledEduParagraph>
        <br />
        <StyledEduParagraph>
          After undergrad, I went to the University of Massachusetts at Amherst
          for a Master's in Education in school (guidance) counseling. I wanted
          to help students feel more comfortable in school and help them figure
          out what interests they wanted to pursue after high school, whether
          that was going straight into the work force or going for further
          education
        </StyledEduParagraph>
        <br />
        <StyledEduParagraph>
          After some breaks, in 2020 I decided to return to education to learn
          how to be a front end developer. I went to the Turing School of
          Software & Design in their front end program. I spent 7 months
          learning front end design principles, Javascript, React, Redux, HTML,
          SASS/SCSS, and CSS. I loved being able to create something on my
          screen and seeing changes almost immediately. I also loved planning
          out a project, code architecture, and working with my team to deepen
          my understanding of code.
        </StyledEduParagraph>
      </StyledBackground>
    </StyledEducation>
  );
}

export default Education;
