import React from 'react';
import ReactDOM from 'react-dom';
import MistakeOne from './MistakeOne';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MistakeOne/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});