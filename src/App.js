import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/orders'>
            
          </Route>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}
export default App;

