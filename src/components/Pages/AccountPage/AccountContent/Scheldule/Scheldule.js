import React from "react";
import "./Scheldule.css";

import Roles from "../../../../../model/Roles";
import { DataBase } from "../../../../../model/DataBase";

class Scheldule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            currentDay: 0,
        };
    }

    render() {
        let data =
            this.state.user.role === Roles.Teacher
                ? DataBase.schelduleTeacher[this.state.user.username]
                : DataBase.schelduleStudent[this.state.user.class];
        return (
            <div className="schelduleContainer">
                <select
                    defaultValue={0}
                    className="schelduleSelect"
                    onChange={(value) => this.setState({ currentDay: value.currentTarget.value })}
                >
                    <option value="0">Понедельник</option>
                    <option value="1">Вторник</option>
                    <option value="2">Среда</option>
                    <option value="3">Четверг</option>
                    <option value="4">Пятница</option>
                    <option value="5">Суббота</option>
                    <option value="6">Воскресенье</option>
                </select>
                <table className="schelduleList">
                    <tbody>
                        {data[this.state.currentDay] &&
                            data[this.state.currentDay].map((value, index) => (
                                <tr key={index} className="element">
                                    <td className="index">{index + 1}</td>
                                    <td className="value">{value}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scheldule;
