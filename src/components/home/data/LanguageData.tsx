const java = require("../../../assets/images/languages/java.svg");
const spring = require("../../../assets/images/languages/spring-3.svg");
const thymeleaf = require("../../../assets/images/languages/thymeleaf.webp");
const hibernate = require("../../../assets/images/languages/hibernate.svg");
const jsp = require("../../../assets/images/languages/jsp.webp");
const python = require("../../../assets/images/languages/python.svg");
const django = require("../../../assets/images/languages/django.webp");
const js = require("../../../assets/images/languages/js.svg");
const node = require("../../../assets/images/languages/node.webp");
const ts = require("../../../assets/images/languages/ts.webp");
const angular = require("../../../assets/images/languages/angular.svg");
const react = require("../../../assets/images/languages/react.svg");
const jquery = require("../../../assets/images/languages/jquery.svg");
const cs = require("../../../assets/images/languages/cs.svg");
const aspnet = require("../../../assets/images/languages/asp-net.webp");
const html = require("../../../assets/images/languages/html.svg");
const css = require("../../../assets/images/languages/css.svg");
const sass = require("../../../assets/images/languages/sass.svg");
const bootstrap = require("../../../assets/images/languages/bootstrap.svg");
const mysql = require("../../../assets/images/languages/mysql.svg");
const postgres = require("../../../assets/images/languages/postgres.svg");
const php = require("../../../assets/images/languages/php-logo.webp");
const win = require("../../../assets/images/languages/win8.svg");
const mac = require("../../../assets/images/languages/apple.svg");
const ubuntu = require("../../../assets/images/languages/ubuntu.svg");
const debian = require("../../../assets/images/languages/debian.svg");
const redhat = require("../../../assets/images/languages/redhat.svg");
const intellij = require("../../../assets/images/languages/intellij.webp");
const netbeans = require("../../../assets/images/languages/netbeans.webp");
const vsc = require("../../../assets/images/languages/vsc.svg");
const eclipse = require("../../../assets/images/languages/eclipse.webp");
const atom = require("../../../assets/images/languages/atom.webp");
const android = require("../../../assets/images/languages/android-happy.webp");
const kotlin = require("../../../assets/images/languages/kotlin.webp");
const firebase = require("../../../assets/images/languages/icons8-firebase.svg");
const mongodb = require("../../../assets/images/languages/mongodb-original.svg");
const flask = require("../../../assets/images/languages/flask.webp");
const aws = require("../../../assets/images/languages/aws.svg");
const gcp = require("../../../assets/images/languages/gcp.webp");
const heroku = require("../../../assets/images/languages/heroku.webp");
const docker = require("../../../assets/images/languages/docker.svg");

export const LanguageData = {
    java: {
        title: "Java",
        icons: [
            {object: java, name: "Java"},
            {object: hibernate, name: "Hibernate"},
            {object: spring, name: "Spring"},
            {object: thymeleaf, name: "Thymeleaf"},
            {object: jsp, name: "JSP"},
        ],
        text:
            "I've worked with Java for 5 years and I developed various projects for university and personal development, " +
            "including a Library Management software and a Restaurant reservations and take-away webapp in JSP." +
            "\nCheck out my projects [here](/projects).",
        show: true,
    },
    python: {
        title: "Python",
        icons: [
            {object: python, name: "Python"},
            {object: django, name: "Django"},
            {object: flask, name: "Flask"},
        ],
        text:
            "I taught myself Python and it quickly became one of my favourite languages. I mainly used it to develop an " +
            "automated assessment tool for programming assignments, which was the subject of my MSc Dissertation.",
        show: true,
    },
    js: {
        title: "JS, Angular, React",
        icons: [
            {object: js, name: "JavaScript"},
            {object: ts, name: "TypeScript"},
            {object: node, name: "Node"},
            {object: jquery, name: "JQuery"},
            {object: angular, name: "Angular"},
            {object: react, name: "React"},
        ],
        text:
            "I delved into JavaScript during my work placements. In particular, I developed an interactive timesheet " +
            "with Angular, and I've learnt React in my current job, building components for the " +
            "[Rentalcars.com](https://www.rentalcars.com/) website.",
        show: true,
    },
    web: {
        title: "Web development",
        icons: [
            {object: html, name: "HTML"},
            {object: css, name: "CSS"},
            {object: sass, name: "Sass"},
            {object: bootstrap, name: "Bootstrap"},
        ],
        text:
            "Working on the front-end is always good fun and gives me the chance to explore frameworks like Bootstrap and design " +
            "techniques. I've built web apps for various uni and personal projects - [check them out](/projects).",
        show: false,
    },
    android: {
        title: "Mobile development",
        icons: [
            {object: android, name: "Android"},
            {object: kotlin, name: "Kotlin"},
        ],
        text:
            "I've started learning Kotlin last year, as I'm intrigued by its features and possibilities for mobile development. " +
            "For now I'm following Google's tutorials for developing Android applications, " +
            "and I can't wait to apply what I've learned to create complex apps. Stay tuned ;)",
        show: false,
    },
    cs: {
        title: "C#",
        icons: [
            {object: cs, name: "C#"},
            {object: aspnet, name: "C#"},
        ],
        text:
            "*Medicus*, a medical products online store, was a group project I worked on for the Information Security " +
            "course of my BSc. It used ASP.NET and focused on security and privacy for customers.",
        show: false,
    },
    sql: {
        title: "Databases",
        icons: [
            {object: mysql, name: "MySQL"},
            {object: postgres, name: "PostgreSQL"},
            {object: mongodb, name: "MongoDB"},
            {object: firebase, name: "Firestore"},
        ],
        text:
            "A Library Manager was the project that introduced me to complex relational db architectures. " +
            "Since then I designed several systems for personal and work projects, mostly with Postgres and MySQL, " +
            "as well as MongoDB and Firestore in the NoSQL world.",
        show: false,
    },
    php: {
        title: "PHP",
        icons: [{object: php, name: "PHP"}],
        text:
            "The booking management service of my current company is written in PHP, which was a good chance to learn " +
            "about this language. I still have a lot to learn and explore - but I like challenges.",
        show: false,
    },
    os: {
        title: "OSs",
        icons: [
            {object: win, name: "Windows"},
            {object: mac, name: "Mac"},
            {object: ubuntu, name: "Ubuntu"},
            {object: debian, name: "Debian"},
            {object: redhat, name: "RedHat"},
        ],
        text:
            "I'm confident working with all the common operating systems, MacOS and Windows in particular. Linux " +
            "distributions I have experience with are Ubuntu, Raspbian/Debian and RedHat.",
        show: false,
    },
    cloud: {
        title: "Cloud platforms",
        icons: [
            {object: aws, name: "Amazon Web Services"},
            {object: gcp, name: "Google Cloud Platform"},
            {object: heroku, name: "Heroku"},
            {object: docker, name: "Docker"}
        ],
        text:
            "After spending the first years in uni relying on my <i>localhost</i>, I made an effort to " +
            "learn how to deploy servers on the cloud. I still have <b>loads</b> to learn, especially about the huge " +
            "worlds of AWS and GCP, but for now, Heroku is a favourite for its simplicity (and the free tier).",
        show: false,
    },
    ide: {
        title: "IDEs",
        icons: [
            {object: intellij, name: "IntelliJ"},
            {object: netbeans, name: "NetBeans"},
            {object: vsc, name: "Visual Studio"},
            {object: eclipse, name: "Eclipse"},
            {object: atom, name: "Atom"},
        ],
        text:
            "IntelliJ and the Jetbrains suite are a favourite, but I have experience with NetBeans, Visual Studio " +
            "and Eclipse, as well as Atom for quick coding.",
        show: false,
    },
};

export default LanguageData;
