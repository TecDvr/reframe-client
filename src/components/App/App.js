import React from 'react';
import { Route } from 'react-router-dom';
import ReframeContext from '../../context/reframe-context';
import './App.css';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Nav from '../Nav/Nav';
import Explore from '../Explore/Explore';
import UserHome from '../UserHome/UserHome';

//setup .env

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ReframeContext.Provider value={this.state}>
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

          <Route
            exact
            path='/user'
            component={UserHome}
          />

        </div>
      </ReframeContext.Provider>
      
    )
  }
}

