import React, {Component} from 'react';
import ErrorNotification from '../error-notification';

export default class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch() {
        this.setState({
            error: true,
        });
    }

    render() {
        return this.state.error ? <ErrorNotification/> : this.props.children;
    }
}