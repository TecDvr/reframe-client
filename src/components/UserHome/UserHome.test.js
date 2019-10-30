import React from 'react';
import ReactDOM from 'react-dom';
import UserHome from './UserHome';
import { BrowserRouter } from 'react-router-dom';

// const mistake = [
//   {
//       'id': 1,
//       'user_id': 14,
//       'posting_date': '10-31-2019',
//       'mistake_nickname': 'too old',
//       'mistake': 'not taking up coding when I was a kid',
//       'box_checked': true,
//       'went_wrong': 'didnt take up coding as kid, now its hard',
//       'why_wrong': 'my mom didnt make me do it',
//       'what_doing': 'I just wanted to be a pro surfer and didnt want to be on a computer',
//       'what_learn': 'start em early, make the big bucks',
//       'plan_one': 'research bootcamp',
//       'plan_two': 'plan time for bootcamp',
//       'plan_three': 'get funding for bootcamp',
//       'plan_four': 'fill out application',
//       'plan_five': 'quit job to focus on coding'
//   }
// ]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserHome />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});