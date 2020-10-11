const fc = require("../../../assets/images/projects/fiscalcode.webp");
const fcApp = require("../../../assets/images/projects/fc_app.webp");
const werner = require("../../../assets/images/projects/werners.webp");
const ict = require("../../../assets/images/projects/ict.webp");
const ictReport = require("../../../assets/images/projects/Internship_Final_Report.pdf");
const gess = require("../../../assets/images/projects/gess.webp");
const wc = require("../../../assets/images/projects/wc.webp");
const bscThesis = require("../../../assets/images/projects/SATD_Thesis.pdf");
const satd = require("../../../assets/images/projects/satd.webp");
const mscBook = require("../../../assets/images/projects/mscBook.webp");
const mscDiss = require("../../../assets/images/projects/comp61511_dissertation.pdf");
const library = require("../../../assets/images/projects/library.webp");
const glurns = require("../../../assets/images/projects/glurns.webp");
const gdpr = require("../../../assets/images/projects/gdpr.webp");
const emma = require("../../../assets/images/projects/emma.webp");
const website = require("../../../assets/images/projects/website.webp");
const noodle1 = require("../../../assets/images/projects/noodle1.webp");
const noodlePics = require("../../../assets/images/projects/noodle-pics.pdf");
const zebra = require("../../../assets/images/projects/zebra.webp");
const programming = require("../../../assets/images/projects/programming.webp");
const bitbar = require("../../../assets/images/projects/Bitbar.webp");
const twitch = require("../../../assets/images/projects/twitch.webp");

function shuffle(array: string | any[]) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        // @ts-ignore
        randomIndex = parseInt(Math.floor(Math.random() * currentIndex), 10);

        // @ts-ignore
        currentIndex = parseInt(currentIndex-1, 10);

        temporaryValue = array[currentIndex];
        // @ts-ignore
        array[currentIndex] = array[randomIndex];
        // @ts-ignore
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const ProjectData = [
    {
        title: "Team toolbar plugin",
        id: "bitbar",
        year: "2020",
        photo: bitbar,
        repo: "https://github.com/martapanc/BitBar-distrib",
        tags: ["python", "work"],
        text:
            "Many teams have a considerable number of processes and metrics to monitor and links to web resources, which " +
            "often end up all over the place in the browser. To gather all of those I created a plugin for " +
            '<a href="https://getbitbar.com/" target="_blank">BitBar</a>, a useful app that lets you put the output ' +
            "from any script in the MacOS toolbar. Connecting to the company's servers, the toolbar shows Bamboo build " +
            "and deployment processes, pull requests, release statuses and such. Now my team uses the toolbar on a daily " +
            "basis and I'm currently working on extending its functionality, e.g. to allow other teams to easily add their " +
            "own configuration.",
    },
    {
        title: "Werner's Restaurant",
        id: "werners",
        year: "2017",
        photo: werner,
        repo: "https://github.com/martapanc/restaurantManager",
        site: "https://werners-restaurant.herokuapp.com/",
        tags: ["java", "js", "db", "web", "uni"],
        text:
            "A full **Restaurant Manager webapp** in **Java** is the final project my team developed for " +
            "the Internet & Mobile Services course: it allows customers to reserve a table or to book a " +
            "takeaway order, and the restaurant managers to verify the status of the reservations and orders, " +
            "add and remove takeaway meals and check other employees' accounts, mostly in the form of CRUD " +
            "tables. <br/>I've recently made a v2 in Spring and deployed it on Heroku - " +
            '<a href="https://werners-restaurant.herokuapp.com/" target="_blank">check it out</a>!',
    },
    {
        title: "Cloud computing and GDPR",
        id: "gdpr",
        year: "2018",
        photo: gdpr,
        article:
            "https://www.computer.org/csdl/magazine/cd/2018/06/mcd2018060058/17D45XwUAKp",
        tags: ["cloud", "security", "public", "uni"],
        text:
            "Disclosing personal data for a purpose not known by data subjects is a practice that the 2018 EU **General " +
            "Data Protection Regulation** (GDPR) is supposed to prevent. This article gives an overview of the major aspects " +
            "of GDPR related to provision, use, and maintenance of **cloud services and technologies**. <br/>The article " +
            "was written in collaboration between professors and associates of the faculties of Law and Computer Science " +
            "of the Free University of Bolzano, and was accepted by IEEE for publication.",
    },
    {
        title: "Holiday request manager",
        id: "timesheet",
        year: "2016",
        photo: ict,
        report: ictReport,
        tags: ["js", "web", "work"],
        text:
            'I interned for three months at the <a href="https://www.ict-group.it/en/" target="_blank">ICT-Group</a> ' +
            "as a web developer, and my task was to build an additional feature to the company’s **HR " +
            "management software**: a portal for the request and approval of the employee vacations, " +
            "work permits, transfers and bank hours. The UI I developed consists of customisable calendars " +
            "and timesheets, which offer different views according to the role of the logged user " +
            "(employee or manager), and was built using **AngularJS** with the **Boostrap CSS** framework.",
    },
    {
        title: "Food Saver (GESS 2017)",
        id: "gess",
        year: "2018",
        photo: gess,
        site: "https://globalsummerschool.org/shanghai/",
        tags: ["hack"],
        text:
            "I was selected (among 1200+ applications) to attend the <b>Global Entrepreneurship " +
            "Summer School</b> (GESS) 2017 in Shanghai. This year's topic was &quot;Food&quot;, and our goal " +
            "was to find solutions to related problems - such as food waste, obesity, hidden " +
            "hunger and food safety. My team designed a <b>mobile app</b> that connects users to " +
            "supermarkets and local food suppliers: most food markets have an &quot;expiring soon&quot; " +
            "section with aliments that cannot be displayed as too close to their expiration date. " +
            "This app would be a database listing such products, so that customers can save money and help " +
            "<b>reduce food waste</b>.",
    },
    {
        title: "wc clone (Unix)",
        id: "wc",
        year: "2017",
        photo: wc,
        repo: "https://github.com/martapanc/comp61511",
        tags: ["python", "uni"],
        text:
            "First complex project in **Python** - creating a clone of the **Unix' word count** tool, wc, based on re-engineering " +
            "techniques and black-box testing and using only the Python Standard Library for the main functionality. " +
            "The result is a program that produces the same output as the original wc for all known input sequences and " +
            "file formats, including binary files.",
    },
    {
        title: "MSc Dissertation -<br/>Automated Grading",
        id: "msc",
        year: "2018",
        photo: mscBook,
        report: mscDiss,
        tags: ["python", "uni", "public"],
        text:
            "I really liked building a wc clone as part of the Software Engineering course of my MSc - less that it took " +
            "months to receive a grade for it. However, it gave me the prompt for the project of my dissertation project: " +
            "designing a tool to **automatically run tests** for students' coding exercises, in order to ease the instructor's " +
            "job when evaluating and grading them",
    },
    {
        title: "BSc Dissertation -<br/>Technical Debt",
        id: "bsc",
        year: "2017",
        photo: satd,
        repo: "https://github.com/martapanc/SATD-replication-package",
        report: bscThesis,
        tags: ["java", "uni", "public"],
        text:
            "My BSc graduation project: I developed an heuristic algorithm that parses the so-called \"SATD methods\", " +
            "that is Java methods that are affected by \"Self-Admitted Technical Debt\", instances of **Technical Debt** that " +
            "the developers self-documented in the form of comments. The research then analysed how such methods evolve " +
            "from the moment the comment was introduced through Version Control and, based on the bugs reported in the " +
            "code's issue tracker, how the presence of technical debt affects the amount of bugs on average.",
    },
    {
        title: "Library Manager",
        id: "library",
        year: "2015",
        photo: library,
        repo: "https://github.com/martapanc/LibraryManagementApp",
        tags: ["java", "uni", "db"],
        text:
            "I developed a Library Management app as final project for the Database Systems course of my BSc. Written " +
            "in Java and with a **PostgresSQL database**, it offers most functions a Library software is expected to have " +
            "- book search by author, title and other data, user account to check borrowed books and deadlines to return them, " +
            "and librarian account used to insert new titles into the database and to register book loans and returns.",
    },
    {
        title: "Fiscal Code Calculator (Desktop app)",
        id: "fiscalcode",
        year: "2015",
        photo: fc,
        repo: "https://github.com/martapanc/ItalianFiscalCodeCalculator",
        tags: ["java", "uni"],
        text:
            "Another **Java** app developed for my uni programming course. It allows the user to calculate their Italian tax code " +
            '(<a href="https://en.wikipedia.org/wiki/Italian_fiscal_code" target="_blank">Codice Fiscale</a>) by ' +
            "entering their personal data.<br/>The app was designed to exploit various advanced features of the Java language, " +
            "such Exception handling, Multithreading, Generics, Reflection, RegEx and Streams. Also, " +
            "I recently reused the code and built an Android app.",
    },
    {
        title: "Fiscal Code (Android)",
        id: "fiscalcode_app",
        year: "2020",
        photo: fcApp,
        link: "https://play.google.com/store/apps/details?id=com.pancaldim.fiscalcode_app",
        repo: "https://github.com/martapanc/ItalianFiscalCodeCalculatorApp",
        tags: ["java", "kotlin", "uni", "android"],
        text:
            "I started learning Android development recently and, in order to focus on the feature of the mobile world, " +
            "as well as on practising with Kotlin, I've been reusing the Java backend of the Fiscal Code calculator " +
            "I built in uni. Check out the result on the " +
            '<a href="https://play.google.com/store/apps/details?id=com.pancaldim.fiscalcode_app">Play Store</a>!',
    },
    {
        title: "Hack-my-town",
        id: "glurns",
        year: "2014",
        photo: glurns,
        site: "http://hackmytown.unibz.it/",
        tags: ["hack", "uni"],
        text:
            "A day of December 2014, four UniBZ computer science and design students were sent to the smallest town in South Tyrol, " +
            "**Glorenza-Glurns**, with a challenge from their professors: find innovative ideas to **improve the life of a mountain village**, " +
            "often isolated and closed in its daily life, which would offer history and attractions but fails to entice tourists to stay. " +
            "Our solution, winner of the contest between UniBZ and other Italian universities, was to create a brand for Glorenza and a " +
            "consortium for the towns in the area - a brand to promote the history, the beauty of the landscapes and the tastiness of the " +
            "food and that tourists get to know and trust.",
    },
    {
        title: "Project \"EMMA\"",
        id: "emma",
        year: "2014",
        photo: emma,
        video: "https://www.youtube.com/watch?v=5dLfFvGAIjQ",
        tags: ["raspi", "hack", "uni"],
        text:
            "\"Inventing by recycling\" was the theme of the final project of my Management Engineering course at " +
            "University of Bolzano: starting from the collection of old everyday objects, my team used a lamp container, " +
            "a LED matrix and a **Raspberry Pi** to build a wall panel that displays scrolling messages and pictures. " +
            "The software was a simple bash script that converted images and text into a suitable format and displayed " +
            "it on the matrix.",
    },
    {
        title: "mpancaldi.co.uk",
        id: "site",
        year: "2020",
        photo: website,
        repo: "https://github.com/martapanc/react-gh-pages",
        tags: ["web", "self"],
        text:
            "This very website :) <br/> Built with ReactJS and later migrated to Typescript, it's also a chance to play around with my web " +
            "development skills and experiment with front-end technologies.",
    },
    {
        title: "Rentalcars.com Premium",
        id: "premium",
        year: "2019",
        photo: noodle1,
        pics: noodlePics,
        tags: ["web", "work"],
        text:
            "As a part of the Graduate Scheme at Booking.com, I joined the team that develops the **\"Premium\" insurance product**, " +
            "which offers exclusive benefits to the customer such as skipping the line at the car pickup counter, low deposit " +
            "and a dedicated helpline to deal with claims. We built the UI in **React**, developing various components (a comparison " +
            "of the available insurance options for the car details page, a few upsell banners and information sections) that we then " +
            "integrated in the main webapp.",
    },
    {
        title: "Web Scraper",
        id: "scraper",
        year: "2019",
        photo: zebra,
        repo: "https://github.com/martapanc/Zebra-Scraper",
        tags: ["python", "self"],
        text:
            "What to do when your energy supplier offers a live balance of the energy usage in your account and you wish to monitor it " +
            "to know how much you're spending, but at the same time you don't want to login every few hours? For me it was the perfect " +
            "chance to learn **web scraping** with Python. The result is a script that logs in to my account, calls the supplier's API " +
            "at the desired time intervals and saves the results. A simple task, but a meaningful achievement and a fun way to apply coding " +
            "skills to a real-life problem.",
    },
    {
        title: "Daily Programming",
        id: "daily",
        year: "2019",
        photo: programming,
        repo: "https://github.com/martapanc/dailyProgramming",
        tags: ["java", "self"],
        text:
            "They say \"Practice makes perfect\", and that's why a good programmer should write code every day. <br/>The way I like to practise, when I don't " +
            "have more complex projects to work on, is to pick a coding challenge (e.g. from " +
            '<a href="https://www.reddit.com/r/dailyprogrammer/" target="_blank">r/dailyProgrammer</a>, ' +
            '<a href="https://www.codewars.com/dashboard/" target="_blank">CodeWars</a>, ' +
            '<a href="https://projecteuler.net/" target="_blank">Project Euler</a>, ' +
            '<a href="https://adventofcode.com/" target="_blank">Advent of Code</a>, ' +
            "...), or simply to think of a problem I want to tackle, and write my solution for it. This repository is a collection of all such challenges.",
    },
    {
        title: "Twitch-to-Slack notifier",
        id: "twitch",
        year: "2020",
        photo: twitch,
        repo: "https://github.com/martapanc/Twitch-notifier",
        tags: ["python", "self"],
        text:
            "I never want to miss a live show from my favourite Twitch streamers, and I'm used to grouping notifications " +
            "on Slack channels as a way to organise them. After testing services like Zapier and IFTTT and getting quite dissatisfied " +
            "with the licence limitations or the lack of customisation, I decided to write my own **cron job in Python**: it " +
            "queries the **Twitch API** to find which of the streamers I follow goes live and then connects to a **Slack webhook**, " +
            "displaying a nice-looking message. <br/>Never gonna miss a show again!",
    },
];

export default shuffle(ProjectData);
