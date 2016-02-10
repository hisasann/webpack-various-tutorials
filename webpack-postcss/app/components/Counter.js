import React, { Component } from 'react';

import styles from './Counter.module.css';

class CountLine extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };
  }

  componentWillUnmount() {
  }

  render() {
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