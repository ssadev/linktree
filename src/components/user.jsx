import React, { Component } from "react";
import axios from "axios";

import DBConfig from "../db.config.json";

export class User extends Component {
  state = {
    UserInfo: [],
  };
  componentDidMount = () => {
    axios
      .get(DBConfig.userInfo)
      .then((res) => {
        this.setState({ UserInfo: res.data });
        const user = JSON.parse(JSON.stringify(this.state.UserInfo));
        this.setState({ UserInfo: user.user });
        // console.log(this.state.UserInfo);
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  render() {
    // let user = JSON.parse(localStorage.getItem("UserInfo")).user;
    let user = this.state.UserInfo;
    // console.log(user);
    return (
      <div className="container col-12" style={{ marginTop: "40px" }}>
        <div className="card container user-card">
          <img
            className="user-avatar"
            src={user.avatar}
            alt=""
            style={{ borderRadius: "100%", width: "100px", height: "100px" }}
          />

          <div className="card-body">
            <h4 className="">{user.name}</h4>
            <h5 className="card-subtitle">{user.description}</h5>
            {/* <p className="card-text">
                  Notice that the card width in this example have been set to
                  20rem, otherwise it will try to fill the current container/row
                  where the card is.
                </p> */}
            {/* <button>Let me go here!</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
