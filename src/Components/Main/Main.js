import React from 'react';
import axios from 'axios';

import RouteList from '../RouteList/RouteList';
import RouteAdd from '../RouteAdd/RouteAdd';

import './Main.css';
import Route from '../Route/Route';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      selectedID: 1
    };

    this.postRoute = this.postRoute.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.removeRoute = this.removeRoute.bind(this);
  }

  componentDidMount() {
    this.getRoutes();
  }

  changeHandler(key, value) {
    this.setState({
      [key]:value
    });
  }

  getRoutes() {
    axios.get('/api/routes').then(res => {
      this.setState({
        routes: res.data
      });
    });
  }

  postRoute() {
    const { nickname, difficulty, attempts, completes, record } = this.state;
    axios
      .post('/api/route', { nickname, difficulty, attempts, completes, record })
      .then(res => {
        this.setState({
          routes: res.data,
          nickname: "",
          difficulty: "",
          attempts: "",
          completes: "",
          record: ""
        });
      });
  }

  removeRoute(id) {
    axios
      .delete(`/api/removeRoute/${id}`)
      .then(res => {
        this.setState({
          routes: res.data
        });
      });
  }

  render() {
    console.log(this.state.routes)
    return <div className="main-container">
      <div className="inner-container">
        <RouteList
          routes={ this.state.routes }
          removeRoute={ this.removeRoute }
          selectedID={ this.state.selectedID }
        />
        <Route
          selectedID={ this.state.selectedID }
          routes={ this.state.routes }
        />
        <RouteAdd
          postRoute={ this.postRoute }
          changeHandler={ this.changeHandler }
          nickname={ this.nickname }
          difficulty={ this.difficulty }
          attempts={ this.attempts }
          completes={ this.completes }
          record={ this.record }
        />
      </div>
    </div>
  }
}

export default Main;