'use strict';

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routers/routes');

Router.run(routes, function routeCallback(Handler) {
    React.render(<Handler />, document.getElementById('wrapper'));
});
