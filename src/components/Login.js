import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Base64 } from 'js-base64';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError: 'Username required',
            passwordError: 'Password required',
            password: '',
            isAuthenticated: window.localStorage.getItem('jwt'),
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        const { isAuthenticated } = this.state;

        const { history } = this.props;

        if (isAuthenticated) history.push('/scan');
    }

    handleInput(event, newValue) {
        if (newValue.length <= 8) return this.setState({ [`${event.target.id}Error`]: 'Must be 8 characters or more ' });
        if (newValue.length >= 68) return this.setState({ [`${event.target.id}Error`]: 'Must be from   8 to 68 character ' });

        return this.setState({ [event.target.id]: newValue, [`${event.target.id}Error`]: false });
    }

    handleLogin() {
        const { history } = this.props;
        const { username, password } = this.state;
        window.localStorage.setItem('jwt', Base64.encode(`${username}:${password}`));
        history.push('/scan');
    }

    render() {
        const { usernameError, passwordError } = this.state;
        return (
            <div className="login-container">
                <MuiThemeProvider>
                    <div className="content">
                        <h1> Login </h1>
                        <TextField
                            required
                            floatingLabelText="Username"
                            error="true"
                            id="username"
                            hintText="Enter your Username"
                            errorStyle={{
                                position: 'absolute',
                                bottom: '-25px',
                            }}
                            onChange={(event, newValue) => this.handleInput(event, newValue)}
                            errorText={usernameError ? <p className="parsley-error">{usernameError}</p> : ''}
                        />
                        <br />
                        <TextField
                            required
                            error="true"
                            type="password"
                            id="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.handleInput(event, newValue)}
                            errorText={passwordError ? <p className="parsley-error">{passwordError}</p> : ''}
                        />
                        <br />

                        <RaisedButton
                            disabled={!!(usernameError || passwordError)}
                            label="Sing in"
                            primary
                            fullWidth
                            disabledBackgroundColor="rgba(235, 78, 130,0.6)"
                            onClick={() => this.handleLogin()}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Login;
