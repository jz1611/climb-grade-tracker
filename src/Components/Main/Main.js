import React from 'react';
import axios from 'axios';

import RouteList from '../RouteList/RouteList';
import RouteAdd from '../RouteAdd/RouteAdd';
// import Route from '../Route/Route';

import './Main.css';

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
    this.selectID = this.selectID.bind(this);
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
    }).catch((err) => console.log(err));
  }

  // getRouteByID(id) {
  //   axios
  //     .get(`/api/route/${id}`)
  //     .then(res => {

  //     })
  // }

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

  selectID(id) {
    this.setState({
      selectedID: id
    });
  }

  render() {
    return <div className="main-container">
      <div className="inner-container">
        <RouteList
          routes={ this.state.routes }
          removeRoute={ this.removeRoute }
          selectedID={ this.state.selectedID }
          selectID={ this.selectID }
        />
        {/* <Route
          selectedID={ this.state.selectedID }
          routes={ this.state.routes }
        /> */}
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