import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// Render elements
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor () {
    this.name = "Old Name";
  }
}