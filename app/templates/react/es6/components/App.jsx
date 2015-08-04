import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <p>React App</p>

                <RouteHandler />
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
