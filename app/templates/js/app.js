'use strict';

<% if (useBackbone) { %>var Router = require('./routers/router'),
    router = new Router();<% } else { %>console.log('App');<% } %>
