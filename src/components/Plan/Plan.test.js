import React from 'react';
import ReactDOM from 'react-dom';
import Plan from './Plan';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Plan />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});