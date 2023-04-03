import React from "react";
import "./PersonalData.css";

import noImage from "../../../../../assets/img/noImage.svg";

class PersonalData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            image: undefined,
        };
        this.loadImage(props.user.image);
    }

    render() {
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

    loadImage = async (param) => {
        try {
            const { default: src } = await import(`../../../../../assets/img/${param}`);
            this.setState({ image: src });
            console.log(src);
        } catch (err) {
            console.log(err);
            this.setState({ image: noImage });
        }
    };
}

export default PersonalData;
