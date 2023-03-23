import React from "react";
import "./AboutUsPage.css";
import image from "../../../assets/img/teacher.jpg"

class AboutUsPage extends React.Component {
    render() {
        return (<div> 
            <div className="about">
        <img className="image25" src="./assests/img/portret.png" alt="" />
        <span className="l">
            ТЕОРЕТИЧЕСКИЙ ЛИЦЕЙ ИМЕНИ ДМИТРИЯ КАНТЕМИРА мун. Бэлць
            приветствует Вас на своем информационном портале.</span
        >
        <span className="l1">
            Здесь Вы найдете всю необходимую информацию о нашей
            деятельности, планах на будущее, а также много полезного и
            интересного. Приятного путешествия в мир знаний!</span
        >
        <span className="l2">
            *Для удобной навигации по сайту, используйте меню.</span
        >
    </div>
    <div className="aboutus">
        <img className="image26" src= {image} alt="" />
        <span className="l3"> О НАС</span>
        <span className="l4">
            Уважаемые родители и ученики, в день, когда вы впервые
            переступаете порог нашего лицея, вы становитесь частью большой и
            дружной семьи — cемьи со своими традициями, правилами,
            историей.</span
        >
        <span className="l5">
            Вместе мы пройдём путь, полный событий, приключений, радости
            побед и познания.</span
        >
        <span className="l6">
            Для нас важно, чтобы каждый из вас стал всесторонне развитым и
            успешным человеком.</span
        >
        <span className="l7">
            Уверенны, что наш лицей станет для вас вторым домом, где
            понимают, помогают, ценят, уважают, и направляют.</span
        >
        <span className="l8">
            Мы искренне рады, что этот важный период жизни, мы пройдем
            вместе с вами.</span
        >
        <img className="image27" src="./assests/img/clild2.png" alt="" />
        <span className="l9"> ЦЕЛИ И ЗАДАЧИ</span>
        <span className="l10"> Цели: </span>
        <span className="l11"> — получение качественного образования;</span>
        <span className="l12">
            — подготовка кадров для реализации себя в профессиональной
            среде.</span
        ></div>
</div>)
    }
}
export default AboutUsPage;
