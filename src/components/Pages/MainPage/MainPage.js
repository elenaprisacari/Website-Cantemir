import React from "react";
import "./MainPage.css";
import menu from "../../../assets/img/menu.png";
import news from "../../../assets/img/news.png";
import news1 from "../../../assets/img/news1.png";
import dodon from "../../../assets/img/dodon.jpg";
import bigchild from "../../../assets/img/bigchild.jpg";
import news3 from "../../../assets/img/news3.png";
import news2 from "../../../assets/img/news2.png";

class MainPage extends React.Component {
    render() {
        return <div>
        <div class="main">
        <span class="meniu"> РАЗДЕЛЫ: </span>
        <div class="el10">
            <a href="news.html" target="_self">
                <p class="menu10">● Новости</p></a
            >
        </div>
        <div class="el11">
            <a href="ads.html" target="_self">
                <p class="menu11">● Объявления</p></a
            >
        </div>
        <div class="el12">
            <a href="lessons.html" target="_self">
                <p class="menu12">● Открытые уроки</p></a
            >
        </div>
        <div class="el13">
            <a href="achievements.html" target="_self">
                <p class="menu13">● Достижения</p></a
            >
        </div>
        <div class="el14">
            <a href="documents.html" target="_self">
                <p class="menu14">● Нормативные документы</p></a
            >
        </div>
        <img class="image9" src={menu} alt="" />
        <img class="image10" src={news} alt="" />
        <img class="image11" src={news1} alt="" />
        <img class="image12" src={dodon} alt="" />
        <img class="image20" src={bigchild} alt="" />
        <img class="image13" src={news3} alt="" />
        <span class="texts">
            <span class="t1">
                Бельцкий лицей капитально отремонтируют на деньги ЕС.
            </span>

            <span class="t2">
                Цель проекта – сократить тепло потери и расходы на
                обслуживание здания лицея. На церемонии подписания
                присутствовали руководство образовательного учреждения,
                представители Агенства регионального развития по северу
                Молдовы, немецкого агенства международного
                сотрудничества GIZ и ассоциации “Casmed”. Бельцкий лицей
                им. Д. Кантемира ждут большие изменения. В здании
                обновят фасад, заменят крышу, отопительную и
                вентиляционную системы, двери и окна, модернизируют
                столовую и другое. Средства на ремонт — 1 млн евро —
                выделяют страны Европейского союза в рамках
                регионального проекта по водоснабжению и
                энергоэффективности в общественных зданиях. В пятницу,
                13 декабря, в примарии состоялось официальное
                мероприятие по передаче технической документации для
                шести региональных проектов, одним из которых стала
                реконструкция лицея в северной столице.
            </span>
            <span class="t4"> Ссылка на источник:</span>
            <span class="t3">
                https://www.facebook.com/1442719172683690/posts/3025508717738053/?sfnsn=mo</span
            >
        </span>
        <span class="text1"> Интересует мнение </span>
        <span class="text2">
            Система контроля входа детей в школу:</span
        >
        <span class="text3">
            ● Необходимо внедрять доступ и учёт посредством карт
            (токенов) RFID
        </span>
        <span class="text4">
            ● Необходимо внедрять доступ и учёт посредством браслетов
            RFID</span
        >
        <span class="text5">
            ● Нет необходимости вести учёт посещений и контроль
            учащихся</span
        >
        <span class="text6"> Ответить </span>
        <img class="image14" src={news} alt="" />
        <img class="image15" src={news1} alt="" />
        <img class="image16" src={news2} alt="" />
    </div>
    </div> 
    }
}

export default MainPage;
