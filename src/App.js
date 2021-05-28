import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserOrders from './components/Orders/UserOrders';
import Principal from './components/Principal/Principal';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            <Principal/>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/orders'>
            <UserOrders />
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

