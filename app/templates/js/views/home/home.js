'use strict';

var AbstractView = require('../abstract/abstract'),
    template = require('../../../templates/home/home.html');

module.exports = AbstractView.extend({
    className: 'home',
    events: {},

    /* ----------------------------------------------------------------------------- *\
       Public Methods
    \* ----------------------------------------------------------------------------- */

    /**

    **/
    initialize: function(options) {

    },

    /**

    **/
    render: function() {
        this.$el.html(template());

        return this;
    }
});