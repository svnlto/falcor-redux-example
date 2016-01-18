import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  createStore,
  combineReducers,
  compose
} from 'redux';
import { Provider } from 'react-redux';
import { FalcorProvider } from 'redux-falcor';
import {
  reducer as falcorReducer
} from 'redux-falcor';
import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

import Intro from './Intro';

const _reducer = combineReducers({
  falcor: falcorReducer
});

const _falcorModel = new falcor.Model({
  source: new HttpDataSource('http://localhost:8088/model.json')
});

const _finalCreateStore = compose(
)(createStore);

const _reduxStore = _finalCreateStore(_reducer);

_reduxStore.subscribe(() =>
  console.log(_reduxStore.getState())
);

class App extends Component {
  render() {
    return (
      <Provider store={_reduxStore}>
        <FalcorProvider store={_reduxStore} falcor={_falcorModel}>
          <Intro/>
        </FalcorProvider>
      </Provider>
    );
  }
}
window.React = React;
window.onload = () => {
  render(
    <App/>,
    document.querySelector('#container')
  );
};
