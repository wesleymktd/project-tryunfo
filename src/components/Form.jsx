import React, { Component } from 'react';

class Form extends Component {
  render() {
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
            />
            Super Trybe Trunfo
          </label>
        </div>
        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </main>
    );
  }
}

export default Form;
