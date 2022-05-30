import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Server from 'gas-client';

const { serverFunctions } = new Server();

async function replaceWordInDocument(
  correct,
  startOffset,
  endOffset,
  parIndex,
  original
) {
  try {
    const response = await serverFunctions.replaceWord(
      correct,
      startOffset,
      endOffset,
      parIndex,
      original
    );
    console.log(response);
    return response;
  } catch (err) {
    alert('Villa kom upp í útskiptingu!');
    console.error(err);
  } finally {
    console.log('Útskiptifalli lokið');
  }
}

class CardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.startOffset = this.props.annData.start_char;
    this.endOffset = this.props.annData.end_char;
    this.parIndex = this.props.annData.parIndex;
    this.correct = this.props.annData.suggest;
    this.original = this.props.annData.original;
  }

  handleAccept(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.props);
    replaceWordInDocument(
      this.correct,
      this.startOffset,
      this.endOffset,
      this.parIndex,
      this.original
    );
    console.log(this.props);
    this.props.removeAnnotationCard();
    console.log('You clicked the "accept" card menu button.');
  }

  handleDecline(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.removeAnnotationCard();
    console.log('You clicked the "Decline" a card menu button.');
  }

  render() {
    return (
      <div>
        <Button variant="outline-primary" onClick={this.handleAccept}>
          Samþykkja
        </Button>

        <Button variant="outline-danger" onClick={this.handleDecline}>
          Hafna
        </Button>
      </div>
    );
  }
}

CardMenu.proptypes = {
  removeAnnotationCard: PropTypes.function,
  annData: PropTypes.object,
};

export default CardMenu;
