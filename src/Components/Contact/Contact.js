import React, {useState} from "react";
import { StyledContentHeader, StyledBackground } from "./styles.js"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <StyledBackground>
      <StyledContentHeader>Contact Me</StyledContentHeader>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" aria-label="Enter your name" placeholder="Joe Smith" onChange={(e) => setName(e.target.value)} required/>
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" aria-label="Enter your email" placeholder="joe.smith@google.com" onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="message">Message:</label>
        <input id="message" type="text" aria-label="Why are you reaching out" placeholder="I'd love to work with you on a project!" onChange={(e) => setMessage(e.target.value)}/>
        <input type="submit" value="submit" />
      </form>
    </StyledBackground>
  );
}

export default Contact;
