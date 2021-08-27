import React from 'react'
import { StyledContentParagraph, StyledContentHeader, StyledBackground, StyledResumeLogo, StyledResumeTitle, StyledResumeLink, ResumeBlock} from "./styles.js"
import pdf from "../../assets/site-resume.pdf";

function About() {
  return (
    <>
      <StyledBackground>
        <StyledContentHeader>About Me</StyledContentHeader>
        <StyledContentParagraph>
          Hi! I'm glad you're here and am excited to tell you a bit about myself!
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          I grew up in Massachusetts and have a BS in Psychology from Juniata College and an M.Ed from the University of Massachusetts-Amherst in School Guidance counseling. After college, I lived in China for a year and a half teaching English. It was a great experience teaching me a lot about self confidence and working through difficult situations.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          When I returned to the US, I started a job teaching young adults with high functioning Autism life skills (cooking, grocery shopping, household cleaning, etc.). I was eventually promoted and helped students that had been in the program for a while to transition out to completely living on their own.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          In 2017 I decided to make a life change and moved to Denver, CO. I quickly got a position working at a Brazilian Jiu Jitsu gym working the front desk and selling memberships to clients. I was promoted several times until I was in charge of 3 staff and ran daily operations for the gym.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          In 2020 I enrolled in the Turing School of Software & Design's front end program. For seven months, I was working 60-80 hour weeks learning Javascript, React, Redux, HTML, CSS, SASS/SCSS, responsive design, accessibility, and how the web works.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          After finishing at Turing, I worked part time for them as a Student Support Specialist working one on one with students who were struggling with concepts. I also was a freelance web developer working in Vue, Typescript, and Vuetify. In June 2021, I started working with Fairwinds Ops as a Junior Front End Developer, working mainly in Vue, Vuex, Bootstrap Vue, and SCSS.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          Outside of programming, I love to crochet, cross stitch, and bake (especially bread), and spend time with my partner. I have a cat named Bean who is weird and hilarious. I also love to travel and can't wait for the day I can travel again!
        </StyledContentParagraph>
      </StyledBackground>

        <ResumeBlock>
          <StyledResumeLink href={pdf} rel="noreferrer" target="_blank"><StyledResumeLogo className="icon"></StyledResumeLogo></StyledResumeLink>
          <StyledResumeTitle className="resume">Resume</StyledResumeTitle>
        </ResumeBlock>
      </>
  )
}

export default About;
