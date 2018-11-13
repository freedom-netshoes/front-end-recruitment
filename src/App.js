import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';

import store from './services/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Shelf />
          </main>
          <FloatCart />
        </div>
      </Provider>
    );
  }
}

export default App;
