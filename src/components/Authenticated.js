import React from 'react';

export default function(ComposedComponent) {
    return class Authenticate extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthenticated: window.localStorage.getItem('jwt'),
            };
        }

        componentDidMount() {
            this.checkAndRedirect();
        }

        componentDidUpdate() {
            this.checkAndRedirect();
        }

        checkAndRedirect() {
            const { isAuthenticated } = this.state;

            const { history } = this.props;

            if (!isAuthenticated) {
                history.push('/login');
            }
        }

        render() {
            const { isAuthenticated } = this.state;
            return <div>{isAuthenticated ? <ComposedComponent {...this.props} /> : <span>loading</span>}</div>;
        }
    };
}
