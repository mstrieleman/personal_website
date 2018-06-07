import React, { Component } from 'react';

export default class Boiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boiler: 'success!'
    };
  }

  render() {
    const test = this.state.boiler;
    return (
      <div>
        {test}
      </div>
    );
  }
}
