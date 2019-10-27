import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';
import { BrowserRouter } from 'react-router-dom';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Feed />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});