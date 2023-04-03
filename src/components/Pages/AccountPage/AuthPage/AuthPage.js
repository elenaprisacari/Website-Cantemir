import React from "react";
import "./AuthPage.css";

import { DataBase } from "../../../../model/DataBase";

import studentImage from "../../../../assets/img/student.png";
import teacherImage from "../../../../assets/img/teacher.png";
import parentsImage from "../../../../assets/img/parents.png";
import Roles from "../../../../model/Roles";

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            showHello: true,
            role: undefined,
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.processAuth = this.processAuth.bind(this);
    }

    render() {
        return <div className="container">{this.state.showHello ? this.HelloPage(this) : this.LoginPage()}</div>;
    }

    HelloPage() {
        return (
            <div className="helloContainer">
                <div className="module">
                    <img className="image" src={teacherImage} alt="" />
                    <p className="text">Зарегистрируйте своих учеников и следите за ними</p>
                    <button
                        className="button"
                        onClick={() => {
                            this.setState({ showHello: false, role: Roles.Teacher });
                        }}
                    >
                        Учитель
                    </button>
                </div>
                <div className="module">
                    <img className="image" src={studentImage} alt="" />
                    <p className="text">Учись еще - решай задания</p>
                    <button
                        className="button"
                        onClick={() => {
                            this.setState({ showHello: false, role: Roles.Student });
                        }}
                    >
                        Ученик
                    </button>
                </div>
                <div className="module">
                    <img className="image" src={parentsImage} alt="" />
                    <p className="text">Получите доступ к своему ребенку</p>
                    <button
                        className="button"
                        onClick={() => {
                            this.setState({ showHello: false, role: Roles.Parent });
                        }}
                    >
                        Родитель
                    </button>
                </div>
            </div>
        );
    }

    LoginPage() {
        return (
            <div className="form">
                {this.state.error && <div className="error">{this.state.error}</div>}
                <div className="inputForm">
                    <p className="title">Укажите ваши данные:</p>
                    <div className="field">
                        {(() => {
                            switch (this.state.role) {
                                case Roles.Parent:
                                    return <label className="label">Код родителя:</label>;
                                case Roles.Teacher:
                                    return <label className="label">Код учителя:</label>;
                                default:
                                    return <label className="label">Код ученика:</label>;
                            }
                        })()}
                        <input name="username" className="input" onChange={this.updateUsername}></input>
                    </div>
                    <div className="field">
                        <label className="label">Пароль</label>
                        <input name="password" className="input" onChange={this.updatePassword}></input>
                    </div>

                    <button onClick={this.processAuth} className="button">
                        Войти
                    </button>
                    <button onClick={() => this.setState({ showHello: true, error: "" })} className="button">
                        Назад
                    </button>
                </div>
            </div>
        );
    }

    updateUsername(value) {
        this.setState({ username: value.target.value });
    }

    updatePassword(value) {
        this.setState({ password: value.target.value });
    }

    processAuth() {
        let userCredential = DataBase.usersCredentials.filter((user) => user.username === this.state.username)[0];
        if (userCredential && userCredential.password === this.state.password) {
            let user = DataBase.users.filter((user) => user.username === this.state.username)[0];
            if (user.role === this.state.role) {
                this.props.authUser(user);
                return;
            }
        }

        this.setState({ error: "Неправильный логин или пароль!" });
    }
}

export default AuthPage;
