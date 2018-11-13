import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Shelf from './components/Shelf';
import Banner from './components/Banner';
import FloatCart from './components/FloatCart';

import store from './services/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Banner />
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
