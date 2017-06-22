import MasterPage from 'MasterPage';

function errorLoading (err) {
  console.error('Falha ao abrir página', err);
}

function loadRoute (cb) {
  return (module) => cb(null, module.default);
}

const RootRoute = {
  component: MasterPage,
  childRoutes: [
    {
      path: '/',
      getComponent (location, cb) {
        System.import('Main')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '/:param',
      getComponent (location, cb) {
        System.import('Main')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    }
  ]
};

export default RootRoute;
