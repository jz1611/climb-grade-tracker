import React from 'react';

import './IncrementButton.css';

class IncrementButton extends React.Component {
  render() {
    return <button
      className="incrementor"
      name={this.props.name}
      onClick={e => this.props.incrementValue(e.target.name)}>
        +
      </button>
  }
}

export default IncrementButton