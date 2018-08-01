import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'history/createBrowserHistory';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import sections from './data/sections';
import items from './data/items';

// const defaultState = {
//     sections,
//     items
// };



const loadState = () => {
    //console.log("start");
    try {
        const state = localStorage.getItem('state');
        //console.log("state", state);
        if (state === null) {
            //console.log("null",state);

            return {
                //state:
                //{
                    sections,
                    items
                //}
            };
        }
        return JSON.parse(state);
    } catch (error) {
        //console.log("err");
    }

    //console.log("fin");
};

const saveState = (state) => {
    try {
        const serState = JSON.stringify(state);
        localStorage.setItem('state', serState);
    } catch (error) {

    }
};

const persistState = loadState();
//console.log("persistState", persistState);
const store = createStore(rootReducer, persistState);
store.subscribe(() => {
    //console.log("subscribe",store.getState());
    saveState(store.getState());
});

export const history = syncHistoryWithStore(browserHistory, store);

export default store;