import('./main/main.scss')

import React, {Component} from 'react';
import ReactDom from 'react-dom'
import App from './main/app'

ReactDom.render(
  <App />, document.getElementById('app')
)