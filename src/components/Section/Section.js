import Statistics from 'components/Ststistics/Statistics';

import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <div>
        <Statistics statDat={this.props} />
      </div>
    );
  }
}
