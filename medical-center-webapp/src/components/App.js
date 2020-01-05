import React from 'react';
import SignInUpManager from './SignInUpManager'
import HomePageManager from './HomePageManager'
import ProfilePageManager from './ProfilePageManager'
import ChatPageManager from './ChatPageManager'
import ReportPageManager from './ReportPageManager'
import SearchPageManager from './SearchPageManager'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><SignInUpManager /></Route>
          <Route exact path="/forgotPassword"><SignInUpManager /></Route>
          <Route exact path="/signUp"><SignInUpManager /></Route>
          <Route exact path="/homepg"><HomePageManager /></Route>
          <Route exact path="/reportpg"><ReportPageManager /></Route>
          <Route exact path="/chatpg"><ChatPageManager /></Route>
          <Route exact path="/profilepg"><ProfilePageManager /></Route>
          <Route exact path="/searchpg"><SearchPageManager /></Route>
        </Switch>
      </Router>
    </div >
  );
}