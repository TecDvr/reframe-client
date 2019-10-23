import React from 'react';
import { Route } from 'react-router-dom';
import ReframeContext from '../../context/reframe-context';
import './App.css';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Explore from '../Explore/Explore';
import UserHome from '../UserHome/UserHome';
import MistakeOne from '../Mistake/MistakeOne/MistakeOne';
import MistakeTwo from '../Mistake/MistakeTwo/MistakeTwo';
import MistakeThree from '../Mistake/MistakeThree/MistakeThree';
import Plan from '../Plan/Plan';
import Feed from '../Feed/Feed';
import config from '../../config';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mistake: [],
      mistakeData: {
        posting_date: 'now()',
        how_bad: '',
        mistake_nickname: '',
        mistake: '',
        box_checked: false,
        went_wrong: '',
        why_wrong: '',
        what_doing: '',
        what_learn: '',
        plan_one: '',
        plan_two: '',
        plan_three: '',
        plan_four: '',
        plan_five: ''
      },
      storeMistakes : (key, value) => {
        let newMistake = this.state.mistakeData;
        newMistake[key] = value;

        this.setState({ mistakeData: newMistake})
      }
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
    })
  }

  render() {
    return (
      <ReframeContext.Provider value={this.state}>
        <div className='appContainer'>

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

          <PrivateRoute
            exact
            path='/user'
            component={UserHome}
          />

          <PrivateRoute
            exact
            path='/mistake'
            component={MistakeOne}
          />

          <PrivateRoute
            exact
            path='/mistaketwo'
            component={MistakeTwo}
          />  

          <PrivateRoute
            exact
            path='/mistakeThree'
            component={MistakeThree}
          /> 

          <PrivateRoute
            exact
            path='/plan'
            component={Plan}
          /> 

          <PrivateRoute
            exact
            path='/feed'
            component={Feed}
          />

        </div>
      </ReframeContext.Provider>
      
    )
  }
}

