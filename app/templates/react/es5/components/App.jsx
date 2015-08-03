'use strict';

var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
    displayName: 'App',

    render: function render() {
        return (
            <div className="app">
                <p>React App</p>

                <RouteHandler />
            </div>
        );
    }
});
