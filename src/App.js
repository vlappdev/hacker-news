import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Stories from "./components/Stories"
import Comments from "./components/Comments"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact key ="/" path="/" component={Stories} />
          <Route key ="topstories" path="/topstories" component={Stories} />
          <Route key ="newstories" path="/newstories" component={Stories} />
          <Route key ="beststories" path="/beststories" component={Stories} />
          <Route path="/comments/:id" component={Comments} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
