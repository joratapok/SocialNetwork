import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './AppContainer';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppContainer/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
