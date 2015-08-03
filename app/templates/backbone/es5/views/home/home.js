'use strict';

var template = require('../../../templates/home/home.html');

module.exports = Backbone.View.extend({
    className: 'home',
    events: {},

    initialize: function initialize() {

    },

    render: function render() {
        this.$el.html(template());

        return this;
    }
});
