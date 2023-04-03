import React from "react";
import "./Course.css";

import noImage from "../../../../../assets/img/noImage.svg";

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            image: undefined,
        };

        this.loadImage(this.props.course.logo);
    }

    render() {
        return (
            <div className="courseContainer">
                <div className="courseTitle">{this.state.course.name}</div>
                <div className="courseDate">{this.state.course.date}</div>
                <div className="dataImageContainer">
                    <div className="dataContainer">
                        <div className="label">Аудитория</div>
                        <div>{this.state.course.auditory}</div>
                        <div className="label">Организатор</div>
                        <a href={this.state.course.link ? this.state.course.link : ""} target="_blank" rel="noreferrer">
                            {this.state.course.administrator}
                        </a>
                        <div className="label">Тип</div>
                        <div>{this.state.course.type}</div>
                        <div className="label">Формат</div>
                        <div>{this.state.course.format}</div>
                        <div className="label">Объем</div>
                        <div>{this.state.course.volume}</div>
                        <div className="label">Стоимость</div>
                        <div>{this.state.course.cost === 0 ? "Бесплатное мероприятие" : this.state.course.cost}</div>
                    </div>
                    <img className="courseImage" src={this.state.image} alt="" />
                </div>
            </div>
        );
    }

    loadImage = async (param) => {
        try {
            const { default: src } = await import(`../../../../../assets/img/${param}`);
            this.setState({ image: src });
        } catch (err) {
            console.log(err);
            this.setState({ image: noImage });
        }
    };
}

export default Course;
