import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <main>
        <div>
          <label htmlFor="name-input">
            Nome
            <input
              name="name-input"
              data-testid="name-input"
              id="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              name="description-input"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              cols="30"
              rows="10"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-input">
            Attr01
            <input
              data-testid="attr1-input"
              name="attr1-input"
              id="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-input">
            Attr02
            <input
              data-testid="attr2-input"
              name="attr2-input"
              id="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-input">
            Attr03
            <input
              data-testid="attr3-input"
              name="attr3-input"
              id="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input">
            Attr03
            <input
              data-testid="image-input"
              name="image-input"
              id="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="rare-input"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            <input
              data-testid="trunfo-input"
              name="trunfo-input"
              id="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        </div>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
