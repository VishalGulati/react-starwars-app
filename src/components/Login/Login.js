import React, { Component } from 'react';
import {
    Col,
    Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginAction } from './login-store';
import { searchRoute } from '../../router/route-constants';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== this.props.login) {
            const { isLoading, error } = nextProps.login;
            if (!isLoading && !error) {
                this.props.history.push(`/${searchRoute}`);
            }
        }
    }

    getValidationState = () => {
        const { username, password } = this.state;
        if (username && password) return 'success';
        else return 'error';
    };

    handleUsernameChange = e => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    userLogin = e => {
        const { username, password } = this.state;
        this.props.loginAction({ username, password });
        e.preventDefault();
    };

    render() {
        return (<div className="login container">
            <h1 className="text-center" style={{ marginTop: '10px' }}> Login </h1>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <Col sm={10} >
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"
                            onChange={this.handlePasswordChange}
                        />
                    </Col>
                </div>

                <div className="form-group">
                    <Col smOffset={2}
                        sm={10} >
                        <Button bsStyle="primary"
                            type="submit"
                            onClick={this.userLogin} >
                            Login
                        </Button>
                    </Col>
                </div>
            </form >
        </div >
        );
    }
}

const mapStateToProps = ({ login }) => ({
    login
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loginAction },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
