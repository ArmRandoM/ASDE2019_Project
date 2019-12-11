import React from 'react';
import SignInUpManager from './SignInUpManager'
import HomePageManager from './HomePageManager'
import MyProfilePageManager from './MyProfilePageManager'
import ChatPageManager from './ChatPageManager'
import ReportPageManager from './ReportPageManager'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><SignInUpManager/></Route>
          <Route exact path="/homepg"><HomePageManager/></Route>
          <Route exact path="/reportpg"><ReportPageManager/></Route>
          <Route exact path="/chatpg"><ChatPageManager/></Route>
          <Route exact path="/myprofilepg"><MyProfilePageManager/></Route>
        </Switch>
      </Router>
    </div >
  );
}