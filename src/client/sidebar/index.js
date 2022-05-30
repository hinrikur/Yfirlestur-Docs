import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/Sidebar';
import FooterMenu from './components/FooterMenu';
import Annotations from './components/Annotations';

import './styles.css';

ReactDOM.render(<About />, document.getElementById('index'));
ReactDOM.render(
  <Annotations />,
  document.getElementById('annotationContainer')
);
ReactDOM.render(<FooterMenu />, document.getElementById('menuBlock'));
