import React from 'react';
import { Spinner } from 'react-bootstrap';
// import referenceAnnotations from './referenceAnnotations';
import AnnotationCard from './AnnotationCard';

import CallServerCorrection from '../../utils/callServerCorrection';

// let props = {
//   errorCode: 'Z001',
//   errorSent:
//     'betra væri að setja stórfelldar afléttingar í kælir fram yfir Páska en búist er við umtalsverðum fólksferðum innanlands yfir helgina.',
//   annText: 'Orð á að byrja á lágstaf: Páska',
//   annDetail: null,
//   suggestion: 'páska',
//   start_char: 175.0,
//   end_char: 180.0,
// };

class Annotations extends React.Component {
  state = {
    docAnnotations: null,
  };

  componentDidMount() {
    this._asyncRequest = CallServerCorrection().then(docAnnotations => {
      console.log(docAnnotations);
      this._asyncRequest = null;
      this.setState({ docAnnotations });
    });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.docAnnotations === null) {
      return (
        <div id="spinnerContainer">
          <Spinner
            animation="border"
            role="status"
            style={{
              width: '6rem',
              height: '6rem',
              border: '1rem solid',
              borderRight: '1em solid transparent',
              animation: 'spinner-border 1s linear ease-in-out infinite',
            }}
          ></Spinner>
        </div>
      );
    }
    return (
      <div id="annotations">
        {/* <div id="spinnerContainer">
          <Spinner
            animation="border"
            role="status"
            style={{
              width: '6rem',
              height: '6rem',
              border: '1rem solid',
              borderRight: '1em solid transparent',
              animation: 'spinner-border 1s linear ease-in-out infinite',
            }}
          ></Spinner>
        </div> */}
        {this.state.docAnnotations.map((annotation, index) => (
          <AnnotationCard key={index} {...annotation}></AnnotationCard>
        ))}
      </div>
    );
  }
}

export default Annotations;
