import React from 'react';
import SignInUpManager from './SignInUpManager'
import HomepageManager from './HomepageManager'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" >
          <SignInUpManager />
        </Route>
        <Route exact path="/HomepageManager" >
          <HomepageManager />
        </Route>
      </Router>
    </div >
  );
}

export default App;
