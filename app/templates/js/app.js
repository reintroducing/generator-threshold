'use strict';

<% if (useBackbone) { %>var Router = require('./routers/router'),
    router = new Router(); // eslint-disable-line no-unused-vars<% } else { %>console.log('App');<% } %>
