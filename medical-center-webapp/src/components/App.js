import React from 'react';
import SignInUpManager from './SignInUpManager'
import ProfilePageManager from './ProfilePageManager'
import ReportPageManager from './ReportPageManager'
import SearchPageManager from './SearchPageManager'
import MenuBarManager from './MenuBarManager'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><SignInUpManager /></Route>
          <Route exact path="/forgotPassword"><SignInUpManager /></Route>
          <Route exact path="/signUp"><SignInUpManager /></Route>
          <Route exact path="/reportpg"><MenuBarManager/><ReportPageManager /></Route>
          <Route exact path="/profilepg"><MenuBarManager/><ProfilePageManager /></Route>
          <Route exact path="/searchpg"><MenuBarManager/><SearchPageManager /></Route>
        </Switch>
      </Router>
    </div >
  );
}