import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter1: 42,
      counter2: 303
    }
  }

  tick1() {
    console.log(this.refs);
    this.setState({ counter1: this.state.counter1 + 1 });
  }

  tick2() {
    this.setState({ counter2: this.state.counter2 + 1 });
  }

  reset1() {
    this.setState({ counter1: 0 });
  }

  reset2() {
    this.setState({ counter2: 0 });
  }

  swap() {
    this.setState({ counter1: this.state.counter2, counter2: this.state.counter1 });
  }

  render() {
    return (
      <div>
        <Counter
          ref="c1"
          value={this.state.counter1}
          onTick={this.tick1.bind(this)}
          onReset={this.reset1.bind(this)}
        />
        <Counter
          ref="c2"
          value={this.state.counter2}
          onTick={this.tick2.bind(this)}
          onReset={this.reset2.bind(this)}
        />
        <div onClick={this.swap.bind(this)}>
          Swap
        </div>
      </div>
    );
  }
}

export default App;
