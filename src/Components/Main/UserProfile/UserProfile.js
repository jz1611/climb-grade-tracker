import React from 'react';
import axios from 'axios';

import './UserProfile.css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }

    this.getUserByID = this.getUserByID.bind(this);
  }

  componentDidMount(){
    this.getUserByID(1);
  }

  getUserByID(id) {
    axios
      .get(`/api/user/${id}`)
      .then(res => {
        this.setState({
          user: res.data
        });
      }).catch((err) => console.log(err));
  }

  render() {
    const { user } = this.state;
    return <div className="user-container">
      <img className="profile-pic" alt="smiley face" src={user.picUrl} />
      <h1>{user.name}</h1>
      <h2>{user.level}</h2>
      <select className="user-dropdown" name="userID">
        <option value="1">Jeff</option>
        <option value="2">Molly</option>
      </select>
    </div>
  }
}

export default UserProfile;