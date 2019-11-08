import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        Hello, my name is Jason Astwood I am a Junior Developer who is learning
        software development. I want to be able to create cool looking websites
        that are interesting. Also being able to help compaines with the skills
        that I have. I just made this site to show links to other websites that
        I find extremely interesting and that inspire me and want me become a
        better Developer.
        <p>THANK YOU!!!</p>
      </Content>
    </div>
  );
}

export default AboutPage;
