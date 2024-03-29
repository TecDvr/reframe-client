import React from 'react';
import ReactDOM from 'react-dom';
import Explore from './Explore';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});