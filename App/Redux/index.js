// @flow

import {combineReducers} from 'redux'
import configureStore from './CreateStore'
// import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  let rootReducer = combineReducers({
    entities: combineReducers({
      roster: require('./RosterRedux').reducer,
      group: require('./GroupRedux').reducer,
      subscribe: require('./SubscribeRedux').reducer,
      blacklist: require('./BlacklistRedux').reducer,
    }),
    ui: combineReducers({
      common: require('./CommonRedux').reducer,
      login: require('./LoginRedux').reducer,
      contacts: require('./ContactsScreenRedux').reducer,
    }),
    im: require('./WebIMRedux').reducer
  })

  const store = configureStore(rootReducer)

  // Provider does not support changing `store` on the fly
  // TODO  https://github.com/reactjs/react-redux/releases/tag/v2.0.0 by lwz

  // if (module && module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept(() => {
  //     // const nextRootReducer = require('../reducers/index');
  //     store.replaceReducer(rootReducer)
  //   });
  // }

  return store
}
