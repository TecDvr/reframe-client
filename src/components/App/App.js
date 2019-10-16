import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Nav from '../Nav/Nav';
import Explore from '../Explore/Explore';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='appContainer'>
        <Nav />

        <Route 
          exact
          path='/'
          component={Landing}
        />

        <Route 
          exact
          path='/login'
          component={Login}
        />

        <Route 
          exact
          path='/register'
          component={Register}
        />

        <Route 
          exact
          path='/explore'
          component={Explore}
        />
      
      </div>
    )
  }
}

