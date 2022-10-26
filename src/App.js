import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardTrunfo: false,
    };
  }

  render() {
    const { cardTrunfo } = this.state;
    return (
      <div>
        <Form />
        <Card cardTrunfo={ cardTrunfo } />
      </div>
    );
  }
}

export default App;
