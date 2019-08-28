import React from 'react';
import { Link } from 'react-router-dom'

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            initialMessage: 'Hello, this will be the details page for each Movie & TV show :)'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initialMessage: 'Coming soon! :)'
            });
        }, 3000);
    }

    render() {
        return (
            <div>{this.state.initialMessage}
                <br></br>
                <Link to='/'>Back to homepage</Link>
            </div>
        );
    }
}