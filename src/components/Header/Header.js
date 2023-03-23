import React from "react";
import "./Header.css";

import Pages from "../../model/Pages";

import telLogo from "../../assets/img/tel.png";
import mailLogo from "../../assets/img/pocta.png";
import cantemirLogo from "../../assets/img/logo.png";
import aaaImage from "../../assets/img/ааа.png";
import moldovaFlag from "../../assets/img/moldova.png";
import usaFlag from "../../assets/img/en.png";
import rusFlag from "../../assets/img/russia.jpg";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="hed">
                    <div className="headerUnit">
                        <div className="composed">
                            <div className="container">
                                <img className="imageLogo" src={telLogo} alt="" />
                                <span className="tel">+373 231 234 58 </span>
                            </div>
                            <div className="container">
                                <img className="imageLogo" src={mailLogo} alt="" />
                                <span className="pocta"> post@dcantemir.md </span>
                            </div>
                        </div>
                    </div>
                    <span className="headerUnit"> ул.Св.Николая, 98A</span>
                </div>
                <div className="search">
                    <div className="container">
                        <div className="logoNameContainer">
                            <img className="logo" src={cantemirLogo} alt="" />
                            <div className="titleContainer">
                                <span className="title">Теоретический лицей имени Дмитрия Кантемира</span>
                                <span className="title"> Liceul teoretic Dimitrie Cantemir</span>
                            </div>
                        </div>
                        <div className="searchContainer">
                            <img className="aaaImage" src={aaaImage} alt="" />
                            <div className="controls">
                                <div className="flags">
                                    <img className="flagImage" src={moldovaFlag} alt="" />
                                    <img className="flagImage" src={usaFlag} alt="" />
                                    <img className="flagImage" src={rusFlag} alt="" />
                                </div>
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Main)} className="text">
                            Главная
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.News)} className="text">
                            Новости
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.AboutUs)} className="text">
                            О нас
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Teachers)} className="text">
                            Педагогический состав
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Notifications)} className="text">
                            Объявления
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Scheldule)} className="text">
                            Учебное расписание
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.SchoolLife)} className="text">
                            Школьная жизнь
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Graduates)} className="text">
                            Выпускники
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Ideas)} className="text">
                            Идеи
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Questions)} className="text">
                            Вопросы
                        </p>
                    </div>
                    <div className="menuOption">
                        <p onClick={() => this.handleMenu(Pages.Account)} className="text">
                            Личный кабинет
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    handleMenu(value) {
        this.props.stateChange(value);
    }
}

export default Header;
