'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    HomeView = require('../views/home/home'),

    $wrapper = $('.wrapper'),
    currentView;

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        home: 'home'
    },

    initialize: function initialize() {
        Backbone.history.start();
    },

    home: function home() {
        if (currentView) { currentView.dispose(); }
        currentView = new HomeView();

        $wrapper.append(currentView.render().el);
    }
});
