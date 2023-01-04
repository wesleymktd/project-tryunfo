import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// pegar meu array percorrer ele com alguma hoj ver se o card trunfo
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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: [],
  };

  SaveCard = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const cardState = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((stateAtual) => ({
      onSaveButtonClick: [...stateAtual.onSaveButtonClick, cardState], // vai manter o que estava no meu estado e adicionar um novo objeto
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cardRare: 'normal',
    }));
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
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

  cardDelet = (name) => {
    const { onSaveButtonClick } = this.state;
    const filter = onSaveButtonClick.filter((card) => card.cardName !== name);
    this.setState(() => ({
      onSaveButtonClick: filter,
      hasTrunfo: filter.some((card) => card.cardTrunfo === true),
    }));
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validationButton();
    });
  };

  render() {
    const { onSaveButtonClick } = this.state;
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.SaveCard }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }

        />
        { onSaveButtonClick.map((elem, index) => (
          <div key={ index }>
            <Card
              cardName={ elem.cardName }
              cardDescription={ elem.cardDescription }
              cardAttr1={ elem.cardAttr1 }
              cardAttr2={ elem.cardAttr2 }
              cardAttr3={ elem.cardAttr3 }
              cardImage={ elem.cardImage }
              cardRare={ elem.cardRare }
              cardTrunfo={ elem.cardTrunfo }
            />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ () => this.cardDelet(elem.cardName) }
            >
              Excluir
            </button>
          </div>
        )) }
      </div>
    );
  }
}

export default App;
