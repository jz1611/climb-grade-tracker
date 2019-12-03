import React from 'react';
import IncrementButton from './IncrementButton/IncrementButton'

import './Route.css'

class Route extends React.Component {
  render() {
    const { selectedRoute } = this.props;
    if (selectedRoute === undefined) {
      return <div className="route-details">
        <h1 className="no-route">No Selected Route</h1>
      </div>
    } else {
      return <div className="route-details">
        <h1>{ selectedRoute.nickname }</h1>
        <h2>Difficulty:&nbsp;{ selectedRoute.difficulty }</h2>
        <div className="count-and-button">
          <h2>Attempts:&nbsp;{ selectedRoute.attempts }&nbsp;</h2>
          <IncrementButton
            name="attempts"
            incrementValue={this.props.incrementValue}
          />
        </div>
        <div className="count-and-button">
          <h2>Completions:&nbsp;{ selectedRoute.completes }&nbsp;</h2>
          <IncrementButton
            name="completes"
            incrementValue={this.props.incrementValue}
          />
        </div>
        <h2>Record:&nbsp;{ selectedRoute.record }</h2>
      </div>
    }
  }
}

export default Route;