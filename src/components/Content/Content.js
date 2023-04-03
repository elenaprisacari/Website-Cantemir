import React from "react";
import "./Content.css";

import Pages from "../../model/Pages";
import MainPage from "../Pages/MainPage/MainPage";
import NewsPage from "../Pages/NewsPage/NewsPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";
import NottificationsPage from "../Pages/NotificationsPage/NotificationsPage";
import ScheldulePage from "../Pages/ScheldulePage/ScheldulePage";
import SchoolLifePage from "../Pages/SchoolLifePage/SchoolLifePage";
import GraduatesPage from "../Pages/GraduatesPage/GraduatesPage";
import IdeasPage from "../Pages/IdeasPage/IdeasPage";
import QuestionsPage from "../Pages/QuestionsPage/QuestionsPage";
import AccountPage from "../Pages/AccountPage/AccountPage";

import { DataBase } from "../../model/DataBase";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: DataBase.users.filter((user) => user.username === "teacherElena")[0],
            user: undefined,
        };
    }

    setContent(page) {
        switch (page) {
            case Pages.Main:
                return <MainPage />;
            case Pages.News:
                return <NewsPage />;
            case Pages.AboutUs:
                return <AboutUsPage />;
            case Pages.Teachers:
                return <TeachersPage />;
            case Pages.Notifications:
                return <NottificationsPage />;
            case Pages.Scheldule:
                return <ScheldulePage />;
            case Pages.SchoolLife:
                return <SchoolLifePage />;
            case Pages.Graduates:
                return <GraduatesPage />;
            case Pages.Ideas:
                return <IdeasPage />;
            case Pages.Questions:
                return <QuestionsPage />;
            case Pages.Account:
                return (
                    <AccountPage
                        loggedUser={this.state.user}
                        handleUser={(user) => this.setState({ user: user })}
                        logout={() => this.setState({ user: undefined })}
                    />
                );
            default:
                return <div>not found</div>;
        }
    }

    render() {
        return this.setContent(this.props.page);
    }
}

export default Content;
