'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var HomeView = require('../views/home/home'),
    currentView = null,
    $wrapper = $('.wrapper');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home'
    },

    /* ----------------------------------------------------------------------------- *\
       Public Methods
    \* ----------------------------------------------------------------------------- */

    /**

    **/
    initialize: function() {
        Backbone.history.start();
    },

    /**

    **/
    home: function() {
        if (currentView) { currentView.dispose(); }
        currentView = new HomeView();

        $wrapper.append(currentView.render().el);
    }
});