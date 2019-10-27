import React from 'react';
import ReactDOM from 'react-dom';
import UserHome from './UserHome';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserHome />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});