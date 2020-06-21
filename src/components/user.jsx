import React, { Component } from "react";
import UserInfo from "../db/user.info.json";

export class User extends Component {
  render() {
    let user = UserInfo.user;
    return (
      <div className="container col-12" style={{ marginTop: "40px" }}>
        <div className="card container">
          <img
            className="user-avatar"
            src={user.avatar}
            alt=""
            style={{ borderRadius: "100%", width: "100px", height: "100px" }}
          />

          <div className="card-body">
            <h4 className="card-title">{user.name}</h4>
            <h5 className="card-subtitle">{user.discription}</h5>
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
