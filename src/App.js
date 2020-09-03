import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <h1>Hello Landing Route</h1>
        </div>
      </Route>
      <Route path="/route1">
        <div className="App">
          <h1>Hello Route1</h1>
        </div>
      </Route>
    </Switch>
  );
}
