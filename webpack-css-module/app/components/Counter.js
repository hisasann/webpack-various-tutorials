import React, { Component } from 'react';

import styles from './Counter.css';

class CountLine extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.props.color);
    return (
      <h1 className={this.props.color}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export default class Counter extends Component {
  render() {
    return (
      <div>
        <CountLine increment={1} color={styles.pink} />
        <CountLine increment={5} color={styles.darkred} />
      </div>
    );
  }
}