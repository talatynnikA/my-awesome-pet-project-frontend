import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
