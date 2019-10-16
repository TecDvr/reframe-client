import React from 'react';
import ReactDOM from 'react-dom';
import MistakeFeed from './MistakeFeed';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MistakeFeed/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});