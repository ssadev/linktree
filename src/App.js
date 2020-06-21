import React, { Component } from "react";

import "./App.css";
import User from "./components/user";
import Linktree from "./components/linktree";
import Footer from "./components/footer";

export class App extends Component {
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
