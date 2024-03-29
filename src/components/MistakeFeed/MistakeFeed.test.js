import React from 'react';
import ReactDOM from 'react-dom';
import MistakeFeed from './MistakeFeed';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MistakeFeed
        key={`mistake-3`}
        date='10-30-2019'
        mistakemade='{mistake.mistake}'
        id='2'/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});