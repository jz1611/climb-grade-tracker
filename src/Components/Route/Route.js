import React from 'react';
import axios from 'axios';

import './Route.css'

class Route extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: {}
    }

    this.getRouteByID = this.getRouteByID.bind(this);
  }

  getRouteByID(id) {
    axios
      .get(`/api/route/${id}`)
      .then(res => {
        this.setState({
          route: res.data
        });
      }).catch((err) => console.log(err));
  }

  render() {
    this.getRouteByID(this.props.selectedID);
    const { route } = this.state;
    return <div className="route-details">
      <h1>{ route.nickname }</h1>
      <h2>Difficulty:&nbsp;{ route.difficulty }</h2>
      <h2>Attempts:&nbsp;{ route.attempts }</h2>
      <h2>Completions:&nbsp;{ route.completes }</h2>
      <h2>Record:&nbsp;{ route.record }</h2>
    </div>
  }
}

export default Route;