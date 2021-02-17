import React from 'react'
import { StyledContentParagraph, StyledContentHeader, StyledBackground, StyledResumeLogo, StyledResumeTitle, StyledResumeLink, ResumeBlock} from "./styles.js"
import pdf from "../../assets/site-resume.pdf";

function About() {
  return (
    <>
      <StyledBackground>
        <StyledContentHeader>About Me</StyledContentHeader>
        <StyledContentParagraph>
          Hi! I'm glad you're here and are excited to learn more about me!
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          I grew up in Plymouth, Massachusetts so learned a lot about Pilgrims and the Red Sox in my childhood. In 2005 I went to Juniata College in Pennsylvania for my Bachelor's degree in Psychology. When I graduated in 2009, I went to the University of Massachusetts - Amherst for my Master's in Education in school (guidance) counseling.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          When I finished my Master's degree in 2012, I then went to Hunan, China to volunteer teach English for high school students. After that, I went to Shanghai for a few months to teach also. I loved working in China! It was such a great experience and taught me a lot about grit, confidence, and my ability to succeed when thrown into the deep end (I only knew how to say hello in Mandarin when I got there).
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          When I returned to the US, I worked a few part time jobs while looking for a full time position. I started a job teaching young adults with high functioning Autism life skills (cooking, grocery shopping, household cleaning, etc.). I was eventually promoted and helped students that had been in the program for a while to transition out to completely living on their own.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          In 2017 I decided to make a life change and moved to Denver, CO. This was a huge change since I knew no one in Denver and didn't have a job lined up. I quickly got a position working at a Brazilian Jiu Jitsu gym working the front desk and selling memberships to clients. I was promoted several times until I was in charge of 3 staff and ran daily operations for the gym.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          In 2020 I finally realized that what I wanted to do was something that was technical and creative and found my way to front end programming. I enrolled in the Turing School of Software & Design's front end program. For seven months, I was working 60-80 hour weeks learning Javascript, React, Redux, HTML, CSS, SASS/SCSS, responsive design, accessibility, and how the web works.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          After all of this, I'm excited to get my start in programming and take what I've learned and expand it. My next steps in learning is React Native, Node.js, and learning about/creating a back end.
        </StyledContentParagraph>
        <br />
        <StyledContentParagraph>
          And I do have outside hobbies! I love to crochet, cross stitch, and bake (especially bread). I have a cat named Bean who is a wild one and a great boyfriend. I also love to travel and can't wait for the day I can travel again!
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
