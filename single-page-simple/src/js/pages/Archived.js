import React from "react";
import Article from "../components/Article";

export default class Archived extends React.Component {
  render () {
    const Articles = [
      {title:"Test Article", text:"Test Article Text text text text text"},
      {title:"This Article", text:"This Article Text text text text text"},
      {title:"That Article", text:"That Article Text text text text text"},
      {title:"New Article", text:"New Article Text text text text text"},
      {title:"Old Article", text:"Old Article Text text text text text"},
      {title:"Another Article", text:"Another Article Text text text text text"},
      {title:"Yet Another Article", text:"Yet Another Article Text text text text text"},
    ].map((obj, i) => <Article title={obj.title} text={obj.text} key={i} />);

    console.log(Articles);

    return (
      <div>
        <h1>Archived</h1>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
