import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <main>
        <div>
          <h1 data-testid="name-card">{ cardName }</h1>
        </div>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div>
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <h2 data-testid="attr1-card">{ cardAttr1 }</h2>
        </div>
        <div>
          <h2 data-testid="attr2-card">{ cardAttr2 }</h2>
        </div>
        <div>
          <h2 data-testid="attr3-card">{ cardAttr3 }</h2>
        </div>
        <div>
          <h3 data-testid="rare-card">{ cardRare }</h3>
        </div>
        <div>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : undefined }
        </div>
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
