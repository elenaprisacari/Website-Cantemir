import React from "react";
import "./AccountContent.css";

import Roles from "../../../../model/Roles";
import AccountPages from "../../../../model/AccountPages";
import settingsImage from "../../../../assets/img/settingsIcon.svg";
import exitImage from "../../../../assets/img/exitIcon.svg";
import helpImage from "../../../../assets/img/helpIcon.svg";
import { DataBase } from "../../../../model/DataBase";

import Scheldule from "./Scheldule/Scheldule";
import PersonalData from "./PersonalData/PersonalData";
import Course from "./Course/Course";

class AccountContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.loggedUser,
            activePage: AccountPages.Scheldule,
        };
        this.handleOutput = this.handleOutput.bind(this);
    }

    render() {
        return (
            <div className="accountContentContainer">
                <div className="header">
                    <div className="name">{this.state.user.firstName + " " + this.state.user.lastName}</div>
                    <div className="buttonContainer">
                        <img className="buttonImage" src={settingsImage} alt="" />
                        <p className="buttonText">Найстройки</p>
                    </div>
                    <div className="buttonContainer">
                        <img className="buttonImage" src={helpImage} alt="" />
                        <p className="buttonText">Помощь</p>
                    </div>
                    <div className="buttonContainer" onClick={() => this.handleOutput()}>
                        <img className="buttonImage" src={exitImage} alt="" />
                        <p className="buttonText">Выход</p>
                    </div>
                </div>
                <div className="header2">
                    <p
                        style={this.state.activePage === AccountPages.Scheldule ? { color: "#673d37" } : {}}
                        className="menuButton"
                        onClick={() => this.setState({ activePage: AccountPages.Scheldule })}
                    >
                        Расписание
                    </p>
                    <p
                        style={this.state.activePage === AccountPages.ERegister ? { color: "#673d37" } : {}}
                        className="menuButton"
                        onClick={() => this.setState({ activePage: AccountPages.ERegister })}
                    >
                        Электронный журнал
                    </p>
                    <p
                        style={this.state.activePage === AccountPages.PersonalData ? { color: "#673d37" } : {}}
                        className="menuButton"
                        onClick={() => this.setState({ activePage: AccountPages.PersonalData })}
                    >
                        Личные данные
                    </p>
                    {this.state.user.role === Roles.Teacher && (
                        <p
                            style={this.state.activePage === AccountPages.AvailableCourses ? { color: "#673d37" } : {}}
                            className="menuButton"
                            onClick={() => this.setState({ activePage: AccountPages.AvailableCourses })}
                        >
                            Доступные курсы
                        </p>
                    )}
                    {this.state.user.role === Roles.Student && (
                        <p
                            style={this.state.activePage === AccountPages.Activity ? { color: "#673d37" } : {}}
                            className="menuButton"
                            onClick={() => this.setState({ activePage: AccountPages.Activity })}
                        >
                            Активность
                        </p>
                    )}
                </div>
                <div className="accountContent">{this.createContent()}</div>
            </div>
        );
    }

    createContent() {
        switch (this.state.activePage) {
            case AccountPages.Activity:
                return;
            case AccountPages.AvailableCourses:
                return DataBase.availableCourses[this.state.user.username].map((value, index) => {
                    return <Course key={index} course={value}></Course>;
                });
            case AccountPages.ERegister:
                return;
            case AccountPages.PersonalData:
                return <PersonalData user={this.state.user}></PersonalData>;
            default:
                return <Scheldule user={this.state.user}></Scheldule>;
        }
    }

    handleOutput() {
        this.setState({ user: undefined });
        this.props.logout();
    }
}

export default AccountContent;
