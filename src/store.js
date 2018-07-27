import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'history/createBrowserHistory';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import sections from './data/sections';
import items from './data/items';

const defaultState = {
    sections,
    items
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;