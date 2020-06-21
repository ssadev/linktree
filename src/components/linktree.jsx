import React, { Component } from "react";
import Link from "./link";
import LinkTreeData from "../db/linktree.json";

export class Linktree extends Component {
  render() {
    const data = LinkTreeData.linktree;
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
