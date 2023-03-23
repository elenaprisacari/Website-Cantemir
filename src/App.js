import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Pages from "./model/Pages";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: Pages.Main,
        };
    }

    handleState(newState) {
        this.setState({ currentPage: newState });
    }

    render() {
        return (
            <div className="mainContainer">
                <Header className="header" stateChange={(value) => this.handleState(value)} />
                <Content className="content" page={this.state.currentPage} />
            </div>
        );
    }
}
export default App;
