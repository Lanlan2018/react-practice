import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Weather from "./component/Weather"
import DailyWeather from "./component/DailyWeather"

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
          <Route path="/weather" component={Weather}>
          </Route>
          <Route path="/dailyWeather/:city/:date" component={DailyWeather}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="page-title">Test default Router - Home page - Hellow World!!!</h2>
}


export default App;
