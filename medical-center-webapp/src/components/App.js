import React from 'react';
import SignInUpManager from './SignInUpManager'
import ProfilePageManager from './ProfilePageManager'
import ReportPageManager from './ReportPageManager'
import MenuBarManager from './MenuBarManager'
import EditProfileManager from './EditProfileManager'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><SignInUpManager /></Route>
          <Route exact path="/forgotPassword"><SignInUpManager /></Route>
          <Route exact path="/signUp"><SignInUpManager /></Route>
          <Route exact path="/editProfile"><MenuBarManager /><EditProfileManager /></Route>
          <Route exact path="/reportpg"><MenuBarManager /><ReportPageManager /></Route>
          <Route exact path="/profilepg"><MenuBarManager /><ProfilePageManager /></Route>
        </Switch>
      </Router>
    </div >
  );
}