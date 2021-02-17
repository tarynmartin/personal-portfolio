import styled from "styled-components";
import { Document } from "@styled-icons/ionicons-solid/Document"

export const StyledContentParagraph = styled.p`
  margin: 0 2em;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  color: black;
`;

export const StyledBackground = styled.div`
  grid-row: 1;
  background-color: white;
  width: 85%;
  height: 90%;
  box-sizing: border-box;
  margin: 3em auto;
  padding: 1em;
  overflow-y: scroll;
  border-radius: 10px;
`

export const StyledContentHeader = styled.h1`
  font-family: "Rakkas", cursive;
  font-size: 2.5em;
  color: teal;
  grid-column: 1 / span 2;
  text-align: center;
`

export const ResumeBlock = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-rows: repeat(2, auto);
  margin: 1.5em;

  &:hover {
    background-color: white;
    width: 25%;
    margin: 1.5em auto;
    border-radius: 10px;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover .icon,
  &:hover .resume {
    color: teal;
  }
`

export const StyledResumeLogo = styled(Document)`
  color: white;
  height: 3em;
`;

export const StyledResumeTitle = styled.h2`
  grid-row: 2;
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  margin: 0;
  text-align: right;
`;

export const StyledResumeLink = styled.a`
  display: flex;
  justify-content: center;
  grid-row: 1;
  align-items: center;
  text-decoration: none;
  font-size: 1.3em;
`
