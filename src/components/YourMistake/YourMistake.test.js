import React from 'react';
import ReactDOM from 'react-dom';
import YourMistake from './YourMistake';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <YourMistake 
        key={`mistake-0`}
        nickname='{mistake.mistake_nickname}'
        date='10-20-2019'
        mistakemade='{mistake.mistake}'
        shared='true'
        planone='{mistake.plan_one}'
        plantwo='{mistake.plan_two}'
        planthree='{mistake.plan_three}'
        planfour='{mistake.plan_four}'
        planfive='{mistake.plan_five}'
        thoughts='{mistake}'
        id='3'/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});