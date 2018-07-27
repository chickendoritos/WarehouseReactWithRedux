import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Single from './components/Single';
import SectionGrid from './components/SectionGrid';
import registerServiceWorker from './registerServiceWorker';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={SectionGrid}></IndexRoute>
      <Route path="/view/:sectionId" component={Single}></Route>
    </Route>
  </Router>
</Provider>
)

render(router, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
