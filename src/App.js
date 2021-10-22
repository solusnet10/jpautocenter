import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Cadastrar } from './Pages/Cadastrar';
import { Home } from './Pages/Home'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/cadastrar' component={Cadastrar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
