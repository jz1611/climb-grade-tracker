import React from 'react';

import './RouteList.css';

class RouteList extends React.Component {
  render() {
    const { routes } = this.props;
    const mappedRoutes = routes.map((route, index) => {
      return <div key={route.id} className="route" onClick={() => this.props.getRouteByID(index)}>
        <button onClick={() => this.props.removeRoute(route.id)}>X</button>
        <div>{route.nickname}</div>
        <div>Difficulty:&nbsp;{route.difficulty}</div>
      </div>
    })

    return <div className="routes-container">
      <h1>Route List</h1>
      {mappedRoutes}
      </div>
  }
}

export default RouteList;