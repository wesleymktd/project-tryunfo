import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const number210 = 210;
    const number90 = 90;
    const zero = 0;
    const sumCards = (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3));
    const sumValue210 = sumCards > number210;
    const sum90One = Number(cardAttr1) > number90;
    const sum90Two = Number(cardAttr2) > number90;
    const sum90Three = Number(cardAttr3) > number90;
    const sum90All = (sum90One || sum90Two || sum90Three);
    const validateNegative1 = cardAttr1 < zero;
    const validateNegative2 = cardAttr2 < zero;
    const validateNegative3 = cardAttr3 < zero;
    const sumNegative = validateNegative1 || validateNegative2 || validateNegative3;
    const sumNumber = sum90All || sumValue210 || sumNegative;
    const isValedString = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0
    || cardRare.length === 0;
    const validateAll = sumNumber || isValedString;
    this.setState({
      isSaveButtonDisabled: validateAll,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {
      this.validationButton();
    });
  };

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }

        />
      </div>
    );
  }
}

export default App;
