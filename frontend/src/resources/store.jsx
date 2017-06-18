import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { compose, applyMiddleware, createStore } from 'redux'
import createCompressor from 'redux-persist-transform-compress'
import reducers from '../reducers/mainReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production'
  ? [require('redux-immutable-state-invariant').default(), thunk]
  : [thunk]

const compressor = createCompressor()
const middlewares = [...middleware]

export default function getStore (preloadedState = []) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  )
  persistStore(store, { transforms: [compressor] })
  return store
}
