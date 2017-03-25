import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import RootRoute from 'RootRoute';
import '../scss/netshoes.scss';

const renderApp = NextApp => {
  render(
    <AppContainer>
      <NextApp history={browserHistory} routes={RootRoute} />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Router);

if (module.hot) {
  module.hot.accept(Router, () => {
    renderApp(Router);
  });
}
