import React from 'react';
import ReactDOM from 'react-dom';
import {Home, About, App} from './src/components.js';
import { Router, Route, IndexRoute, Link, History } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import './src/styles';


React.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}></Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
