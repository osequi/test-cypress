import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Template } from "./components/Template";
import { Home } from "./components/Home";
import { Features } from "./components/Features";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Template>
            <Home />
          </Template>
        </Route>
        <Route path="/features">
          <Template>
            <Features />
          </Template>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
