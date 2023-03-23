import React from "react";
import "./AccountPage.css";

import AccountContent from "./AccountContent/AccountContent";
import AuthPage from "./AuthPage/AuthPage";

class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.loggedUser,
        };
        this.handleUser = this.handleUser.bind(this);
        this.handleOutput = this.handleOutput.bind(this);
    }

    render() {
        return this.state.user ? <AccountContent loggedUser={this.state.user} logout={this.handleOutput} /> : <AuthPage authUser={(user) => this.handleUser(user)} />;
    }

    handleUser(loggedUser) {
        this.setState({ user: loggedUser });
        this.props.handleUser(loggedUser);
    }

    handleOutput() {
        this.setState({ user: undefined });
        this.props.logout();
    }
}

export default AccountPage;
