import React from 'react';
import PropTypes from 'prop-types';
import CardMenu from './CardMenu';
import referenceAnnotations from './referenceAnnotations';

class AnnotationCard extends React.Component {
  render() {
    const styling = {
      opacity: 1,
      backgroundColor: 'white',
    };
    return (
      <div className="annotation block" style={styling}>
        <div className="ruleArea">
          <span>Möguleg villa fundin:</span>
        </div>
        <div className="errorArea">
          {/* <span>{this.props.errorSent}</span> */}
          <span> {this.props.annText} </span>
        </div>
        <div className="annCardMenu">
          <div>
            <CardMenu></CardMenu>
          </div>
        </div>
      </div>
    );
  }
}

AnnotationCard.propTypes = {
  end_char: PropTypes.number,
  end: PropTypes.number,
  nonce: PropTypes.any,
  code: PropTypes.string,
  detail: PropTypes.any,
  token: PropTypes.string,
  start_char: PropTypes.number,
  sent: PropTypes.string,
  start: PropTypes.number,
  text: PropTypes.string,
  suggest: PropTypes.string,
};

let props = {
  errorCode: 'Z001',
  errorSent:
    'betra væri að setja stórfelldar afléttingar í kælir fram yfir Páska en búist er við umtalsverðum fólksferðum innanlands yfir helgina.',
  annText: 'Orð á að byrja á lágstaf: Páska',
  annDetail: null,
  suggestion: 'páska',
  start_char: 175.0,
  end_char: 180.0,
};

const Annotations = () => (
  <div id="annotations">
    {referenceAnnotations.map((annotation, index) => (
      <AnnotationCard key={index} {...annotation}></AnnotationCard>
    ))}
  </div>
);

export default Annotations;
