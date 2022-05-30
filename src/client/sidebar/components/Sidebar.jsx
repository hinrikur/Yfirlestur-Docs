import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

const SidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex - start',
};

const About = () => (
  <div className="mideind-header">
    <a
      rel="noreferrer"
      target="_blank"
      href="https://yfirlestur.is/about"
      className="mideind-header-headline"
    >
      <div style={SidebarStyle}>
        <span>Yfirlestur</span>
        <span className="mideind-header-slogan" data-t="privacyNoteSlogan">
          fyrir íslensku
        </span>
      </div>
    </a>
  </div>
);

export default About;
