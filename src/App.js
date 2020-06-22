import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

import "./App.css";
import User from "./components/user";
import Linktree from "./components/linktree";
import Footer from "./components/footer";
import DBConfig from "./db.config.json";

export class App extends Component {
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
        // console.log(this.state.UserInfo.settings);

        let bgcolor = this.state.UserInfo.settings.bgcolor;
        console.log(bgcolor);
        $("body").css({ "background-image": bgcolor });
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  render() {
    return (
      <div>
        <User />
        <Linktree />
        <Footer />
      </div>
    );
  }
}

export default App;
