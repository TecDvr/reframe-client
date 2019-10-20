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
import MistakeOne from '../Mistake/MistakeOne/MistakeOne';
import MistakeTwo from '../Mistake/MistakeTwo/MistakeTwo';
import MistakeThree from '../Mistake/MistakeThree/MistakeThree';
import Plan from '../Plan/Plan';
import Feed from '../Feed/Feed';
//import dummyMistakes from '../../dummyData';
import config from '../../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mistake: []
    }
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/mistake`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(resJSON => {
      this.setState({
        mistake: resJSON
      })
      console.log(this.state)
    })
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

          <Route
            exact
            path='/mistake'
            component={MistakeOne}
          />

          <Route
            exact
            path='/mistaketwo'
            component={MistakeTwo}
          />  

          <Route
            exact
            path='/mistakeThree'
            component={MistakeThree}
          /> 

          <Route
            exact
            path='/plan'
            component={Plan}
          /> 

          <Route
            exact
            path='/feed'
            component={Feed}
          />

        </div>
      </ReframeContext.Provider>
      
    )
  }
}

