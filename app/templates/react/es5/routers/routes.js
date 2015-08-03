'use strict';

var React = require('react'),
    Router = require('react-router'),
    App = require('../components/App.jsx'),
    Home = require('../components/Home.jsx'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

module.exports = (
    <Route name="app" handler={App} path="/">
        <DefaultRoute handler={Home} />
    </Route>
);
