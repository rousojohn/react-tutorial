import React from "react";
import ReactDom from "react-dom";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Archived from "./pages/Archived";

const app = document.getElementById('app');
// ReactDom.render(<Layout />, app);

ReactDom.render(
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archived(/:article)" name="archived" component={Archived}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
  app
);
