import java from '../../../assets/images/languages/java.svg';
import python from '../../../assets/images/languages/python.svg';
import js from '../../../assets/images/languages/js.svg';
import angular from '../../../assets/images/languages/angular.svg';
import react from '../../../assets/images/languages/react.svg';
import jquery from '../../../assets/images/languages/jquery.svg';
import cs from '../../../assets/images/languages/cs.svg';
import html from '../../../assets/images/languages/html.svg';
import css from '../../../assets/images/languages/css.svg';
import sass from '../../../assets/images/languages/sass.svg';
import bootstrap from '../../../assets/images/languages/bootstrap.svg';
import mysql from '../../../assets/images/languages/mysql.svg';
import postgres from '../../../assets/images/languages/postgres.svg';
import php from '../../../assets/images/languages/php-plain.svg';
import win from '../../../assets/images/languages/win8.svg';
import mac from '../../../assets/images/languages/apple.svg';
import ubuntu from '../../../assets/images/languages/ubuntu.svg';
import debian from '../../../assets/images/languages/debian.svg';
import redhat from '../../../assets/images/languages/redhat.svg';
import intellij from '../../../assets/images/languages/intellij.png';
import netbeans from '../../../assets/images/languages/netbeans.png';
import vsc from '../../../assets/images/languages/vsc.svg';
import eclipse from '../../../assets/images/languages/eclipse.png';
import atom from '../../../assets/images/languages/atom.jpeg';

export const LanguageData = {
    java: {
        title: 'Java',
        icons: [{ object: java, name: 'Java' }],
        text:
            "I've worked with Java for 5 years and I developed various projects for university and personal development, " +
            'including a Library Management software and a Restaurant reservations and take-away webapp in JSP.' +
            '\nCheck out my projects [here](/projects).',
        show: true,
    },
    python: {
        title: 'Python',
        icons: [{ object: python, name: 'Python' }],
        text:
            'I taught myself Python and it quickly became one of my favourite languages. I mainly used it to develop an ' +
            'automated assessment tool for programming assignments, which was the subject of my MSc Dissertation.',
        show: true,
    },
    js: {
        title: 'JS, Angular, React',
        icons: [
            { object: js, name: 'JavaScript' },
            { object: jquery, name: 'JQuery' },
            { object: angular, name: 'Angular' },
            { object: react, name: 'React' },
        ],
        text:
            'I delved into JavaScript during my work placements. In particular, I developed an interactive timesheet ' +
            "with Angular, and I've learnt React in my current job, building components for the " +
            '[Rentalcars.com](https://www.rentalcars.com/) website.',
        show: true,
    },
    cs: {
        title: 'C#',
        icons: [{ object: cs, name: 'C#' }],
        text:
            '*Medicus*, a medical products online store, was a group project I worked on for the Information Security ' +
            'course of my BSc. It used ASP.NET and focused on security and privacy for customers.',
        show: false,
    },
    web: {
        title: 'Web development',
        icons: [
            { object: html, name: 'HTML' },
            { object: css, name: 'CSS' },
            { object: sass, name: 'Sass' },
            { object: bootstrap, name: 'Bootstrap' },
        ],
        text:
            'Working on the front-end is always good fun and gives me the chance to explore frameworks and design ' +
            "techniques. I've worked with Bootstrap on various uni and personal projects - [check them out](/projects).",
        show: false,
    },
    sql: {
        title: 'JS, Angular, React',
        icons: [
            { object: mysql, name: 'MySQL' },
            { object: postgres, name: 'PostgreSQL' },
        ],
        text:
            'A Library Management app was the project that introduced me to complex Database architectures. ' +
            'Since then I designed several systems for both personal and work projects, mostly with Postgres and MySQL.',
        show: false,
    },
    php: {
        title: 'PHP',
        icons: [{ object: php, name: 'PHP' }],
        text:
            'The booking management service of my current company is written in PHP, which was a good chance to learn ' +
            'about this language. I still have a lot to learn and explore - but I like being challenged.',
        show: false,
    },
    os: {
        title: 'OSs',
        icons: [
            { object: win, name: 'Windows' },
            { object: mac, name: 'Mac' },
            { object: ubuntu, name: 'Ubuntu' },
            { object: debian, name: 'Debian' },
            { object: redhat, name: 'RedHat' },
        ],
        text:
            "I'm confident working with all the common operating systems, MacOS and Windows in particular. Linux " +
            'distribution I have experience of are Ubuntu, Raspbian/Debian and RedHat.',
        show: false,
    },
    ide: {
        title: 'IDEs',
        icons: [
            { object: intellij, name: 'IntelliJ' },
            { object: netbeans, name: 'NetBeans' },
            { object: vsc, name: 'Visual Studio' },
            { object: eclipse, name: 'Eclipse' },
            { object: atom, name: 'Atom' },
        ],
        text:
            'IntelliJ and the Jetbrains suite are a favourite, but I have experience with NetBeans, Visual Studio ' +
            'and Eclipse, as well as Atom for quick coding.',
        show: false,
    },
};

export default LanguageData;
