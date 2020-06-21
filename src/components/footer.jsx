import React, { Component } from "react";
import UserInfo from "../db/user.info.json";

export class Footer extends Component {
  render() {
    return (
      <footer className="" style={{ marginTop: "50px" }}>
        <div className="container text-center mx-auto">
          <div className="md:w-4/6 mx-auto">
            <ul className="inline">
              <li className="footer-social-media-link">
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="footer-social-media-link">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="footer-social-media-link">
                <a href="#">
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
                  className="text-green-400"
                  rel="noopener"
                >
                  {UserInfo.user.name}
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/montoulieu/link-ent"
                  target="_blank"
                  className="text-green-400"
                  rel="noopener"
                >
                  LinkEnt
                </a>
                is a free Linktree alternative built with React and PaperCSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
