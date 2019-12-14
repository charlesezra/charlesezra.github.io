import React from 'react';
import ReactDOM, { render } from 'react-dom';
import HomePage from './HomePage';

class App extends React.Component {
    render() {
        return(
            <div>
                <HomePage />
            </div>
        );
    }c
};

ReactDOM.render(<App />, document.querySelector('#root'));