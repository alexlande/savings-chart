import React, { Component } from 'react';

import Chart from './chart';
import Controls from './controls';
import HighlightLabel from './highlight-label';
import calculateSavings from './calculate-savings';

const isSmallScreen = () => window.innerWidth < 900;

class App extends Component {
  constructor() {
    super();

    this.state = {
      years: 40,
      initialSavings: 0,
      annualSavings: 18000,
      interest: 0.04,
      highlighted: null,
      smallScreen: isSmallScreen()
    };

    this.setHighlighted = this.setHighlighted.bind(this);
    this.clearHighlighted = this.clearHighlighted.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        smallScreen: isSmallScreen()
      });
    });
  }

  handleUpdate({ name, value }) {
    this.setState({
      highlighted: null,
      [name]: parseFloat(value)
    });
  }

  setHighlighted(points) {
    const point = points[0];

    if (!point) {
      return;
    }

    this.setState({
      highlighted: {
        amount: point.y,
        year: point.x
      }
    });
  }

  clearHighlighted() {
    this.setState({
      highlighted: null
    });
  }

  render() {
    const data = calculateSavings({
      years: this.state.years || 0,
      initialSavings: this.state.initialSavings || 0,
      annualSavings: this.state.annualSavings || 0,
      interest: this.state.interest || 0
    });

    return (
      <div className='bg-blue'>
        <h1 className='center p2 md-p3 caps bold h4 bottomBorder bg-black'>
          Savings Calculator
        </h1>

        <div className='max-width-4 mx-auto pb3'>
          {this.state.highlighted ? (
            <HighlightLabel {...this.state.highlighted} />
          ) : (
            <HighlightLabel
              year={ data[data.length - 2].x }
              amount={ data[data.length - 2].y }
            />
          )}

          <Chart
            clearHighlighted={this.clearHighlighted}
            data={data}
            smallScreen={this.state.smallScreen}
            setHighlighted={this.setHighlighted}
          />
        </div>

        <Controls
          annualSavings={this.state.annualSavings}
          initialSavings={this.state.initialSavings}
          interest={this.state.interest}
          years={this.state.years}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
