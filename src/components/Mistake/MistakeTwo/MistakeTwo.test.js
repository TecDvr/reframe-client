import React from 'react';
import ReactDOM from 'react-dom';
import MistakeTwo from './MistakeTwo';
import { BrowserRouter } from 'react-router-dom';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MistakeTwo/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});