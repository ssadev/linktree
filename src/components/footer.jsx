import React, { Component } from "react";
import axios from "axios";

import DBConfig from "../db.config.json";

export class Footer extends Component {
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
    let user = this.state.UserInfo;
    // console.log(user);
    return (
      <footer className="" style={{ marginTop: "50px" }}>
        <div className="container text-center mx-auto">
          <div className="md:w-4/6 mx-auto">
            <ul className="inline">
              <li className="footer-social-media-link">
                <a href="https://exampe.com">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="footer-social-media-link">
                <a href="https://exampe.com">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="footer-social-media-link">
                <a href="https://exampe.com">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div>
              <p>
                Built by{" "}
                <a
                  href="https://github.com/montoulieu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400"
                >
                  {user.name}
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/programworld999/linktree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400"
                >
                  linktree
                </a>{" "}
                {user.footer}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
