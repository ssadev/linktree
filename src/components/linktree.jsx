import React, { Component } from "react";
import axios from "axios";

import Link from "./link";

import DBConfig from "../db.config.json";

export class Linktree extends Component {
  state = {
    LinkTreeData: [],
  };
  componentDidMount = () => {
    axios.get(DBConfig.linkTreeData).then((res) => {
      // console.log(res.data.linktree);
      this.setState({ LinkTreeData: res.data.linktree });
    });
  };
  render() {
    let data = this.state.LinkTreeData;
    return (
      <div className="container linktree">
        <div className="row">
          {data.map((data) => (
            <Link key={data.id} link={data.link} title={data.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default Linktree;
