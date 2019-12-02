import React from 'react';
import axios from 'axios';

import RouteList from '../RouteList/RouteList';
import RouteAdd from '../RouteAdd/RouteAdd';
import Route from '../Route/Route';

import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      selectedRoute: {},
      nickname: "",
      difficulty: "",
      attempts: "",
      completes: "",
      record: ""
    };

    this.postRoute = this.postRoute.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.removeRoute = this.removeRoute.bind(this);
    this.getRouteByID = this.getRouteByID.bind(this);
  }

  componentDidMount() {
    this.getRoutes();
    this.getRouteByID(1);
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
    }).catch((err) => console.log(err));
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
      }).catch((err) => console.log(err));
  }

  removeRoute(id) {
    axios
      .delete(`/api/removeRoute/${id}`)
      .then(res => {
        this.setState({
          routes: res.data
        });
      }).catch((err) => console.log(err));
  }

  getRouteByID(id) {
    axios
      .get(`/api/route/${id}`)
      .then(res => {
        this.setState({
          selectedRoute: res.data
        });
      }).catch((err) => console.log(err));
  }

  render() {
    return <div className="main-container">
      <div className="inner-container">
        <RouteList
          routes={ this.state.routes }
          removeRoute={ this.removeRoute }
          getRouteByID={ this.getRouteByID }
        />
        <div className="center">
          <Route
            selectedRoute={ this.state.selectedRoute }
          />
          <RouteAdd
            postRoute={ this.postRoute }
            changeHandler={ this.changeHandler }
            nickname={ this.state.nickname }
            difficulty={ this.state.difficulty }
            attempts={ this.state.attempts }
            completes={ this.state.completes }
            record={ this.state.record }
          />
        </div>
      </div>
    </div>
  }
}

export default Main;