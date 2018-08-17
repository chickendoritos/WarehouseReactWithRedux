import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Single from './components/Single';
import SectionGrid from './components/SectionGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
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

  ReactDOM.render(router, div);
  ReactDOM.unmountComponentAtNode(div);
});
