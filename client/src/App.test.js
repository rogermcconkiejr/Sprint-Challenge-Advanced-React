import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains soccer', ()=> {
  const { getByText } = render(<App />);
  getByText(/soccer/i);
})

test('contains players', ()=> {
  const { getByText } = render(<App />);
  getByText(/players/i);
})

test('contains submit', ()=> {
  const { getByText } = render(<App />);
  getByText(/submit/i);
})