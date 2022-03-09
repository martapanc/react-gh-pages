import java from "../../../assets/images/languages/java.svg";
import spring from "../../../assets/images/languages/spring-3.svg";
import thymeleaf from "../../../assets/images/languages/thymeleaf.webp";
import hibernate from "../../../assets/images/languages/hibernate.svg";
import jsp from "../../../assets/images/languages/jsp.webp";
import python from "../../../assets/images/languages/python.svg";
import django from "../../../assets/images/languages/django.webp";
import js from "../../../assets/images/languages/js.svg";
import node from "../../../assets/images/languages/node.webp";
import ts from "../../../assets/images/languages/ts.webp";
import angular from "../../../assets/images/languages/angular.svg";
import react from "../../../assets/images/languages/react.svg";
import jquery from "../../../assets/images/languages/jquery.svg";
import cs from "../../../assets/images/languages/cs.svg";
import aspnet from "../../../assets/images/languages/asp-net.webp";
import html from "../../../assets/images/languages/html.svg";
import css from "../../../assets/images/languages/css.svg";
import sass from "../../../assets/images/languages/sass.svg";
import bootstrap from "../../../assets/images/languages/bootstrap.svg";
import mysql from "../../../assets/images/languages/mysql.svg";
import postgres from "../../../assets/images/languages/postgres.svg";
import php from "../../../assets/images/languages/php-logo.webp";
import win from "../../../assets/images/languages/win8.svg";
import mac from "../../../assets/images/languages/apple.svg";
import ubuntu from "../../../assets/images/languages/ubuntu.svg";
import debian from "../../../assets/images/languages/debian.svg";
import redhat from "../../../assets/images/languages/redhat.svg";
import intellij from "../../../assets/images/languages/intellij.webp";
import netbeans from "../../../assets/images/languages/netbeans.webp";
import vsc from "../../../assets/images/languages/vsc.svg";
import eclipse from "../../../assets/images/languages/eclipse.webp";
import atom from "../../../assets/images/languages/atom.webp";
import android from "../../../assets/images/languages/android-happy.webp";
import kotlin from "../../../assets/images/languages/kotlin.webp";
import firebase from "../../../assets/images/languages/icons8-firebase.svg";
import mongodb from "../../../assets/images/languages/mongodb-original.svg";
import flask from "../../../assets/images/languages/flask.webp";
import aws from "../../../assets/images/languages/aws.svg";
import gcp from "../../../assets/images/languages/gcp.webp";
import heroku from "../../../assets/images/languages/heroku.webp";
import docker from "../../../assets/images/languages/docker.svg";
import drupal from "../../../assets/images/languages/drupal.webp";
import gtm from "../../../assets/images/languages/gtm.svg";
import vue from "../../../assets/images/languages/vue.svg";
import azure from "../../../assets/images/languages/azure.svg";
import jenkins from "../../../assets/images/languages/jenkins.svg";

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
            "I've worked with Java for 6 years and I developed various projects for university and personal development, " +
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
            {object: react, name: "React"},
            {object: angular, name: "Angular"},
            {object: vue, name: "Vue"},
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
        icons: [
            {object: php, name: "PHP"},
            {object: drupal, name: "Drupal"}
        ],
        text:
            "The booking management service of my previous company was written in PHP - kind of a shock therapy experience, " +
            "still an excellent chance to learn about this language. I'm currently working with Drupal and I still " +
            "have a lot to explore - but I like challenges.",
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
            {object: azure, name: "Azure"},
            {object: jenkins, name: "Jenkins"},
            {object: gtm, name: "Google Tag Manager"},
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
