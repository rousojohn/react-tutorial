import React from "react";

export default class Article extends React.Component {
  render () {
      const { title } = this.props;
      const { text } = this.props;
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>{text}</p>
        <a class="btn btn-default" href="#">More info...</a>
      </div>
    );
  }
}
