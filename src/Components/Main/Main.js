import React from 'react';
import axios from 'axios';

import RouteList from './RouteList/RouteList';
import RouteAdd from './RouteAdd/RouteAdd';
import Route from './Route/Route';
import UserProfile from './UserProfile/UserProfile'

import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      routes: [],
      index: 0,
      selectedRoute: {},
      nickname: "",
      difficulty: "",
      attempts: "",
      completes: "",
      record: "",
      nextAttempts: "",
      nextCompletes: "",
      nextRecord: ""
    };

    this.postRoute = this.postRoute.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.removeRoute = this.removeRoute.bind(this);
    this.getRouteByID = this.getRouteByID.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
  }

  componentDidMount() {
    this.getRoutes();
    this.getRouteByID(0);
  }

  changeHandler(key, value) {
    this.setState({
      [key]:value
    });
  }

  getRoutes() {
    axios.get('/api/routes').then(res => {
      this.setState({
        routes: res.data,
        loading: false
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
    this.setState({
      index: id
    })
  }

  updateRoute(id) {
    const attempts = this.state.nextAttempts;
    const completes = this.state.nextCompletes;
    const record = this.state.nextRecord;
    console.log(this.state.routes)
    axios
      .put(`/api/route/${id}`, { attempts, completes, record })
      .then(res => {
        this.setState({
          routes: res.data,
          nextAttempts: null,
          nextCompletes: null
        });
      });
  }

  incrementValue(key) {
    let selectedRoute = this.state.routes[this.state.index]
    if (key === "attempts"){
      this.setState({
        nextAttempts: +selectedRoute.attempts + 1
      })
    } else if (key === "completes") {
      this.setState({
        nextCompletes: +selectedRoute.completes + 1
      })
    }
    this.updateRoute(selectedRoute.id);
  }

  render() {
    return <div className="main-container">
      {this.state.loading ?
      <div>Loading</div>
    :
    <div className="inner-container">
        <RouteList
          routes={ this.state.routes }
          removeRoute={ this.removeRoute }
          getRouteByID={ this.getRouteByID }
        />
        <div className="center">
          <Route
            selectedRoute={this.state.routes[this.state.index]}
            updateRoute={ this.updateRoute }
            incrementValue={ this.incrementValue }
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
        <UserProfile />
      </div>
    }
      
    </div>
  }
}

export default Main;