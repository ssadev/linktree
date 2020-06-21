import React, { Component } from "react";

export class Link extends Component {
  render() {
    return (
      <div className="col-12 col link">
        <a
          href={this.props.link}
          className="btn-block btn-secondary paper-btn text-center"
        >
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default Link;
