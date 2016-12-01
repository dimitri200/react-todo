import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import _Root from '_Root';

// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

// Load Foundation
// replaced by sassLoader in webpack.config.js
// require('style!css!foundation-sites/dist/foundation.min.css')

// start Foundation
// $(document).foundation();

// Load css
require('style!css!sass!appStyles');


ReactDOM.render(<_Root/>,  document.getElementById('app'));
