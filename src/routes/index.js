import React from 'react';
import App from '../components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

// Child routes
import home from './home';
import error from './error';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,

    // place new routes before...
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <Provider store={store}>
        <App context={context}>{component}</App>
      </Provider>
    );
  },

};
