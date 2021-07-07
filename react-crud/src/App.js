import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
/* import logo from './logo.svg'; */
import './App.css'; 

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import TestPage from "./components/test-page";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className = "navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className= "navbar-brand">
              SEER
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Articles
                </Link>
              </li>
              <li className = "nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
              <li className = "nav-item">
                <Link to={"/test-page"} className="nav-link">
                  Test Page
                </Link>
              </li>

            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
              <Route path="/test-page" component={TestPage} />

            </Switch>
          </div>
        </div>
      </Router>
    )

  }
}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
