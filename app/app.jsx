var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

var _Root = require('_Root');

// Load Foundation
// replaced by sassLoader in webpack.config.js
// require('style!css!foundation-sites/dist/foundation.min.css')

// start Foundation
// $(document).foundation();

// Load css
require('style!css!sass!appStyles');

ReactDOM.render(
    <_Root/>,
    document.getElementById('app')
);
