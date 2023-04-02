import React from "react";
import "./AboutUsPage.css";

import portret from "../../../assets/img/portret.png";
import teacher from "../../../assets/img/teacher.jpg";
import child2 from "../../../assets/img/clild2.png";

class AboutUsPage extends React.Component {
    render() {
        return <div>
            <div class="about">
            <img class="image25" src={portret} alt="" />
            <span class="l">
                ТЕОРЕТИЧЕСКИЙ ЛИЦЕЙ ИМЕНИ ДМИТРИЯ КАНТЕМИРА мун. Бэлць
                приветствует Вас на своем информационном портале.</span
            >
            <span class="l1">
                Здесь Вы найдете всю необходимую информацию о нашей
                деятельности, планах на будущее, а также много полезного и
                интересного. Приятного путешествия в мир знаний!</span
            >
            <span class="l2">
                *Для удобной навигации по сайту, используйте меню.</span
            >
        </div>
        <div class="aboutus">
            <img class="image26" src={teacher} alt="" />
            <span class="l3"> О НАС</span>
            <span class="l4">
                Уважаемые родители и ученики, в день, когда вы впервые
                переступаете порог нашего лицея, вы становитесь частью большой и
                дружной семьи — cемьи со своими традициями, правилами,
                историей.</span
            >
            <span class="l5">
                Вместе мы пройдём путь, полный событий, приключений, радости
                побед и познания.</span
            >
            <span class="l6">
                Для нас важно, чтобы каждый из вас стал всесторонне развитым и
                успешным человеком.</span
            >
            <span class="l7">
                Уверенны, что наш лицей станет для вас вторым домом, где
                понимают, помогают, ценят, уважают, и направляют.</span
            >
            <span class="l8">
                Мы искренне рады, что этот важный период жизни, мы пройдем
                вместе с вами.</span
            >
            <img class="image27" src={child2} alt="" />
            <span class="l9"> ЦЕЛИ И ЗАДАЧИ</span>
            <span class="l10"> Цели: </span>
            <span class="l11"> — получение качественного образования;</span>
            <span class="l12">
                — подготовка кадров для реализации себя в профессиональной
                среде.</span
            >
            <span class="l13"> Задачи: </span>
            <span class="l14">
                — поиск и развитие потенциала каждого учащегося;</span
            >
            <span class="l15">
                — совершенствование методик, техник и инструментов, используемых
                в процессе обучения;</span
            >
            <span class="l16">
                — развитие материально-технической базы, соответствующей
                потребностям учеников и требованиям к нормам современного
                образования.</span
            >
        </div>
        <div class="lines"></div>

    
        </div>
    }
    }

export default AboutUsPage;
