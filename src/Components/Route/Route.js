import React from 'react';

import './Route.css'

class Route extends React.Component {
  render() {
    const { selectedRoute } = this.props;
    return <div className="route-details">
      <h1>{ selectedRoute.nickname }</h1>
      <h2>Difficulty:&nbsp;{ selectedRoute.difficulty }</h2>
      <h2>Attempts:&nbsp;{ selectedRoute.attempts }</h2>
      <h2>Completions:&nbsp;{ selectedRoute.completes }</h2>
      <h2>Record:&nbsp;{ selectedRoute.record }</h2>
    </div>
  }
}

export default Route;