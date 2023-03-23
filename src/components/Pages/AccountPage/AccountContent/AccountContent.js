import React from "react";
import "./AccountContent.css";

import Roles from "../../../../model/Roles";
import AccountPages from "../../../../model/AccountPages";
import settingsImage from "../../../../assets/img/settingsIcon.svg";
import exitImage from "../../../../assets/img/exitIcon.svg";
import helpImage from "../../../../assets/img/helpIcon.svg";
import noImage from "../../../../assets/img/noImage.svg";

class AccountContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.loggedUser,
            activePage: AccountPages.Scheldule,
            image: undefined,
        };
        this.loadImage();
        this.handleOutput = this.handleOutput.bind(this);
    }

    render() {
        return (
            <div className="accountContentconteiner">
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
                    <p style={this.state.activePage === AccountPages.Scheldule ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.Scheldule)}>
                        Расписание
                    </p>
                    {this.state.user.role === Roles.Teacher && (
                        <p style={this.state.activePage === AccountPages.Classes ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.Classes)}>
                            Классы
                        </p>
                    )}
                    <p style={this.state.activePage === AccountPages.ERegister ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.ERegister)}>
                        Электронный журнал
                    </p>
                    <p style={this.state.activePage === AccountPages.PersonalData ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.PersonalData)}>
                        Личные данные
                    </p>
                    {this.state.user.role === Roles.Teacher && (
                        <p style={this.state.activePage === AccountPages.AvailableCourses ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.AvailableCourses)}>
                            Доступные курсы
                        </p>
                    )}
                    {this.state.user.role === Roles.Student && (
                        <p style={this.state.activePage === AccountPages.Activity ? { color: "#673d37" } : {}} className="menuButton" onClick={() => this.handleMenu(AccountPages.Activity)}>
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
                return;
            case AccountPages.Classes:
                return;
            case AccountPages.ERegister:
                return;
            case AccountPages.PersonalData:
                return this.createPersonalData();
            case AccountPages.Scheldule:
                return;
        }
    }

    handleOutput() {
        this.setState({ user: undefined });
        this.props.logout();
    }

    handleMenu(value) {
        this.setState({ activePage: value });
    }

    createPersonalData() {
        return (
            <div className="personalDataContainer">
                <img className="personalImage" src={this.state.image} alt="" />
                <div className="dataContainer">
                    <div className="dataField">
                        <p className="text">Фамилия:</p>
                        <p className="data">{this.state.user.firstName}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Имя:</p>
                        <p className="data">{this.state.user.lastName}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Отчество:</p>
                        <p className="data">{this.state.user.patronymic}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Пол:</p>
                        <p className="data">{this.state.user.sex}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">День рождения:</p>
                        <p className="data">{this.state.user.birthday}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Место рождения:</p>
                        <p className="data">{this.state.user.bornPlace}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Адресс:</p>
                        <p className="data">{this.state.user.address}</p>
                    </div>
                    <div className="dataField">
                        <p className="text">Национальность:</p>
                        <p className="data">{this.state.user.ethnicity}</p>
                    </div>
                </div>
            </div>
        );
    }

    loadImage = async () => {
        try {
            const { default: src } = await import(`../../../../assets/img/${this.state.user.image}`);
            this.setState({ image: src });
            console.log(src);
        } catch (err) {
            console.log(err);
            this.setState({ image: noImage });
        }
    };
}

export default AccountContent;
