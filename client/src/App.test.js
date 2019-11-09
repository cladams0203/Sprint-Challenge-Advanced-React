import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { PlayerContainer } from './components/PlayerContainer';
import { PlayerCard } from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders without crashing', () => {
  render(<App />)
})

test('Heading rendered', () => {
  const { getByText } = render(<App/>)
  getByText(/world cup players/i)
})
test('Player Container renders without crashing', () => {
  render(<PlayerContainer/>)
})
test('Player Card renders without crashing', () => {
  render(<PlayerCard />)
})
test('Player Card Country Text',  () => {
  const { getByText } = render(<PlayerCard/>)
  getByText(/country:/i)
})
test('Player Card Saerches text', () => {
  const { getByText } = render(<PlayerCard />)
  getByText(/searches:/i)
})
