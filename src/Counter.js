import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onTick: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  tick(event) {
    this.props.onTick();
  }

  reset() {
    this.props.onReset();
  }

  render() {
    return(
      <div>
        <div onClick={this.tick.bind(this)}>
          Count: {this.props.value}
        </div>
        <div onClick={this.reset.bind(this)}>
          Reset
        </div>
      </div>
    )
  }
}
