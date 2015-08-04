import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <p>Home.jsx</p>
            </div>
        );
    }
}

Home.displayName = 'Home';

export default Home;
