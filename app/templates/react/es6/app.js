import React from 'react';
import Router, {DefaultRoute, Route} from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';

let routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(
    routes,
    (Handler, state) => {
        React.render(<Handler params={state.params} />, document.getElementById('wrapper'));
    }
);
