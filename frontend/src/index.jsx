import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './main/app'
import getStore from './resources/store'

import './styles/main.less'

const store = getStore()

ReactDOM.render(<Provider store={store} >
  < App />
</Provider>, document.getElementById('app'))
