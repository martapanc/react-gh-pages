import fc from '../../../assets/images/projects/fiscalcode.jpg';
import werner from '../../../assets/images/projects/Werners.jpeg';
import ict from '../../../assets/images/projects/ict.png';
import ictReport from '../../../assets/images/projects/Internship_Final_Report.pdf';
import gess from '../../../assets/images/projects/gess.jpg';

export const ProjectData = [
    {
        title: 'Fiscal Code Calculator',
        id: 'fiscalcode',
        photo: fc,
        repo: 'https://github.com/martapanc/ItalianFiscalCodeCalculator',
        site: '',
        report: '',
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
        title: "Werner's Burgers & Panini",
        id: 'werners',
        photo: werner,
        repo: '',
        site: '',
        report: '',
        tags: ['java', 'js', 'db', 'web', 'uni'],
        text:
            'A full **Restaurant Manager webapp** in **Java** is the final project my team developed for ' +
            'the Internet & Mobile Services course: it allows customers to reserve a table or to book a ' +
            'takeaway order, and the restaurant managers to verify the status of the reservations and orders, ' +
            "add and remove takeaway meals and check other employees' accounts, mostly in the form of CRUD " +
            'tables.',
    },
    {
        title: 'Holiday request manager',
        id: 'timesheet',
        photo: ict,
        repo: '',
        site: '',
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
        repo: '',
        site: 'https://globalsummerschool.org/shanghai/',
        report: '',
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
];

export default ProjectData;
