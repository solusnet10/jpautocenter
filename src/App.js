import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={Home}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
