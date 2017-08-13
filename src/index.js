import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

import 'basscss/css/basscss.css';
import 'basscss-responsive-padding/css/responsive-padding.css';
import './index.css';

const startUp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
};

if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js'
  ], function (require) {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    startUp();
  });
} else {
  startUp();
}
