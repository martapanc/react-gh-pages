const bookinggo = require("../../../assets/images/work/booking.webp");
const ict = require("../../../assets/images/work/ict.webp");
const unibz = require("../../../assets/images/work/unibz.webp");
const bjss = require("../../../assets/images/work/bjss.webp");

export const WorkData = {
    bjss: {
        title: "BJSS Ltd. ~ Manchester (remote)",
        subtitle: "Software Engineer",
        begin: "2020",
        end: "present",
        items: [
            "Technology consultancy company",
            "All the work is project-based, providing opportunities to work with several clients and various " +
            "programming languages and stacks",
        ],
        icon: bjss,
    },
    bookinggo: {
        title: "Booking.com Transport Unit ~ Manchester",
        subtitle: "Graduate Software Engineer",
        begin: "2018",
        end: "2020",
        items: [
            "Team rotation every six months: payment page, premium insurance and supplier integrations",
            "Main technologies used: Java, JavaScript, React, PHP, MySQL, Docker",
            "Everyday development follows the Agile principles, in particular the Kanban approach, " +
            "including activities like pair programming and testing, code reviews, daily stand-ups an retros",
            "Recently involved in interviewing students who applied for the Booking.com grad scheme",
        ],
        icon: bookinggo,
    },
    unibz: {
        title: "UniBZ - Faculty of Computer Science",
        subtitle: "Research Assistant",
        begin: "2017",
        end: "2018",
        items: [
            "Academic research about contracts and policies of cloud services, following the changes introduced " +
            "by the new European law on data protection (GDPR). The article, published on IEEE Cloud Computing, was " +
            "written in collaboration with law and computer science professors from the Free University of Bolzano and " +
            "University of Insubria.",
        ],
        icon: unibz,
    },
    ictgroup: {
        title: "ICT Group ~ Reggio Emilia",
        subtitle: "Intern Software Developer",
        begin: "2016",
        end: "2017",
        items: [
            "Summer internship followed by a 5-month remote collaboration contract",
            "Development of a HRMS, a customisable web portal for the request and management of the employees' holidays.",
            "Main technologies: HTML, CSS, Javascript, AngularJS, JQuery, NodeJS, Java, MongoDB, Wildfly",
        ],
        icon: ict,
    },
};

export default WorkData;
