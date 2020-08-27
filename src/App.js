import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useRouteMatch, useParms
} from 'react-router-dom';
import Weather from "./component/Weather"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Router path="/weather">
            <Weather />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Test default Router - Home page Hellow World!!!</h1>
}


export default App;
