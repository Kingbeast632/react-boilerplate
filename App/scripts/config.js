var CONFIG = {

    header: {
        logo: {
            src: "/resources/mosiddi.png",
            height: 100
        },
        menu: [
            {
                text: "Home",
                route: ""
            },
            {
                text: "About",
                route: "about"
            },
            {
                text: "Contact",
                route: "contact"
            }
        ]
    },

    home: {
        header: "Hello World!",
        content: "This is Mo's World!"
    },

    about: {
        header: "About Me!",
        content: "I'm Awesome!!"
    },

    contact: {
      header: "Contacts",
      people: [
            {
                name: "Mohammed Siddeeq",
                phone: "5432 Gerald Drive"
            },
            {
                name: "Wafeeq Mujahid",
                phone: "3215 Waffles Drive"
            },
            {
                name: "Ismail Siddeeq",
                phone: "2953 King Drive"
            }
        ]
    },

    data: {
        users: [
            {
                name: "Mohammed Siddeeq",
                phone: "317-828-8931"
            },
            {
                name: "Maliyah Siddeeq",
                phone: "317-828-8900"
            },
            {
                name: "Nasir Siddeeq",
                phone: "317-828-8911"
            }
        ]
    }
};

module.exports = CONFIG;
