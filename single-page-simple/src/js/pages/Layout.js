import React from "react";
import {Link} from "react-router";
import Nav from "../components/layout/Nav";


export default class Layout extends React.Component {
  render () {
    return (
      <div>

        <Nav location={location} />

        <div class="container">
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
