import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import { autoRehydrate } from 'redux-persist'

import App from './main/app'
import reducers from './main/reducers/mainReducer'
import './styles/main.scss'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

const store = compose(applyMiddleware(promise), autoRehydrate())(createStore)(reducers, devTools)

//const store_1 = await getStoredState()


ReactDOM.render(<Provider store={store} >
    < App />
</Provider>, document.getElementById('app'))