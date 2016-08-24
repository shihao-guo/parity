import React from 'react';
import ReactDOM from 'react-dom';

import 'isomorphic-fetch';

import es6Promise from 'es6-promise';
es6Promise.polyfill();

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Api from './api';
import ParityBar from './views/ParityBar';

const parity = {
  Api: Api
};

const el = document.createElement('div');
document.querySelector('html').appendChild(el);

ReactDOM.render(
  <ParityBar />,
  el
);

window.parity = parity;