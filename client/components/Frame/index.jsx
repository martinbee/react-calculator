import React from 'react';

import Screen from '../Screen';
import Button from '../Button';
import buttonRowConfig from './data/buttonRowConfig';

export default class Frame extends React.Component {
  state = {
    equation: '',
    answer: ''
  };

  handleClick = (event) => {
    const { value } = event.target;
    const { equation } = this.state;

    switch (value) {
      case '=': {
        const answer = eval(equation).toString();

        this.setState({ answer, equation: '' });
        break;
      }
      case 'Cls': {
        this.setState({ equation: '', answer: '' });
        break;
      }
      default: {
        console.log('value:', value, 'equation:', equation);
        this.setState({ equation: equation + value})
        break;
      }
    }
  }

  renderButtons(rowConfig) {
    return rowConfig.map(buttonConfig => (
      <Button key={buttonConfig.label} {...buttonConfig} handleClick={this.handleClick} />
    ));
  }

  renderButtonRows() {
    return buttonRowConfig.map(({ id, rowConfig }) => (
      <div key={id} className="btn-row row">
        {this.renderButtons(rowConfig)}
      </div>
    ));
  }

  render() {
    const { equation, answer } = this.state;

    return (
      <div className="row">
        <div className="frame col-xs-8 col-xs-offset-2">
          <div className="calculator-title row">
            R_N Calculator
          </div>
          <Screen equation={equation} answer={answer}/>
          {this.renderButtonRows()}
        </div>
      </div>
    );
  }
}
