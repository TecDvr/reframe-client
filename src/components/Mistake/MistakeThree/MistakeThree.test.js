import React from 'react';
import ReactDOM from 'react-dom';
import MistakeThree from './MistakeThree';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MistakeThree/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});