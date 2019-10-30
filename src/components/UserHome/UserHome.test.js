import React from 'react';
import ReactDOM from 'react-dom';
import UserHome from './UserHome';
import { BrowserRouter } from 'react-router-dom';
import ReframeContext from '../../context/reframe-context';

const mistake = [ 
  {
    box_checked: false,
    how_bad: 3,
    id: 55,
    mistake: "I started making too many style points and things got out of control",
    mistake_nickname: "CSS Styling",
    plan_five: "dont over do it",
    plan_five_check: true,
    plan_four: "Have a good idea of what im doing",
    plan_four_check: false,
    plan_one: "Keep it simple",
    plan_one_check: null,
    plan_three: "Take more time to layout design",
    plan_three_check: true,
    plan_two: "Follow my wireframe",
    plan_two_check: null,
    posting_date: "2019-10-28T07:00:00.000Z",
    user_id: 4,
    went_wrong: "My design started acting crazy",
    what_doing: "Make an app look cool",
    what_learn: "Keep it simple stupid",
    why_wrong: "I made too many style points",
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ReframeContext.Provider value={{mistake: mistake}}>
        <UserHome />
      </ReframeContext.Provider> 
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});