import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { Button, ListGroup } from 'react-bootstrap';
import LoadingButton from './LoadingButton';

const About = () => (
  <div className="mideind-header">
    <a
      rel="noreferrer"
      target="_blank"
      href="https://yfirlestur.is/about"
      className="mideind-header-headline"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex - start',
        }}
      >
        <span>Yfirlestur</span>
        <span className="mideind-header-slogan" data-t="privacyNoteSlogan">
          fyrir íslensku
        </span>
      </div>
    </a>
  </div>
);

export const FooterMenu = () => (
  <div>
    <div className="button-container">
      <LoadingButton>Lesa yfir allt skjalið</LoadingButton>
    </div>
    <div className="block" id="mideindFooter">
      <span style="padding-right:3px">Keyrt með</span>
      <a href="https://greynir.is/about" target="_blank" rel="noreferrer">
        Greyni
      </a>
      <span style="color: gray; margin-left: auto;">Hafa samband</span>
    </div>
  </div>
);

export default About;
