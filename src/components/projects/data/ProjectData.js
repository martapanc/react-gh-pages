import fc from '../../../assets/images/projects/fiscalcode.webp';
import werner from '../../../assets/images/projects/werners.webp';
import ict from '../../../assets/images/projects/ict.webp';
import ictReport from '../../../assets/images/projects/Internship_Final_Report.pdf';
import gess from '../../../assets/images/projects/gess.webp';
import wc from '../../../assets/images/projects/wc.webp';
import bscThesis from '../../../assets/images/projects/SATD_Thesis.pdf';
import satd from '../../../assets/images/projects/satd.webp';
import mscBook from '../../../assets/images/projects/mscBook.webp';
import mscDiss from '../../../assets/images/projects/comp61511_dissertation.pdf';
import library from '../../../assets/images/projects/library.webp';
import glurns from '../../../assets/images/projects/glurns.webp';
import gdpr from '../../../assets/images/projects/gdpr.webp';
import emma from '../../../assets/images/projects/emma.webp';
import website from '../../../assets/images/projects/website.webp';

export const ProjectData = [
    {
        title: "Werner's Burgers & Panini",
        id: 'werners',
        photo: werner,
        repo: 'https://github.com/martapanc/restaurantManager',
        tags: ['java', 'js', 'db', 'web', 'uni'],
        text:
            'A full **Restaurant Manager webapp** in **Java** is the final project my team developed for ' +
            'the Internet & Mobile Services course: it allows customers to reserve a table or to book a ' +
            'takeaway order, and the restaurant managers to verify the status of the reservations and orders, ' +
            "add and remove takeaway meals and check other employees' accounts, mostly in the form of CRUD " +
            'tables.',
    },
    {
        title: 'Cloud computing & GDPR',
        id: 'gdpr',
        photo: gdpr,
        article:
            'https://www.computer.org/csdl/magazine/cd/2018/06/mcd2018060058/17D45XwUAKp',
        tags: ['cloud', 'security', 'public', 'uni'],
        text:
            'Disclosing personal data for a purpose not known by data subjects is a practice that the 2018 EU **General ' +
            'Data Protection Regulation** (GDPR) is supposed to prevent. This article gives an overview of the major aspects ' +
            'of GDPR related to provision, use, and maintenance of **cloud services and technologies**. <br/>The article ' +
            'was written in collaboration between professors and associates of the faculties of Law and Computer Science ' +
            'of the Free University of Bolzano, and was accepted by IEEE for publication.',
    },
    {
        title: 'Holiday request manager',
        id: 'timesheet',
        photo: ict,
        report: ictReport,
        tags: ['js', 'web', 'work'],
        text:
            'I interned for three months at the [ICT-Group](https://www.ict-group.it/en/) ' +
            'as a web developer, and my task was to build an additional feature to the company’s **HR ' +
            'management software**: a portal for the request and approval of the employee vacations, ' +
            'work permits, transfers and bank hours. The UI I developed consists of customisable calendars ' +
            'and timesheets, which offer different views according to the role of the logged user ' +
            '(employee or manager), and was built using **AngularJS** with the **Boostrap CSS** framework.',
    },
    {
        title: 'Food Saver (GESS 2017)',
        id: 'gess',
        photo: gess,
        site: 'https://globalsummerschool.org/shanghai/',
        tags: ['hack'],
        text:
            'I was selected (among 1200+ applications) to attend the <b>Global Entrepreneurship ' +
            "Summer School</b> (GESS) 2017 in Shanghai. This year's topic was &quot;Food&quot;, and our goal " +
            'was to find solutions to related problems - such as food waste, obesity, hidden ' +
            'hunger and food safety. My team designed a <b>mobile app</b> that connects users to ' +
            'supermarkets and local food suppliers: most food markets have an &quot;expiring soon&quot; ' +
            'section with aliments that cannot be displayed as too close to their expiration date. ' +
            'This app would be a database listing such products, so that customers can save money and help ' +
            '<b>reduce food waste</b>.',
    },
    {
        title: 'wc clone (Unix)',
        id: 'wc',
        photo: wc,
        repo: 'https://github.com/martapanc/comp61511',
        tags: ['python', 'uni'],
        text:
            "First complex project in **Python** - creating a clone of the **Unix' word count** tool, wc, based on re-engineering " +
            'techniques and black-box testing and using only the Python Standard Library for the main functionality. ' +
            'The result is a program that produces the same output as the original wc for all known input sequences and ' +
            'file formats, including binary files.',
    },
    {
        title: 'MSc Dissertation -<br/>Automated Grading',
        id: 'msc',
        photo: mscBook,
        report: mscDiss,
        tags: ['python', 'uni', 'public'],
        text:
            'I really liked building a wc clone as part of the Software Engineering course of my MSc - less that it took ' +
            'months to receive a grade for it. However, it gave me the prompt for the project of my dissertation project: ' +
            "designing a tool to **automatically run tests** for students' coding exercises, in order to ease the instructor's " +
            'job when evaluating and grading them',
    },
    {
        title: 'BSc Dissertation -<br/>Technical Debt',
        id: 'bsc',
        photo: satd,
        repo: 'https://github.com/martapanc/SATD-replication-package',
        report: bscThesis,
        tags: ['java', 'uni', 'public'],
        text:
            'My BSc graduation project: I developed an heuristic algorithm that parses the so-called "SATD methods", ' +
            'that is Java methods that are affected by "Self-Admitted Technical Debt", instances of **Technical Debt** that ' +
            'the developers self-documented in the form of comments. The research then analysed how such methods evolve ' +
            'from the moment the comment was introduced through Version Control and, based on the bugs reported in the ' +
            "code's issue tracker, how the presence of technical debt affects the amount of bugs on average.",
    },
    {
        title: 'Library Manager',
        id: 'library',
        photo: library,
        repo: 'https://github.com/martapanc/LibraryManagementApp',
        tags: ['java', 'uni', 'db'],
        text:
            'I developed a Library Management app as final project for the Database Systems course of my BSc. Written ' +
            'in Java and with a **PostgresSQL database**, it offers most functions a Library software is expected to have ' +
            '- book search by author, title and other data, user account to check borrowed books and deadlines to return them, ' +
            'and librarian account used to insert new titles into the database and to register book loans and returns.',
    },
    {
        title: 'Fiscal Code Calculator',
        id: 'fiscalcode',
        photo: fc,
        repo: 'https://github.com/martapanc/ItalianFiscalCodeCalculator',
        tags: ['java', 'uni'],
        text:
            'Another **Java** app developed for my uni programming course. It allows the user to ' +
            "calculate their Italian tax code ('[Codice Fiscale](https://en.wikipedia.org/wiki/Italian_fiscal_code)') " +
            'by entering their personal data.<br/>' +
            'The app was designed to exploit various advanced features of the Java language, ' +
            'such Exception handling, Multithreading, Generics, Reflection, RegEx and Streams. Also, JUnit tests ' +
            'cover edge cases for user input.',
    },
    {
        title: 'Hack-my-town',
        id: 'glurns',
        photo: glurns,
        site: 'http://hackmytown.unibz.it/',
        tags: ['hack', 'uni'],
        text:
            'A day of December 2014, four UniBZ computer science and design students were sent to the smallest town in South Tyrol, ' +
            '**Glorenza-Glurns**, with a challenge from their professors: find innovative ideas to **improve the life of a mountain village**, ' +
            'often isolated and closed in its daily life, which would offer history and attractions but fails to entice tourists to stay. ' +
            'Our solution, winner of the contest between UniBZ and other Italian universities, was to create a brand for Glorenza and a ' +
            'consortium for the towns in the area - a brand to promote the history, the beauty of the landscapes and the tastiness of the ' +
            'food and that tourists get to know and trust.',
    },
    {
        title: 'Project "EMMA"',
        id: 'emma',
        photo: emma,
        video: 'https://www.youtube.com/watch?v=5dLfFvGAIjQ',
        tags: ['raspi', 'hack', 'uni'],
        text:
            '"Inventing by recycling" was the theme of the final project of my Management Engineering course at ' +
            'University of Bolzano: starting from the collection of old everyday objects, my team used a lamp container, ' +
            'a LED matrix and a **Raspberry Pi** to build a wall panel that displays scrolling messages and pictures. ' +
            'The software was a simple bash script that converted images and text into a suitable format and displayed ' +
            'it on the matrix.',
    },
    {
        title: 'mpancaldi.com',
        id: 'site',
        photo: website,
        repo: 'https://github.com/martapanc/react-gh-pages',
        tags: ['web'],
        text:
            'This very website :) <br/> Built with ReactJS, it\' also a chance to play around with my web ' +
            'development skills and experiment with front-end technologies.',
    },
];

export default ProjectData;