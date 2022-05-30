import React from 'react';
import PropTypes from 'prop-types';
import Server from 'gas-client';

import CardMenu from './CardMenu';

const { serverFunctions } = new Server();

async function highlightAnnotationInText(
  startOffset,
  endOffset,
  parIndex,
  original
) {
  try {
    const response = serverFunctions.highlightWord(
      startOffset,
      endOffset,
      parIndex,
      original
    );
    return response;
  } catch (err) {
    alert('Villa kom upp í villuljómun!');
    console.error(err);
  } finally {
    console.log('Ljómun á villu lokið');
  }
}

class AnnotationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: true,
      active: false,
      hover: false,
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.removeAnnotationCard = this.removeAnnotationCard.bind(this);
  }

  removeAnnotationCard = () => {
    this.setState({ showCard: false });
    this.forceUpdate();
  };

  toggleClassName = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    // this.forceUpdate();
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  // TO BE IMPLEMENTED
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Clicking annotation:', this.props.text);
    console.log(this.state);
    this.toggleClassName();
    setTimeout(() => {
      this.toggleClassName();
    }, 1000);
    if (this.state.hover === false) {
      this.setState({ hover: true });
    }
    console.log(this.state);
    highlightAnnotationInText(
      this.props.start_char,
      this.props.end_char,
      this.props.parIndex,
      this.props.original
    );
    // this.removeAnnotationCard();
  };

  render() {
    let styling;
    if (this.state.hover) {
      styling = {
        opacity: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.201)',
        borderColor: 'darkgray',
        onclick,
      };
    } else {
      styling = {
        opacity: 1,
        backgroundColor: 'white',
        onclick,
      };
    }

    const card = this.state.showCard ? (
      <div
        className={
          this.state.active
            ? 'annotation block animated-background'
            : 'annotation block'
        }
        style={styling}
        onClick={this.handleClick}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="ruleArea">
          <span>Möguleg villa fundin:</span>
        </div>
        <div className="errorArea">
          {/* <span>{this.props.errorSent}</span> */}
          <div className="errText">
            <span> {this.props.text} </span>
          </div>
          {this.props.detail != null && (
            <div className="errDetail">
              <span>{this.props.detail}</span>
            </div>
          )}
        </div>
        <div className="annCardMenu">
          <div>
            <CardMenu
              removeAnnotationCard={this.removeAnnotationCard}
              annData={this.props}
            ></CardMenu>
          </div>
        </div>
      </div>
    ) : (
      ''
    );

    if (this.props !== '') {
      return card;
    }
    return '';
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
  parIndex: PropTypes.number,
  original: PropTypes.string,
};

export default AnnotationCard;
