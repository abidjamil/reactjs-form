import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Login /></Route>
        <Route path="/signup"><Signup /></Route>
      </Switch>
    </Router>
  );
}

export default App;