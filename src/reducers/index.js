import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sections from './sections';
import items from './items';

const rootReducer = combineReducers({sections, items, routing: routerReducer });

export default rootReducer;