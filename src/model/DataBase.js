import Roles from "./Roles";
const DataBase = {
    usersCredentials: [
        {
            username: "teacherElena",
            password: "teacherElena",
        },
        {
            username: "studentXenia",
            password: "studentXenia",
        },
    ],

    users: [
        {
            username: "teacherElena",
            firstName: "Присакарь",
            lastName: "Елена",
            patronymic: "Олеговная",
            sex: "Женский",
            birthday: "12.08.2001",
            bornPlace: "Бельцы",
            address: "Бельцы",
            ethnicity: "Молдованка",
            role: Roles.Teacher,
            image: "lenuta.svg",
        },
        {
            username: "studentXenia",
            firstName: "Комаровская",
            lastName: "Ксения",
            patronymic: "Олеговная",
            sex: "Женский",
            birthday: "12.08.2007",
            bornPlace: "Бельцы",
            address: "Бельцы",
            ethnicity: "Молдованка",
            role: Roles.Student,
            image: "",
        },
    ],
};

export { DataBase };
